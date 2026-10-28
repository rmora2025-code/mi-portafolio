Declaración uso IA: SI

A continuación se detallan las instancias en las que se hizo uso de IA en la realización de este proyecto, declarando las entradas y salidas además de una reflexión sobre que cambios realizar.

En todos los casos se utilizó la IA DeepSeek-V4-Flash

1.  Input: 
        En un proyecto de react se me pide crear una lista con unos enlaces dentro de un documento Header.jsx usando <NavLink> en lugar de <a>. Comprendo la sintaxis en html pero desconozco como adaptarlo a este formato. Dame la sintaxis.

    Output:
        # Uso de `NavLink` en React (react-router-dom)

        `NavLink` es un componente de **react-router-dom** que funciona como un `<a>` pero con la ventaja de que aplica automáticamente una clase `active` cuando la ruta coincide con la URL actual.

        ## 1. Importación

        ```jsx
        import { NavLink } from 'react-router-dom';
        ```

        ## 2. Sintaxis básica

        En HTML tendrías algo así:

        ```html
        <a href="/inicio">Inicio</a>
        <a href="/contacto">Contacto</a>
        ```

        En React con `NavLink` sería:

        ```jsx
        <NavLink to="/inicio">Inicio</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        ```

        > ⚠️ **Diferencias clave con `<a>`:**
        > - `href` → se sustituye por **`to`**
        > - No necesitas `onClick` ni recargar la página

        ## 3. Tu `Header.jsx` con una lista

        ```jsx
        import { NavLink } from 'react-router-dom';
        import './Header.css'; // opcional

        function Header() {
        return (
            <header>
            <nav>
                <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/productos">Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
                </ul>
            </nav>
            </header>
        );
        }

        export default Header;
        ```

        ## 4. Estilar el enlace activo

        `NavLink` añade la clase `active` automáticamente al enlace que coincide con la ruta. En tu CSS:

        ```css
        nav a.active {
        color: #61dafb;
        font-weight: bold;
        }
        ```

        ## 5. Versión con `className` dinámico (opcional)

        Si quieres controlar tú mismo la clase o añadir varias:

        ```jsx
        <NavLink
        to="/productos"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
        Productos
        </NavLink>
        ```

        También puedes usar `style`:

        ```jsx
        <NavLink
        to="/contacto"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        >
        Contacto
        </NavLink>
        ```

        ## 6. Si generas la lista desde un array

        Muy útil cuando tienes muchas rutas:

        ```jsx
        import { NavLink } from 'react-router-dom';

        const links = [
        { to: '/', label: 'Inicio' },
        { to: '/productos', label: 'Productos' },
        { to: '/contacto', label: 'Contacto' },
        ];

        function Header() {
        return (
            <header>
            <nav>
                <ul>
                {links.map((link) => (
                    <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                    </li>
                ))}
                </ul>
            </nav>
            </header>
        );
        }

        export default Header;
        ```

        ## Requisitos previos

        1. Instalar react-router-dom:
        ```bash
        npm install react-router-dom
        ```
        2. Que tu app esté envuelta en un `<BrowserRouter>` (o `HashRouter`) en `main.jsx` / `index.js`:

        ```jsx
        import { BrowserRouter } from 'react-router-dom';

        <BrowserRouter>
        <App />
        </BrowserRouter>
        ```

        Con esto tu `Header.jsx` funcionará igual que tu HTML pero con navegación sin recarga y detección automática de la ruta activa. 🚀

    Reflexión y cambios a realizar:
        Veo que la IA me dió mas información de lo que se le solicitó. Tenía la duda de como utilizar nav en react pero comprendo que sigue la misma estructura que el resto de modificaciones hechas hasta el momento (con ayuda del paso a paso proporcionado por el profesor).
        Se tomó directamente la linea proporcionada:
        '
            import { NavLink } from 'react-router-dom';
        '
        Ahora comprendo que el resto es bastante sencillo, se crea la lista como se haría normalmente en un documento html pero en lugar de usar 
        '
            <a href="/algo">Algo</a>
        '
        se reemplaza <a> por <NavLink> y 'href' por 'to', quedando:
        '
            <NavLink to="/algo">Algo</NavLink>

        '
        Por supuesto todo dentro de una función que retorne la estructura html que se tenía prevista.
        En este caso la función es Header()



2.  Input: 
        Ahora se me pide lo siguiente, desconozco la sintaxis de la función Layout "Crear Layout.jsx: renderiza Header, luego <Outlet /> (donde aparecerá cada página) y luego Footer." Dame una respuesta conscisa.

    Output:
        # `Layout.jsx` con `<Outlet />`

        ```jsx
        import { Outlet } from 'react-router-dom';
        import Header from './Header';
        import Footer from './Footer';

        function Layout() {
        return (
            <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            </>
        );
        }

        export default Layout;
        ```

        ## Claves

        - **`<Outlet />`** (importado de `react-router-dom`) es el marcador donde React Router renderiza la página hija según la ruta.
        - Se usa junto con rutas anidadas en el router:

        ```jsx
        <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        </Route>
        ```

        Todo lo que esté dentro de ese `<Route>` padre se pinta en el lugar de `<Outlet />`.

    Reflexión y cambios a realizar:
        Comprendo que hay que hacer las importaciones correspondientes con los contenidos de lo que tengo en /Header y /Footer. 
        Lo que se hace con estas lineas es simplemente indicar en donde va a ir cada cosa, en este caso el contenido que estará de manera fija (header y footer) mientras que en <main> donde está la etiqueta <Outlet /> será donde aparece de forma dinámica el resto de páginas, una sola al mismo tiempo, recordando lo que vimos en clases de la diferencia ente una página web y un sitio web.

3.  Input: 
        Entiendo como debo hacerlo pero por falta de tiempo necesito que me devuelvas el codigo de App.jsx donde se importen los elementos Mayout, Inicio, SobreMi, Habilidades, Proyectos y Contacto. Layout está en la carpeta de components y el resto en pages. Tambien dame el bloque de export default function App() completo.

    Output: 
        # `App.jsx`

        ```jsx
        import { Routes, Route } from 'react-router-dom';
        import Layout from './components/Layout';
        import Inicio from './pages/Inicio';
        import SobreMi from './pages/SobreMi';
        import Habilidades from './pages/Habilidades';
        import Proyectos from './pages/Proyectos';
        import Contacto from './pages/Contacto';

        export default function App() {
        return (
            <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre-mi" element={<SobreMi />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/contacto" element={<Contacto />} />
            </Route>
            </Routes>
        );
        }
        ```

        ## Notas rápidas

        - El `<Route element={<Layout />}>` **sin `path`** actúa como padre: todas las rutas hijas se renderizan dentro de su `<Outlet />`.
        - Ajusta las rutas (`/sobre-mi`, `/habilidades`, etc.) y los nombres de archivo a los que uses realmente en tus `NavLink`.
        - Recuerda que en `main.jsx` (o `index.js`) la app debe estar envuelta en `<BrowserRouter>`:

        ```jsx
        import { BrowserRouter } from 'react-router-dom';

        <BrowserRouter>
        <App />
        </BrowserRouter>
        ```

    Reflexión y cambios a realizar:
        Era lo que tenía en mente aunque no termino de entender exactamente la sintáxis del segundo bloque puedo entender la idea general. Dado que es nuestro archivo principal que mostrará la página pues hay que pasarle todas las paginas.
        El código indicado fue agregado directamente en App.jsx

4.  Input:
        Ayudame con la sintaxis de la siguiente instrucción, respuesta conscisa: Habilidades: primero escribe las habilidades como un arreglo de objetos (nombre y nivel), guárdalo en una constante y recórrelo con .map(). No copies y pegues cada tarjeta a mano. Recuerda dar una key única a cada elemento. Agrega después la lista de herramientas (Git, GitHub, VS Code, etc.).

    Output:
        # `Habilidades.jsx`

        ```jsx
        function Habilidades() {
        const habilidades = [
            { nombre: 'JavaScript', nivel: 'Avanzado' },
            { nombre: 'React', nivel: 'Intermedio' },
            { nombre: 'HTML', nivel: 'Avanzado' },
            { nombre: 'CSS', nivel: 'Avanzado' },
            { nombre: 'Node.js', nivel: 'Intermedio' },
        ];

        const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'npm'];

        return (
            <section>
            <h1>Habilidades</h1>

            {/* Tarjetas generadas con .map() */}
            <div className="habilidades">
                {habilidades.map((hab) => (
                <div key={hab.nombre} className="tarjeta">
                    <h3>{hab.nombre}</h3>
                    <p>{hab.nivel}</p>
                </div>
                ))}
            </div>

            {/* Lista de herramientas */}
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
        ```

        ## Claves

        - **Arreglo de objetos** → `const habilidades = [{ nombre, nivel }, ...]`
        - **`.map()`** → recorre y devuelve una tarjeta por elemento (sin copiar/pegar).
        - **`key`** → única por elemento (`hab.nombre` o `tool`), obligatoria para React.
        - Para las herramientas basta un arreglo de strings + `.map()`.


    Reflexión y cambios a realizar: 
        La IA percibe que tengo más nivel del real... lo nuevo aquí es que veo que map funciona muy similar a un for en python asique asique no es necesario anotar cada bloque mas de una vez, basta con una sola y colocar lo que va diferente en cada bloque dentro de una lista con diccionario. 
        Se agregaron los bloques tal cual pero cambiando algunas constantes para que la información fuera más realista. 
        (habia olvidado agregar el commit aquí) 

5.  Esta vez le pasé a la IA directamente la instrucción dada en el paso a paso.
    Input: 
        Fase 6. Componente reutilizable con props: TarjetaProyecto

        Crea components/TarjetaProyecto.jsx. El componente recibe por props titulo, descripcion y enlace (puedes desestructurarlas en los parámetros de la función).
        Dentro muestra el título, la descripción y un enlace "Ver proyecto". Como es un enlace externo a GitHub, aquí sí corresponde <a href>; agrégale target="_blank" y rel="noopener noreferrer".
        En Proyectos.jsx define un arreglo con dos o tres proyectos y recórrelo con .map(), pasando los datos como props a cada TarjetaProyecto.
        Usa enlaces reales a tus repositorios. Si un proyecto no tiene repositorio, indícalo en lugar de poner un enlace falso.

        Verificación: al cambiar el título de un proyecto en el arreglo, debe cambiar en pantalla. Eso confirma que las props funcionan.
        Commit: feat: página Proyectos con TarjetaProyecto.

    Output:
        ¡Excelente! Ahora entramos en el corazón de React: **los componentes reutilizables y las props**. Esto es lo que hace que React sea tan poderoso. No te asustes, es más simple de lo que parece.

        La idea es: crear una "tarjeta" una sola vez, y luego usarla muchas veces pasándole datos diferentes. Es como un molde de galletas: el molde es el componente, y los datos (título, descripción, enlace) son la masa que le pones.

        ---

        ### Paso 1: Crear `src/components/TarjetaProyecto.jsx`

        Crea este archivo y pega lo siguiente:

        ```jsx
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
        ```

        **¿Qué está pasando aquí?**
        - `{ titulo, descripcion, enlace }` es **desestructuración**: en lugar de recibir un objeto `props` y luego hacer `props.titulo`, directamente extraemos las propiedades. Es más limpio.
        - El `{enlace ? (...) : (...)}` es un **operador ternario**: si `enlace` existe (es decir, no es `undefined` ni `null`), muestra el `<a>`. Si no existe, muestra el `<span>` con el texto "Sin repositorio disponible". Así cumplimos con la instrucción de no poner enlaces falsos.

        ---

        ### Paso 2: Actualizar `src/pages/Proyectos.jsx`

        Abre `Proyectos.jsx` y reemplaza todo su contenido por esto:

        ```jsx
        import TarjetaProyecto from '../components/TarjetaProyecto'

        export default function Proyectos() {
        const proyectos = [
            {
            titulo: 'Mini Portafolio',
            descripcion: 'Este mismo portafolio, construido con React, Vite y React Router.',
            enlace: 'https://github.com/TU-USUARIO/mini-portafolio',
            },
            {
            titulo: 'Proyecto de ejemplo 1',
            descripcion: 'Descripción breve de tu primer proyecto.',
            enlace: 'https://github.com/TU-USUARIO/proyecto-1',
            },
            {
            titulo: 'Proyecto sin repositorio',
            descripcion: 'Un proyecto que aún no tiene repositorio público.',
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
        ```

        **Cosas importantes:**
        1.  **Importa el componente** desde `../components/TarjetaProyecto`. La ruta `../` significa "sube un nivel desde `pages/` hasta `src/`, y luego entra en `components/`".
        2.  **El arreglo `proyectos`** tiene objetos con las tres propiedades que espera el componente.
        3.  **El `.map()`** recorre el arreglo y por cada proyecto renderiza un `<TarjetaProyecto />`, pasándole los datos como props.
        4.  **El `key`** es obligatorio y debe ser único. Usamos `proyecto.titulo` porque asumimos que no se repite.
        5.  **El tercer proyecto tiene `enlace: null`** para probar la condición del ternario. Deberías ver "Sin repositorio disponible" en lugar del enlace.

        **Antes de guardar**, cambia `TU-USUARIO` por tu usuario real de GitHub en los enlaces. Si no tienes repositorios públicos todavía, puedes dejar el primero con tu repo real (el de `mini-portafolio`) y los otros con `null`.

        ---

        ### Paso 3: Verificación (¡la prueba clave!)

        1.  Guarda los dos archivos.
        2.  Ve al navegador y entra a la página "Proyectos" (clic en el menú o escribe `http://localhost:5173/proyectos`).
        3.  Deberías ver tres tarjetas: la primera con el título "Mini Portafolio" y un enlace "Ver proyecto"; la segunda con otro proyecto; la tercera con "Sin repositorio disponible".
        4.  **La prueba de las props:** vuelve a VS Code, cambia el título del primer proyecto en el arreglo (por ejemplo, de "Mini Portafolio" a "Mi Portafolio Increíble"), guarda, y mira el navegador. El título debería cambiar automáticamente sin recargar. Si cambia, **las props funcionan perfectamente**.
        5.  Abre la consola (F12) y revisa que no haya warnings en amarillo sobre `key`.

        ---

        ### Paso 4: Commit

        Desde la terminal:
        ```bash
        git add .
        git commit -m "feat: página Proyectos con TarjetaProyecto"
        git push
        ```

        ---

        **Un detalle sobre `target="_blank"` y `rel="noopener noreferrer"`:** el `target="_blank"` abre el enlace en una pestaña nueva. El `rel="noopener noreferrer"` es una medida de seguridad: evita que la página de destino pueda manipular la tuya (algo llamado "tabnabbing"). Es buena práctica siempre que uses `target="_blank"`, y el enunciado lo pide explícitamente.

        **Si algo no se ve o la consola muestra un error rojo**, mándamelo y lo revisamos. ¡Ya casi terminas la estructura principal!

    Reflexión y cambios a realizar: 
        El bloque de TarjetaProyecto.jsx me llamó la atención por como la ia entegó los atributos de alguna forma separados. Resulta bastante cómoda esta función porque, una vez más, no es necesario anotar lo mismo cada vez. Me hace pensar en un proyecto escalable que permite que sea más rápido y sencillo el agregar proyectos al portafolio.
        En principio es simple, la función recibe tres parametros, titulo y descripción los muestra tal cual pero el parametro de enlace es mas interesante. Lo que la función devuelve en esta parte depende de si existe o no un enlace, en caso de que haya nos lleva a él si no pues avisa de primeras que que no hay ningun repositori odisponible para dichoa tarjeta/proyecto.
        Respecto al código se incluyeron los bloques tal cual dentro del portafolio solo que cambiando el contenido de const proyectos en el documento Proyectos.jsx
        El bloque presentado en este ultimo documento nos permite usar la función de TarjetaProyecto pasandole los atributos de la función que hay definido dentro de function Proyectos(), Mas adelante retorna la sección Proyectos con sus respectivas tarjetas que se repiten en estructura pero cambian en contenido, este bloque solo se escribe una vez porque usamos la función map() para recorrer la constante.

