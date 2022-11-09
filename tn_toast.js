/**
 * Toast notification
 * 
 * Reduce datatable rendering time by rendering basic fields the first time 
 * and rendering fields that take a long time to compute from the server the second time
 * 
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
 TNToast = function (content, type) {
    if (content == undefined) {
        content = "Notification";
    }

    let colorCode;
    switch (type) {
        case "error":
            colorCode = "#da4545";
            break;

        case "success":
            colorCode = "#4ab84a";
            break;

        default:
            colorCode = "#4ab84a";
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
        bodyElement.prepend(elementToastZone)
    }

    elementToastZone = document.getElementsByClassName("tn-toast-zone")[0];

    elementToastItem = document.createElement("div");
    elementToastItem.className = "tn-toast-item";

    let TNToastElement = '<div class="tn-toast" style="background:' + colorCode + ';"><div class="tn-toast-header"><button onclick="closeTnToast(this)" class="tn-toast-btn-close" type="button"><span aria-hidden="true">&times;</span></button></div><div class="tn-toast-body">' + content + '</div></div>';

    elementToastItem.innerHTML = TNToastElement;
    elementToastZone.prepend(elementToastItem)
}

closeTnToast = function (ele) {
    let parentElement = document.getElementsByClassName("tn-toast-btn-close")[0].closest(".tn-toast");
    parentElement.remove();
}

