export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article>

      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      {enlace ? (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      ) : (
        <span>Sin repositorio disponible</span>
      )}

    </article>
  )
}

