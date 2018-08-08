const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let sassBuilder = new MiniCssExtractPlugin({
    filename: "style.bundle.[hash:5].css",
    allChunks: true
});

module.exports = {
    loaders: {
        htmlLoader: {
            test: /\.html$/,
            exclude: /layout.html/,
            use: [
                {
                    loader: "html-loader",
                    options: {
                        attrs: ["img:src", "link:href"],
                        interpolate: true,
                        minimize: false
                    }
                }
            ]
        },
        sassLoader: {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [require("autoprefixer")()]
                    }
                },
                "sass-loader"
            ]
        },
        svgLoader: {
            test: /\.svg/,
            use: {
                loader: "svg-inline-loader",
                options: {
                    removeTags: true,
                    removingTags: ["title", "desc"],
                    removingTagAttrs: ["id", "data-name"]
                }
            }
        },
        imageLoader: {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash:5].[ext]",
                        outputPath: "images/"
                    }
                }
            ]
        }
    },
    plugins: {
        cleanDistFolder: new CleanWebpackPlugin(["dist/*"]),
        buildHtmlIndex: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "index.html"
        }),
        buildHtmlSettings: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "settings/index.html"
        }),
        buildHtmlTools: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "tools/index.html"
        }),
        buildHtmlGeneric: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "generic/index.html"
        }),
        buildHtmlElements: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "elements/index.html"
        }),
        buildHtmlObjects: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "objects/index.html"
        }),
        buildHtmlComponents: new HtmlWebpackPlugin({
            template: "./app/layout.html",
            filename: "components/index.html"
        }),
        sassBuilder: sassBuilder
    }
};
