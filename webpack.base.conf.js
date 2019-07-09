const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
    src: path.join(__dirname, './src'),
    build: './build'
}

const COMMON_PAGES_DIR = `${PATH.src}/common.bundles/`
const COMMON_PAGES = fs.readdirSync(COMMON_PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
const DESKTOP_PAGES_DIR = `${PATH.src}/desktop.bundles/`
const DESKTOP_PAGES = fs.readdirSync(DESKTOP_PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    externals: {
        path: PATH
    },

    entry: { // точка входа
        main: `${PATH.src}/main.js`,
        index: `${PATH.src}/desktop.bundles/index.js`,
        uiKit: `${PATH.src}/common.bundles/uiKit.js`
    },
    output: { // точка выхода
        filename: './js/[name].[hash].js',
        path: path.resolve(__dirname, 'build'),  // указание абсолютного пути, __dirname - путь к текущей директории,
        publicPath: "/"
    },

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'vendors',
    //                 test: /node_modules/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },

    devtool: 'source-map', // карты js
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: { path: './postcss.config.js'}
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: { path: './postcss.config.js'}
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.m?js$/, // фильтрует файлы для обработки
                exclude: /(node_modules|bower_components)/, // исключаем переработку данной папки
                use: {
                    loader: 'babel-loader', // какой загрузчик необходимо использовать
                    options: {
                        presets: ['@babel/preset-env'] //указываем, какой презет использовать
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            // publicPath: '../img/',
                        }
                    }
                ]
            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            //\]
        ]
    },

    plugins: [ // настройка плагинов

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new CopyWebpackPlugin([
            { from: `${PATH.src}/static/img`, to: `img` },
            { from: `${PATH.src}/static/fonts`, to: `fonts` }
        ]),

        ...COMMON_PAGES.map(page => new HtmlWebpackPlugin({
            template: `${COMMON_PAGES_DIR}/${page}`,
            chunks: [`${page.replace(/\.pug/,'')}`,'main'],
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        ...DESKTOP_PAGES.map(page => new HtmlWebpackPlugin({
            template: `${DESKTOP_PAGES_DIR}/${page}`,
            chunks: [`${page.replace(/\.pug/,'')}`,'main'],
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))
    ]
};