//Import File CSS
import "./task.css";

export function TaskCard( {ready} ) {

  const cardStyles = {
    backgroundColor: "#3de",
    color: "#fff",
    padding: "20px",
  };

  return (
    <div className="card">
      <h1 style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
        Mi Primera Tarea
      </h1>
      <h2 style={cardStyles}>Mi Segunda Tarea</h2>

      <p className={ready ? "green" : "red"}>{ready ? "Tarea Terminada" : "Tarea Pendiente"}</p>
    </div>
  );
}
