(function (window) {
    'use strict';

    let App = window.app || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided!');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with secltor: ' + selector);
        }
    }

})