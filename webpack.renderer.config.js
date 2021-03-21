const ReactRefreshTypeScript = require('react-refresh-typescript');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    module: {
        rules: [
            // Keep only general `node-loader` and
            // `@marshallofsound/webpack-asset-relocator-loader` rules
            ...rules.slice(0, 2),
            // Add customized `ts-loader` rule
            // See https://github.com/pmmmwh/react-refresh-webpack-plugin/pull/248/files
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|\.webpack)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: isDevelopment
                                ? [ReactRefreshTypeScript()]
                                : [],
                        }),
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader' },
                ],
            },
        ].filter(Boolean),
    },
    plugins: [
        ...plugins,
        isDevelopment &&
            new ReactRefreshWebpackPlugin({
                // See https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/221#issuecomment-703162594
                overlay: {
                    sockIntegration: 'whm',
                },
            }),
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
};
