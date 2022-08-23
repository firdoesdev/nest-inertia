const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const startServerPlugin = require('start-server-webpack-plugin');

module.exports = (options) =>{
    return{
        ...options,
        entry:['webpack/hot/poll?100',options.entry],
        watch:true,
        external:[
            nodeExternals({
                allowList:['webpack/hot/poll?100'],
            }),
        ],
        plugins:[
            ...options.plugins,
            new webpack.HotModuleReplacementPlugin(),
            new webpack.WatchIgnorePlugin([/\.js$/,/\.d\.ts$/]),
            new startServerPlugin({name: options.output.filename})

        ]
    }
}