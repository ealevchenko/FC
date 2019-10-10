var get_html_table4_star = function (count) {
    return "<table border=0 cellpadding=0 cellspacing=0 width=1004 style='border-collapse:collapse;table-layout:fixed;width:754pt'>" +
        "<col width=64 style='width:48pt'>" +
        "<col width=80 style='mso-width-source:userset;mso-width-alt:2925;width:60pt'> " +
        "<col width=218 span=2 style='mso-width-source:userset;mso-width-alt:7972;width:164pt'>" +
        "<col width=353 style='mso-width-source:userset;mso-width-alt:12909;width:265pt'>" +
        "<col width=71 style='mso-width-source:userset;mso-width-alt:2596;width:53pt'>" +
        "<tr height=57 style='mso-height-source:userset;height:42.75pt'>" +
        "<td rowspan="+(4+count)+" height=322 class=xl6415240 width=64 style='border-bottom:.5pt solid black;height:241.5pt;width:48pt'>11</td>" +
        "<td colspan=5 class=xl6915240 width=940 style='border-right:.5pt solid black;border-left:none;width:706pt'>Таблиця 4. Інформація щодо загального обсягу реалізованого пального за кодами товарної підкатегорії згідно з <font class='font815240'>УКТ ЗЕД</font><font class='font715240'> за звітну добу з акцизного складу (літри, приведені до температури 15° C)</font></td>" +
        "</tr>" +
        "<tr height=85 style='mso-height-source:userset;height:63.75pt'>" +
        "<td height=85 class=xl6415240 width=80 style='height:63.75pt;border-top:none;border-left:none;width:60pt'>N рядка</td>" +
        "<td class=xl6415240 width=218 style='border-top:none;border-left:none;width:164pt'>Код пального за кодом товарної підкатегорії згідно з УКТ ЗЕД (10 знаків)</td>" +
        "<td class=xl6415240 width=218 style='border-top:none;border-left:none;width:164pt'>Опис пального за кодом товарного за кодом товарної підкатегорії згідно з УКТ ЗЕД</td>" +
        "<td class=xl6415240 width=353 style='border-top:none;border-left:none;width:265pt'>Зведені за добу підсумкові дані щодо добового обсягу реалізованого з акцизного складу пального (підсумок показників графи 10.5 або 10.6 таблиці 3 за відповідним кодом товарної підкатегорії згідно з <font class='font915240'>УКТ ЗЕД</font><font class='font515240'>)</font></td>" +
        "<td class=xl6415240 width=71 style='border-top:none;border-left:none;width:53pt'>Тип дії (1/2)<font class='font615240'><sup> 7</sup></font></td>" +
        "</tr>" +
        "<tr class=xl6615240 height=20 style='height:15.0pt'>" +
        "<td height=20 class=xl6515240 width=80 style='height:15.0pt;border-left:none;width:60pt'>11.1</td>" +
        "<td class=xl6515240 width=218 style='border-left:none;width:164pt'>11.2</td>" +
        "<td class=xl6515240 width=218 style='border-left:none;width:164pt'>11.3</td>" +
        "<td class=xl6515240 width=353 style='border-left:none;width:265pt'>11.4</td>" +
        "<td class=xl6515240 width=71 style='border-left:none;width:53pt'>11.5</td>" +
        "</tr>";

};

//"<tr class=xl6615240 style='height:auto'>" +
//    "<td class=xl6515240 width=80 style='border-top:none;border-left:none;width:60pt'>&nbsp;</td>" +
//    "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>&nbsp;</td>" +
//    "<td class=xl6515240 width=218 style='border-top:none;border-left:none;width:164pt'>&nbsp;</td>" +
//    "<td class=xl6515240 width=353 style='border-top:none;border-left:none;width:265pt'>&nbsp;</td>" +
//    "<td class=xl6515240 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
//    "</tr>";


var html_table4_stop =  "<tr height=20 style='height:15.0pt'>" +
        "<td height=20 class=xl6315240 width=80 style='height:15.0pt;border-top:none;border-left:none;width:60pt'>&nbsp;</td>" +
        "<td class=xl6315240 width=218 style='border-top:none;border-left:none;width:164pt'>&nbsp;</td>" +
        "<td class=xl6315240 width=218 style='border-top:none;border-left:none;width:164pt'>&nbsp;</td>" +
        "<td class=xl6315240 width=353 style='border-top:none;border-left:none;width:265pt'>&nbsp;</td>" +
        "<td class=xl6315240 width=71 style='border-top:none;border-left:none;width:53pt'>&nbsp;</td>" +
    "</tr>" +
"</table>";

var css_table4 = ".font515240 { "+
    "color: black;"+
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font615240 {" +
    "color: black;" +
    "font-size: 12.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font715240 {" +
    "color: black;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font815240 {" +
    "color: blue;" +
    "font-size: 10.0pt;" +
    "font-weight: 700;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".font915240 {" +
    "color: blue;" +
    "font-size: 10.0pt;" +
    "font-weight: 400;" +
    "font-style: normal;" +
    "text-decoration: none;" +
    "font-family: Arial, sans-serif;" +
    "mso-font-charset: 204;" +
    "}" +

    ".xl1515240 {" +
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

    ".xl6315240 {" +
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

    ".xl6415240 {" +
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

    ".xl6515240 {" +
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

    ".xl6615240 {" +
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
    "mso-number-format: '\@';" +
    "text-align: general;" +
    "vertical-align: bottom;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: nowrap;" +
    "}" +

    ".xl6515240-number {" +
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
    "mso-displayed-decimal-separator: '\,';" +
    "mso-number-format: '0.00';" +
    "text-align: center;" +
    "vertical-align: middle;" +
    "border: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
"}" +

    ".xl6715240 {" +
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

    ".xl6815240 {" +
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

    ".xl6915240 {" +
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
    "text-align: justify;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: .5pt solid black;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7015240 {" +
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
    "text-align: justify;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: none;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}" +

    ".xl7115240 {" +
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
    "text-align: justify;" +
    "vertical-align: middle;" +
    "border-top: .5pt solid black;" +
    "border-right: .5pt solid black;" +
    "border-bottom: .5pt solid black;" +
    "border-left: none;" +
    "mso-background-source: auto;" +
    "mso-pattern: auto;" +
    "white-space: normal;" +
    "}";