/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
    poweredByHeader: false,
    distDir: 'build'
});


module.exports = {
    images: {
        domains: ['avatars.dicebear.com']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    }
};
