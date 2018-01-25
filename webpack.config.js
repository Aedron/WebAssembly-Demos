
const path = require('path');


module.exports = {
    entry: {
        index: path.join(__dirname, './01 - Base/index.js')
    },
    output: {
        path: path.join(__dirname, './static/dist/'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    target: 'web'
};
