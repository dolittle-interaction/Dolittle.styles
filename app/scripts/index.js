const CodeMirror = require('codemirror');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/sass/sass');
require('./codemirror.formatter');
var pjson = require('../../package.json');

const hamburger = document.getElementById('main-nav-trigger');
const mainNavigation = document.querySelectorAll('.main-navigation')[0];
const mainBody = document.getElementById('main-body');
const versionNumber = document.getElementById('version-number');

function setVersionNumberLabel() {
    console.log(pjson.version);
    versionNumber.innerHTML = pjson.version;
}

function generateCodePreviews() {
    var previewBlocks = document.querySelectorAll('div.preview');
    previewBlocks.forEach(function(element) {
        var elementCode = element.innerHTML;
        var siblingCodeBlock = element.parentElement.querySelector('textarea');
        var codeMode = siblingCodeBlock.dataset.codemode;

        siblingCodeBlock.value = elementCode.replace(/^\s+|\s+$/g, '').replace(/\>\</g, '>\n<');
        var readOnlyCodeMirror = generateEditor(siblingCodeBlock, codeMode, true);
    });
}

function makeCodeLookPretty() {
    var codeBlocks = document.querySelectorAll('textarea.codemirror-me');
    codeBlocks.forEach(function(element) {
        var codeMode = element.dataset.codemode;

        element.value = element.value.replace(/^\s+|\s+$/g, '');
        var editor = generateEditor(element, codeMode, false);
    });
}

function generateEditor(element, codeMode, format) {
    var editor = CodeMirror.fromTextArea(element, {
        mode: codeMode,
        lineNumbers: true,
        readOnly: true
    });
    if (format) {
        editor.autoFormatRange({ line: 0, ch: 0 }, { line: editor.lineCount() });
    }
    return editor;
}

var toggleActiveMenuClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
};

generateCodePreviews();
makeCodeLookPretty();
setVersionNumberLabel();

hamburger.addEventListener('click', function(event) {
    toggleActiveMenuClass(event.target, 'is-active');
    toggleActiveMenuClass(mainNavigation, 'expanded');
    toggleActiveMenuClass(mainBody, 'menu-active');
});
