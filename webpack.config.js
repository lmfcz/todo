const path = require('path')//nodejs基本包，处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),//__dirname当前文件根路径
	output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                loader: 'css-loader'
            },
            {
                test: /.styl$/,
                loader: 'stylus-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}