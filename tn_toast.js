/**
 * Toast notification
 *
 * @author TrongNV
 * https://github.com/trongnv16
 *
 * @param {object} option
 * elementId datatable Id
 * urlLoadMore url load more datatable
 * rowNameGetId field to compare with load more
 *
 */
var tntoastIx = 1;
TNToast = function (content, type) {
    if (content == undefined) {
        content = "Notification";
    }

    let colorCode;
    switch (type) {
        case "error":
            colorCode = "#e96b6b";
            break;

        case "success":
            colorCode = "#73d473";
            break;

        default:
            colorCode = "#73d473";
            break;
    }

    let elementToastZone;
    let elementToastItem;
    let bodyElement;

    if (document.getElementsByClassName("tn-toast-zone").length) {
    } else {
        elementToastZone = document.createElement("div");
        elementToastZone.className = "tn-toast-zone";
        bodyElement = document.getElementsByTagName("body")[0];
        bodyElement.prepend(elementToastZone);
    }

    elementToastZone = document.getElementsByClassName("tn-toast-zone")[0];

    elementToastItem = document.createElement("div");
    elementToastItem.className = "tn-toast-item";

    let TNToastElement = "";
    TNToastElement += '<div class="tn-toast-' + tntoastIx + '">';
    TNToastElement += '<style type="text/css">@keyframes append-animate{from{transform:translateX(-50%);opacity:0}to{transform:translateX(0);opacity:1}}.tn-toast{animation:append-animate .2s linear}</style>';
    TNToastElement +=
        '<div class="tn-toast" style="background:' +
        colorCode +
        ';"><div class="tn-toast-header"><button onclick="closeTnToast(' + tntoastIx + ')" class="tn-toast-btn-close" type="button"><span aria-hidden="true">&times;</span></button></div><div class="tn-toast-body">' +
        content +
        "</div></div>";
    TNToastElement += '</div>';

    elementToastItem.innerHTML = TNToastElement;
    elementToastZone.prepend(elementToastItem);

    setTimeout(() => {
        elementToastItem.remove();
    }, 2500);
    tntoastIx++;
};

closeTnToast = function (index) {
    let parentElement = document.getElementsByClassName("tn-toast-" + index)[0];
    parentElement.remove();
};
