var webpack = require('webpack');
var path = require('path');
var lib_dir = __dirname + '/public/libraries',
    node_dir = __dirname + '/node_modules',
    plugins_dir = __dirname + '/public/plugins';

module.exports = {
    resolve: {
        alias: {
            react: node_dir + '/react',
            reactDom: node_dir + '/react-dom',
            jquery: node_dir + '/jquery/dist/jquery.min.js',
            jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
            bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
        }
    },
    entry: {
        app: './src/index',
        vendors: ['react', 'reactDom', 'jquery', 'bootstrap'],
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "dist/js/[name].bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader'],
            },
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         screw_ie8: true,
        //         warnings: false
        //     }
        // })

    ]
};
