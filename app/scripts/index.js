const CodeMirror = require('codemirror');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/sass/sass');

const hamburger = document.getElementById('main-nav-trigger');
const mainNavigation = document.querySelectorAll('.main-navigation')[0];
const mainBody = document.getElementById('main-body');

function generateCodePreviews() {
    var previewBlocks = document.querySelectorAll('div.preview');
    previewBlocks.forEach(function (element) {
        var elementCode = element.innerHTML;
        var siblingCodeBlock = element.parentElement.querySelector('textarea');
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
    var codeBlocks = document.querySelectorAll('textarea.codemirror-me');
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

var toggleActiveMenuClass = function (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
    else {
        element.classList.add(className);
    }
}


generateCodePreviews();
makeCodeLookPretty();

hamburger.addEventListener('click', function (event) {
    toggleActiveMenuClass(event.target, 'is-active');
    toggleActiveMenuClass(mainNavigation, 'expanded');
    toggleActiveMenuClass(mainBody, 'menu-active');
});
