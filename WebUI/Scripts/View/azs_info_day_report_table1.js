
var get_html_table1_star =  function(start, stop){
    return "<table border=0 cellpadding=0 cellspacing=0 width=989 style='border-collapse:collapse;table-layout:fixed;width:743pt'>" +
        "<colgroup>" +
        "<col width='24' style='width: 18pt; mso-width-source: userset; mso-width-alt: 877;'>" +
        "<col width='51' style='width: 38pt; mso-width-source: userset; mso-width-alt: 1865;'>" +
        "<col width='120' style='width: 90pt; mso-width-source: userset; mso-width-alt: 4388;'>" +
        "<col width='81' style='width: 61pt; mso-width-source: userset; mso-width-alt: 2962;' span='2'>" +
        "<col width='92' style='width: 69pt; mso-width-source: userset; mso-width-alt: 3364;' span='2'>" +
        "<col width='98' class='xl7320875' style='width: 74pt; mso-width-source: userset; mso-width-alt: 3584;'>" +
        "<col width='103' style='width: 77pt; mso-width-source: userset; mso-width-alt: 3766;'>" +
        "<col width='93' style='width: 70pt; mso-width-source: userset; mso-width-alt: 3401;'>" +
        "<col width='108' style='width: 81pt; mso-width-source: userset; mso-width-alt: 3949;'>" +
        "<col width='46' style='width: 35pt; mso-width-source: userset; mso-width-alt: 1682;'>" +
        "</colgroup>" +


        "<tr height=20 style='height:15.0pt'>" +
        "<td height=20 class=xl6320875 width=24 style='height:15.0pt;width:18pt'>&nbsp;</td>" +
        "<td colspan=6 rowspan=4 class=xl8520875 width=517 style='border-right:.5pt solid black;border-bottom:.5pt solid black;width:388pt'>" +
        "Довідка про зведені за добу " +
        "підсумкові облікові дані щодо обсягів обігу (отримання/відпуску) та залишків" +
        "пального на акцизному складі пального" +
        "<font class='font620875'><sup>1</sup></font>" +
        "</td>" +
        "<td class=xl7220875 width=98 style='border-left:none;width:74pt'>01.1</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>основна</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=20 style='mso-height-source:userset;height:15.0pt'>" +
        "<td height=20 class=xl6420875 width=24 style='height:15.0pt;width:18pt'>1</td>" +
        "<td class=xl7220875 width=98 style='border-top:none;border-left:none;width:74pt'>01.2</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>коригуюча</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=34 style='mso-height-source:userset;height:25.5pt'>" +
        "<td height=34 class=xl6520875 width=24 style='height:25.5pt;width:18pt'>&nbsp;</td>" +
        "<td class=xl7220875 width=98 style='border-top:none;border-left:none;width:74pt'>01.3</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>дата складання коригуючої довідки</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>" + (moment(new Date()).format('DD MM YYYY')) + "</td>" +
        "</tr>" +
        "<tr height=34 style='mso-height-source:userset;height:25.5pt'>" +
        "<td height=34 class=xl6620875 width=24 style='height:25.5pt;width:18pt'>&nbsp;</td>" +
        "<td class=xl7220875 width=98 style='border-top:none;border-left:none;width:74pt'>01.4</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>порядковий номер коригуючої довідки</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=20 style='mso-height-source:userset;height:15.0pt'>" +
        "<td rowspan=2 height=40 class=xl7720875 width=24 style='border-bottom:.5pt solid black;height:30.0pt;border-top:none;width:18pt'>2</td>" +
        "<td colspan=6 rowspan=2 class=xl7920875 width=517 style='border-right:.5pt solid black;border-bottom:.5pt solid black;width:388pt'>Звітна доба</td>" +
        "<td class=xl7220875 width=98 style='border-top:none;border-left:none;width:74pt'>02.1</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>початок звітної доби</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>" + (moment(start).format('DD MM YYYY HH:mm')) + "</td>" +
        "</tr>" +
        "<tr height=20 style='mso-height-source:userset;height:15.0pt'>" +
        "<td height=20 class=xl7220875 width=98 style='height:15.0pt;border-top:none;border-left:none;width:74pt'>02.2</td>" +
        "<td colspan=2 class=xl6720875 width=196 style='border-right:.5pt solid black;width:147pt'>кінець звітної доби</td>" +
        "<td colspan=2 class=xl6720875 width=154 style='border-right:.5pt solid black;border-left:none;width:116pt'>" + (moment(stop).format('DD MM YYYY HH:mm')) + "</td>" +
        "</tr>" +
        "<tr height=24 style='mso-height-source:userset;height:18.0pt'>" +
        "<td height=24 class=xl6820875 width=24 style='height:18.0pt;border-top:none;width:18pt'>3</td>" +
        "<td colspan=7 class=xl6720875 width=615 style='border-right:.5pt solid black;border-left:none;width:462pt'> Реєстраційний номер основної довідки" +
        "<font class='font720875'><sup>2</sup></font><font class='font520875'>(заповнюється для коригуючої довідки)</font></td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=20 style='mso-height-source:userset;height:15.0pt'>" +
        "<td rowspan=2 height=40 class=xl7720875 width=24 style='border-bottom:.5pt solid black;height:30.0pt;border-top:none;width:18pt'>4</td>" +
        "<td colspan=2 rowspan=2 class=xl7920875 width=171 style='border-right:.5pt solid black;border-bottom:.5pt solid black;width:128pt'>4Суб'єкт господарювання</td>" +
        "<td class=xl7220875 width=81 style='border-top:none;border-left:none;width:61pt'>04.1</td>" +
        "<td colspan=4 class=xl9420875 width=363 style='border-right:.5pt solid black;width:273pt'>юридична особа</td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'> + </td>" +
        "</tr>" +
        "<tr height=20 style='height:15.0pt'>" +
        "<td height=20 class=xl7220875 width=81 style='height:15.0pt;border-top:none;border-left:none;width:61pt'>04.2</td>" +
        "<td colspan=4 class=xl9420875 width=363 style='border-right:.5pt solid black;width:273pt'>фізична особа - підприємець</td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=24 style='mso-height-source:userset;height:18.0pt'>" +
        "<td height=24 class=xl6820875 width=24 style='height:18.0pt;border-top:none;width:18pt'>5</td>" +
        "<td colspan=7 class=xl6720875 width=615 style='border-right:.5pt solid black;border-left:none;width:462pt'>Податковий номер платника податків або серія(за наявності) та номер паспорта<font class='font720875'><sup>3</sup></font></td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=20 style='height:15.0pt'>" +
        "<td rowspan=2 height=40 class=xl7720875 width=24 style='border-bottom:.5pt solid black;height:30.0pt;border-top:none;width:18pt'>6</td>" +
        "<td colspan=7 class=xl6720875 width=615 style='border-right:.5pt solid black;border-left:none;width:462pt'>Найменування або прізвище, ім'я, по батькові (за наявності)</td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=20 style='height:15.0pt'>" +
        "<td colspan=11 height=20 class=xl6720875 width=965 style='border-right:.5pt solid black;height:15.0pt;border-left:none;width:725pt'>&nbsp;</td>" +
        "</tr>" +
        "<tr height=24 style='mso-height-source:userset;height:18.0pt'>" +
        "<td height=24 class=xl6820875 width=24 style='height:18.0pt;border-top:none;width:18pt'>7</td>" +
        "<td colspan=7 class=xl6720875 width=615 style='border-right:.5pt solid black;border-left:none;width:462pt'>Уніфікований номер акцизного складу<font class='font720875'><sup>4</sup></font>" +
        "</td>" +
        "<td colspan=4 class=xl9420875 width=350 style='border-right:.5pt solid black;width:263pt'>1005741</td>" +
        "</tr>" +
        "<tr height=39 style='mso-height-source:userset;height:29.25pt'>" +
        "<td height=39 class=xl6920875 align=right width=24 style='height:29.25pt;border-top:none;width:18pt'>8</td>" +
        "<td colspan=11 class=xl9520875 width=965 style='border-right:.5pt solid black;border-left:none;width:725pt'>" +
        "Таблиця 1. Інформація щодо обсягів залишків пального за кодами товарної підкатегорії згідно з <font class='font920875'> УКТ ЗЕД </font><font class='font820875'>" +
        "на початок та кінець звітної доби у розрізі резервуарів, розташованих на акцизному складі пального, за показниками рівнемірів(літри, приведені до температури 15° C)</font>" +
        "</td>" +
        "</tr>" +
        "<tr height=30 style='mso-height-source:userset;height:22.5pt'>" +
        "<td height=30 class=xl7020875 width=24 style='height:22.5pt;width:18pt'>&nbsp;</td>" +
        "<td rowspan=3 class=xl7720875 width=51 style='border-bottom:.5pt solid black;border-top:none;width:38pt'>N рядка</td>" +
        "<td rowspan=3 class=xl7720875 width=120 style='border-bottom:.5pt solid black;border-top:none;width:90pt'>Код пального за кодом товарної підкатегорії згідно з УКТ ЗЕД(10 знаків)</td>" +
        "<td rowspan=3 class=xl7720875 width=81 style='border-bottom:.5pt solid black;border-top:none;width:61pt'>Опис пального за кодом товарної підкатегорії гідно з УКТ ЗЕД</td>" +
        "<td rowspan=3 class=xl7720875 width=81 style='border-bottom:.5pt solid black;border-top:none;width:61pt'>Ознака зміни<font class='font1020875'> УКТ ЗЕД </font><font class='font520875'>у зв'язку зі зміною хімічного складу пального в резервуарі 5</font></td>" +
        "<td rowspan=3 class=xl7720875 width=92 style='border-bottom:.5pt solid black;border-top:none;width:69pt'>Уніфікований номер резервуара</td>" +
        "<td rowspan=3 class=xl7920875 width=92 style='border-bottom:.5pt solid black;border-top:none;width:69pt'>Серійний(ідентифікаційний) номер рівнеміра</td>" +
        "<td colspan=4 class=xl7920875 width=402 style='border-right:.5pt solid black;width:302pt'>Обсяги залишків пального у резервуарах</td>" +
        "<td rowspan=3 class=xl7720875 width=46 style='border-bottom:.5pt solid black;border-top:none;width:35pt'>Тип дії(1 / 2)<font class='font720875'><sup>7</sup></font>" +
        "</td>" +
        "</tr>" +
        "<tr height=46 style='mso-height-source:userset;height:34.5pt'>" +
        "<td height=46 class=xl7020875 width=24 style='height:34.5pt;width:18pt'>&nbsp;</td>" +
        "<td colspan=2 class=xl6720875 width=201 style='border-right:.5pt solid black;width:151pt'>за показниками рівнемірів</td>" +
        "<td colspan=2 class=xl6720875 width=201 style='border-right:.5pt solid black;border-left:none;width:151pt'>за показниками інших вимірювальних приладів<font class='font720875'><sup>6</sup></font>" +
        "</td>" +
        "</tr>" +
        "<tr height=76 style='mso-height-source:userset;height:57.0pt'>" +
        "<td height=76 class=xl7020875 width=24 style='height:57.0pt;width:18pt'>&nbsp;</td>" +
        "<td class=xl6720875 width=98 style='border-top:none;width:74pt'>обсяг залишку пального в резервуарі на початок доби</td>" +
        "<td class=xl6820875 width=103 style='border-top:none;width:77pt'>обсяг залишку пального в резервуарі на кінець доби</td>" +
        "<td class=xl6820875 width=93 style='border-top:none;border-left:none;width:70pt'>обсяг залишку пального в резервуарі на початок доби</td>" +
        "<td class=xl6820875 width=108 style='border-top:none;border-left:none;width:81pt'>обсяг залишку пального в резервуарі на кінець доби</td>" +
        "</tr>" +
        "<tr height=20 style='height:15.0pt'>" +
        "<td height=20 class=xl7020875 width=24 style='height:15.0pt;width:18pt'>&nbsp;</td>" +
        "<td class=xl7420875 width=51 style='border-top:none;border-left:none;width:38pt'>08.1</td>" +
        "<td class=xl7520875 width=120 style='border-top:none;border-left:none;width:90pt'>08.2</td>" +
        "<td class=xl7420875 width=81 style='border-top:none;border-left:none;width:61pt'>08.3</td>" +
        "<td class=xl7420875 width=81 style='border-top:none;border-left:none;width:61pt'>08.4</td>" +
        "<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt'>08.5</td>" +
        "<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt'>08.6</td>" +
        "<td class=xl7420875 width=98 style='border-top:none;border-left:none;width:74pt'>08.7</td>" +
        "<td class=xl7420875 width=103 style='border-top:none;border-left:none;width:77pt'>08.8</td>" +
        "<td class=xl7420875 width=93 style='border-top:none;border-left:none;width:70pt'>08.9</td>" +
        "<td class=xl7420875 width=108 style='border-top:none;border-left:none;width:81pt'>08.10</td>" +
        "<td class=xl7420875 width=46 style='border-top:none;border-left:none;width:35pt'>08.11</td>" +
        "</tr>";
};
//var html_table1_start = 
//"<tr height=20 style='height:15.0pt'>" +
//"<td height=20 class=xl7020875 width=24 style='height:15.0pt;width:18pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=51 style='border-top:none;border-left:none;width:38pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=120 style='border-top:none;border-left:none;width:90pt'>&nbsp;</td>" +
//"<td class=xl7220875 width=81 style='border-top:none;border-left:none;width:61pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=81 style='border-top:none;width:61pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=92 style='border-top:none;border-left:none;width:69pt'>&nbsp;</td>" +
//"<td class=xl7220875 width=92 style='border-top:none;border-left:none;width:69pt'>&nbsp;</td>" +
//"<td class=xl7220875 width=98 style='border-top:none;width:74pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=103 style='border-top:none;width:77pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=93 style='border-top:none;border-left:none;width:70pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=108 style='border-top:none;border-left:none;width:81pt'>&nbsp;</td>" +
//"<td class=xl7420875 width=46 style='border-top:none;border-left:none;width:35pt'>&nbsp;</td>" +
//"</tr>";
var html_table1_stop =
    "<tr height=20 style='height:15.0pt'>" +
    "<td height=20 class=xl7120875 width=24 style='height:15.0pt;width:18pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=51 style='border-top:none;border-left:none;width:38pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=120 style='border-top:none;border-left:none;width:90pt'>&nbsp;</td>" +
    "<td class=xl6720875 width=81 style='border-top:none;border-left:none;width:61pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=81 style='border-top:none;width:61pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=92 style='border-top:none;border-left:none;width:69pt'>&nbsp;</td>" +
    "<td class=xl6720875 width=92 style='border-top:none;border-left:none;width:69pt'>&nbsp;</td>" +
    "<td class=xl6720875 width=98 style='border-top:none;width:74pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=103 style='border-top:none;width:77pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=93 style='border-top:none;border-left:none;width:70pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=108 style='border-top:none;border-left:none;width:81pt'>&nbsp;</td>" +
    "<td class=xl6820875 width=46 style='border-top:none;border-left:none;width:35pt'>&nbsp;</td>" +
    "</tr>" +
    "</table>";

var css_table1 = ".font520875 {" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font620875 {" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font720875 {" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font820875 {" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font920875 {" +
    "color: blue;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font1020875 {" +
    "color: blue;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".xl1520875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 11.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Calibri, sans-serif;" +
    "mso-font-charset: 0;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: bottom;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: nowrap;" +
    "}" +

    ".xl6320875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 11.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Calibri, sans-serif;" +
    "mso-font-charset: 0;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6420875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6520875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 11.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Calibri, sans-serif;" +
    "mso-font-charset: 0;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: top;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6620875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 11.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Calibri, sans-serif;" +
    "mso-font-charset: 0;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: top;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6720875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6820875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl6920875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7020875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7120875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7220875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: '\@';" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    //"mso-height-source: auto" +
    "}" +

    ".xl7220875-numder {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-displayed-decimal-separator:'\,';" +
    "mso-number-format: '0.000';" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    //"mso-height-source: auto" +
    "}" +
    ".xl7320875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 11.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Calibri, sans-serif;" +
    "mso-font-charset: 0;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: bottom;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: nowrap;" +
    "}" +

    ".xl7420875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: '\@';" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7520875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: '\@';" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border: .5pt solid black;" +
    "background: yellow;" +
    "mso-pattern: black none;" +
    "white-space: normal;" +
    "}" +

    ".xl7620875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7720875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7820875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7920875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8020875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8120875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8220875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8320875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8420875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8520875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8620875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8720875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8820875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl8920875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9020875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: none;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9120875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9220875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9320875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9420875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9520875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9620875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9720875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: general;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl9820875 {" +
    "padding-top: 1px;" +
    "padding-right: 1px;" +
    "padding-left: 1px;" +
    "mso-ignore: padding;" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "mso-number-format: General;" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border-top: none;" +
    "border-right: none;" +
    "border-bottom: none;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}";