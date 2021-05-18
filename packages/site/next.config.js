const withBundleAnalyzer = require('@next/bundle-analyzer');
const appConfig = require('../../appConfig.json');
const NODE_ENV = process.env.NODE_ENV;
const APP_ENV = appConfig[NODE_ENV];

console.log('NODE_ENV', NODE_ENV);
console.log('app-env', APP_ENV);

const config = {
    env: {
        NEXT_TELEMETRY_DISABLED: 1,
    },
    poweredVByHeader: false,
    publicRuntimeConfig: {
        APP_ENV
    }
};

module.exports = config;