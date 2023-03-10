
export const Posts = () => {
  return (
    <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(respuesta => respuesta.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    } }>
        Traer Datos
    </button>
  );
};
