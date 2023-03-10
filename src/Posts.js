import { FaWhatsapp } from "react-icons/fa";

export const Posts = () => {
  return (
    <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(respuesta => respuesta.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    } }>
        <FaWhatsapp/>
        Traer Datos
    </button>
  );
};
