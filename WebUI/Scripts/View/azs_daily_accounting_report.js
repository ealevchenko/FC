﻿$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Ведомость',
                'text_link_tabs_report_2': '',
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

                'field_permissible_volume15_error': 'Допустимая погрешность объема при 15 °С, (<0,65%)',
                'field_permissible_mass15_error': 'Допустимая погрешность массы при 15 °С, (<0,65%)',
                'field_absolute_volume15_error': 'Абсолютная погрешность объема при 15 °С, л',
                'field_absolute_mass15_error': 'Абсолютная погрешность массы при 15 °С, кг',

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
                'text_link_tabs_report_1': 'Statement',
                'text_link_tabs_report_2': '',
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
                'field_absolute_volume15_error': 'Absolute error of liters at 15 ° C, l',
                'field_absolute_mass15_error': 'Absolute error of the actual KG',

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

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Типы отчетов
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
                            s2 = moment(s2, 'DD.MM.YYYY HH:mm').set({ 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 999 }).format('DD.MM.YYYY HH:mm');
                            $('input#date-stop').val(s2);
                            //panel_select_report.period = s1 + '-' + s2;
                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        panel_select_report.date_start = obj.date1;
                        panel_select_report.date_stop = moment(obj.date2).set({ 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 999 })._d;
                        //panel_select_report.period = obj.value;
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
                this.obj_table = this.html_table.DataTable({
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
                        {
                            className: 'details-control',
                            orderable: false,
                            data: null,
                            defaultContent: '',
                            searchable: false, width: "30px"
                        },
                        { data: "date_start", title: langView('field_date_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "type", title: langView('field_type', langs), width: "50px", orderable: true, searchable: true },
                        { data: "ukt_zed", title: langView('field_ukt_zed', langs), width: "50px", orderable: true, searchable: true },
                        { data: "fuel_name", title: langView('field_fuel_name', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_start", title: langView('field_volume_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: langView('field_mass_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: langView('field_dens_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_start", title: langView('field_temp_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_start", title: langView('field_volume15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_start", title: langView('field_mass15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_start", title: langView('field_dens15_start', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_received", title: langView('field_volume_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_received", title: langView('field_mass_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_received", title: langView('field_dens_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_received", title: langView('field_temp_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_received", title: langView('field_volume15_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_received", title: langView('field_mass15_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_received", title: langView('field_dens15_received', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_delivery", title: langView('field_volume_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_delivery", title: langView('field_mass_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_delivery", title: langView('field_dens_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_delivery", title: langView('field_temp_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_delivery", title: langView('field_volume15_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_delivery", title: langView('field_mass15_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_delivery", title: langView('field_dens15_delivery', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: langView('field_volume_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: langView('field_mass_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: langView('field_dens_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_stop", title: langView('field_temp_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_stop", title: langView('field_volume15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_stop", title: langView('field_mass15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_stop", title: langView('field_dens15_stop', langs), width: "50px", orderable: true, searchable: true },

                        { data: "permissible_volume15_error", title: langView('field_permissible_volume15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "absolute_volume15_error", title: langView('field_absolute_volume15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "permissible_mass15_error", title: langView('field_permissible_mass15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "absolute_mass15_error", title: langView('field_absolute_mass15_error', langs), width: "50px", orderable: true, searchable: true }

                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                    ]
                });
                this.initEventSelectChild();
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen(langView('mess_delay', langs));
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewDailyAccountingReportPeriodOfDateTime(
                        panel_select_report.date_start,
                        panel_select_report.date_stop,
                        function (result) {
                            table_daili_report.list = result;
                            table_daili_report.loadDataTable(result);
                            table_daili_report.obj_table.draw();
                        }
                    );
                } else {
                    table_daili_report.loadDataTable(this.list);
                    table_daili_report.obj_table.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj_table.clear();
                for (i = 0; i < data.length; i++) {
                    var day_start = moment(data[i].date_start).get('date');
                    var day_stop = moment(data[i].date_stop).get('date');
                    this.obj_table.row.add({
                        "id": data[i].id,
                        "type": data[i].type,
                        "ukt_zed": data[i].ukt_zed,
                        "fuel_name": data[i].fuel_name,
                        "date_start": data[i].date_start.replace("T", " "),
                        "date_stop": data[i].date_stop.replace("T", " "),
                        "volume_start": data[i].volume_start,
                        "mass_start": data[i].mass_start !== null ? Number(data[i].mass_start).toFixed(2) : 0.00,
                        "dens_start": data[i].dens_start !== null ? Number(data[i].dens_start).toFixed(6) : 0.000000,
                        "temp_start": data[i].temp_start !== null ? Number(data[i].temp_start).toFixed(2) : 0.00,
                        "volume15_start": data[i].volume15_start !== null ? Number(data[i].volume15_start).toFixed(6) : 0.000000,
                        "mass15_start": data[i].mass15_start !== null ? Number(data[i].mass15_start).toFixed(2) : 0.00,
                        "dens15_start": data[i].dens15_start !== null ? Number(data[i].dens15_start).toFixed(6) : 0.000000,

                        "volume_received": data[i].volume_received !== null ? data[i].volume_received : 0,
                        "mass_received": data[i].mass_received !== null ? Number(data[i].mass_received).toFixed(2) : 0.00,
                        "dens_received": data[i].dens_received !== null ? Number(data[i].dens_received).toFixed(6) : 0.000000,
                        "temp_received": data[i].temp_received !== null && day_start===day_stop ? Number(data[i].temp_received).toFixed(2) : 0.00,
                        "volume15_received":  data[i].volume15_received !== null ? Number(data[i].volume15_received).toFixed(6) : 0.000000, 
                        "mass15_received": data[i].mass15_received !== null ? Number(data[i].mass15_received).toFixed(2) : 0.00,
                        "dens15_received": data[i].dens15_received !== null ? Number(data[i].dens15_received).toFixed(6) : 0.000000,

                        "volume_delivery": data[i].volume_delivery !== null ? data[i].volume_delivery : 0,
                        "mass_delivery": data[i].mass_delivery !== null ? Number(data[i].mass_delivery).toFixed(2) : 0.00,
                        "dens_delivery": data[i].dens_delivery !== null ? Number(data[i].dens_delivery).toFixed(6) : 0.000000,
                        "temp_delivery": data[i].temp_delivery !== null && day_start === day_stop ? Number(data[i].temp_delivery).toFixed(2) : 0.00,
                        "volume15_delivery": data[i].volume15_delivery !== null ? Number(data[i].volume15_delivery).toFixed(6) : 0.000000,
                        "mass15_delivery": data[i].mass15_delivery !== null ? Number(data[i].mass15_delivery).toFixed(2) : 0.00,
                        "dens15_delivery": data[i].dens15_delivery !== null ? Number(data[i].dens15_delivery).toFixed(6) : 0.000000,

                        "volume_stop": data[i].volume_stop !== null ? data[i].volume_stop : 0,
                        "mass_stop": data[i].mass_stop !== null ? Number(data[i].mass_stop).toFixed(2) : 0.00,
                        "dens_stop": data[i].dens_stop !== null ? Number(data[i].dens_stop).toFixed(6) : 0.000000,
                        "temp_stop": data[i].temp_stop !== null ? Number(data[i].temp_stop).toFixed(2) : 0.00,
                        "volume15_stop": data[i].volume15_stop !== null ? Number(data[i].volume15_stop).toFixed(6) : 0.000000,
                        "mass15_stop": data[i].mass15_stop !== null ? Number(data[i].mass15_stop).toFixed(2) : 0.00,
                        "dens15_stop": data[i].dens15_stop !== null ? Number(data[i].dens15_stop).toFixed(6) : 0.000000,

                        "permissible_volume15_error": data[i].allowable_volume15_error !== null ? Number(data[i].allowable_volume15_error).toFixed(6) : 0.000000,
                        "absolute_volume15_error": data[i].absolute_volume15_error !== null ? Number(data[i].absolute_volume15_error).toFixed(6) : 0.000000,
                        "permissible_mass15_error": data[i].allowable_mass15_error !== null ? Number(data[i].allowable_mass15_error).toFixed(6) : 0.000000,
                        "absolute_mass15_error": data[i].absolute_mass15_error !== null ? Number(data[i].absolute_mass15_error).toFixed(6) : 0.000000,

                    });
                }
                LockScreenOff();
            },
            // Показать детали
            initEventSelectChild: function () {
                this.html_table.find('tbody')
                    .on('click', 'td.details-control', function () {
                        var tr = $(this).closest('tr');
                        var row = table_daili_report.obj_table.row(tr);
                        if (row.child.isShown()) {
                            // This row is already open - close it
                            row.child.hide();
                            tr.removeClass('shown');
                        }
                        else {
                            row.child($('<tr id="detali-transfer"><td colspan="32"><div id="detali' + row.data().id + '" class="detali-operation"> ' +
                                '<table class= "display compact" id="table-detali-' + row.data().id + '" style = "width:100%" cellpadding = "0" ></table>' +
                                '</div></td></tr> ')).show();
                            table_daili_report.viewTableDetali(row.data());
                            tr.addClass('shown');
                        }
                    });
            },
            //
            viewTableDetali: function (data) {

                var table_detali = $('table#table-detali-' + data.id).DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
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
                        if (data.count_tanks_delivery > 1)
                            $(row).addClass("total-issue");
                    },
                    columns: [
                        //{ data: "date_start", title: langView('field_date_start', langs), width: "50px", orderable: true, searchable: true },
                        //{ data: "tank", title: langView('field_tank', langs), width: "50px", orderable: true, searchable: true },
                        { data: "serial_number", title: langView('field_serial_number', langs), width: "50px", orderable: true, searchable: true },
                        { data: "unified_tank_number", title: langView('field_unified_tank_number', langs), width: "50px", orderable: true, searchable: true },
                        { data: "type_name", title: langView('field_type_name', langs), width: "50px", orderable: true, searchable: true },
                        { data: "level_meters_model", title: langView('field_level_meters_model', langs), width: "50px", orderable: true, searchable: true },
                        { data: "level_meters_serial_number", title: langView('field_level_meters_serial_number', langs), width: "50px", orderable: true, searchable: true },

                        //{ data: "type", title: langView('field_type', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_start", title: langView('field_volume_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: langView('field_mass_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: langView('field_dens_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_start", title: langView('field_temp_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_start", title: langView('field_volume15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_start", title: langView('field_mass15_start', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_start", title: langView('field_dens15_start', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_received", title: langView('field_volume_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_received", title: langView('field_mass_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_received", title: langView('field_dens_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_received", title: langView('field_temp_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_received", title: langView('field_volume15_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_received", title: langView('field_mass15_received', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_received", title: langView('field_dens15_received', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_delivery", title: langView('field_volume_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_delivery", title: langView('field_mass_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_delivery", title: langView('field_dens_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_delivery", title: langView('field_temp_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_delivery", title: langView('field_volume15_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_delivery", title: langView('field_mass15_delivery', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_delivery", title: langView('field_dens15_delivery', langs), width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: langView('field_volume_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: langView('field_mass_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: langView('field_dens_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "temp_stop", title: langView('field_temp_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15_stop", title: langView('field_volume15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15_stop", title: langView('field_mass15_stop', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15_stop", title: langView('field_dens15_stop', langs), width: "50px", orderable: true, searchable: true },

                        { data: "permissible_volume15_error", title: langView('field_permissible_volume15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "absolute_volume15_error", title: langView('field_absolute_volume15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "permissible_mass15_error", title: langView('field_permissible_mass15_error', langs), width: "50px", orderable: true, searchable: true },
                        { data: "absolute_mass15_error", title: langView('field_absolute_mass15_error', langs), width: "50px", orderable: true, searchable: true }



                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                    ]
                });

                LockScreen(langView('mess_delay', langs));
                getAsyncViewDailyAccountingDetaliReportPeriodOfDateTime(
                    moment(data.date_start)._d,
                    moment(data.date_stop)._d,
                    data.type,
                    function (result) {
                        table_detali.clear();
                        for (i = 0; i < result.length; i++) {
                            var day_start = moment(result[i].date_start).get('date');
                            var day_stop = moment(result[i].date_stop).get('date');
                            table_detali.row.add({
                                "id": result[i].id,
                                "type": result[i].type,
                                "date_start": result[i].dt_start,
                                "date_stop": result[i].dt_stop,
                                "fuel_type": result[i].fuel_type,
                                "ukt_zed": result[i].ukt_zed,
                                "tank": result[i].tank,
                                "serial_number": result[i].serial_number !== null ? result[i].serial_number : result[i].tank,
                                "unified_tank_number": result[i].unified_tank_number,
                                "type_name": result[i].type_name,
                                "level_meters_model": result[i].level_meters_model,
                                "level_meters_serial_number": result[i].level_meters_serial_number,

                                //"dt_actual_remains_start": result[i].dt_actual_remains_start,
                                "level_remains_start": result[i].level_remains_start !== null ? Number(result[i].level_remains_start).toFixed(2) : null,
                                "volume_start": result[i].volume_remains_start,
                                "mass_start": result[i].mass_remains_start !== null ? Number(result[i].mass_remains_start).toFixed(2) : 0.00,
                                "dens_start": result[i].dens_avg_remains_start !== null ? Number(result[i].dens_avg_remains_start).toFixed(6) : 0.000000,
                                "temp_start": result[i].temp_remains_start !== null && day_start === day_stop ? Number(result[i].temp_remains_start).toFixed(2) : 0.00,
                                "volume15_start": result[i].volume15_remains_start !== null ? Number(result[i].volume15_remains_start).toFixed(6) : 0.000000,
                                "mass15_start": result[i].mass15_remains_start !== null ? Number(result[i].mass15_remains_start).toFixed(2) : 0.00,
                                "dens15_start": result[i].dens15_remains_start !== null ? Number(result[i].dens15_remains_start).toFixed(6) : 0.000000,

                                "volume_received": result[i].volume_received !== null ? result[i].volume_received : 0,
                                "mass_received": result[i].mass_received !== null ? Number(result[i].mass_received).toFixed(2) : 0.00,
                                "dens_received": result[i].dens_received !== null ? Number(result[i].dens_received).toFixed(6) : 0.000000,
                                "temp_received": result[i].temp_received !== null && day_start === day_stop ? Number(result[i].temp_received).toFixed(2) : 0.00,
                                "volume15_received": result[i].volume15_received !== null ? Number(result[i].volume15_received).toFixed(6) : 0.000000, 
                                "mass15_received": result[i].mass15_received !== null ? Number(result[i].mass15_received).toFixed(2) : 0.00,
                                "dens15_received": result[i].dens15_received !== null ? Number(result[i].dens15_received).toFixed(6) : 0.000000,

                                //"count_tanks_delivery": result[i].count_tanks_delivery,
                                "volume_delivery": result[i].volume_delivery !== null ? result[i].volume_delivery : 0,
                                "mass_delivery": result[i].mass_delivery !== null ? Number(result[i].mass_delivery).toFixed(2) : 0.00,
                                "dens_delivery": result[i].dens_delivery !== null ? Number(result[i].dens_delivery).toFixed(6) : 0.000000,
                                "temp_delivery": result[i].temp_delivery !== null ? Number(result[i].temp_delivery).toFixed(2) : 0.00,
                                "volume15_delivery": result[i].volume15_delivery !== null ? Number(result[i].volume15_delivery).toFixed(6) : 0.000000,
                                "mass15_delivery": result[i].mass15_delivery !== null ? Number(result[i].mass15_delivery).toFixed(2) : 0.00,
                                "dens15_delivery": result[i].dens15_delivery !== null ? Number(result[i].dens15_delivery).toFixed(6) : 0.000000,

                                //"dt_actual_remains_stop": result[i].dt_actual_remains_stop,
                                "level_remains_stop": result[i].level_remains_stop !== null ? Number(result[i].level_remains_stop).toFixed(2) : null,
                                "volume_stop": result[i].volume_remains_stop,
                                "mass_stop": result[i].mass_remains_stop !== null ? Number(result[i].mass_remains_stop).toFixed(2) : 0.00,
                                "dens_stop": result[i].dens_avg_remains_stop !== null ? Number(result[i].dens_avg_remains_stop).toFixed(6) : 0.000000,
                                "temp_stop": result[i].temp_remains_stop !== null ? Number(result[i].temp_remains_stop).toFixed(2) : 0.00,
                                "volume15_stop": result[i].volume15_remains_stop !== null ? Number(result[i].volume15_remains_stop).toFixed(6) : 0.000000,
                                "mass15_stop": result[i].mass15_remains_stop !== null ? Number(result[i].mass15_remains_stop).toFixed(2) : 0.00,
                                "dens15_stop": result[i].dens15_remains_stop !== null ? Number(result[i].dens15_remains_stop).toFixed(6) : 0.000000,

                                "permissible_volume15_error": result[i].allowable_volume15_error !== null ? Number(result[i].allowable_volume15_error).toFixed(6) : 0.000000,
                                "absolute_volume15_error": result[i].absolute_volume15_error !== null ? Number(result[i].absolute_volume15_error).toFixed(6) : 0.000000,
                                "permissible_mass15_error": result[i].allowable_mass15_error !== null ? Number(result[i].allowable_mass15_error).toFixed(6) : 0.000000,
                                "absolute_mass15_error": result[i].absolute_mass15_error !== null ? Number(result[i].absolute_mass15_error).toFixed(6) : 0.000000,
                            });
                        }
                        LockScreenOff();
                        table_detali.draw();
                    }
                );

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
    table_daili_report.initObject();
    tab_type_reports.activeTable(tab_type_reports.active, true);

});