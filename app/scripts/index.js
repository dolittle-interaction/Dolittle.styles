const CodeMirror = require("codemirror");
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/sass/sass');

function generateCodePreviews() {
    var previewBlocks = document.querySelectorAll("div.preview");
    previewBlocks.forEach(function (element) {
        var elementCode = element.innerHTML;
        var siblingCodeBlock = element.parentElement.querySelector("textarea");
        var codemode = siblingCodeBlock.dataset.codemode;

        siblingCodeBlock.value = elementCode.replace(/  /g, '').replace(/^\s+|\s+$/g, '');
        var readOnlyCodeMirror = CodeMirror.fromTextArea(siblingCodeBlock, {
            mode: codemode,
            lineNumbers: true,
            readOnly: true
        });
    });
}

function makeCodeLookPretty() {
    var codeBlocks = document.querySelectorAll("textarea.codemirror-me");
    codeBlocks.forEach(function (element) {
        var codeMode = element.dataset.codemode;
        
        element.value = element.value.replace(/^\s+|\s+$/g, '');
        CodeMirror.fromTextArea(element, {
            mode: codeMode,
            lineNumbers: true,
            readOnly: true
        });
    });
}


generateCodePreviews();
makeCodeLookPretty();
