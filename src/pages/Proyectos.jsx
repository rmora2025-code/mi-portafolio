import TarjetaProyecto from '../components/TarjetaProyecto'

export default function Proyectos() {
  const proyectos = [
    {
      titulo: 'Diario de sueños',
      descripcion: 'Diario personal.',
      enlace: null,
    },
    {
      titulo: 'Libros',
      descripcion: 'Historial de libros leídos, con reseña, y por leer.',
      enlace: null,
    },
    {
      titulo: 'Proyecto de ejemplo',
      descripcion: 'Descripción de ejemplo',
      enlace: null,
    },
  ]

  return (
    <section>
      <h1>Proyectos</h1>

      <div>
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>

    </section>
  )
}