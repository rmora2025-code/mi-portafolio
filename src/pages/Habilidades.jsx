function Habilidades() {
  const habilidades = [
    { nombre: 'Python', nivel: 'Intermedio' },
    { nombre: 'JavaScript', nivel: 'Básico' },
    { nombre: 'React', nivel: 'Básico' },
    { nombre: 'HTML', nivel: 'Básico' },
    { nombre: 'CSS', nivel: 'Básico' },
    { nombre: 'Node.js', nivel: 'Básico' },
    { nombre: 'C++', nivel: 'Básico' },
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code'];

  return (
    <section>
      <h1>Habilidades</h1>

      <div className="habilidades">
        {habilidades.map((hab) => (
          <div key={hab.nombre} className="tarjeta">
            <h3>{hab.nombre}</h3>
            <p>{hab.nivel}</p>
          </div>
        ))}
      </div>

      <h2>Herramientas</h2>
      <ul>
        {herramientas.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;