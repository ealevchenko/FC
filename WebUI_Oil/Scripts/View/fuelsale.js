$(function () {

    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
         tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text('Ведомость');
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
                    table_report.viewTable(data_refresh);
                }
                //if (active == 1) {
                //    table_report.viewTable(data_refresh);
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
            label1: $('<label for="date" ></label>'),
            span1: $('<span id="select-range"></span>'),
            input_data_start: $('<input id="date-start" name="date-start" size="20">'),
            input_data_stop: $('<input id="date-stop" name="date-stop" size="20">'),
            initObject: function () {
                this.span.append(this.input_date);
                obj = this.html_div_panel;
                obj
                    //.append(this.bt_left)
                    .append(this.label)
                    .append(this.span)
                    //.append(this.bt_right)
                    .append(this.select_sm)
                    .append(this.label1.text("или выберите период"))
                    .append(this.span1.append(this.input_data_start).append(' - ').append(this.input_data_stop));
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text('Выберите дату');
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                //this.bt_refresh.attr('title', 'Обновить отчет');
                //this.bt_refresh.text('Обновить отчет');

                //this.bt_refresh.on('click', function () {
                //    panel_select_report.viewReport();
                //});

                // Настроим выбор времени
                initSelect(
                    this.select_sm,
                    { width: 200 },
                    [{ value: 1, text: 'Смена Д (07:00-18:59)' }, { value: 2, text: 'Смена Н (19:00-06:59)' }],
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
                        language: 'ru',
                        format: 'DD.MM.YYYY',
                        autoClose: true,
                        singleDate: true,
                        singleMonth: true,
                        showShortcuts: false
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {
                        panel_select_report.viewReport();
                        //$('input#date-start').val('');
                        //$('input#date-stop').val('');
                        panel_select_report.select_sm.selectmenu("enable");
                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
                // настроим компонент выбора времени
                this.obj_date1 = this.span1.dateRangePicker(
                    {
                        language: 'ru',
                        format: 'DD.MM.YYYY HH:mm',
                        separator: '-',
                        autoClose: false,
                        time: {
                            enabled: true
                        },
                        setValue: function (s, s1, s2) {
                            $('input#date-start').val(s1);
                            $('input#date-stop').val(s2);

                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_start = obj.date1;
                        date_stop = obj.date2;
                    })
                    .bind('datepicker-closed', function () {
                        tab_type_reports.activeTable(tab_type_reports.active, true);
                        //$('input#date').val('');
                        panel_select_report.select_sm.selectmenu("disable");
                    });
            },
            viewReport: function () {
                if (panel_select_report.select_sm.val() === "2") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                }
                if (panel_select_report.select_sm.val() === "1") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                }
                var date_curent_start = date_start.getDate() + '.' + (date_start.getMonth() + 1) + '.' + date_start.getFullYear() + ' ' + date_start.getHours() + ':' + date_start.getMinutes();
                var date_curent_stop = date_stop.getDate() + '.' + (date_stop.getMonth() + 1) + '.' + date_stop.getFullYear() + ' ' + date_stop.getHours() + ':' + date_stop.getMinutes();
                this.obj_date1.data('dateRangePicker').setDateRange(date_curent_start, date_curent_stop, true);
                tab_type_reports.activeTable(tab_type_reports.active, true);
            }
        },
        // Таблица 
        table_report = {
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            // Инициализировать таблицу
            initObject: function () {
                this.obj = $('table#table-report').DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": true,
                    "autoWidth": false,
                    //"filter": true,
                    //"scrollY": "600px",
                    //"scrollX": true,
                    language: 'ru',
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
                    //            i : 0;
                    //    };
                    //    // Total volume
                    //    total_dt_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000024) {
                    //                return intVal(a) + intVal(b.UsageVolume);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_a92_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000022) {
                    //                return intVal(a) + intVal(b.UsageVolume);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_a95_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000023) {
                    //                return intVal(a) + intVal(b.UsageVolume);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_kerosin_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000027) {
                    //                return intVal(a) + intVal(b.UsageVolume);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    //total_volume = api
                    //    //    .column(6)
                    //    //    .data()
                    //    //    .reduce(function (a, b) {
                    //    //        return intVal(a) + intVal(b);
                    //    //    }, 0);
                    //    // Total mass
                    //    total_dt_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000024) {
                    //                return intVal(a) + intVal(b.UsageMass);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_a92_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000022) {
                    //                return intVal(a) + intVal(b.UsageMass);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_a95_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000023) {
                    //                return intVal(a) + intVal(b.UsageMass);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    total_kerosin_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.Fuel == 107000027) {
                    //                return intVal(a) + intVal(b.UsageMass);
                    //            } else { return intVal(a);}
                    //        }, 0);
                    //    //total_mass = api
                    //    //    .column(7)
                    //    //    .data()
                    //    //    .reduce(function (a, b) {
                    //    //        return intVal(a) + intVal(b);
                    //    //    }, 0);


                    //    $('#a92-volume').text(total_a92_volume.toFixed(2)+' (л)');
                    //    $('#a95-volume').text(total_a95_volume.toFixed(2)+' (л)');
                    //    $('#dt-volume').text(total_dt_volume.toFixed(2)+' (л)');
                    //    $('#kerosin-volume').text(total_kerosin_volume.toFixed(2)+' (л)');
                    //    // Update footer mass
                    //    $('#a92-mass').text(total_a92_mass.toFixed(2) + ' (кг)');
                    //    $('#a95-mass').text(total_a95_mass.toFixed(2) + ' (кг)');
                    //    $('#dt-mass').text(total_dt_mass.toFixed(2) + ' (кг)');
                    //    $('#kerosin-mass').text(total_kerosin_mass.toFixed(2) + ' (кг)');
                    //},
                    columns: [

                        { data: "start_datetime", title: 'Дата и время', width: "150px", orderable: true, searchable: false },
                        { data: "tank_num", title: '№ Бака', width: "50px", orderable: true, searchable: true },
                        { data: "oil_type", title: 'Тип Масла', width: "50px", orderable: true, searchable: true },
                        { data: "receiver", title: 'Получатель', width: "50px", orderable: false, searchable: false },
                        { data: "volume", title: 'Объем (м3)', width: "50px", orderable: false, searchable: false },
                        { data: "dens", title: 'Плотность (кг/м3)', width: "50px", orderable: false, searchable: false },
                        { data: "mass", title: 'Масса (т)', width: "50px", orderable: false, searchable: false },
                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5'
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewOilSalesOfDateTime(
                        date_start, date_stop,
                        function (result) {
                            table_report.list = result;
                            table_report.loadDataTable(result);
                            table_report.obj.draw();
                        }
                    );
                } else {
                    table_report.loadDataTable(this.list);
                    table_report.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {
                    var val = (data[i].outcome_type === 2 || data[i].outcome_type === 5 || data[i].outcome_type === 6) ? (data[i].start_volume !== null && data[i].stop_volume !== null ? Number(data[i].start_volume - data[i].stop_volume).toFixed(2) : null) : (data[i].volume !== null ? (data[i].volume).toFixed(2) : null);
                    var mass = (data[i].outcome_type === 2 || data[i].outcome_type === 5 || data[i].outcome_type === 6) ? (data[i].start_mass !== null && data[i].stop_mass !== null ? Number(data[i].start_mass - data[i].stop_mass).toFixed(4) : null) : (data[i].mass !== null ? data[i].mass.toFixed(4) : null);
                    this.obj.row.add({
                        "id": data[i].id,
                        "start_datetime": data[i].start_datetime,
                        "tank_num": data[i].tank_num,
                        "oil_type": data[i].oil_type,

                        "receiver": data[i].receiver,
                        //"volume": data[i].volume !== null ? (data[i].volume).toFixed(2) : null,
                        "dens": data[i].dens !== null ? data[i].dens.toFixed(4) : null,
                        //"mass": data[i].mass !== null ? (data[i].mass / 1000).toFixed(4) : null,
                        "volume": val,
                        "mass": mass !== null ? (mass / 1000).toFixed(4) : null,
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
    //// Загрузка библиотек
    //loadReference(function (result) {
    table_report.initObject();
    panel_select_report.viewReport();
    //});

});