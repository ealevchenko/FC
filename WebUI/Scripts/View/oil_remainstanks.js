$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Остатки',
                'text_link_tabs_report_2': '',
                'field_bak': '№ бака',
                'field_oil_type': 'Тип масла',
                'field_Volume': 'Остаток (м3)',
                'field_Dens': 'Плотность (кг/м3)',
                'field_Mass': 'Масса (т)',
                'bt_left_title': 'Предыдущая дата',
                'bt_right_title': 'Следующая дата',
                'bt_refresh_title': 'Обновить отчет',
                'bt_refresh_text': 'Обновить',
                'label_select_date': 'Выберите дату',
            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Remains',
                'text_link_tabs_report_2': '',
                'field_bak': 'tank no.',
                'field_oil_type': 'Oil type',
                'field_Volume': 'Remaining (m3)',
                'field_Dens': 'Density (kg / m3)',
                'field_Mass': 'Mass (t)',
                'bt_left_title': 'Previous date',
                'bt_right_title': 'Next date',
                'bt_refresh_title': 'Update report',
                'bt_refresh_text': 'Refresh',
                'label_select_date': 'Select date',
            }
        };

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        //// Загрузка библиотек
        //loadReference = function (callback) {
        //    LockScreen(langView('mess_load', langs));
        //    var count = 1;
        //    // Загрузка списка карточек (common.js)
        //    getReference_azsCards(function (result) {
        //        reference_cards = result;
        //        count -= 1;
        //        if (count <= 0) {
        //            if (typeof callback === 'function') {
        //                LockScreenOff();
        //                callback();
        //            }
        //        }
        //    })
        //},
        //// список карточек
        //reference_cards = null,
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
                if (active == 0) {
                    table_remains_tanks.viewTable(data_refresh);
                }
                //if (active == 1) {
                //    table_remains_tanks.viewTable(data_refresh);
                //}

            },

        },
        // Панель таблицы
        panel_select_report = {
            html_div_panel: $('#table-panel'),
            obj: null,
            obj_date: null,
            bt_left: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-w"></span>text</button>'),
            bt_right: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            bt_refresh: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_date: $('<input id="date" name="date" size="20">'),
            select_sm: $('<select class="ui-widget-content ui-corner-all"></select>'),
            initObject: function () {
                this.span.append(this.input_date);
                obj = this.html_div_panel;
                obj
                    //.append(this.bt_left)
                    .append(this.label)
                    .append(this.span)
                    //.append(this.bt_right)
                    .append(this.select_sm)
                    .append(this.bt_refresh);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text(langView('label_select_date', langs));
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                this.bt_refresh.attr('title', langView('bt_refresh_title', langs));
                this.bt_refresh.text(langView('bt_refresh_text', langs));

                this.bt_refresh.on('click', function () {
                    panel_select_report.viewReport();
                });

                // Настроим выбор времени
                initSelect(
                    this.select_sm,
                    { width: 100 },
                    [
                        { value: 0, text: '00:00' },
                        { value: 1, text: '01:00' },
                        { value: 2, text: '02:00' },
                        { value: 3, text: '03:00' },
                        { value: 4, text: '04:00' },
                        { value: 5, text: '05:00' },
                        { value: 6, text: '06:00' },
                        { value: 7, text: '07:00' },
                        { value: 8, text: '08:00' },
                        { value: 9, text: '09:00' },
                        { value: 10, text: '10:00' },
                        { value: 11, text: '11:00' },
                        { value: 12, text: '12:00' },
                        { value: 13, text: '13:00' },
                        { value: 14, text: '14:00' },
                        { value: 15, text: '15:00' },
                        { value: 16, text: '16:00' },
                        { value: 17, text: '17:00' },
                        { value: 18, text: '18:00' },
                        { value: 19, text: '19:00' },
                        { value: 20, text: '20:00' },
                        { value: 21, text: '21:00' },
                        { value: 22, text: '22:00' },
                        { value: 23, text: '23:00' }
                    ],
                    null,
                    1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор смены
                        panel_select_report.viewReport();
                    },
                    null);
                // настроим компонент выбора времени
                this.obj_date = this.input_date.dateRangePicker(
                    {
                        startOfWeek: 'monday',
                        //separator: lang == 'en' ? 'to' : 'по',
                        language: lang,
                        format: lang == 'en' ? 'MM/DD/YYYY' : 'DD.MM.YYYY',
                        autoClose: true,
                        singleDate: true,
                        showShortcuts: false,
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {
                        panel_select_report.viewReport();
                    });
                // Выставим текущую дату
                panel_select_report.select_sm.val(date_curent.getHours())
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' ' + date_curent.getHours() + ':00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            viewReport: function () {
                //if (panel_select_report.select_sm.val() === "2") {
                //    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                //    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                //}
                //if (panel_select_report.select_sm.val() === "1") {
                //    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                //    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                //}

                date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), Number(panel_select_report.select_sm.val()), 0, 0);
                tab_type_reports.activeTable(tab_type_reports.active, true);
            }
        },
        // Таблица 
        table_remains_tanks = {
            html_table: $('table#table-remains-tanks'),
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            // Инициализировать таблицу
            initObject: function () {
                this.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": false,
                    "info": false,
                    "select": false,
                    "autoWidth": true,
                    //"filter": true,
                    //"scrollY": "600px",
                    //"scrollX": true,
                    language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.id);
                    },
                    //"footerCallback": function (row, data, start, end, display) {
                    //    var api = this.api(), data;
                    //    // Remove the formatting to get integer data for summation
                    //    var intVal = function (i) {
                    //        return typeof i === 'string' ?
                    //            i.replace(/[\$,]/g, '') * 1 :
                    //            typeof i === 'number' ?
                    //                i : 0;
                    //    };

                    //    var pipe_volume = Number(kgd_pipe_dt);
                    //    var last_volume = 0;
                    //    var last_dens = 0;
                    //    var last_mass = 0;
                    //    // Total volume

                    //    var lastRow = api.rows().count();
                    //    if (lastRow > 0) {
                    //        //var row = api.rows(lastRow).data();
                    //        last_volume = Number(api.data()[lastRow - 1].volume);
                    //        last_mass = Number(api.data()[lastRow - 1].mass);
                    //        last_dens = Number(api.data()[lastRow - 1].dens);
                    //    }
                    //    var pipe_mass = pipe_volume * last_dens * 0.001;
                    //    $('td#pipe-volume').text(pipe_volume.toFixed(2));
                    //    $('td#pipe-mass').text(pipe_mass.toFixed(2));
                    //    $('td#volume').text(last_volume.toFixed(2));
                    //    $('td#mass').text(last_mass.toFixed(2));
                    //    $('td#dens').text(last_dens.toFixed(2));
                    //    $('td#total-volume').text(Number(last_volume + pipe_volume).toFixed(2));
                    //    $('td#total-mass').text(Number(last_mass + pipe_mass).toFixed(2));

                    //},
                    columns: [
                        { data: "bak", title: langView('field_bak', langs), width: "50px", orderable: false, searchable: true },
                        { data: "oil_type", title: langView('field_oil_type', langs), width: "50px", orderable: false, searchable: true },
                        { data: "Volume", title: langView('field_Volume', langs), width: "50px", orderable: false, searchable: true },
                        { data: "Dens", title: langView('field_Dens', langs), width: "50px", orderable: false, searchable: true },
                        { data: "Mass", title: langView('field_Mass', langs), width: "50px", orderable: false, searchable: true },
                    ],
                    dom: 'Bfrtip',
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
                    getAsyncViewOilRemainsTanksOfDateTime(
                        date_start,
                        function (result) {
                            table_remains_tanks.list = result;
                            table_remains_tanks.loadDataTable(result);
                            table_remains_tanks.obj.draw();
                        }
                    );
                } else {
                    table_remains_tanks.loadDataTable(this.list);
                    table_remains_tanks.obj.draw();
                }
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {

                    //var cards = reference_cards != null ? reference_cards.getResult(data[i].id_card) : null;
                    this.obj.row.add({
                    "id": data[i].id,
                    "Timestamp": data[i].Timestamp,
                    "bak": data[i].bak,
                    "Temp": data[i].Temp,
                    "Volume": data[i].Volume,
                    "Water": data[i].Water,
                    "Dens": data[i].Dens,
                    "Level": data[i].Level,
                    "Mass": data[i].Mass,
                    "oil_type": data[i].oil_type,

                    //"volume": data[i].volume !== null ? Number(data[i].volume * 1000).toFixed(2) : null,
                    //"dens": data[i].dens_avg,
                    //"mass": data[i].mass !== null ? Number(data[i].mass * 1000).toFixed(2) : null,
                    //"temp": data[i].temp_avg,
                    //"volume15": data[i].volume15 !== null ? Number(data[i].volume15 * 1000).toFixed(2) : null,
                    //"dens15": data[i].dens15,
                    //"mass15": data[i].mass15 !== null ? Number(data[i].mass15 * 1000).toFixed(2) : null,
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
//loadReference(function (result) {
table_remains_tanks.initObject();
panel_select_report.viewReport();
    //});

});