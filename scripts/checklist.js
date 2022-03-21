(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;
    function checkList(selector) {
        if (!selector) {
            throw new Error('no selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    checkList.prototype.removeRow = function(email) {
        this.$element
        .find('[value="' + email + '"]')
        .closest('[data-coffee-order="checkbox]')
        .remove();
    }

    checkList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function(event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

    checkList.prototype.addRow = function (coffeeOrder){
        this.removeRow(coffeeOrder.emailAddress);
        var rowElement = new Row(coffeeOrder);
        this.$element.append(rowElement.$element);
    }

    function Row(coffeeOrder){
        let $div = $('<div></div>',  {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });
        let description = coffeeOrder.size + ' ';
        if(coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }

        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';
    
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);
    
        this.$element = $div
    }



    App.checkList = checkList;
    window.App = App;
})(window);