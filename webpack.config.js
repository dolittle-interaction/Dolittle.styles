const path = require('path');
const configParts = require("./webpack.parts");


module.exports = [{
    entry: ['./app/scripts/index.js', './app/styles/style.scss'],
    output: {
        filename: 'bundle.[hash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            configParts.loaders.htmlLoader,
            configParts.loaders.sassLoader,
            configParts.loaders.svgLoader,
            configParts.loaders.imageLoader
        ]
    },
    plugins: [
        configParts.plugins.cleanDistFolder,
        configParts.plugins.buildHtmlIndex,
        configParts.plugins.buildHtmlSettings,
        configParts.plugins.buildHtmlTools,
        configParts.plugins.buildHtmlGeneric,
        configParts.plugins.buildHtmlElements,
        configParts.plugins.buildHtmlObjects,
        configParts.plugins.sassBuilder
    ],
    devServer: {
        contentBase: './dist',
        port: 1337,
        open: true
    }
}];
