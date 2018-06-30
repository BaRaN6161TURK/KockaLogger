/**
 * io.js
 *
 * Module for all HTTP communication
 */
'use strict';

/**
 * Importing modules
 */
const http = require('request-promise-native'),
      pkg = require('../package.json'),
      util = require('./util.js');

/**
 * Constants
 */
const USER_AGENT = `${pkg.name} v${pkg.version}: ${pkg.description}`;

/**
 * HTTP communication handler
 */
class IO {
    /**
     * Queries the MediaWiki API
     * @param {String} wiki Wiki to query
     * @param {Object} options Query parameters
     * @param {Function} transform Transformation function
     * @returns {Promise} Promise to listen for response
     */
    static query(wiki, options, transform) {
        if (
            typeof wiki !== 'string' ||
            typeof options !== 'object'
        ) {
            return;
        }
        options.format = 'json';
        options.action = 'query';
        return http({
            headers: {
                'User-Agent': USER_AGENT
            },
            json: true,
            method: 'GET',
            qs: options,
            transform,
            uri: `${util.url(wiki)}/api.php`
        });
    }
    /**
     * Posts to a Discord webhook
     * @param {String} url Webhook URL
     * @param {Object} body POST body
     * @returns {Promise} Promise to listen on for response
     */
    static webhook(url, body) {
        return http({
            body,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': USER_AGENT
            },
            json: true,
            method: 'POST',
            uri: url
        });
    }
}

module.exports = IO;
