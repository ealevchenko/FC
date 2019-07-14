$(function () {

    // Список общесистемных слов 
    $.Text_View =
        {
            'default':  //default language: ru
            {
                'text_link_tabs_report_1': 'Ведомость',
                'text_link_tabs_report_2': '',
                'field_FuelType': 'Тип топлива',
                'field_DateTime': 'Дата и время',
                'field_rfid_card': 'RFID-Карта',
                'field_AutoNumber': 'Номер транспортного средства',
                'field_AutoModel': 'Модель трансп. средства',
                'field_TankNo': '№ Емкости',
                'field_UsageVolume': 'Объем (л)',
                'field_UsageMass': 'Масса (кг)',
                'field_Density': 'Плотность (кг/м3)',
                'field_Volume15': 'Объем прив. к 15 град. (л)',
                'field_Mass15': 'Масса прив. к 15 град. (кг)',
                'field_Dens15': 'Плотность прив. к 15 град. (кг/м3)',
                'bt_left_title': 'Предыдущая дата',
                'bt_right_title': 'Следующая дата',
                'bt_refresh_title': 'Обновить отчет',
                'bt_refresh_text': 'Обновить',
                'label_select_date': 'Выберите дату',
                'select_text_sm1': 'Смена Д (07:00-18:59)',
                'select_text_sm2': 'Смена Н (19:00-06:59)',
            },
            'en':  //default language: English
            {
                'text_link_tabs_report_1': 'Statement',
                'text_link_tabs_report_2': '',
                'field_FuelType': 'Fuel type',
                'field_DateTime': 'Date and time',
                'field_rfid_card': 'RFID Card',
                'field_AutoNumber': 'Vehicle Number',
                'field_AutoModel': 'Model trans. facilities',
                'field_TankNo': 'Capacity No.',
                'field_UsageVolume': 'Volume (l)',
                'field_UsageMass': 'Mass (kg)',
                'field_Density': 'Density (kg/m3)',
                'field_Volume15': 'Объем прив. к 15 град. (л)',
                'field_Mass15': 'Масса прив. к 15 град. (кг)',
                'field_Dens15': 'Плотность прив. к 15 град. (кг/м3)',
                'bt_left_title': 'Previous Date',
                'bt_right_title': 'Next Date',
                'bt_refresh_title': 'Refresh Report',
                'bt_refresh_text': 'Show statement',
                'label_select_date': 'Select a date',
                'select_text_sm1': 'Shift Day (07:00-18:59)',
                'select_text_sm2': 'Shift Night (19:00-06:59)',
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
                if (active == 0) {
                    table_fuel_sales.viewTable(data_refresh);
                }
                //if (active == 1) {
                //    table_fuel_sales.viewTable(data_refresh);
                //}

            },

        },
        // Панель таблицы
        panel_select_report = {
            html_div_panel : $('#table-panel'),
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
                this.bt_refresh.attr('title',langView('bt_refresh_title', langs));
                this.bt_refresh.text(langView('bt_refresh_text', langs));

                this.bt_refresh.on('click', function () {
                    panel_select_report.viewReport();
                });

                // Настроим выбор времени
                initSelect(
                    this.select_sm,
                    { width: 200 },
                    [{ value: 1, text: langView('select_text_sm1', langs) }, { value: 2, text: langView('select_text_sm2', langs) }],
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
                        singleDate : true,
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
                if (panel_select_report.select_sm.val() == 2) {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                }
                if (panel_select_report.select_sm.val() == 1) {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                }
                tab_type_reports.activeTable(tab_type_reports.active, true);
            }
        },
        // Таблица 
        table_fuel_sales = {
            html_table: $('#table-fuel-sales'),
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
                    "autoWidth": true,
                    //"filter": true,
                    //"scrollY": "600px",
                    //"scrollX": true,
                    language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        $(row).attr('id', data.id);
                    },
                    "footerCallback": function (row, data, start, end, display) {
                        var api = this.api(), data;
                        // Remove the formatting to get integer data for summation
                        var intVal = function (i) {
                            return typeof i === 'string' ?
                                i.replace(/[\$,]/g, '') * 1 :
                                typeof i === 'number' ?
                                i : 0;
                        };
                        // Total volume
                        total_dt_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type == 107000024) {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a);}
                            }, 0);
                        total_dt_volume15 = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type == 107000024) {
                                    return intVal(a) + intVal(b.volume15);
                                } else { return intVal(a);}
                            }, 0);
                        // Total mass
                        total_dt_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type == 107000024) {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a);}
                            }, 0);
                        total_dt_mass15 = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type == 107000024) {
                                    return intVal(a) + intVal(b.mass15);
                                } else { return intVal(a);}
                            }, 0);

                        $('td#volume').text(total_dt_volume.toFixed(2));
                        $('td#volume15').text(total_dt_volume15.toFixed(2));
                        $('td#mass').text(total_dt_mass.toFixed(2));
                        $('td#mass15').text(total_dt_mass15.toFixed(2));

                    },
                    columns: [

                        { data: "start_datetime", title: langView('field_DateTime', langs), width: "100px", orderable: true, searchable: false },
                        { data: "fuel_type", title: langView('field_FuelType', langs), width: "50px", orderable: true, searchable: true },
                        { data: "number_card", title: langView('field_rfid_card', langs), width: "50px", orderable: true, searchable: true },
                        { data: "AutoNumber", title: langView('field_AutoNumber', langs), width: "50px", orderable: true, searchable: true },
                        { data: "AutoModel", title: langView('field_AutoModel', langs), width: "50px", orderable: true, searchable: true },
                        { data: "tank_num", title: langView('field_TankNo', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume", title: langView('field_UsageVolume', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass", title: langView('field_UsageMass', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens", title: langView('field_Density', langs), width: "50px", orderable: true, searchable: true },
                        { data: "volume15", title: langView('field_Volume15', langs), width: "50px", orderable: true, searchable: true },
                        { data: "mass15", title: langView('field_Mass15', langs), width: "50px", orderable: true, searchable: true },
                        { data: "dens15", title: langView('field_Dens15', langs), width: "50px", orderable: true, searchable: true },
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
                if (this.list == null | data_refresh == true) {
                    // Обновим данные
                    //getAsyncReportLocalFS_RWOfDateTime(
                      getAsyncReportFS_KGDOfDateTime(
                        date_start, date_stop,
                        function (result) {
                            table_fuel_sales.list = result;
                            table_fuel_sales.loadDataTable(result);
                            table_fuel_sales.obj.draw();
                        }
                    );
                } else {
                    table_fuel_sales.loadDataTable(this.list);
                    table_fuel_sales.obj.draw();
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
                        "start_datetime": data[i].start_datetime,
                        "fuel_type": data[i].fuel_type,
                        "number_card": data[i].number_card,
                        "tank_num": data[i].tank_num,
                        "volume": data[i].volume,
                        "mass": data[i].mass,
                        "dens": data[i].dens,
                        "volume15": data[i].volume15,
                        "mass15": data[i].mass15,
                        "dens15": data[i].dens15,
                        //"AzsNo": data[i].AzsNo,
                        //"FuelType": outFuelType(data[i].FuelType),
                        //"Fuel": data[i].FuelType,
                        //"LokomotiveId": data[i].LokomotiveId,
                        //"Name": data[i].Name,
                        //"UsageVolume": data[i].UsageVolume,
                        //"UsageMass": data[i].UsageMass,
                        //"TankNo": data[i].TankNo,
                        //"FuelLevel": data[i].FuelLevel,
                        //"FuelVolume": data[i].FuelVolume,
                        //"Density": data[i].Density,
                        //"Mass": data[i].Mass,
                        //"Temperature": data[i].Temperature,
                        //"WaterLevel": data[i].WaterLevel,
                        //"TechnicalSale": data[i].TechnicalSale,
                        //"OperatorName": data[i].OperatorName,
                        //"DateStartWork": data[i].DateStartWork,
                        //"TimeStartWork": data[i].TimeStartWork,
                        //"DateStart": data[i].DateStart,
                        //"TimeStart": data[i].TimeStart,
                        //"DateStop": data[i].DateStop,
                        //"TimeStop": data[i].TimeStop,
                        //"CardId": data[i].CardId,
                        //"StartLevel": data[i].StartLevel,
                        //"StartVolume": data[i].StartVolume,
                        //"StartDensity": data[i].StartDensity,
                        //"StartMass": data[i].StartMass,
                        //"StartTemperature": data[i].StartTemperature,
                        //"StartWaterLevel": data[i].StartWaterLevel,
                        //"StopLevel": data[i].StopLevel,
                        //"StopVolume": data[i].StopVolume,
                        //"StopDensity": data[i].StopDensity,
                        //"StopMass": data[i].StopMass,
                        //"StopTemperature": data[i].StopTemperature,
                        //"StopWaterLevel": data[i].StopWaterLevel,
                        //"DateTime": data[i].DateStart.substring(0, 10) + ' ' + data[i].TimeStart.substring(0, 12),
                        //"Waybill": cards != null ? cards.Number : data[i].CardId,
                        "AutoNumber": cards != null ? cards.AutoNumber : data[i].auto_number,
                        "AutoModel": cards != null ? cards.AutoModel : '?',
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
        table_fuel_sales.initObject();
        panel_select_report.viewReport();
    });

});