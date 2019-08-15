$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Перекачки',
                'text_link_tabs_report_2': '',
                'field_dt': 'Дата и время',
                'field_OilType': 'Тип масла',
                'field_out_tank': 'Из бака №',
                'field_out_dv': 'Объем, м3',
                'field_out_dens': 'Плотность, кг/м3',
                'field_out_dm_calc': 'Масса, т',
                'field_in_tank': 'В бака №',
                'field_in_dv': 'Объем, м3',
                'field_in_dens': 'Плотность, кг/м3',
                'field_in_dm_calc': 'Масса, т',
                'field_delta_v': 'dV, м3',
                'field_delta_m_calc': 'dM, т',
                'label_select_date': 'Выберите дату'


            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Pumping',
                'text_link_tabs_report_2': '',
                'field_dt': 'Date and time',
                'field_OilType': 'Oil type',
                'field_out_tank': 'From tank No.',
                'field_out_dv': 'Volume, m3',
                'field_out_dens': 'Density, kg / m3',
                'field_out_dm_calc': 'Mass, t',
                'field_in_tank': 'In tank No.',
                'field_in_dv': 'Volume, m3',
                'field_in_dens': 'Density, kg / m3',
                'field_in_dm_calc': 'Mass, t',
                'field_delta_v': 'dV, m3',
                'field_delta_m_calc': 'dM, t',
                'label_select_date': 'Select date'
            }
        };

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text(langView('text_link_tabs_report_1', langs));
                //$('#link-tabs-report-2').text(langView('text_link_tabs_report_2', langs));
                this.html_div.tabs({
                    collapsible: true,
                    activate: function (event, ui) {
                        tab_type_reports.active = tab_type_reports.html_div.tabs("option", "active");
                        //tab_type_reports.activeTable(tab_type_cards.active, false);
                    },
                });
                //this.activeTable(this.active, true);
            },
            activeTable: function (active, data_refresh) {
                if (active === 0) {
                    table_oil_transfer.viewTable(data_refresh);
                }
                //if (active === 1) {
                //    table_oil_transfer.viewTable(data_refresh);
                //}

            },

        },
        // Панель таблицы
        panel_select_report = {
            html_div_panel: $('#table-panel'),
            date_start: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0),
            date_stop: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59),
            period: null,
            obj: null,
            obj_date: null,
            bt_left: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-w"></span>text</button>'),
            bt_right: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            bt_refresh: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            bt_print: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_data_start: $('<input id="date-start" name="date-start" size="20">'),
            input_data_stop: $('<input id="date-stop" name="date-stop" size="20">'),
            initObject: function () {
                this.html_div_panel
                    .append(this.label.text(langView('label_select_date', langs)))
                    .append(this.span.append(this.input_data_start).append(' - ').append(this.input_data_stop));
                // настроим компонент выбора времени
                this.obj_date = this.span.dateRangePicker(
                    {
                        language: 'ru',
                        format: 'DD.MM.YYYY HH:mm',
                        separator: '-',
                        autoClose: false,
                        time: {
                            enabled: false
                        },
                        setValue: function (s, s1, s2) {
                            $('input#date-start').val(s1);
                            $('input#date-stop').val(s2);
                            panel_select_report.period = s1 + '-' + s2;
                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        panel_select_report.date_start = obj.date1;
                        panel_select_report.date_stop = obj.date2;
                        panel_select_report.period = obj.value;
                    })
                    .bind('datepicker-closed', function () {
                        tab_type_reports.activeTable(tab_type_reports.active, true);
                    });

                this.obj_date.data('dateRangePicker').setDateRange(
                    (this.date_start.getDate() + '.' + (this.date_start.getMonth() + 1) + '.' + this.date_start.getFullYear() + ' ' + this.date_start.getHours() + ':' + this.date_start.getMinutes() + ':' + this.date_start.getSeconds()),
                    (this.date_stop.getDate() + '.' + (this.date_stop.getMonth() + 1) + '.' + this.date_stop.getFullYear() + ' ' + this.date_stop.getHours() + ':' + this.date_stop.getMinutes() + ':' + this.date_stop.getSeconds()));

            }
        },
        // Таблица 
        table_oil_transfer = {
            html_table: $('table#table-oil-transfer'),
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            // Инициализировать таблицу
            initObject: function () {
                this.obj = this.html_table.DataTable({
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": true,
                    "ordering": true,
                    "info": false,
                    "select": true,
                    "autoWidth": false,
                    //"filter": true,
                    //"scrollY": "600px",
                    "scrollX": true,
                    language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.id);
                    },
                    columns: [
                        { data: "dt", title: langView('field_dt', langs), width: "50px", orderable: true, searchable: true },
                        { data: "OilType", title: langView('field_OilType', langs), width: "50px", orderable: true, searchable: true },
                        { data: "out_tank", title: langView('field_out_tank', langs), width: "50px", orderable: false, searchable: true },
                        { data: "out_dv", title: langView('field_out_dv', langs), width: "50px", orderable: false, searchable: true },
                        { data: "out_dens", title: langView('field_out_dens', langs), width: "50px", orderable: false, searchable: true },
                        { data: "out_dm_calc", title: langView('field_out_dm_calc', langs), width: "50px", orderable: false, searchable: true },
                        { data: "in_tank", title: langView('field_in_tank', langs), width: "50px", orderable: false, searchable: true },
                        { data: "in_dv", title: langView('field_in_dv', langs), width: "50px", orderable: false, searchable: true },
                        { data: "in_dens", title: langView('field_in_dens', langs), width: "50px", orderable: false, searchable: true },
                        { data: "in_dm_calc", title: langView('field_in_dm_calc', langs), width: "50px", orderable: false, searchable: true },
                        { data: "delta_v", title: langView('field_delta_v', langs), width: "50px", orderable: false, searchable: true },
                        { data: "delta_m_calc", title: langView('field_delta_m_calc', langs), width: "50px", orderable: false, searchable: true },
                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen(langView('mess_delay', langs));
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewOilTransferOfDateTime(
                        panel_select_report.date_start,
                        panel_select_report.date_stop,
                        function (result) {
                            table_oil_transfer.list = result;
                            table_oil_transfer.loadDataTable(result);
                            table_oil_transfer.obj.draw();
                        }
                    );
                } else {
                    table_oil_transfer.loadDataTable(this.list);
                    table_oil_transfer.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {

                    this.obj.row.add({
                        "id": data[i].id,
                        "dt": data[i].dt,
                        "OilType": data[i].OilType,
                        "out_tank": data[i].out_tank,
                        "out_dv": data[i].out_dv !== null ? Number(data[i].out_dv).toFixed(3) : 0.000,
                        "out_dens": data[i].out_dens !== null ? Number(data[i].out_dens).toFixed(1) : 0.0,
                        "out_dm_calc": data[i].out_dm_calc !== null ? Number(data[i].out_dm_calc).toFixed(3) : 0.000,
                        "in_tank": data[i].in_tank,
                        "in_dv": data[i].in_dv !== null ? Number(data[i].in_dv).toFixed(3) : 0.000,
                        "in_dens": data[i].in_dens !== null ? Number(data[i].in_dens).toFixed(1) : 0.0,
                        "in_dm_calc": data[i].in_dm_calc !== null ? Number(data[i].in_dm_calc).toFixed(3) : 0.000,
                        "delta_v": data[i].delta_v !== null ? Number(data[i].delta_v).toFixed(3) : 0.000,
                        "delta_m_calc": data[i].delta_m_calc !== null ? Number(data[i].delta_m_calc).toFixed(3) : 0.000,
                    });
                }
                LockScreenOff();
            },
        }

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    panel_select_report.initObject();
    tab_type_reports.initObject();

    table_oil_transfer.initObject();
    tab_type_reports.activeTable(tab_type_reports.active, true);

});