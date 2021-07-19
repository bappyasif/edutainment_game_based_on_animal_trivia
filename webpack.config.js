let path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hotOnly: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resources'
            }
        ]
    }
}