$(function () {

    // Список общесистемных слов 
    var date_curent = new Date(),
        date_start = null,
        // Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text('Остатки');
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
                this.label.text('Выберите дату');
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                this.bt_refresh.attr('title', 'Обновить отчет');
                this.bt_refresh.text('Обновить');

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
                        //startOfWeek: 'monday',
                        ////separator: lang == 'en' ? 'to' : 'по',
                        //language: 'ru',
                        //format: 'DD.MM.YYYY',
                        //autoClose: true,
                        //singleDate: true,
                        //showShortcuts: false,
                        language: 'ru',
                        format: 'DD.MM.YYYY',
                        autoClose: true,
                        singleDate: true,
                        showShortcuts: false,
                        singleMonth: true,
                        time: {
                            enabled: false
                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {
                        panel_select_report.viewReport();
                    });
                // Выставим текущую дату
                panel_select_report.select_sm.val(date_curent.getHours()).selectmenu("refresh");
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' ' + date_curent.getHours() + ':00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            viewReport: function () {
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
            groupColumn: 0,
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
                    language: 'ru',
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
                        var total_volume = 0;
                        var total_mass = 0;
                        // Total volume
                        total_volume = api.column(2).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);
                        // Total mass
                        total_mass = api.column(4).data().reduce(function (a, b) { return intVal(a) + intVal(b); }, 0);

                        $('td#volume').text(total_volume.toFixed(3));
                        $('td#mass').text(total_mass.toFixed(2));
                    },
                    columns: [
                        { data: "oil_type", title: 'Тип масла', width: "50px", orderable: true, searchable: true },
                        { data: "bak", title: '№ бака', width: "50px", orderable: false, searchable: true },
                        { data: "Volume", title: 'Остаток (м3)', width: "50px", orderable: false, searchable: true },
                        { data: "Dens", title: 'Плотность (кг/м3)', width: "50px", orderable: false, searchable: true },
                        { data: "Mass", title: 'Масса (т)', width: "50px", orderable: false, searchable: true },
                    ],
                    "columnDefs": [
                        { "visible": false, "targets": table_remains_tanks.groupColumn }
                    ],
                    "order": [[table_remains_tanks.groupColumn, 'asc']],
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({ page: 'current' }).nodes();
                        var type = null;
                        var last = null;
                        var valume = 0;
                        var mass = 0;
                        api.column(table_remains_tanks.groupColumn, { page: 'current' }).data().each(function (group, i) {
                            var data = table_remains_tanks.obj.rows().data();
                            if (last !== group) {
                                if (type !== null) {
                                    $(rows).eq(i).before(
                                        '<tr class="group"><td colspan="1">' + type + ' Итого:</td><td>' + valume.toFixed(3) + '</td><td></td><td>' + mass.toFixed(2) + '</td></tr>'
                                    );
                                }
                                type = group;
                                $(rows).eq(i).before(
                                    '<tr class="group1"><td colspan="1">' + group + '</td><td></td><td></td><td></td></tr>'
                                );
                                last = group;
                                valume = 0;
                                mass = 0;
                            }
                            valume += Number(data[i].Volume);
                            mass += Number(data[i].Mass);
                            if (i === (rows.length - 1)) {
                                $(rows).eq(i).after(
                                    '<tr class="group"><td colspan="1">' + type + ' Итого:</td><td>' + valume.toFixed(3) + '</td><td></td><td>' + mass.toFixed(2) + '</td></tr>'
                                );
                            }
                        });
                    },
                    dom: 'Bfrtip',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
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
                        "bak": getNameTanks(data[i].bak),
                        "Temp": data[i].Temp,
                        "Volume": data[i].Volume !== null ? Number(data[i].Volume).toFixed(3) : 0.000,
                        "Water": data[i].Water,
                        "Dens": data[i].Dens !== null ? Number(data[i].Dens).toFixed(3) : 0.000,
                        "Level": data[i].Level,
                        "Mass": data[i].Mass !== null ? Number(data[i].Mass).toFixed(2) : 0.00,
                        "oil_type": data[i].oil_type,
                    });
                }
                LockScreenOff();
            },
        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------
    var getNameTanks = function (num) {
        if (num === null) return '?'
        switch (Number(num)) {
            case 132: return "Группа-1 №32";
            case 135: return "Группа-1 №35";
            case 138: return "Группа-1 №38";
            case 139: return "Группа-1 №39";
            case 141: return "Группа-1 №41";
            case 142: return "Группа-1 №42";
            case 144: return "Группа-1 №44";
            case 225: return "Группа-2 №25";
            case 228: return "Группа-2 №28";
            case 229: return "Группа-2 №29";
            case 231: return "Группа-2 №31";
            case 301: return "Группа-3 №01";
            case 304: return "Группа-3 №04";
            case 307: return "Группа-3 №07";
            case 310: return "Группа-3 №10";
            case 313: return "Группа-3 №13";
            case 316: return "Группа-3 №16";
            case 319: return "Группа-3 №19";
            case 322: return "Группа-3 №22";
            case 420: return "Группа-4 №20";
            case 421: return "Группа-4 №21";
            case 423: return "Группа-4 №23";
            case 424: return "Группа-4 №24";
            case 503: return "Группа-5 №03";
            case 506: return "Группа-5 №06";
            case 509: return "Группа-5 №09";
            case 512: return "Группа-5 №12";
            case 515: return "Группа-5 №15";
            case 518: return "Группа-5 №18";
            case 9189: return "Малый бак№1";
            case 9190: return "Малый бак№2";
            case 9191: return "Малый бак№3";
            case 9192: return "Малый бак№4";
            case 9193: return "Малый бак№5";
            case 195: return "Филиал №1";
            case 196: return "Филиал №2";
            case 197: return "Филиал №3";
            case 198: return "Филиал №4";
            case 199: return "Филиал №5";
            case 200: return "Филиал №6";
            default: return num;
        }
    }
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