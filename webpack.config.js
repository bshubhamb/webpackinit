const path = require('path');

module.exports = {

    // Specify the path to entry file here. This is where webpack begins its job
    entry: './src/javascript/index.js',

    //Path and file name of result bundle
    // All JS will be bundled in this file

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },

    // Default mode is production
    // Production bundle is minified as compared to development bundle
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}