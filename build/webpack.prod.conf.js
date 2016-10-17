var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : config.build.env;
var glob = require('glob');

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].js'), //源
        chunkFilename: utils.assetsPath('js/[id].js') //源
            //filename: path.join(config.build.assetsSubDirectory, '[name].[chunkhash].js'),
            //chunkFilename: path.join(config.build.assetsSubDirectory, '[id].js')
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        //new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')), //源
        new ExtractTextPlugin(utils.assetsPath('css/[name].css')),
        //new ExtractTextPlugin(path.join(config.build.assetsSubDirectory, '[name].[contenthash].css')),

        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        // 
        // 
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing' ? 'index.html' : config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

/**
 * 多文件输出
 */
function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;

    glob.sync(globPath).forEach(function(entry) {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    });
    console.log(entries);
    return entries;
}

var pages = getEntry('./src/module/**/*.html');
console.log(global.aa);
console.log(webpackConfig.entry);
for (var pathname in pages) {
    if (pathname == 'module/login') {
        //delete webpackConfig.entry[pathname];
        //continue;
    }
    console.log(pages);
    // 配置生成的html文件，定义路径等
    var conf = {
        //filename: "login" + '.html', //生成的文件
        filename: pathname.split("module/")[1] + '.html', //生成的文件
        template: pages[pathname], // 模板路径
        inject: true, // js插入位置
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeAttributeQuotes: false
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
        },
        chunksSortMode: 'dependency'
    };


    if (pathname in webpackConfig.entry) {
        conf.chunks = ['vendor', 'manifest', pathname];
        conf.hash = true;
    }

    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

// 返回处理后输出的路径
function changeEnrtyKey(){
    console.log("输出的原始路径：********************");
    console.log(webpackConfig.entry);
    console.log("输出的原始路径：********************");

    return false;
}
changeEnrtyKey();

/*endof 多文件输出*/

module.exports = webpackConfig
