﻿/* ----------------------------------------------------------
    Список слов
-------------------------------------------------------------*/
$.Text_Common =
    {
        'default':  //default language: ru
        {
            'mess_delay': 'Мы обрабатываем ваш запрос...',
            'mess_load': 'Загрузка справочников...',
        },
        'en':  //default language: English
        {
            'mess_delay': 'We are processing your request ...',
            'mess_load': 'Downloading reference books...',
        }

    };


/* ----------------------------------------------------------
    Функции работы с масивами
-------------------------------------------------------------*/
// Поиск элемента массива по ключу по всем объектам включая и вложенные
var getAllObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getAllObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
// Поиск элемента массива по ключу по первому уровню 
var getObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getChildObjects(obj[i], key, val));
        } else
            if (i == key && obj[key] == val) {
                objects.push(obj);
            }
    }
    return objects;
}
// Поиск элемента массива во вложенных обектах второго уровня 
var getChildObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object' & false == true) {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else
            if (i == key && obj[key] == val) {
                objects.push(obj);
            }
    }
    return objects;
}

/* ----------------------------------------------------------
    DataTables Вывод текста согласно региональных настроек
-------------------------------------------------------------*/
// Список слов для описания таблиц
$.Text_Table =
    {
        'default':  //default language: ru
        {
            "dt_decimal": "",
            "dt_emptyTable": "Нет данных в таблице",
            "dt_info": "Отображение _START_ по _END_ из _TOTAL_ записей",
            "dt_infoEmpty": "Отображение 0 to 0 of 0 записей",
            "dt_infoFiltered": "(отфильтровано из _MAX_ всего записей)",
            "dt_infoPostFix": "",
            "dt_thousands": ".",
            "dt_lengthMenu": "Показать  _MENU_ записей",
            "dt_loadingRecords": "Загрузка...",
            "dt_processing": "Обработка ...",
            "dt_search": "Найти:",
            "dt_zeroRecords": "Не найдено совпадающих записей",
            "dt_paginate": {
                "first": "Первая",
                "last": "Последняя",
                "next": "Следующая",
                "previous": "Предыдущая"
            },
            "dt_aria": {
                "sortAscending": ": активировать сортировку столбца по возрастанию",
                "sortDescending": ": активировать сортировку колонки по убыванию"
            }

        },
        'en':  //default language: English
        {
            "dt_decimal": "",
            "dt_emptyTable": "No data available in table",
            "dt_info": "Showing _START_ to _END_ of _TOTAL_ entries",
            "dt_infoEmpty": "Showing 0 to 0 of 0 entries",
            "dt_infoFiltered": "(filtered from _MAX_ total entries)",
            "dt_infoPostFix": "",
            "dt_thousands": ",",
            "dt_lengthMenu": "Show _MENU_ entries",
            "dt_loadingRecords": "Loading...",
            "dt_processing": "Processing...",
            "dt_search": "Search:",
            "dt_zeroRecords": "No matching records found",
            "dt_paginate": {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Previous"
            },
            "dt_aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }

        }

    };
// Настройка language(DataTables)
var language_table = function (langs) {
    return {
        "decimal": langView('dt_decimal', langs),
        "emptyTable": langView('dt_emptyTable', langs),
        "info": langView('dt_info', langs),
        "infoEmpty": langView('dt_infoEmpty', langs),
        "infoFiltered": langView('dt_infoFiltered', langs),
        "infoPostFix": langView('dt_infoPostFix', langs),
        "thousands": langView('dt_thousands', langs),
        "lengthMenu": langView('dt_lengthMenu', langs),
        "loadingRecords": langView('dt_loadingRecords', langs),
        "processing": langView('dt_processing', langs),
        "search": langView('dt_search', langs),
        "zeroRecords": langView('dt_zeroRecords', langs),
        "paginate": langView('dt_paginate', langs),
        "aria": langView('dt_aria', langs),
    }
}

/* ----------------------------------------------------------
    Вывод текста согласно региональных настроек
-------------------------------------------------------------*/
// Метод определения списка по указаному языку
var getLanguages = function (languages, lang) {
    if (lang === 'ru') {
        var language = navigator.language ? navigator.language : navigator.browserLanguage;
        if (!language) return languages['default'];
        language = language.toLowerCase();
        for (var key in languages) {
            if (language.indexOf(key) != -1) {
                return languages[key];
            }
        }
        return languages['default'];
    }
    else if (lang && lang in languages) {
        return languages[lang];
    }
    else {
        return languages['default'];
    }
};
// Показать текст
var langView = function (t, langs) {
    var _t = t.toLowerCase();
    var re = (t in langs) ? langs[t] : (_t in langs) ? langs[_t] : null;
    return re;
};

// Коррекция вывода даты с учетом зоны
var toISOStringTZ = function (date) {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
};

var outOZMFuelType = function (i) {
    switch (i) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 17:
        case 18:
        case 23:
        case 24:
        case 27:
        case 28:
            return 107000022; // А92
        case 15:
        case 16:
        case 19:
        case 20:
        case 21:
        case 22:
        case 25:
        case 26:
            return 107000023; // А95
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 29:
            return 107000024; // ДТ
    }
};

// Убрать Т из формата даты ISO
var getReplaceTOfDT = function (date) {
    return date !== null && date !== undefined ? date.replace(/T/g, ' ').replace(/Z/g, '') : null;
};
// Убрать время из даты ISO
var getSupstrTOfDT = function (date) {
    return date !== null ? date.substr(0, 10) : null;
};

var outVal = function (i) {
    return i != null ? Number(i) : '';
};
// Тип топлива
var outFuelType = function (i) {
    switch (i) {
        case 107000022: return "А92";
        case 107000023: return "А95";
        case 107000024: return "ДТ";
        case 107000027: return "Керосин";
        default: return i;
    }
};
// Вареант выдачи
var outIssueOption = function (i) {
    switch (i) {
        case 1: return "_";
        case 2: return "По резервированию";
        case 3: return "По исходящей поставке";
        case 4: return "По требованию (самовывоз)";
        case 5: return "Заправка в баки ТС";
        case 6: return "Выдача в топливозаправщик (супер-маршрут)";
        case 7: return "Пролив";
        default: return "Выдача по старой системе";
    }
};



var outFuelTypeUKTZED = function (i) {
    switch (i) {
        case 107000022: return "2710124194";
        case 107000023: return "2710124512";
        case 107000024: return "2710194300";
        case 107000027: return "2710192100";
        default: return i;
    }
};

var outFuelTypeDescription = function (i) {
    switch (i) {
        case 107000022: return "Бензини моторні з вмістом свинцю 0,013г/л або менше: інші бензини, з октановим числом більш як 92, але менш як 95";
        case 107000023: return "Бензини моторні з вмістом свинцю 0,013г/л або менше: інші бензини, з октановим числом 95 або більше, але менш як 98";
        case 107000024: return "Важкі дистиляти (газойлі) із вмістом сірки не більш як 0,001 мас.%";
        case 107000027: return "Гас: паливо для реактивних двигунів";
        default: return i;
    }
};
// Вернуть обем остатка ГСМ в трубопроводе
var outFuelTypeVolumePL = function (i) {
    switch (i) {
        case 107000022: return 4577;
        case 107000023: return 3904;
        case 107000024: return 6771;
        case 107000027: return 2674;
        default: return i;
    }
};
/* ----------------------------------------------------------
    Блокировка экрана
-------------------------------------------------------------*/
// Блокировать с текстом
var LockScreen = function (message) {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOn';
    lock.innerHTML = message;
};
// Разблокировать 
var LockScreenOff = function () {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOff';
};

// Инициализация компонента Select
var initSelect = function (obj_select, property, data, callback_option, value_select, event_change, exceptions_value) {
    var options = [];
    var lang = $.cookie('lang');
    // Проверка выбор неопределен
    if (value_select == -1) {
        options.push("<option value='-1' >" + (lang == 'en' ? 'Select...' : 'Выберите...') + "</option>");
    }
    if (data != null) {
        for (i = 0; i < data.length; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled }
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option != null) {
                if (exceptions_value != null) {
                    if (exceptions_value.indexOf(option.value) == -1) {
                        options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                    }
                } else {
                    options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                }
            }
        }
    }
    obj_select.empty();
    obj_select.selectmenu({
        icons: { button: "ui-icon ui-icon-circle-triangle-s" },
        width: property.width,
        change: event_change,
    }).selectmenu("menuWidget").addClass("overflow");;
    // Заполним селект 
    obj_select.append(options.join(""))
        .val(value_select)
        .selectmenu("refresh");
};

/* ----------------------------------------------------------
    Обработчики ajax - функций
-------------------------------------------------------------*/
// Событие перед запросом
var AJAXBeforeSend = function () {
    //OnBegin();
}
// Обработка ошибок
var OnAJAXError = function (x, y, z) {
    //LockScreenOff();
    if (x.status != 404) {
        alert(x + '\n' + y + '\n' + z);
    }
    LockScreenOff();
};
// Событие после выполнения
var AJAXComplete = function () {
    //LockScreenOff();
};

/* ----------------------------------------------------------
    AJAX функции
-------------------------------------------------------------*/
// Веруть список Cars
function getAsyncViewCars(callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/cards',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
/////////////////////////////////////////////////////////////////////
// Веруть список azsCards карточек
var getAsyncViewazsCards = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/cards',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Веруть azsCars карточку по id
var getAsyncViewazsCardsOfID = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/cards/' + id,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Добавить cazsCards
var postAsyncazsCards = function (cards, callback) {
    $.ajax({
        url: '../../api/azs/cards',
        type: 'POST',
        data: JSON.stringify(cards),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Обновить cazsCards
var putAsyncazsCards = function (cards, callback) {
    $.ajax({
        type: 'PUT',
        url: '../../api/azs/cards/' + cards.Id,
        data: JSON.stringify(cards),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Удалить azsCards по id
var deleteAsynczsCards = function (id, callback) {
    $.ajax({
        url: '../../api/azs/cards/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Загрузить библиотеку azsCards 
var getReference_azsCards = function (callback) {
    var ref = {
        list: [],
        initObject: function () {
            getAsyncViewazsCards(function (result) {
                ref.list = result;
                if (typeof callback === 'function') {
                    callback(ref);
                }
            });
        },
        getResult: function (value) {
            var result = getObjects(this.list, 'Id', value)
            if (result != null && result.length > 0) {
                return result[0];
            }
        },
        getResultNumCard: function (value) {
            var result = getObjects(this.list, 'Number', value)
            if (result != null && result.length > 0) {
                return result[0];
            }
        },
        getNumber: function (value) {
            var result = getObjects(this.list, 'Id', value)
            if (result != null && result.length > 0) {
                return result[0].Number;
            };
        },
        //getText: function (value) {
        //    var result = getObjects(this.list, 'Id', value)
        //    var txt = '(' + value + ')';
        //    if (result != null && result.length > 0) {
        //        txt += ' ' + result[0].name;
        //    };
        //    return txt;
        //},
    }
    ref.initObject();
}
/////////////////////////////////////////////////////////////////////
// Веруть список azsDeparts цехов
var getAsyncViewazsDeparts = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/departs',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Загрузить библиотеку
var getReference_azsDeparts = function (callback) {
    var ref = {
        list: [],
        initObject: function () {
            getAsyncViewazsDeparts(function (result) {
                ref.list = result;
                if (typeof callback === 'function') {
                    callback(ref);
                }
            });
        },
        getResult: function (value) {
            var result = getObjects(this.list, 'id', value)
            if (result != null && result.length > 0) {
                return result[0];
            }
        },

        getText: function (value) {
            var result = getObjects(this.list, 'id', value)
            var txt = '(' + value + ')';
            if (result != null && result.length > 0) {
                txt += ' ' + result[0].name;
            };
            return txt;
        },
    }
    ref.initObject();
}
/////////////////////////////////////////////////////////////////////
// Веруть состояние склада ГСМ АЗС
var getAsyncViewLastazsTankStates = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/tankstates/last',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Веруть каталог ТРК АЗС 
var getAsyncViewCatalogTRK = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/catalog/trk/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
/////////////////////////////////////////////////////////////////////
// Веруть заправочную ведомость
var getAsyncViewazsFuelSaleOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/fuelsale/' + toISOStringTZ(start).substring(0, 19) + '/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Суточный репорт АЗС (БД ЦОД)
var getAsyncViewReportDR_AZSOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/daily_report_azs/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет по АЗС - новый (БД ЦОД)
var getAsyncViewDailyAccountingReportOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет по АЗС - новый за период (БД ЦОД)
var getAsyncViewDailyAccountingReportPeriodOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_report/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет по АЗС - новый (БД ЦОД)
var getAsyncViewDailyAccountingReportOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_report/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет -ДЕТАЛИ по АЗС - новый (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportOfDateTime = function (start, fuel, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_detali_report/date/' + start + '/fuel/' + fuel,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет -ДЕТАЛИ по АЗС - новый за период (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportPeriodOfDateTime = function (start, stop, fuel, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_detali_report/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19)+ '/fuel/' + fuel,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

// Суточный(налоговый) отчет -ДЕТАЛИ по АЗС - новый (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/daily_accounting_detali_report/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Получить выдачи за сутки просуммированные по пистолетам 
var getAsyncViewDeliveryTanksReportGroupNumOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/delivery_tanks/group_num/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Получить выдачи за сутки просуммированные по пистолетам 
var getAsyncViewDeliveryTanksReportGroupNumOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/delivery_tanks/group_num/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

// Получить выдачи за сутки просуммированные по ГСМ 
var getAsyncViewDeliveryTanksReportGroupFuelOfDate = function (date, callback) {
    // api/dar_azs/delivery_tanks/group_fuel/start/2020-01-01T00:00:00/stop/2020-01-31T23:59:59
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/delivery_tanks/group_fuel/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

// Получить выдачи за сутки просуммированные по ГСМ 
var getAsyncViewDeliveryTanksReportGroupFuelOfDateTime = function (start, stop, callback) {
    // api/dar_azs/delivery_tanks/group_fuel/start/2020-01-01T00:00:00/stop/2020-01-31T23:59:59
    $.ajax({
        type: 'GET',
        url: '../../api/dar_azs/delivery_tanks/group_fuel/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
var postToXML = function (report, callback) {
    $.ajax({
        url: '../../api/dar_azs/to_xml',
        type: 'POST',
        data: JSON.stringify(report),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};



/////////////////////////////////////////////////////////////////////
// Веруть состояние экипировки ст Карьерная ГД
var getAsyncViewLastTankStates = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tankstates/last',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть состояние экипировки ст Карьерная ГД по номеру
var getAsyncViewLastTankStatesOfNum = function (num, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/tankstates/last/tank/' + num,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
/////////////////////////////////////////////////////////////////////
// Веруть заправочную ведомость жд трансп
//var getAsyncViewFuelSaleOfDateTime = function (start, stop, callback) {
//    $.ajax({
//        type: 'GET',
//        url: '../../api/fuelsale/' + toISOStringTZ(start).substring(0, 19) + '/' + toISOStringTZ(stop).substring(0, 19),
//        async: true,
//        dataType: 'json',
//        beforeSend: function () {
//            AJAXBeforeSend();
//        },
//        success: function (data) {
//            if (typeof callback === 'function') {
//                callback(data);
//            }
//        },
//        error: function (x, y, z) {
//            OnAJAXError(x, y, z);
//        },
//        complete: function () {
//            AJAXComplete();
//        },
//    });
//};
// Веруть заправочную ведомость ст. Карьерная ГД (локальный отчет)
var getAsyncReportLocalFS_RWOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/fuel_sale_rw/local/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть приемку топлива ст. Карьерная ГД (локальный отчет)
var getAsyncReportLocalRF_RWOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/receiving_fuel_rw/local/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть остатки топлива ст. Карьерная ГД (локальный отчет)
var getAsyncReportLocalRT_RWOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/remains_tanks_rw/local/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//// Суточный репорт ст. Карьерная ГД (локальный отчет)
//var getAsyncViewReportDR15OfDateTime = function (start, stop, callback) {
//    $.ajax({
//        type: 'GET',
//        url: '../../api/daily_report_rw/local/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
//        async: true,
//        dataType: 'json',
//        beforeSend: function () {
//            AJAXBeforeSend();
//        },
//        success: function (data) {
//            if (typeof callback === 'function') {
//                callback(data);
//            }
//        },
//        error: function (x, y, z) {
//            OnAJAXError(x, y, z);
//        },
//        complete: function () {
//            AJAXComplete();
//        },
//    });
//};
// Веруть заправочную ведомость ст. Карьерная ГД (БД ЦОД)
var getAsyncReportFS_KGDOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/fuel_sale_kgd/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть приемку топлива ст. Карьерная ГД (БД ЦОД)
var getAsyncReportRF_KGDOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/receiving_fuel_kgd/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть остатки топлива ст. Карьерная ГД (БД ЦОД)
var getAsyncReportRT_KGDOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/remains_tanks_kgd/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный репорт ст. Карьерная ГД (БД ЦОД)
var getAsyncViewReportDR_KGDOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/daily_report_kgd/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет по TSK - новый (БД ЦОД)
var getAsyncViewDailyAccountingReportTSKOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/daily_accounting_report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет -ДЕТАЛИ по TSK - новый (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportTSKOfDateTime = function (start, fuel, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/daily_accounting_detali_report/date/' + start + '/fuel/' + fuel,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет по TSK - новый (БД ЦОД)
var getAsyncViewDailyAccountingReportTSKOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/daily_accounting_report/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный(налоговый) отчет -ДЕТАЛИ по TSK - новый (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportTSKOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/daily_accounting_detali_report/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Получить выдачи за сутки просуммированные по пистолетам 
var getAsyncViewDeliveryTanksReportTSKGroupNumOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/delivery_tanks/group_num/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Получить выдачи за сутки просуммированные по ГСМ 
var getAsyncViewDeliveryTanksReportTSKGroupFuelOfDate = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/delivery_tanks/group_fuel/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
//-----------------------------------------------------------------------------------
// Новый 28-08-2020
// Суточный(налоговый) отчет -ДЕТАЛИ по Карьерной - новый за период (БД ЦОД)
var getAsyncViewDailyAccountingDetaliReportTSKPeriodOfDateTime = function (start, stop, fuel, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/daily_accounting_detali_report/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19) + '/fuel/' + fuel,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Получить выдачи за сутки просуммированные по пистолетам 
var getAsyncViewDeliveryTanksReportTSKGroupNumOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_tsk/delivery_tanks/group_num/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};



/////////////////////////////////////////////////////////////////////
// Веруть Выдача масла из ЦСМ
var getAsyncViewOilSalesOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/outcomes/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть Прием масла из ЦСМ
var getAsyncViewOilReceiptOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/incomes/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Вернуть часовые остатки  (по данным ЦОД)
var getAsyncViewOilRemainsTanksOfDateTime = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/remains_tanks/date/' + toISOStringTZ(date).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
// Перекачки масла в ЦСМ (по данным ЦОД)
var getAsyncViewOilTransferOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/transfer/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Веруть Прием масла в ЦСМ (по данным ЦОД)
var getAsyncViewOilReceiptsOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/receipts/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
// Веруть выдачу масла из ЦСМ (по данным ЦОД)
var getAsyncViewOilFuelSaleOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/oil/fuel_sale/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
/////////////////////////////////////////////////////////////////////
// Веруть ЦУ КХП бензол
// Суточный(налоговый) отчет бензолу за период (БД ЦОД)
var getAsyncViewDailyReportBenzenePeriodOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_benzene/daily_report/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

var getAsyncViewDailyReportBenzeneTanksPeriodOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_benzene/daily_report/tanks/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

var getAsyncViewRemainsBenzenePeriodOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_benzene/remains_benzene/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

var getAsyncViewFuelSaleBenzenePeriodOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/dar_benzene/sales_benzine/period/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

//-------------------------------------------------------------------------
// Экспорт отчетов в Excel
function fnExcelReport(name_tab, tab, css, name_file) {
    var file_name = name_file + '.xls';
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head>';
    tab_text = tab_text + '<xml>';
    tab_text = tab_text + '<x:ExcelWorkbook>';
    tab_text = tab_text + '<x:ExcelWorksheets>';
    tab_text = tab_text + '<x:ExcelWorksheet>';
    tab_text = tab_text + '<x:Name>' + name_tab + '</x:Name>';
    tab_text = tab_text + '<x:WorksheetOptions>';
    tab_text = tab_text + '<x:Panes></x:Panes>';
    tab_text = tab_text + '</x:WorksheetOptions>';
    tab_text = tab_text + '</x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets>';

    tab_text = tab_text + '</x:ExcelWorkbook>';
    tab_text = tab_text + '</xml>';

    tab_text = tab_text + '<style>' + css + '</style>';

    tab_text = tab_text + '</head><body>';

    //tab_text = tab_text + "<table>";
    //var tab = $('#table-list-wagons-tracking').html();
    tab_text = tab_text + tab;
    //tab_text = tab_text + '</table>';

    tab_text = tab_text + '</body></html>';

    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([tab_text], {
                type: "application/csv;charset=utf-8;"
            });
            navigator.msSaveOrOpenBlob(blob, file_name);
        }
    } else {
        $('#test').attr('href', 'data:application/vnd.ms-excel' + ', ' + encodeURIComponent(tab_text));
        $('#test').attr('download', file_name);
    }
}

function fnXMLReport(xml, name_file) {
    var file_name = name_file + '.xml';
    var tab_text = xml;
    //var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    //tab_text = tab_text + '<head>';

    //tab_text = tab_text + xml;

    //tab_text = tab_text + '</head><body>';

    //tab_text = tab_text + '</body></html>';

    //tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    //tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    //tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        $('#xml_load').hide();
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([tab_text], {
                type: "application/csv;charset=utf-8;"
            });
            navigator.msSaveOrOpenBlob(blob, file_name);
        }
    } else {
        $('#xml_load').attr('href', 'data:application/vnd.ms-excel' + ', ' + encodeURIComponent(tab_text));
        $('#xml_load').attr('download', file_name);
        $('#xml_load').text('Загрузить созданый XML-файл');
        $('#xml_load').show();
    }
}