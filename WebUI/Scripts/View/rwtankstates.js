$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Остатки',
                'text_link_tabs_report_2': '',
                'field_id': 'id',
                'field_AzsNo': '№ АЗС',
                'field_TankNo': '№ Емкости',
                'field_FuelType': 'Тип топлива',
                'field_FuelLevel': 'Уровень ГСМ (мм)',
                'field_FuelVolume': 'Объем ГСМ (л)',
                'field_Density': 'Плотность ГСМ (кг/м3)',
                'field_Mass': 'Масса ГСМ (кг)',
                'field_Temperature': 'Температура ГСМ (С°)',
                'field_WaterLevel': 'Уровень подтоварной воды (мм)',
                'field_OperatorName': 'Оператор',
                'field_DateTime': 'Дата и время измерения',
                'title_accordion_total_text': 'Общий остаток',
                'title_accordion_detali_text': 'Детально',
                'th_fuel_text': 'Топливо',
                'th_disloc_text': 'Место нахождения',
                'th_volum_text': 'Объем ГСМ (л)',
                'th_mass_text': 'Масса ГСМ (кг)',
                'th_density_text': 'Средняя плотность ГСМ (кг/м3)',
            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Remains',
                'text_link_tabs_report_2': '',
                'field_id': 'id',
                'field_AzsNo': 'Gas station number',
                'field_TankNo': 'Capacity No.',
                'field_FuelType': 'Fuel type',
                'field_FuelLevel': 'Fuel Level (mm)',
                'field_FuelVolume': 'Volume of fuel (l)',
                'field_Density': 'Density of fuel and lubricants (kg/m3)',
                'field_Mass': 'Mass of fuel (kg)',
                'field_Temperature': 'Fuel temperature (C°)',
                'field_WaterLevel': 'Commercial water level (mm)',
                'field_OperatorName': 'Operator',
                'field_DateTime': 'Date and time of measurement',
                'title_accordion_total_text': 'Total balance',
                'title_accordion_detali_text': 'Details',
                'th_fuel_text': 'Fuel',
                'th_disloc_text': 'Location',
                'th_volum_text': 'Volume of fuel (l)',
                'th_mass_text': 'Mass of fuel (kg)',
                'th_density_text': 'Average density of lubricants (kg/m3)',
            }
        };

    var lang = $.cookie('lang'),
        langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Загрузка библиотек
        loadReference = function (callback) {
            LockScreen(langView('mess_load', langs));
            var count = 1;
            // Загрузка списка цехов (common.js)
            getReference_azsDeparts(function (result) {
                reference_departs = result;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            })
        },
        // список цехов
        reference_departs = null,
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
                this.activeTable(this.active, true);
            },
            activeTable: function (active, data_refresh) {
                if (active == 0) {
                    table_last_tank_states.viewTable(data_refresh);
                }
                //if (active == 1) {
                //    table_last_tank_states.viewTable(data_refresh);
                //}

            },

        },
        // акордион
        accordion_tankstates = {
            html_total: $("#accordion-total"),
            html_detali: $("#accordion-detali"),
            icons: {
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            },
            initObject: function () {
                $('#title-accordion-total').text(langView('title_accordion_total_text', langs));
                $('#title-accordion-detali').text(langView('title_accordion_detali_text', langs));   


                this.html_total.accordion({
                    icons: this.icons,
                    heightStyle: "content",
                    collapsible: true,
                    activate: function (event, ui) {
                        var active = accordion_tankstates.html_total.accordion("option", "active");
                        if (active === 0) {
                            //table_vagon.viewTableVagon(false);
                        }
                    }
                });
                this.html_detali.accordion({
                    icons: this.icons,
                    heightStyle: "content",
                    collapsible: true,
                    activate: function (event, ui) {
                        var active = accordion_tankstates.html_detali.accordion("option", "active");
                        if (active === 0) {
                            //table_vagon.viewTableVagon(false);
                        }
                    }
                });
            }
        },
        // Таблица 
        table_last_tank_states = {
            html_table: $('#table-last-tank_states'),
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            // Инициализировать таблицу
            initObject: function () {
                this.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": false,
                    //"filter": true,
                    //"scrollY": "600px",
                    //"scrollX": true,
                    language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.id);
                    },
                    "footerCallback": function (row, data, start, end, display) {

                        //var pipe_a92_n = Number(pipe_a92);
                        //var pipe_a95_n = Number(pipe_a95);
                        var pipe_dt_n = Number(kgd_pipe_dt);
                        //var pipe_kerosin_n = Number(pipe_kerosin);

                        //var a92_count = 0;
                        //var a95_count = 0;
                        var dt_count = 0;
                        //var kerosin_count = 0;

                        var api = this.api(), data;
                        // Remove the formatting to get integer data for summation
                        var intVal = function (i) {
                            return typeof i === 'string' ?
                                i.replace(/[\$,]/g, '') * 1 :
                                typeof i === 'number' ?
                                i : 0;
                        };
                        // Total Density
                        total_dt_density = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.Fuel == 107000024) {
                                    dt_count = dt_count + 1;
                                    return intVal(a) + intVal(b.Density);
                                } else { return intVal(a); }
                            }, 0);
                        //total_a92_density = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000022) {
                        //            a92_count = a92_count + 1;
                        //            return intVal(a) + intVal(b.Density);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_a95_density = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000023) {
                        //            a95_count = a95_count + 1;
                        //            return intVal(a) + intVal(b.Density);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_kerosin_density = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000027) {
                        //            kerosin_count = kerosin_count + 1;
                        //            return intVal(a) + intVal(b.Density);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        // Total volume
                        total_dt_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.Fuel == 107000024) {
                                    return intVal(a) + intVal(b.FuelVolume);
                                } else { return intVal(a); }
                            }, 0);
                        //total_a92_volume = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000022) {
                        //            return intVal(a) + intVal(b.FuelVolume);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_a95_volume = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000023) {
                        //            return intVal(a) + intVal(b.FuelVolume);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_kerosin_volume = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000027) {
                        //            return intVal(a) + intVal(b.FuelVolume);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_volume = api
                        //    .column(3)
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        return intVal(a) + intVal(b);
                        //    }, 0);
                        // Total mass
                        total_dt_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.Fuel == 107000024) {
                                    return intVal(a) + intVal(b.Mass);
                                } else { return intVal(a); }
                            }, 0);
                        //total_a92_mass = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000022) {
                        //            return intVal(a) + intVal(b.Mass);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_a95_mass = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000023) {
                        //            return intVal(a) + intVal(b.Mass);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_kerosin_mass = api
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        if (b.Fuel == 107000027) {
                        //            return intVal(a) + intVal(b.Mass);
                        //        } else { return intVal(a); }
                        //    }, 0);
                        //total_mass = api
                        //    .column(5)
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        return intVal(a) + intVal(b);
                        //    }, 0);

                        //var a92_density_avg = a92_count > 0 ? total_a92_density / a92_count : 0;
                        //var a95_density_avg = a95_count > 0 ? total_a95_density / a95_count : 0;
                        var dt_density_avg = dt_count > 0 ? total_dt_density / dt_count: 0;
                        //var kerosin_density_avg = kerosin_count > 0 ? total_kerosin_density / kerosin_count : 0;

                        //var pipe_a92_mass = pipe_a92_n * a92_density_avg;
                        //var pipe_a95_mass = pipe_a95_n * a95_density_avg;
                        var pipe_dt_mass = (pipe_dt_n * dt_density_avg) * 0.001 ;
                        //var pipe_kerosin_mass = pipe_kerosin_n * kerosin_density_avg;

                        //$('#a92-volume').text(total_a92_volume.toFixed(2) + ' (л)');
                        //$('#a92-pipe-volume').text(pipe_a92_n.toFixed(2) + ' (л)');
                        //$('#a92-density').text(a92_density_avg.toFixed(2) + ' (кг/м3)');

                        //$('#a95-volume').text(total_a95_volume.toFixed(2) + ' (л)');
                        //$('#a95-pipe-volume').text(pipe_a95_n.toFixed(2) + ' (л)');
                        //$('#a95-density').text(a95_density_avg.toFixed(2) + ' (кг/м3)');

                        $('#dt-volume').text(total_dt_volume.toFixed(2) + ' (л)');
                        $('#dt-pipe-volume').text(pipe_dt_n.toFixed(2) + ' (л)');
                        $('#dt-density').text(dt_density_avg.toFixed(2) + ' (кг/м3)');

                        //$('#kerosin-volume').text(total_kerosin_volume.toFixed(2) + ' (л)');
                        //$('#kerosin-pipe-volume').text(pipe_kerosin_n.toFixed(2) + ' (л)');
                        //$('#kerosin-density').text(kerosin_density_avg.toFixed(2) + ' (кг/м3)');

                        //$('#total-volume').text(total_volume.toFixed(2) + ' (л)');

                        // Update footer mass
                        //$('#a92-mass').text(total_a92_mass.toFixed(2) + ' (кг)');
                        //$('#a92-pipe-mass').text(pipe_a92_mass.toFixed(2) + ' (кг)');

                        //$('#a95-mass').text(total_a95_mass.toFixed(2) + ' (кг)');
                        //$('#a95-pipe-mass').text(pipe_a95_mass.toFixed(2) + ' (кг)');

                        $('#dt-mass').text(total_dt_mass.toFixed(2) + ' (кг)');
                        $('#dt-pipe-mass').text(pipe_dt_mass.toFixed(2) + ' (кг)');

                        //$('#kerosin-mass').text(total_kerosin_mass.toFixed(2) + ' (кг)');
                        //$('#kerosin-pipe-mass').text(pipe_kerosin_mass.toFixed(2) + ' (кг)');

                    },
                    columns: [
                        { data: "TankNo", title: langView('field_TankNo', langs), width: "50px", orderable: true, searchable: true },
                        { data: "FuelType", title: langView('field_FuelType', langs), width: "50px", orderable: true, searchable: true },
                        { data: "FuelLevel", title: langView('field_FuelLevel', langs), width: "50px", orderable: true, searchable: false },
                        { data: "FuelVolume", title: langView('field_FuelVolume', langs), width: "50px", orderable: true, searchable: false },
                        { data: "Density", title: langView('field_Density', langs), width: "50px", orderable: true, searchable: false },
                        { data: "Mass", title: langView('field_Mass', langs), width: "50px", orderable: true, searchable: false },
                        { data: "Temperature", title: langView('field_Temperature', langs), width: "50px", orderable: true, searchable: false },
                        { data: "WaterLevel", title: langView('field_WaterLevel', langs), width: "50px", orderable: true, searchable: false },
                        { data: "DateTime", title: langView('field_DateTime', langs), width: "50px", orderable: true, searchable: false },
                    ],
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen(langView('mess_delay', langs));
                if (this.list == null | data_refresh == true) {
                    // Обновим данные
                    getAsyncViewLastTankStatesOfNum(
                        Number(num_tank),
                        function (result) {
                            table_last_tank_states.list = result;
                            table_last_tank_states.loadDataTable(result);
                            table_last_tank_states.obj.draw();
                        }
                    );
                } else {
                    table_last_tank_states.loadDataTable(this.list);
                    table_last_tank_states.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {
                    this.obj.row.add({
                        "id": data[i].Id,
                        "AzsNo": data[i].AzsNo,
                        "TankNo": data[i].TankNo,
                        "Fuel": data[i].FuelType,
                        "FuelType": outFuelType(data[i].FuelType),
                        "FuelLevel": data[i].FuelLevel,
                        "FuelVolume": data[i].FuelVolume,
                        "Density": data[i].Density,
                        "Mass": data[i].Mass,
                        "Temperature": data[i].Temperature,
                        "WaterLevel": data[i].WaterLevel,
                        "OperatorName": data[i].OperatorName,
                        "Date": data[i].Date,
                        "Time": data[i].Time,
                        "DateTime": data[i].Date.substring(0, 10) + ' ' + data[i].Time.substring(0, 12),
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
    //// Загрузка библиотек
    //loadReference(function (result) {
    $('#th-fuel').text(langView('th_fuel_text', langs));
    $('#th-disloc').text(langView('th_disloc_text', langs));
    $('#th-volum').text(langView('th_volum_text', langs));
    $('#th-mass').text(langView('th_mass_text', langs));
    $('#th-density').text(langView('th_density_text', langs));
    accordion_tankstates.initObject();
    table_last_tank_states.initObject();
    tab_type_reports.initObject();

});