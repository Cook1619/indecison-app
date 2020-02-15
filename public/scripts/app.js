'use strict';

var onShowDetails = function onShowDetails() {
    details = !details;
    render();
};
var details = false;

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            details ? 'Hide Details' : 'Show Details'
        ),
        details && React.createElement(
            'p',
            null,
            'This are the details!!!!'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
render();
