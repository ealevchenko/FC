$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Таблица 1',
                'text_link_tabs_report_2': 'Таблица 2',
                'text_link_tabs_report_3': 'Таблица 3',
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
                'text_link_tabs_report_3': 'Table 3',

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
        loadData = function (date, callback) {
            LockScreen(langView('mess_delay', langs));
            var count = 3;
            // Загрузка списка общего отчета за сутки (common.js)
            getAsyncViewDailyAccountingReportOfDate(date, function (result_daily_accounting) {
                list_daily_accounting = result_daily_accounting;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
            // Загрузка списка детального отчета за сутки (common.js)
            getAsyncViewDailyAccountingDetaliReportOfDate(date, function (result_daily_accounting_detali) {
                list_daily_accounting_detali = result_daily_accounting_detali;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
            // Получить выдачи за сутки просуммированные по пистолетам  (common.js)
            getAsyncViewDeliveryTanksReportGroupNumOfDate(date, function (result_delivery_tanks_group_num) {
                list_delivery_tanks_group_num = result_delivery_tanks_group_num;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });

        },
        // список 
        list_daily_accounting = [],
        list_daily_accounting_detali = [],
        list_delivery_tanks_group_num = [],

        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text(langView('text_link_tabs_report_1', langs));
                $('#link-tabs-report-2').text(langView('text_link_tabs_report_2', langs));
                $('#link-tabs-report-3').text(langView('text_link_tabs_report_3', langs));
                this.html_div.tabs({
                    collapsible: true,
                    activate: function (event, ui) {
                        tab_type_reports.active = tab_type_reports.html_div.tabs("option", "active");
                        tab_type_reports.activeTable(tab_type_reports.active);
                    },
                });
                //this.activeTable(this.active);
            },
            activeTable: function (active) {
                if (active === 0) {
                    table_report_1.viewTable();
                }
                if (active === 1) {
                    table_report_2.viewTable();
                }
                if (active === 2) {
                    table_report_3.viewTable();
                }
            },
            excelTable: function (active) {
                if (active === 0) {
                    table_report_1.exportTable();
                }
                if (active === 1) {
                    table_report_2.exportTable();
                }
                if (active === 2) {
                    table_report_3.exportTable();
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
            bt_excel: $('<button class="ui-button ui-widget ui-corner-all">to Excel</button >'),
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
                    tab_type_reports.excelTable(tab_type_reports.active);
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
                        panel_select_report.loadReport(true);
                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            loadReport: function (data_refresh) {
                date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 0, 0, 0);
                date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 23, 59, 59);
                if (data_refresh) {
                    loadData(date_start, function () {
                        tab_type_reports.activeTable(tab_type_reports.active);
                    });
                } else {
                    tab_type_reports.activeTable(tab_type_reports.active);
                }


            }
        },
        //
        table_report_1 = {
            viewTable: function () {
                $('div#report-1').empty();
                var tab = get_html_table1_star(date_start, date_stop);
                var formatter = new Intl.NumberFormat("ru");
                //formatter.format()
                $.each(list_daily_accounting_detali, function (i, el) {
                    if (el.tank !== "B13") {
                            tab += "<tr style='height:auto;'>" +
                            "<td class=xl7020875 width=24 style='width:18pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=51 style='border-top:none;border-left:none;width:38pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=120 style='border-top:none;border-left:none;width:90pt'>" + el.ukt_zed + "</td>" +
                            "<td class=xl7220875 width=81 style='border-top:none;border-left:none;width:61pt'>" + outFuelTypeDescription(el.fuel_type) + "</td>" +
                            "<td class=xl7420875 width=81 style='border-top:none;width:61pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt;word-wrap:break-word'>" + (el.unified_tank_number !== null ? el.unified_tank_number : el.tank ) + "</td>" +
                            "<td class=xl7220875 width=92 style='border-top:none;border-left:none;width:69pt'>" + (el.level_meters_serial_number!==null ? el.level_meters_serial_number : "&nbsp;") + "</td>" +
                            "<td class=xl7220875-numder width=98 style='border-top:none;width:74pt'>" + (el.volume15_remains_start !== null ? Number(el.volume15_remains_start).toFixed(3) : "&nbsp;") + "</td>" +
                            "<td class=xl7220875-numder width=103 style='border-top:none;width:77pt'>" + (el.volume15_remains_stop !== null ? Number(el.volume15_remains_stop).toFixed(3) : "&nbsp;") + "</td>" +
                            "<td class=xl7420875 width=93 style='border-top:none;width:70pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=108 style='border-top:none;border-left:none;width:81pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=46 style='border-top:none;border-left:none;width:35pt'>&nbsp;</td>" +
                            "</tr>";
                    }
                });


                tab += html_table1_stop;

                $('div#report-1').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-1').html();
                fnExcelReport("Таблица 1", tab, css_table1, "Table1"); //
            }
        },

        table_report_2 = {
            viewTable: function () {
                $('div#report-2').empty();
                var tab = html_table2_start;
                var formatter = new Intl.NumberFormat("ru");
                $.each(list_daily_accounting, function (i, el) {
                    tab += "<tr style='height:auto'>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>&nbsp;</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + outFuelTypeDescription(el.type) + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.volume15_start !== null ? Number(el.volume15_start).toFixed(3) : "&nbsp;") + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.volume15_stop !== null ? Number(el.volume15_stop).toFixed(3) : "&nbsp;") + "</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>&nbsp;</td>" +
                        "</tr>";
                });        
                tab += html_table2_stop;
                $('div#report-2').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-2').html();
                fnExcelReport("Таблица 2", tab, css_table2, "Table2"); //
            }
        };

        table_report_3 = {
            viewTable: function () {
                $('div#report-3').empty();
                var tab = get_html_table3_star(list_delivery_tanks_group_num.length);
                $.each(list_delivery_tanks_group_num, function (i, el) {
                    tab += "<tr class=xl6527789 style='height:auto'>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>&nbsp;</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + outFuelTypeDescription(el.fuel_type) + "</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + el.serial_number_flowmeter + "/" + el.identification_number_flowmeter+ "("+ el.num +")" +"</td>" +
                        "<td class=xl6427789-number width=170 style='border-top:none;border-left:none;width:128pt'>" + (el.volume_delivery !== null ? Number(el.volume_delivery).toFixed(3) : "&nbsp;") + "</td>" +
                        "<td class=xl6427789 width=147 style='border-top:none;border-left:none;width:110pt'>&nbsp;</td>" +
                        "<td class=xl6427789 width=45 style='border-top:none;border-left:none;width:34pt'>&nbsp;</td>" +
                        "</tr>";
                });        
                tab += html_table3_stop;
                $('div#report-3').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-3').html();
                fnExcelReport("Таблица 3", tab, css_table3, "Table3"); //
            }
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
    panel_select_report.loadReport(true);
    //});

});