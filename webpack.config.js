const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
    {
        test: /\.($*)css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader'
        ]
    },
    { 
            test:/\.(png|gif|jpg)$/,
                use: [{
                    'loader': 'file-loader',
                    options:{
                        name:'aseets/[hash].[est]'
                    }
                }]
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: './index.html',
        } ),
    ],
};x