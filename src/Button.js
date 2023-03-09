import PropTypes from 'prop-types'; // ES6

export function Button( {text, name="Usuario"} ) {
    return <button>
        {text} - {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}
