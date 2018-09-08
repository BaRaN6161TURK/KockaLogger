/**
 * main.js
 *
 * Main module for the Slack transport
 */
'use strict';

/**
 * Importing modules
 */
const Transport = require('../transport.js'),
      io = require('../../include/io.js');

/**
 * Constants
 */
const PREFIX = 'https://hooks.slack.com/services/';

/**
 * Slack transport class
 */
class Slack extends Transport {
    /**
     * Class constructor
     * @param {Object} config Transport configuration
     */
    constructor(config) {
        super(config);
        const {url} = config;
        if (
            typeof url !== 'string' ||
            !url.startsWith(PREFIX) ||
            url.split('/').length !== 7
        ) {
            throw new Error('Invalid Slack transport configuration!');
        }
        this._url = url;
    }
    /**
     * Executes the transport
     * @param {Object} message Formatted message to transport
     */
    execute(message) {
        io.webhook(this._url, message).catch(function(e) {
            this._logger.error('Slack transport error:', e);
        }.bind(this));
    }
}

module.exports = Slack;
