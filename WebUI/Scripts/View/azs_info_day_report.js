$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Таблица 1',
                'text_link_tabs_report_2': 'Таблица 2',
                'bt_excel_text': 'to excel',

                'field_date_start': 'Дата',
                'field_tank': 'Емкость',
                'field_type': 'ОЗМ',
                'field_volume_start': 'Остаток, объем на начало суток (л)',
                'field_mass_start': 'Остаток, масса на начало суток (кг)',
                'field_dens_start': 'Остаток, плотность на начало суток (кг/м3)',
                'field_temp_start': 'Остаток, средняя температура на начало суток (град. С°)',
                'field_volume15_start': 'Остаток, объем на начало суток пересчитанный к 15 град. С° (л)',
                'field_mass15_start': 'Остаток, масса на начало суток пересчитанная к 15 град. С° (кг)',
                'field_dens15_start': 'Остаток, плотность на начало суток пересчитанная к 15 град. С° (кг/м3)',
                'field_volume_received': 'Приход, объем (л)',
                'field_mass_received': 'Приход, масса (кг)',
                'field_dens_received': 'Приход, плотность (кг/м3)',
                'field_temp_received': 'Приход, температура (град. С°)',
                'field_volume15_received': 'Приход, объем пересчитанный к 15 град. С° (л)',
                'field_mass15_received': 'Приход, масса пересчитанная к 15 град. С° (кг)',
                'field_dens15_received': 'Приход, плотность пересчитанная к 15 град. С° (кг/м3)',
                'field_volume_delivery': 'Расход, объем (л)',
                'field_mass_delivery': 'Расход, масса (кг)',
                'field_dens_delivery': 'Расход, плотность (кг/м3)',
                'field_temp_delivery': 'Расход, температура (град. С°)',
                'field_volume15_delivery': 'Расход, объем пересчитанный к 15 град. С° (л)',
                'field_mass15_delivery': 'Расход, масса пересчитанная к 15 град. С° (кг)',
                'field_dens15_delivery': 'Расход, плотность пересчитанная к 15 град. С°(кг/м3)',
                'field_volume_stop': 'Остаток, объем на конец суток (л)',
                'field_mass_stop': 'Остаток, масса на конец суток (кг)',
                'field_dens_stop': 'Остаток, плотность на конец суток (кг/м3)',
                'field_temp_stop': 'Остаток, средняя температура на конец суток (град. С°)',
                'field_volume15_stop': 'Остаток, объем на конец суток пересчитанный к 15 град. С° (л)',
                'field_mass15_stop': 'Остаток, масса на конец суток пересчитанная к 15 град. С° (кг)',
                'field_dens15_stop': 'Остаток, плотность на конец суток пересчитанная к 15 град. С° (кг/м3).',

                'field_permissible_volume15_error': 'Допустимая погрешность литров при 15 °С, 0,65%',
                'field_permissible_mass15_error': 'Допустимая погрешность фактических КГ, 0,65%',
                'field_serial_number': 'Серийный (идентификационный) номер резервуара',
                'field_unified_tank_number': 'Унифицированный номер резервуара',
                'field_type_name': 'Тип (название) резервуара',
                'field_level_meters_model': 'Название (модель) уровнемера',
                'field_level_meters_serial_number': 'Серийный (идентификационный) номер уровнемера',

                'field_ukt_zed': 'Код топлива за кодом товарной подкатегории в соответствии с УКТ ЗЕД (10 знаков)',
                'field_fuel_name': 'Полное название топлива',

                'label_select_date': 'Выберите дату'


            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Table 1',
                'text_link_tabs_report_2': 'Table 2',
                'bt_excel_text': 'to excel',
                'field_date_start': 'Date',
                'field_tank': 'Tanks',
                'field_type': 'OZM',
                'field_volume_start': 'Balance, volume at the beginning of the day (l)',
                'field_mass_start': 'Balance, weight at the beginning of the day (kg)',
                'field_dens_start': 'Residual density at the beginning of the day (kg / m3)',
                'field_temp_start': 'Balance, average temperature at the beginning of the day (degrees C °)',
                'field_volume15_start': 'Balance, the volume at the beginning of the day recalculated to 15 degrees. C ° (l) ',
                'field_mass15_start': 'Balance, mass at the beginning of the day recalculated to 15 degrees. C ° (kg) ',
                'field_dens15_start': 'Balance, density at the beginning of the day recalculated to 15 degrees. С ° (kg / m3) ',
                'field_volume_received': 'Incoming, volume (l)',
                'field_mass_received': 'Arrival, mass (kg)',
                'field_dens_received': 'Income, density (kg / m3)',
                'field_temp_received': 'Arrival, temperature (degrees C °)',
                'field_volume15_received': 'Arrival, volume recalculated to 15 degrees. C ° (l) ',
                'field_mass15_received': 'Arrival, mass converted to 15 degrees. C ° (kg) ',
                'field_dens15_received': 'Coming, density converted to 15 degrees. С ° (kg / m3) ',
                'field_volume_delivery': 'Consumption, volume (l)',
                'field_mass_delivery': 'Consumption, mass (kg)',
                'field_dens_delivery': 'Consumption, density (kg / m3)',
                'field_temp_delivery': 'Flow, temperature (degrees C °)',
                'field_volume15_delivery': 'Consumption, volume recalculated to 15 degrees. C ° (l) ',
                'field_mass15_delivery': 'Consumption, mass converted to 15 degrees. C ° (kg) ',
                'field_dens15_delivery': 'Consumption, density converted to 15 degrees. С ° (kg / m3) ',
                'field_volume_stop': 'Balance, volume at the end of the day (l)',
                'field_mass_stop': 'Balance, weight at the end of the day (kg)',
                'field_dens_stop': 'Residual density at the end of the day (kg / m3)',
                'field_temp_stop': 'Balance, average temperature at the end of the day (degrees C °)',
                'field_volume15_stop': 'Balance, the volume at the end of the day recalculated to 15 degrees. C ° (l) ',
                'field_mass15_stop': 'Balance, weight at the end of the day recalculated to 15 degrees. C ° (kg) ',
                'field_dens15_stop': 'Balance, density at the end of the day recalculated to 15 degrees. С ° (kg / m3). ',

                'field_permissible_volume15_error': 'Permissible error of liters at 15 ° C, 0.65%',
                'field_permissible_mass15_error': 'Permissible error of the actual KG, 0.65%',
                'field_serial_number': 'Serial (identification) number of the tank',
                'field_unified_tank_number': 'Unified reservoir number',
                'field_type_name': 'Type (name) of the reservoir',
                'field_level_meters_model': 'Name (model) of the level gauge',
                'field_level_meters_serial_number': 'Serial (identification) number of the level gauge',

                'field_ukt_zed': 'Fuel code behind the product subcategory code according to UKT ZED (10 characters)',
                'field_fuel_name': 'Full name of the fuel',

                'label_select_date': 'Select a date'
            }
        };

    var lang = $.cookie('lang') === undefined ? 'ru' : $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Загрузка библиотек
        loadReference = function (callback) {
            //LockScreen(langView('mess_load', langs));
            //var count = 1;
            //// Загрузка списка карточек (common.js)
            //getReference_azsCards(function (result) {
            //    reference_cards = result;
            //    count -= 1;
            //    if (count <= 0) {
            //        if (typeof callback === 'function') {
            //            LockScreenOff();
            //            callback();
            //        }
            //    }
            //})
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
                    table_report_1.viewTable(data_refresh);
                }
                if (active === 1) {
                    table_report_2.viewTable(data_refresh);
                }

            },

        },
        // Панель таблицы
        panel_select_report = {
            html_div_panel: $('#table-panel'),
            obj: null,
            obj_date: null,
            bt_left: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-w"></span>text</button>'),
            bt_right: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            bt_excel: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_date: $('<input id="date" name="date" size="20">'),
            initObject: function () {
                this.span.append(this.input_date);
                obj = this.html_div_panel;
                obj
                    //.append(this.bt_left)
                    .append(this.label)
                    .append(this.span)
                    //.append(this.bt_right)
                    .append(this.bt_excel);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text(langView('label_select_date', langs));
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                //this.bt_excel.attr('title', langView('bt_excel_title', langs));
                this.bt_excel.text(langView('bt_excel_text', langs));

                this.bt_excel.on('click', function () {
                    //panel_select_report.viewReport();
                    var table = $('table#table-report-1').html();
                        fnExcelReport(table, "Таблица1");
                });
                // настроим компонент выбора времени
                this.obj_date = this.input_date.dateRangePicker(
                    {
                        startOfWeek: 'monday',
                        //separator: lang == 'en' ? 'to' : 'по',
                        language: lang,
                        format: lang === 'en' ? 'MM/DD/YYYY' : 'DD.MM.YYYY',
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
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            viewReport: function () {
                date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 0, 0, 0);
                date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 23, 59, 59);
                tab_type_reports.activeTable(tab_type_reports.active, true);
            }
        },
        //
        table_report_1 = {
            html_table: $('table#table-report-1'),
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            // Инициализировать таблицу
            initObject: function () {
                this.obj_table = this.html_table.DataTable({
                    "paging": false,
                    "ordering": false,
                    "info": false,
                    "select": false,
                    "autoWidth": false,
                    "scrollX": false,
                    language: language_table(langs),
                    jQueryUI: false,
                    "createdRow": function (row, data, index) {
                        //$(row).attr('id', data.id);
                    },
                    //columns: [
                    //    { data: "date_start", title: langView('field_date_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "type", title: langView('field_type', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "ukt_zed", title: langView('field_ukt_zed', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "fuel_name", title: langView('field_fuel_name', langs), width: "50px", orderable: true, searchable: true },

                    //    { data: "volume_start", title: langView('field_volume_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass_start", title: langView('field_mass_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens_start", title: langView('field_dens_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "temp_start", title: langView('field_temp_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "volume15_start", title: langView('field_volume15_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass15_start", title: langView('field_mass15_start', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens15_start", title: langView('field_dens15_start', langs), width: "50px", orderable: true, searchable: true },

                    //    { data: "volume_received", title: langView('field_volume_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass_received", title: langView('field_mass_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens_received", title: langView('field_dens_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "temp_received", title: langView('field_temp_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "volume15_received", title: langView('field_volume15_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass15_received", title: langView('field_mass15_received', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens15_received", title: langView('field_dens15_received', langs), width: "50px", orderable: true, searchable: true },

                    //    { data: "volume_delivery", title: langView('field_volume_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass_delivery", title: langView('field_mass_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens_delivery", title: langView('field_dens_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "temp_delivery", title: langView('field_temp_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "volume15_delivery", title: langView('field_volume15_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass15_delivery", title: langView('field_mass15_delivery', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens15_delivery", title: langView('field_dens15_delivery', langs), width: "50px", orderable: true, searchable: true },

                    //    { data: "volume_stop", title: langView('field_volume_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass_stop", title: langView('field_mass_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens_stop", title: langView('field_dens_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "temp_stop", title: langView('field_temp_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "volume15_stop", title: langView('field_volume15_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "mass15_stop", title: langView('field_mass15_stop', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "dens15_stop", title: langView('field_dens15_stop', langs), width: "50px", orderable: true, searchable: true },

                    //    { data: "permissible_volume15_error", title: langView('field_permissible_volume15_error', langs), width: "50px", orderable: true, searchable: true },
                    //    { data: "permissible_mass15_error", title: langView('field_permissible_mass15_error', langs), width: "50px", orderable: true, searchable: true }

                    //],
                    //dom: 'Blftipr',
                    //buttons: [
                    //    'copyHtml5',
                    //    'excelHtml5',
                    //]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {

                var table1 = "";
                //LockScreen(langView('mess_delay', langs));
                //if (this.list === null | data_refresh === true) {
                //    // Обновим данные
                //    getAsyncViewDailyAccountingReportOfDateTime(
                //        panel_select_report.date_start,
                //        panel_select_report.date_stop,
                //        function (result) {
                //            table_report_1.list = result;
                //            table_report_1.loadDataTable(result);
                //            table_report_1.obj_table.draw();
                //        }
                //    );
                //} else {
                //    table_report_1.loadDataTable(this.list);
                //    table_report_1.obj_table.draw();
                //};
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj_table.clear();
                for (i = 0; i < data.length; i++) {
                    //var cards = reference_cards != null ? reference_cards.getResult(data[i].id_card) : null;
                    this.obj_table.row.add({
                        "id": data[i].id,
                        "type": data[i].type,
                        "ukt_zed": data[i].ukt_zed,
                        "fuel_name": data[i].fuel_name,
                        "date_start": data[i].date_start,
                        "date_stop": data[i].date_stop,
                        "volume_start": data[i].volume_start,
                        "mass_start": data[i].mass_start !== null ? Number(data[i].mass_start).toFixed(2) : 0.00,
                        "dens_start": data[i].dens_start !== null ? Number(data[i].dens_start).toFixed(5) : 0.00000,
                        "temp_start": data[i].temp_start !== null ? Number(data[i].temp_start).toFixed(2) : 0.00,
                        "volume15_start": data[i].volume15_start,
                        "mass15_start": data[i].mass15_start !== null ? Number(data[i].mass15_start).toFixed(2) : 0.00,
                        "dens15_start": data[i].dens15_start !== null ? Number(data[i].dens15_start).toFixed(5) : 0.00000,

                        "volume_received": data[i].volume_received !== null ? data[i].volume_received : 0,
                        "mass_received": data[i].mass_received !== null ? Number(data[i].mass_received).toFixed(2) : 0.00,
                        "dens_received": data[i].dens_received !== null ? Number(data[i].dens_received).toFixed(5) : 0.00000,
                        "temp_received": data[i].temp_received !== null ? Number(data[i].temp_received).toFixed(2) : 0.00,
                        "volume15_received": data[i].volume15_received !== null ? data[i].volume15_received : 0,
                        "mass15_received": data[i].mass15_received !== null ? Number(data[i].mass15_received).toFixed(2) : 0.00,
                        "dens15_received": data[i].dens15_received !== null ? Number(data[i].dens15_received).toFixed(5) : 0.00000,

                        "volume_delivery": data[i].volume_delivery !== null ? data[i].volume_delivery : 0,
                        "mass_delivery": data[i].mass_delivery !== null ? Number(data[i].mass_delivery).toFixed(2) : 0.00,
                        "dens_delivery": data[i].dens_delivery !== null ? Number(data[i].dens_delivery).toFixed(5) : 0.00000,
                        "temp_delivery": data[i].temp_delivery !== null ? Number(data[i].temp_delivery).toFixed(2) : 0.00,
                        "volume15_delivery": data[i].volume15_delivery !== null ? data[i].volume15_delivery : 0,
                        "mass15_delivery": data[i].mass15_delivery !== null ? Number(data[i].mass15_delivery).toFixed(2) : 0.00,
                        "dens15_delivery": data[i].dens15_delivery !== null ? Number(data[i].dens15_delivery).toFixed(5) : 0.00000,

                        "volume_stop": data[i].volume_stop !== null ? data[i].volume_stop : 0,
                        "mass_stop": data[i].mass_stop !== null ? Number(data[i].mass_stop).toFixed(2) : 0.00,
                        "dens_stop": data[i].dens_stop !== null ? Number(data[i].dens_stop).toFixed(5) : 0.00000,
                        "temp_stop": data[i].temp_stop !== null ? Number(data[i].temp_stop).toFixed(2) : 0.00,
                        "volume15_stop": data[i].volume15_stop !== null ? data[i].volume15_stop : 0,
                        "mass15_stop": data[i].mass15_stop !== null ? Number(data[i].mass15_stop).toFixed(2) : 0.00,
                        "dens15_stop": data[i].dens15_stop !== null ? Number(data[i].dens15_stop).toFixed(5) : 0.00000,
                        "permissible_volume15_error": data[i].permissible_volume15_error !== null ? Number(data[i].permissible_volume15_error).toFixed(3) : 0.000,
                        "permissible_mass15_error": data[i].permissible_mass15_error !== null ? Number(data[i].permissible_mass15_error).toFixed(3) : 0.000
                    });
                }
                LockScreenOff();
            },

        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    panel_select_report.initObject();
    tab_type_reports.initObject();
    //table_report_1.initObject();
    ////// Загрузка библиотек
    //loadReference(function (result) {
    //    table_report_1.initObject();
    //    tab_type_reports.activeTable(tab_type_reports.active, true);
    //});

});