import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section>

      <h1>Rayen Mora</h1>
      <h2>Ingeniera civíl en Informática en formación.</h2>
      <p>Bienvenida a mi portafolio, estaré subiendo aquí mis proyectos y desarrollo personal dentro del área de la informática.</p>
      
      <Link to="/proyectos">Explorar</Link>

      <div>

        <article>
          <h3>Proyectos</h3>
          <p>LO que llevo hasta ahora.</p>
        </article>

        <article>
          <h3>Habilidades</h3>
          <p>Las tecnologías que voy aprendiendo.</p>
        </article>

      </div>

    </section>
  )
}