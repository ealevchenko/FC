﻿$(function () {

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
            'bt_excel_text': 'в excel',
            'bt_excel_all_text': 'в excel все',
            'bt_xml_text': 'в XML(J0210401)',

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
            'bt_excel_all_text': 'to excel all',
            'bt_xml_text': 'to XML(J0210401)',

            'label_select_date': 'Select a date'
        }
    };

    var lang = $.cookie('lang') === undefined ? 'ru' : $.cookie('lang'),
        //date_curent = moment(new Date()).add('day', -1)._d,
        date_start = new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0),
        date_stop = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59),
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        report_data = null,
        // Загрузка необходимых данных
        loadData = function (start, stop, callback) {
            LockScreen(langView('mess_delay', langs));
            var count = 1;
            // Получим детальный суточный
            getAsyncViewDailyReportBenzeneTanksPeriodOfDateTime(start, stop, function (result_daily_detali) {
                list_daily_detali = result_daily_detali;
                count -= 1;
                if (count === 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
            //// Получить каталог ТРК  (common.js)
            //getAsyncViewCatalogTRK(function (result_catalog_trkl) {
            //    list_catalog_trk = result_catalog_trkl;
            //    count -= 1;
            //    if (count === 0) {
            //        if (typeof callback === 'function') {
            //            LockScreenOff();
            //            callback();
            //        }
            //    }
            //});
        },
        // список
        code_fuel = "2707101000",
        name_fuel = "Бензол",
        level_meters_serial_number_1 = "50233729", // 50161698 
        level_meters_serial_number_2 = "50233730", // 50161699
        serial_number_flowmeter = "G200000007602232",
        volume_pipeline = 672.00,
        list_daily_detali = [],
        // Типы отчетов
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
            bt_excel: $('<button class="ui-button ui-widget ui-corner-all">to Excel</button >'),
            bt_excel_all: $('<button class="ui-button ui-widget ui-corner-all">to Excel All</button >'),
            bt_xml: $('<button class="ui-button ui-widget ui-corner-all">to XML</button >'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_data_start: $('<input id="date-start" name="date-start" size="20">'),
            input_data_stop: $('<input id="date-stop" name="date-stop" size="20">'),
            xml_load: $('<a id="xml_load" class="btn btn-danger active" role="button" aria-pressed="true" style="color:#F44336"></a>'),
            initObject: function () {
                this.html_div_panel
                    .append(this.label)
                    .append(this.span.append(this.input_data_start).append(' - ').append(this.input_data_stop))
                    .append(this.bt_excel)
                    .append(this.bt_excel_all)
                    .append(this.bt_xml)
                    .append(this.xml_load);
                this.label.text(langView('label_select_date', langs));
                this.bt_excel.text(langView('bt_excel_text', langs));
                this.bt_excel_all.text(langView('bt_excel_all_text', langs));
                this.bt_xml.text(langView('bt_xml_text', langs));
                this.bt_excel.on('click', function () {
                    tab_type_reports.excelTable(tab_type_reports.active);
                });
                this.bt_excel_all.on('click', function () {
                    exportTable_all();
                });
                this.bt_xml.on('click', function () {
                    pn_XML.Open();
                });
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
                        date_start = obj.date1;
                        date_stop = moment(obj.date2).set({ 'hour': 23, 'minute': 59, 'second': 59, 'millisecond': 999 })._d;
                    })
                    .bind('datepicker-closed', function () {
                        panel_select_report.loadReport(true);
                    });
                this.obj_date.data('dateRangePicker').setDateRange(
                    (date_start.getDate() + '.' + (date_start.getMonth() + 1) + '.' + date_start.getFullYear() + ' ' + date_start.getHours() + ':' + date_start.getMinutes() + ':' + date_start.getSeconds()),
                    (date_stop.getDate() + '.' + (date_stop.getMonth() + 1) + '.' + date_stop.getFullYear() + ' ' + date_stop.getHours() + ':' + date_stop.getMinutes() + ':' + date_stop.getSeconds()));
            },
            loadReport: function (data_refresh) {
                panel_select_report.xml_load.hide();
                if (data_refresh) {
                    // Загрузка предварительных данных
                    loadData(date_start, date_stop, function () {
                        get_ReportAll();
                        tab_type_reports.activeTable(tab_type_reports.active);
                    });
                } else {
                    tab_type_reports.activeTable(tab_type_reports.active);
                }


            }
        },

        get_ReportAll = function () {
            // Формируем таблицу 1
            var tab1 = [];
            var index = 1;
            // Получим данные по ем1
            list_daily_detali_tank1 = list_daily_detali.filter(function (i) {
                return i.tank === 1;
            });
            // Получим данные по ем2
            list_daily_detali_tank2 = list_daily_detali.filter(function (i) {
                return i.tank === 2;
            });
            // переменные для расчетов
            var volume15_remains_start_tank_1 = list_daily_detali_tank1 && list_daily_detali_tank1.length > 0 ? list_daily_detali_tank1[0].start_volume15 : 0;
            var volume15_remains_stop_tank_1 = list_daily_detali_tank1 && list_daily_detali_tank1.length > 0 ? list_daily_detali_tank1[list_daily_detali_tank1.length - 1].stop_volume15 : 0;
            var volume15_dispensing_tank_1 = 0;

            var volume15_remains_start_tank_2 = list_daily_detali_tank2 && list_daily_detali_tank2.length > 0 ? list_daily_detali_tank2[0].start_volume15 : 0;
            var volume15_remains_stop_tank_2 = list_daily_detali_tank2 && list_daily_detali_tank2.length > 0 ? list_daily_detali_tank2[list_daily_detali_tank2.length - 1].stop_volume15 : 0;
            var volume15_dispensing_tank_2 = 0;
            // сумма
            var volume15_remains_start = volume15_remains_start_tank_1 + volume15_remains_start_tank_2;
            var volume15_remains_stop = volume15_remains_stop_tank_1 + volume15_remains_stop_tank_2

            // Посчитаем выдачи
            $.each(list_daily_detali, function (i, el) {
                if (el.tank === 1) {
                    volume15_dispensing_tank_1 += el.dispensing_volume15 !== null ? Number(Number(el.dispensing_volume15).toFixed(2)) : 0;
                }
                if (el.tank === 2) {
                    volume15_dispensing_tank_2 += el.dispensing_volume15 !== null ? Number(Number(el.dispensing_volume15).toFixed(2)) : 0;
                }
            });
            // Общая выдача
            var volume15_dispensing = volume15_dispensing_tank_1 + volume15_dispensing_tank_2;

            // 1
            //var T1R = {
            //    G1: 1,
            //    G2: Number(code_fuel),
            //    G3S: name_fuel,
            //    G4: null,
            //    G5S: 1,
            //    G6S: level_meters_serial_number_1,
            //    G7: volume15_remains_start_tank_1 !== null ? Number(volume15_remains_start_tank_1).toFixed(2) : 0.00,
            //    G8: volume15_remains_stop_tank_1 !== null ? Number(volume15_remains_stop_tank_1).toFixed(2) : 0.00,
            //    G9: 0.00,
            //    G10: 0.00,
            //    G11: null
            //};
            var T1R = {
                G1: null,
                G2: null,
                G3S: null,
                G4: null,
                G5S: null,
                G6S: null,
                G7: null,
                G8: null,
                G9: null,
                G10: null,
                G11: null
            };
            tab1.push(T1R);
            // 2
            //var T1R = {
            //    G1: 2,
            //    G2: Number(code_fuel),
            //    G3S: name_fuel,
            //    G4: null,
            //    G5S: 2,
            //    G6S: level_meters_serial_number_2,
            //    G7: volume15_remains_start_tank_2 !== null ? Number(volume15_remains_start_tank_2).toFixed(2) : 0.00,
            //    G8: volume15_remains_stop_tank_2 !== null ? Number(volume15_remains_stop_tank_2).toFixed(2) : 0.00,
            //    G9: 0.00,
            //    G10: 0.00,
            //    G11: null
            //};
            //tab1.push(T1R);
            // Формируем таблицу 2
            var tab2 = [];
            //var T2R = {
            //    G1: 1,
            //    G2: Number(code_fuel),
            //    G3S: name_fuel,
            //    G4: Number(volume15_remains_start).toFixed(2),
            //    G5: Number(volume15_remains_stop).toFixed(2),
            //    G6: null
            //};
            var T2R = {
                G1: null,
                G2: null,
                G3S: null,
                G4: null,
                G5: null,
                G6: null
            };
            tab2.push(T2R);
            // Формируем таблицу 3
            var tab3 = [];
            var T3R = {
                G1: 1,
                G2: Number(code_fuel),
                G3S: name_fuel,
                G4S: serial_number_flowmeter,
                G5: volume15_dispensing !== null ? Number(volume15_dispensing).toFixed(2) : Number(0).toFixed(2),
                G6: Number(0).toFixed(2),
                G7: null
            };
            tab3.push(T3R);
            var tab4 = [];
            var T4R = {
                G1: 1,
                G2: Number(code_fuel),
                G3S: name_fuel,
                G4: volume15_dispensing !== null ? Number(volume15_dispensing).toFixed(2) : Number(0).toFixed(2),
                G5: null
            };
            tab4.push(T4R);
            // Формируем таблицу 5
            var tab5 = [];
            //var result = volume15_remains_stop - volume15_remains_start + volume15_dispensing;
            //var T5R = {
            //    G1: 1,
            //    G2: Number(code_fuel),
            //    G3S: name_fuel,
            //    G4: (volume15_remains_stop !== null ? Number(volume15_remains_stop).toFixed(2) : Number(0).toFixed(2)),
            //    G5: (volume15_remains_start !== null ? Number(volume15_remains_start).toFixed(2) : Number(0).toFixed(2)),
            //    G6: (volume15_dispensing !== null ? Number(volume15_dispensing).toFixed(2) : Number(0).toFixed(2)),
            //    G7: Number(0).toFixed(2),
            //    G8: Number(0).toFixed(2),
            //    G9: (result !== null ? Number(result).toFixed(2) : Number(0).toFixed(2)),
            //    G10: null
            //};
            var T5R = {
                G1: null,
                G2: null,
                G3S: null,
                G4: null,
                G5: null,
                G6: null,
                G7: null,
                G8: null,
                G9: null,
                G10: null
            };
            tab5.push(T5R);
            // Формируем таблицу 6
            var tab6 = [];
            //var T6R = {
            //    G1: index,
            //    G2: Number(code_fuel),
            //    G3S: name_fuel,
            //    G4: Number(volume_pipeline).toFixed(2),
            //    G5: Number(volume_pipeline).toFixed(2),
            //    G6: Number(0).toFixed(2),
            //    G7: Number(0).toFixed(2),
            //    G8: null
            //};
            var T6R = {
                G1: null,
                G2: null,
                G3S: null,
                G4: null,
                G5: null,
                G6: null,
                G7: null,
                G8: null
            };
            tab6.push(T6R);
            report_data = {
                HDATE: (moment(new Date()).format('DD MM YYYY')),
                HNUM: null,
                HDATE1: (moment(date_start).format('DDMMYYYY')),
                HTIME1: (moment(date_start).format('HH:mm:ss')),
                HDATE2: (moment(date_stop).format('DDMMYYYY')),
                HTIME2: (moment(date_stop).format('HH:mm:ss')),
                HNUMREG: null,
                HTIN: null,
                HNAME: null,
                R07G1: '1001008',
                HKEXECUTOR: null,
                HEXECUTOR: null,
                HPOST: null,
                T1R: tab1,
                T2R: tab2,
                T3R: tab3,
                T4R: tab4,
                T5R: tab5,
                T6R: tab6
            };
        },

        table_report_1 = {
            viewTable: function () {
                $('div#report-1').empty();
                var tab = get_table1();
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
                var tab = get_table2();
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
                var tab = get_table3();
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
                var tab = get_table4();
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
                var tab = get_table5();
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
                var tab = get_table6();
                $('div#report-6').html(tab);
            },
            exportTable: function () {
                var tab = $('div#report-6').html();
                fnExcelReport("Таблица 6", tab, css_table6, "Table6"); //
            }
        },

        exportTable_all = function () {
            var tab = get_table1() + get_table2() + get_table3() + get_table4() + get_table5() + get_table6();
            fnExcelReport("Таблица вся", tab, css_table1 + css_table2 + css_table3 + css_table4 + css_table5 + css_table6, "TableAll"); //
        },

        get_table1 = function () {
            var tab = get_html_table1_star(date_start, date_stop);
            //var formatter = new Intl.NumberFormat("ru");
            //formatter.format()
            if (report_data !== null && report_data.T1R !== null) {
                $.each(report_data.T1R, function (i, el) {
                    tab += "<tr style='height:auto;'>" +
                        "<td class=xl7020875 width=24 style='width:18pt'>&nbsp;</td>" +
                        "<td class=xl7420875 width=51 style='border-top:none;border-left:none;width:38pt'>-</td>" +
                        "<td class=xl7420875 width=120 style='border-top:none;border-left:none;width:90pt'>" + (el.G2 !== null ? el.G2 : "-") + "</td>" +
                        "<td class=xl7220875 width=81 style='border-top:none;border-left:none;width:61pt'>" + (el.G3S !== null ? el.G3S : "-") + "</td>" +
                        "<td class=xl7420875 width=81 style='border-top:none;width:61pt'>-</td>" +
                        "<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt;word-wrap:break-word'>" + (el.G5S !== null ? el.G5S : "-") + "</td>" +
                        "<td class=xl7220875 width=92 style='border-top:none;border-left:none;width:69pt'>" + (el.G6S !== null ? el.G6S : "-") + "</td>" +
                        "<td class=xl7220875-numder width=98 style='border-top:none;width:74pt'>" + (el.G7 !== null ? Number(el.G7).toFixed(2) : "-") + "</td>" +
                        "<td class=xl7220875-numder width=103 style='border-top:none;width:77pt'>" + (el.G8 !== null ? Number(el.G8).toFixed(2) : "-") + "</td>" +
                        "<td class=xl7420875 width=93 style='border-top:none;width:70pt'>-</td>" +
                        "<td class=xl7420875 width=108 style='border-top:none;border-left:none;width:81pt'>-</td>" +
                        "<td class=xl7420875 width=46 style='border-top:none;border-left:none;width:35pt'>-</td>" +
                        "</tr>";
                });
            }
            tab += html_table1_stop;
            return tab;
        },

        get_table2 = function () {
            var tab = html_table2_start;
            var formatter = new Intl.NumberFormat("ru");
            if (report_data !== null && report_data.T2R !== null) {
                $.each(report_data.T2R, function (i, el) {
                    tab += "<tr style='height:auto'>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>-</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.G2 !== null ? el.G2 : "-") + "</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.G3S !== null ? el.G3S : "-") + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.G4 !== null ? Number(el.G4).toFixed(2) : "-") + "</td>" +
                        "<td class=xl671827-number width=183 style='border-top:none;border-left:none;width:137pt'>" + (el.G5 !== null ? Number(el.G5).toFixed(2) : "-") + "</td>" +
                        "<td class=xl671827 width=183 style='border-top:none;border-left:none;width:137pt'>-</td>" +
                        "</tr>";
                });
            }
            tab += html_table2_stop;
            return tab;
        },

        get_table3 = function () {
            var tab = get_html_table3_star(32);
            if (report_data !== null && report_data.T3R !== null) {
                $.each(report_data.T3R, function (i, el) {
                    tab += "<tr class=xl6527789 style='height:auto'>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>&nbsp;</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + (el.G2 !== null ? el.G2 : "&nbsp;") + "</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + (el.G3S !== null ? el.G3S : "&nbsp;") + "</td>" +
                        "<td class=xl6427789 width=154 style='border-top:none;border-left:none;width:116pt'>" + (el.G4S !== null ? el.G4S : "&nbsp;") + "</td>" +
                        "<td class=xl6427789-number width=170 style='border-top:none;border-left:none;width:128pt'>" + (el.G5 !== null ? Number(el.G5).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6427789 width=147 style='border-top:none;border-left:none;width:110pt'>&nbsp;</td>" +
                        "<td class=xl6427789 width=45 style='border-top:none;border-left:none;width:34pt'>&nbsp;</td>" +
                        "</tr>";
                });
            }
            tab += html_table3_stop;
            return tab;
        },

        get_table4 = function () {
            var tab = get_html_table4_star(1);
            if (report_data !== null && report_data.T4R !== null) {
                $.each(report_data.T4R, function (i, el) {
                    tab += "<tr class=xl6615240 style='height:auto'>" +
                        "<td class=xl6515240 width=80 style='border-top:none;border-left:none;width:60pt'>&nbsp;</td>" +
                        "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>" + (el.G2 !== null ? el.G2 : "&nbsp;") + "</td>" +
                        "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>" + (el.G3S !== null ? el.G3S : "&nbsp;") + "</td>" +
                        "<td class=xl6515240-number width=353 style='border-top:none;border-left:none;width:265pt'>" + (el.G4 !== null ? Number(el.G4).toFixed(2) : "&nbsp;") + "</td>" +
                        "<td class=xl6515240 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
                        "</tr>";
                });
            };
            tab += html_table4_stop;
            return tab;
        },

        get_table5 = function () {
            var tab = get_html_table5_star(1);
            if (report_data !== null && report_data.T5R !== null) {
                $.each(report_data.T5R, function (i, el) {
                    tab += "<tr  class=xl6627014 style='height:auto'>" +
                        "<td class=xl6527014 width=41 style='border-top:none;border-left:none;width:31pt'>-</td>" +
                        "<td class=xl6527014 width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G2 !== null ? el.G2 : "-") + "</td>" +
                        "<td class=xl6527014 width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G3S !== null ? el.G3S : "-") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G4 !== null ? Number(el.G4).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G5 !== null ? Number(el.G5).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G6 !== null ? Number(el.G6).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>-</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>-</td>" +
                        "<td class=xl6527014-number width=112 style='border-top:none;border-left:none;width:84pt'>" + (el.G9 !== null ? Number(el.G9).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6527014 width=49 style='border-top:none;border-left:none;width:37pt'>-</td>" +
                        "</tr>";
                });
            }
            tab += html_table5_stop;
            return tab;
        },

        get_table6 = function () {
            var tab = get_html_table6_star(1);
            if (report_data !== null && report_data.T6R !== null) {
                $.each(report_data.T6R, function (i, el) {
                    tab += "<tr class=xl6628927 style='height:auto'>" +
                        "<td class=xl6528927 width=55 style='border-top:none;border-left:none;width:41pt'>-</td>" +
                        "<td class=xl6528927 width=133 style='border-top:none;border-left:none;width:100pt'>" + (el.G2 !== null ? el.G2 : "-") + "</td>" +
                        "<td class=xl6528927 width=193 style='border-top:none;border-left:none;width:145pt'>" + (el.G3S !== null ? el.G3S : "-") + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>" + (el.G4 !== null ? Number(el.G4).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>" + (el.G5 !== null ? Number(el.G5).toFixed(2) : "-") + "</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border -left:none;width:100pt'>-</td>" +
                        "<td class=xl6528927-number width=133 style='border-top:none;border-left:none;width:100pt'>-</td>" +
                        "<td class=xl6528927 width=71 style='border-top:none;border-left:none;width:53pt'>-</td>" +
                        "</tr>";
                });
            }
            tab += html_table6_stop;
            return tab;
        },

        pn_XML = {
            obj: null,
            //id: null,
            //name_park_wagon_ru: $('input#name-park-wagon-ru'),
            //name_park_wagon_en: $('input#name-park-wagon-en'),
            //alert_park_wagon: $('#edit-medoc-alert'),
            all_obj: null,
            // список парков
            list_park_wagons: null,
            lang: ($.cookie('lang') === undefined ? 'ru' : $.cookie('lang')),
            mors: null,
            val: null,
            // Валидация данных
            validation: function () {
                pn_XML.val.clear_all();
                //var valid = true;
                //valid = valid & pn_XML.val.checkInputOfNull(pn_XML.name_park_wagon_ru, "Укажите название парка на русском");
                //valid = valid & pn_XML.val.checkInputOfNull(pn_XML.name_park_wagon_en, "Укажите название парка на английском");
                return valid;
            },
            // инициализвция Диалога
            init: function () {
                pn_XML.obj = $("div#edit-medoc").dialog({
                    resizable: false,
                    modal: true,
                    autoOpen: false,
                    height: "auto",
                    width: 500,
                    classes: {
                        "ui-dialog": "card",
                        "ui-dialog-titlebar": "card-header bg-primary text-white",
                        "ui-dialog-content": "card-body",
                        "ui-dialog-buttonpane": "card-footer text-muted"
                    },
                    open: function (event, ui) {

                    },
                    buttons: [
                        {
                            text: "XML",
                            class: "btn btn-outline-primary btn-sm",
                            click: function () {
                                toXML($('#HNUMREG').val(), $('#HNUM').val(), $('#HTIN').val(), $('#HNAME').val(), $('#HKEXECUTOR').val(), $('#HEXECUTOR').val(), $('#HPOST').val());
                                $(this).dialog("close");
                            }
                        },
                        {
                            text: "Отмена",
                            class: "btn btn-outline-primary btn-sm",
                            click: function () {
                                $(this).dialog("close");
                            }
                        },
                    ]
                });
            },
            // Открыть Диалог 
            Open: function (id) {
                pn_XML.obj.dialog("open");
            },
        },

        toXML = function (HNUMREG, HNUM, HTIN, HNAME, HKEXECUTOR, HEXECUTOR, HPOST) {
            report_data.HNUMREG = HNUMREG;
            report_data.HNUM = HNUM;
            report_data.HTIN = HTIN;
            report_data.HNAME = HNAME;
            report_data.HKEXECUTOR = HKEXECUTOR;
            report_data.HEXECUTOR = HEXECUTOR;
            report_data.HPOST = HPOST;
            postToXML(report_data, function (xml) {
                //encoding="utf-16"
                xml = xml.replace('encoding="windows-1251"', '');
                xml = xml.replace('<DECLAR xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">', '<DECLAR xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="J0210401.XSD">');
                fnXMLReport(xml, "doc_J0210401");
            });
        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    panel_select_report.initObject();
    tab_type_reports.initObject();
    pn_XML.init();
    panel_select_report.loadReport(true);
    //});

});