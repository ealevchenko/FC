$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Ведомость',
                'text_link_tabs_report_2': '',
                'field_date_start': 'Дата',
                'field_type': 'ОЗМ',
                'field_volume_start': 'Остаток, объем на начало суток (л)',
                'field_mass_start': 'Остаток, масса на начало суток (кг)',
                'field_dens_start': 'Остаток, плотность на начало суток (кг/м3)',
                'field_temp_start': 'Остаток, средняя температура на начало суток (град. С°)',
                'field_volume15_start': 'Остаток, объем на начало суток пересчитанный к 15 град. С° (л)',
                'field_mass15_start': 'Остаток, масса на начало суток пересчитанная к 15 град. С° (кг)',
                'field_dens15_start': 'Остаток, плотность на начало суток пересчитанная к 15 град. С° (кг/м3)',
                'field_volume_coming': 'Приход, объем (л)',
                'field_mass_coming': 'Приход, масса (кг)',
                'field_dens_coming': 'Приход, плотность (кг/м3)',
                'field_temp_coming': 'Приход, температура (град. С°)',
                'field_volume15_coming': 'Приход, объем пересчитанный к 15 град. С° (л)',
                'field_mass15_coming': 'Приход, масса пересчитанная к 15 град. С° (кг)',
                'field_dens15_coming': 'Приход, плотность пересчитанная к 15 град. С° (кг/м3)',
                'field_volume_consumption': 'Расход, объем (л)',
                'field_mass_consumption': 'Расход, масса (кг)',
                'field_dens_consumption': 'Расход, плотность (кг/м3)',
                'field_temp_consumption': 'Расход, температура (град. С°)',
                'field_volume15_consumption': 'Расход, объем пересчитанный к 15 град. С° (л)',
                'field_mass15_consumption': 'Расход, масса пересчитанная к 15 град. С° (кг)',
                'field_dens15_consumption': 'Расход, плотность пересчитанная к 15 град. С°(кг/м3)',
                'field_volume_stop': 'Остаток, объем на конец суток (л)',
                'field_mass_stop': 'Остаток, масса на конец суток (кг)',
                'field_dens_stop': 'Остаток, плотность на конец суток (кг/м3)',
                'field_temp_stop': 'Остаток, средняя температура на конец суток (град. С°)',
                'field_volume15_stop': 'Остаток, объем на конец суток пересчитанный к 15 град. С° (л)',
                'field_mass15_stop': 'Остаток, масса на конец суток пересчитанная к 15 град. С° (кг)',
                'field_dens15_stop': 'Остаток, плотность на конец суток пересчитанная к 15 град. С° (кг/м3).',
                'label_select_date': 'Выберите дату'


            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Statement',
                'text_link_tabs_report_2': '',
                'field_date_start': 'Date',
                'field_type': 'OZM',
                'field_volume_start': 'Balance, volume at the beginning of the day (l)',
                'field_mass_start': 'Balance, weight at the beginning of the day (kg)',
                'field_dens_start': 'Residual density at the beginning of the day (kg / m3)',
                'field_temp_start': 'Balance, average temperature at the beginning of the day (degrees C °)',
                'field_volume15_start': 'Balance, the volume at the beginning of the day recalculated to 15 degrees. C ° (l) ',
                'field_mass15_start': 'Balance, mass at the beginning of the day recalculated to 15 degrees. C ° (kg) ',
                'field_dens15_start': 'Balance, density at the beginning of the day recalculated to 15 degrees. С ° (kg / m3) ',
                'field_volume_coming': 'Incoming, volume (l)',
                'field_mass_coming': 'Arrival, mass (kg)',
                'field_dens_coming': 'Income, density (kg / m3)',
                'field_temp_coming': 'Arrival, temperature (degrees C °)',
                'field_volume15_coming': 'Arrival, volume recalculated to 15 degrees. C ° (l) ',
                'field_mass15_coming': 'Arrival, mass converted to 15 degrees. C ° (kg) ',
                'field_dens15_coming': 'Coming, density converted to 15 degrees. С ° (kg / m3) ',
                'field_volume_consumption': 'Consumption, volume (l)',
                'field_mass_consumption': 'Consumption, mass (kg)',
                'field_dens_consumption': 'Consumption, density (kg / m3)',
                'field_temp_consumption': 'Flow, temperature (degrees C °)',
                'field_volume15_consumption': 'Consumption, volume recalculated to 15 degrees. C ° (l) ',
                'field_mass15_consumption': 'Consumption, mass converted to 15 degrees. C ° (kg) ',
                'field_dens15_consumption': 'Consumption, density converted to 15 degrees. С ° (kg / m3) ',
                'field_volume_stop': 'Balance, volume at the end of the day (l)',
                'field_mass_stop': 'Balance, weight at the end of the day (kg)',
                'field_dens_stop': 'Residual density at the end of the day (kg / m3)',
                'field_temp_stop': 'Balance, average temperature at the end of the day (degrees C °)',
                'field_volume15_stop': 'Balance, the volume at the end of the day recalculated to 15 degrees. C ° (l) ',
                'field_mass15_stop': 'Balance, weight at the end of the day recalculated to 15 degrees. C ° (kg) ',
                'field_dens15_stop': 'Balance, density at the end of the day recalculated to 15 degrees. С ° (kg / m3). ',
                'label_select_date': 'Select a date'
            }
        };

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Загрузка библиотек
        loadReference = function (callback) {
            LockScreen(langView('mess_load', langs));
            var count = 1;
            // Загрузка списка карточек (common.js)
            getReference_azsCards(function (result) {
                reference_cards = result;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            })
        },
        // список карточек
        reference_cards = null,
        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text(langView('text_link_tabs_report_1', langs));
                $('#link-tabs-report-2').text(langView('text_link_tabs_report_2', langs));
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
                    table_daili_report.viewTable(data_refresh);
                }
                //if (active === 1) {
                //    table_daili_report.viewTable(data_refresh);
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
        table_daili_report = {
            html_table: $('table#table-daili-report'),
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
                        { data: "date_start", title: langView('field_date_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "type", title: langView('field_type', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume_start", title: langView('field_volume_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: langView('field_mass_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: langView('field_dens_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_start", title: langView('field_temp_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_start", title: langView('field_volume15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_start", title: langView('field_mass15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_start", title: langView('field_dens15_start', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_coming", title: langView('field_volume_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_coming", title: langView('field_mass_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_coming", title: langView('field_dens_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_coming", title: langView('field_temp_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_coming", title: langView('field_volume15_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_coming", title: langView('field_mass15_coming', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_coming", title: langView('field_dens15_coming', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_consumption", title: langView('field_volume_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_consumption", title: langView('field_mass_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_consumption", title: langView('field_dens_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_consumption", title: langView('field_temp_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_consumption", title: langView('field_volume15_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_consumption", title: langView('field_mass15_consumption', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_consumption", title: langView('field_dens15_consumption', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: langView('field_volume_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: langView('field_mass_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: langView('field_dens_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_stop", title: langView('field_temp_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_stop", title: langView('field_volume15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_stop", title: langView('field_mass15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_stop", title: langView('field_dens15_stop', langs), width: "50px", orderable: true, searchable: true }
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
                    //getAsyncViewReportDR15OfDateTime(
                      getAsyncViewReportDR_KGDOfDateTime(
                        panel_select_report.date_start,
                        panel_select_report.date_stop,
                        function (result) {
                            table_daili_report.list = result;
                            table_daili_report.loadDataTable(result);
                            table_daili_report.obj.draw();
                        }
                    );
                } else {
                    table_daili_report.loadDataTable(this.list);
                    table_daili_report.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {

                    var cards = reference_cards != null ? reference_cards.getResult(data[i].id_card) : null;

                    this.obj.row.add({
                        "id": data[i].id,
                        "type": data[i].type,
                        "date_start": data[i].date_start,
                        "date_stop": data[i].date_stop,
                        "volume_start": data[i].volume_start,
                        "mass_start": data[i].mass_start !== null ? Number(data[i].mass_start).toFixed(2) : 0.00,
                        "dens_start": data[i].dens_start !== null ? Number(data[i].dens_start).toFixed(5) : 0.00000,
                        "temp_start": data[i].temp_start !== null ? Number(data[i].temp_start).toFixed(2) : 0.00,
                        "volume15_start": data[i].volume15_start,
                        "mass15_start": data[i].mass15_start !== null ? Number(data[i].mass15_start).toFixed(2) : 0.00,
                        "dens15_start": data[i].dens15_start !== null ? Number(data[i].dens15_start).toFixed(5) : 0.00000,

                        "volume_coming": data[i].volume_coming !== null ? data[i].volume_coming : 0,
                        "mass_coming": data[i].mass_coming !== null ? Number(data[i].mass_coming).toFixed(2) : 0.00,
                        "dens_coming": data[i].dens_coming !== null ? Number(data[i].dens_coming).toFixed(5) : 0.00000,
                        "temp_coming": data[i].temp_coming !== null ? Number(data[i].temp_coming).toFixed(2) : 0.00,
                        "volume15_coming": data[i].volume15_coming !== null ? data[i].volume15_coming : 0,
                        "mass15_coming": data[i].mass15_coming !== null ? Number(data[i].mass15_coming).toFixed(2) : 0.00,
                        "dens15_coming": data[i].dens15_coming !== null ? Number(data[i].dens15_coming).toFixed(5) : 0.00000,

                        "volume_consumption": data[i].volume_consumption !== null ? data[i].volume_consumption : 0,
                        "mass_consumption": data[i].mass_consumption !== null ? Number(data[i].mass_consumption).toFixed(2) : 0.00,
                        "dens_consumption": data[i].dens_consumption !== null ? Number(data[i].dens_consumption).toFixed(5) : 0.00000,
                        "temp_consumption": data[i].temp_consumption !== null ? Number(data[i].temp_consumption).toFixed(2) : 0.00,
                        "volume15_consumption": data[i].volume15_consumption !== null ? data[i].volume15_consumption : 0,
                        "mass15_consumption": data[i].mass15_consumption !== null ? Number(data[i].mass15_consumption).toFixed(2) : 0.00,
                        "dens15_consumption": data[i].dens15_consumption !== null ? Number(data[i].dens15_consumption).toFixed(5) : 0.00000,

                        "volume_stop": data[i].volume_stop !== null ? data[i].volume_stop : 0,
                        "mass_stop": data[i].mass_stop !== null ? Number(data[i].mass_stop).toFixed(2) : 0.00,
                        "dens_stop": data[i].dens_stop !== null ? Number(data[i].dens_stop).toFixed(5) : 0.00000,
                        "temp_stop": data[i].temp_stop !== null ? Number(data[i].temp_stop).toFixed(2) : 0.00,
                        "volume15_stop": data[i].volume15_stop !== null ? data[i].volume15_stop : 0,
                        "mass15_stop": data[i].mass15_stop !== null ? Number(data[i].mass15_stop).toFixed(2) : 0.00,
                        "dens15_stop": data[i].dens15_stop !== null ? Number(data[i].dens15_stop).toFixed(5) : 0.00000,
                        "send": data[i].send,
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
    //// Загрузка библиотек
    loadReference(function (result) {
        table_daili_report.initObject();
        tab_type_reports.activeTable(tab_type_reports.active, true);
    });

});