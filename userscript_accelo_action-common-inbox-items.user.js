// ==UserScript==
// @name         Accelo - Action Common Inbox Items
// @namespace    http://www.bytelaunch.com/
// @version      0.3
// @description  Action the following messages:
//                 "Invoice for"
//                 "Account invoice event log"
//                 "Desposit Invoice"
//                 etc.
// @author       Michael Craig
// @match        https://bytelaunch.accelo.com/?action=home_inbox*
// @grant        GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/

var timer;

var btn1 = jQuery('<button/>',
                  {
    id: 'myContainer',
    text: 'Action Common',
    style: '',
    click: function () {

        $('.inboxrow__details__summary').each(function(){
            if (
                $(this).text().indexOf("New ticket assigned") >= 0 ||
                $(this).text().indexOf("New task assigned") >= 0 ||
                $(this).text().indexOf('Task "') >= 0 ||
                $(this).text().indexOf('Work started on task "') >= 0 ||
                $(this).text().indexOf("Invoice for") >= 0 ||
                $(this).text().indexOf("Account invoice event log") >= 0 ||
                $(this).text().indexOf("Deposit Invoice") >= 0
               )
            {
                $(this).parent().parent().parent().find('.simple_checkbox').click();
            }

        });

        $("a.icon_button div:contains('Action')").click();
    }
});


jQuery('div#main').prepend(btn1);
