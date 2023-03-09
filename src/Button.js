import PropTypes from 'prop-types'; // ES6

const handleOnClick = () => {
    console.log("Boton");
}

export function Button( {text, name="Usuario"} ) {
    return <button onClick={ handleOnClick }>
        {text} - {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}
