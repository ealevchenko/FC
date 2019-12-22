$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Таблица 1',
                'text_link_tabs_report_2': 'Таблица 2',
                'text_link_tabs_report_3': 'Таблица 3',
                'text_link_tabs_report_4': 'Таблица 4',
                'text_link_tabs_report_5': 'Таблица 5',
                'text_link_tabs_report_6': 'Таблица 6',
                'bt_excel_text': 'to excel',

                'label_select_date': 'Выберите дату'
            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Table 1',
                'text_link_tabs_report_2': 'Table 2',
                'text_link_tabs_report_3': 'Table 3',
                'text_link_tabs_report_4': 'Table 4',
                'text_link_tabs_report_5': 'Table 5',
                'text_link_tabs_report_6': 'Table 6',
                'bt_excel_text': 'to excel',

                'label_select_date': 'Select a date'
            }
        };

    var lang = $.cookie('lang') === undefined ? 'ru' : $.cookie('lang'),
        date_curent = moment(new Date()).add('day', -1)._d,
        date_start = null,
        date_stop = null,
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Загрузка библиотек
        loadData = function (date, callback) {
            LockScreen(langView('mess_delay', langs));
            var count = 5;
            // Загрузка списка общего отчета за сутки (common.js)
            getAsyncViewDailyAccountingReportTSKOfDate(date, function (result_daily_accounting) {
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
            getAsyncViewDailyAccountingDetaliReportTSKOfDate(date, function (result_daily_accounting_detali) {
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
            getAsyncViewDeliveryTanksReportTSKGroupNumOfDate(date, function (result_delivery_tanks_group_num) {
                list_delivery_tanks_group_num = result_delivery_tanks_group_num;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
            // Получить выдачи за сутки просуммированные по ГСМ  (common.js)
            getAsyncViewDeliveryTanksReportTSKGroupFuelOfDate(date, function (result_delivery_tanks_group_fuel) {
                list_delivery_tanks_group_fuel = result_delivery_tanks_group_fuel;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
            // Получить каталог ТРК  (common.js)
            getAsyncViewCatalogTRK(function (result_catalog_trkl) {
                list_catalog_trk = result_catalog_trkl;
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
        list_delivery_tanks_group_fuel = [],
        list_catalog_trk = [],

        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text(langView('text_link_tabs_report_1', langs));
                $('#link-tabs-report-2').text(langView('text_link_tabs_report_2', langs));
                $('#link-tabs-report-3').text(langView('text_link_tabs_report_3', langs));
                $('#link-tabs-report-4').text(langView('text_link_tabs_report_4', langs));
                $('#link-tabs-report-5').text(langView('text_link_tabs_report_5', langs));
                $('#link-tabs-report-6').text(langView('text_link_tabs_report_6', langs));
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
                if (active === 3) {
                    table_report_4.viewTable();
                }
                if (active === 4) {
                    table_report_5.viewTable();
                }
                if (active === 5) {
                    table_report_6.viewTable();
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
                if (active === 3) {
                    table_report_4.exportTable();
                }
                if (active === 4) {
                    table_report_5.exportTable();
                }
                if (active === 5) {
                    table_report_6.exportTable();
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
                    if (el.tank !== "PL107000022" && el.tank !== "PL107000023" && el.tank !== "PL107000024" && el.tank !== "PL107000027") {
                        tab += "<tr style='height:auto;'>" +
                            "<td class=xl7020875 width=24 style='width:18pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=51 style='border-top:none;border-left:none;width:38pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=120 style='border-top:none;border-left:none;width:90pt'>" + el.ukt_zed + "</td>" + //3
                            "<td class=xl7220875 width=81 style='border-top:none;border-left:none;width:61pt'>" + outFuelTypeDescription(el.fuel_type) + "</td>" +
                            "<td class=xl7420875 width=81 style='border-top:none;width:61pt'>&nbsp;</td>" +
                            "<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt;word-wrap:break-word'>" + (el.unified_tank_number !== null ? el.unified_tank_number : el.tank) + "</td>" +
                            "<td class=xl7220875 width=92 style='border-top:none;border-left:none;width:69pt'>" + (el.level_meters_serial_number !== null ? el.level_meters_serial_number : "&nbsp;") + "</td>" +
                            "<td class=xl7220875-numder width=98 style='border-top:none;width:74pt'>" + (el.volume15_remains_start !== null ? Number(el.volume15_remains_start).toFixed(2) : "&nbsp;") + "</td>" +
                            "<td class=xl7220875-numder width=103 style='border-top:none;width:77pt'>" + (el.volume15_remains_stop !== null ? Number(el.volume15_remains_stop).toFixed(2) : "&nbsp;") + "</td>" +
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

                    var PL107000022;
                    var PL107000023;
                    var PL107000024;
                    var PL107000027;

                    var res_107000022 = getObjects(list_daily_accounting_detali, 'tank', 'PL107000022');
                    if (res_107000022 && res_107000022.length > 0) {
                        PL107000022 = res_107000022[0];
                    }
                    var res_107000023 = getObjects(list_daily_accounting_detali, 'tank', 'PL107000023');
                    if (res_107000023 && res_107000023.length > 0) {
                        PL107000023 = res_107000023[0];
                    }
                    var res_107000024 = getObjects(list_daily_accounting_detali, 'tank', 'PL107000024');
                    if (res_107000024 && res_107000024.length > 0) {
                        PL107000024 = res_107000024[0];
                    }
                    var res_107000027 = getObjects(list_daily_accounting_detali, 'tank', 'PL107000027');
                    if (res_107000027 && res_107000027.length > 0) {
                        PL107000027 = res_107000027[0];
                    }

                    var volume15_start = 0;
                    var volume15_stop = 0;

                    switch (el.type) {
                        case 107000022:
                            volume15_start = (el.volume15_start !== null ? el.volume15_start - PL107000022.volume15_remains_start : 0);
                            volume15_stop = (el.volume15_stop !== null ? el.volume15_stop - PL107000022.volume15_remains_stop : 0);
                            break;
                        case 107000023:
                            volume15_start = (el.volume15_start !== null ? el.volume15_start - PL107000023.volume15_remains_start : 0);
                            volume15_stop = (el.volume15_stop !== null ? el.volume15_stop - PL107000023.volume15_remains_stop : 0);
                            break;
                        case 107000024:
                            volume15_start = (el.volume15_start !== null ? el.volume15_start - PL107000024.volume15_remains_start : 0);
                            volume15_stop = (el.volume15_stop !== null ? el.volume15_stop - PL107000024.volume15_remains_stop : 0);
                            break;
                        case 107000027:
                            volume15_start = (el.volume15_start !== null ? el.volume15_start - PL107000027.volume15_remains_start : 0);
                            volume15_stop = (el.volume15_stop !== null ? el.volume15_stop - PL107000027.volume15_remains_stop : 0);
                            break;
                    }

                    tab += "<tr style='height:auto'>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>&nbsp;</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + outFuelTypeDescription(el.type) + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (volume15_start).toFixed(2) + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (volume15_stop).toFixed(2) + "</td>" +
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
        },

        table_report_3 = {
            viewTable: function () {
                $('div#report-3').empty();
                //var tab = get_html_table3_star(list_delivery_tanks_group_num.length);
                var tab = get_html_table3_star(32);
                var ns1 =null, ns2=null, ns3=null;
                $.each([1, 2], function (i, el) {
                    var gun = getObjects(list_delivery_tanks_group_num, 'num', el);
                    if (gun && gun.length > 0) {
                        var gun_value = gun[0];
                        tab += "<tr class=xl6527789 style='height:auto'>" +
                            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>&nbsp;</td>" +
                            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + gun_value.ukt_zed + "</td>" +
                            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + outFuelTypeDescription(gun_value.fuel_type) + "</td>" +
                            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + gun_value.serial_number_flowmeter + "/" + gun_value.identification_number_flowmeter + "(" + gun_value.num + ")" + "</td>" +
                            "<td class=xl6427789-number width=170 style='border-top:none;border-left:none;width:128pt'>" + (gun_value.volume_delivery !== null ? Number(gun_value.volume_delivery).toFixed(2) : "&nbsp;") + "</td>" +
                            "<td class=xl6427789 width=147 style='border-top:none;border-left:none;width:110pt'>&nbsp;</td>" +
                            "<td class=xl6427789 width=45 style='border-top:none;border-left:none;width:34pt'>&nbsp;</td>" +
                            "</tr>";

                    }
                    //else {
                    //    var catalog = getObjects(list_catalog_trk, 'num', el);
                    //    if (catalog && catalog.length > 0) {
                    //        var cat = catalog[0];
                    //        tab += "<tr class=xl6527789 style='height:auto'>" +
                    //            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>&nbsp;</td>" +
                    //            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + outFuelTypeUKTZED(outOZMFuelType(el)) + "</td>" +
                    //            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + outFuelTypeDescription(outOZMFuelType(el)) + "</td>" +
                    //            "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + cat.serial_number_flowmeter + "/" + cat.identification_number_flowmeter + "(" + cat.num + ")" + "</td>" +
                    //            "<td class=xl6427789-number width=170 style='border-top:none;border-left:none;width:128pt'>" + Number(0).toFixed(2) + "</td>" +
                    //            "<td class=xl6427789 width=147 style='border-top:none;border-left:none;width:110pt'>&nbsp;</td>" +
                    //            "<td class=xl6427789 width=45 style='border-top:none;border-left:none;width:34pt'>&nbsp;</td>" +
                    //            "</tr>";
                    //    }
                    //}
                });
                tab += html_table3_stop;
                $('div#report-3').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-3').html();
                fnExcelReport("Таблица 3", tab, css_table3, "Table3"); //
            }
        },

        table_report_4 = {
            viewTable: function () {
                $('div#report-4').empty();
                var tab = get_html_table4_star(list_delivery_tanks_group_fuel.length);
                $.each(list_delivery_tanks_group_fuel, function (i, el) {
                    tab += "<tr class=xl6615240 style='height:auto'>" +
                        "<td class=xl6515240 width=80 style='border-top:none;border-left:none;width:60pt'>&nbsp;</td>" +
                        "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>" + outFuelTypeDescription(el.fuel_type) + "</td>" +
                        "<td class=xl6515240-number width=353 style='border-top:none;border-left:none;width:265pt'>" + (el.volume_delivery !== null ? Number(el.volume_delivery).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6515240 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
                        "</tr>";
                });
                tab += html_table4_stop;
                $('div#report-4').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-4').html();
                fnExcelReport("Таблица 4", tab, css_table4, "Table4"); //
            }
        },

        table_report_5 = {
            viewTable: function () {
                $('div#report-5').empty();
                var tab = get_html_table5_star(list_daily_accounting.length);
                $.each(list_daily_accounting, function (i, el) {

                    var result = el.volume15_stop - el.volume15_start + el.volume_delivery;

                    tab += "<tr  class=xl6627014 style='height:auto'>" +
                        "<td class=xl6527014 width=41 style='border-top:none;border-left:none;width:31pt'>&nbsp;</td>" +
                        "<td class=xl6527014 width=112 style='border-top:none;border-left:none;width:84pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl6527014 width=112 style='border-top:none;border-left:none;width:84pt'>" + outFuelTypeDescription(el.type) + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.volume15_stop !== null ? Number(el.volume15_stop).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.volume15_start !== null ? Number(el.volume15_start).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.volume_delivery !== null ? Number(el.volume_delivery).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>&nbsp;</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>&nbsp;</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (result !== null ? Number(result).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6527014 width=49 style='border-top:none;border-left:none;width:37pt'>&nbsp;</td>" +
                        "</tr>";
                });
                tab += html_table5_stop;
                $('div#report-5').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-5').html();
                fnExcelReport("Таблица 5", tab, css_table5, "Table5"); //
            }
        },

        table_report_6 = {
            viewTable: function () {
                $('div#report-6').empty();
                var tab = get_html_table6_star(list_daily_accounting.length);
                $.each(list_daily_accounting, function (i, el) {




                    var result = el.volume15_stop - el.volume15_start + el.volume15_delivery;
                    tab += "<tr class=xl6628927 style='height:auto'>" +
                        "<td class=xl6528927 width=55 style='border-top:none;border-left:none;width:41pt'>&nbsp;</td>" +
                        "<td class=xl6528927 width=133 style='border-top:none;border-left:none;width:100pt'>" + el.ukt_zed + "</td>" +
                        "<td class=xl6528927 width=193 style='border-top:none;border-left:none;width:145pt'>" + outFuelTypeDescription(el.type) + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>" + outFuelTypeVolumePL(el.type).toFixed(2) + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>" + outFuelTypeVolumePL(el.type).toFixed(2) + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border -left:none;width:100pt'>&nbsp;</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                        "<td class=xl6528927 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
                        "</tr>";

                    //"<tr class=xl6628927 style='height:auto'> >" +
                    // "<td class=xl6528927 width=55 style='border-top:none;border-left:none;width:41pt'>&nbsp;</td>" +
                    // "<td class=xl6528927 width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                    // "<td class=xl6528927 width=193 style='border-top:none;border-left:none;width:145pt'>&nbsp;</td>" +
                    // "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                    // "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                    // "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                    // "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>&nbsp;</td>" +
                    // "<td class=xl6528927 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
                    //"</tr>";
                });
                tab += html_table6_stop;
                $('div#report-6').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-6').html();
                fnExcelReport("Таблица 6", tab, css_table6, "Table6"); //
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