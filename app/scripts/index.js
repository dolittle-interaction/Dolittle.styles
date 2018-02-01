function escapeHtmlTags() {
    var codeBlocks = document.querySelectorAll("code");
    codeBlocks.forEach(function (element) {
        element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    });
}

function fetchPreviewHtmlCode() {
    var previewBlocks = document.querySelectorAll("div.preview");
    previewBlocks.forEach(function (element) {
        var elementCode = element.innerHTML.replace(/  /g, '');
        var siblingCodeBlock = element.parentElement.querySelector("code");
        siblingCodeBlock.innerHTML = elementCode.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    });
}

fetchPreviewHtmlCode();