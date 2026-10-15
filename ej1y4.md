# Análisis de Paradigma y Aplicación de OOP en JavaScript

## Ejercicio 1
Considera el lenguaje JavaScript acotado al paradigma de programación orientada a objetos basado en prototipos y analízalo en términos de los cuatro componentes de un paradigma mencionados por Kuhn.

### a. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?
* **Todo es un objeto:** Casi cualquier entidad en JavaScript es un objeto, y cada objeto contiene un enlace interno a otro objeto llamado su prototipo, accesible vía `__proto__` o mediante `Object.getPrototypeOf()`.
* **El operador `new` y funciones constructoras:** Cualquier función invocada con la palabra clave `new` actúa como un constructor, creando un nuevo objeto cuyo prototipo apunta automáticamente a la propiedad `.prototype` de dicha función.
* **La Cadena de Prototipos:** Cuando se accede a una propiedad o método de un objeto, el motor de JavaScript lo busca primero en el propio objeto. Si no lo encuentra, lo busca en su prototipo, luego en el prototipo del prototipo, y así sucesivamente hasta llegar a `null`.
* **Herencia por delegación:** Los objetos no copian el comportamiento de una clase madre; en su lugar, delegan la búsqueda de métodos y propiedades a su objeto prototipo en tiempo de ejecución.

### b. Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?
* **Flexibilidad y dinamismo:** Se cree que es superior porque permite modificar, adaptar o extender objetos y comportamientos en tiempo de ejecución sin estar encasillado por una estructura de clases rígida.
* **La simplicidad conceptual de "objetos que heredan de objetos":** Es conceptualmente más directo tomar un objeto que ya funciona y usarlo como base (molde vivo) para crear otros.

---

## Ejercicio 4
Explica en un texto, con ejemplos y fundamentación qué características de la OOP utilizaste para resolver los programas de los Ejercicios 2 y 3. Si hay alguna que no utilizaste o no implementaste, indica cuál y por qué crees que no fue necesario.

### Ejercicio 2
* **Encapsulamiento y Ocultamiento de la Información:** En la clase `Calculadora`, uso `#resultado` con el prefijo numeral `#`, para que la variable sea estrictamente privada, por lo que nadie fuera de la clase puede modificarla o leerla directamente. Para ver su valor actual, es obligatorio usar un método público autorizado como `obtenerResultado()`.
* **Instanciación:** Se instancia un objeto de la clase dándole un valor inicial: `const calculadora1 = new Calculadora(primerNumero)`.

#### ¿Qué característica NO se utilizó y por qué?
* **Herencia de Clases:** El problema a resolver era una calculadora simple que opera sobre un único flujo numérico; no existían subtipos de calculadoras.

### Ejercicio 3
* **Abstracción y Encapsulamiento:** Creo la función constructora `Tarea` para guardar las propiedades (`titulo`, `estado`, etc.) junto con sus funciones (`contieneEnTitulo`). Lo mismo con `ListaDeTareas`, que agrupa el arreglo de tareas y los métodos para buscarlas o agregarlas sin mostrar cómo lo hace por dentro.
* **Instanciación (Creación de objetos):** Uso moldes para crear objetos independientes. Cada vez que el usuario crea una tarea o abre un menú, se utiliza la palabra clave `new` (por ejemplo: `new Tarea` o `new MenuEditarTarea(tarea)`).
* **Herencia basada en Prototipos:** En lugar de duplicar los métodos en cada tarea, los asignamos al `prototype` (como `Tarea.prototype.registrarEdicion`), permitiendo que todas las tareas accedan a ellos.

#### ¿Qué característica NO se utilizó y por qué?
* **Herencia de clases:** No tenía subtipos de tareas; todas las tareas son del mismo tipo y los menús funcionan como pantallas independientes, por lo que armar una jerarquía de clases habría sido complicar el código innecesariamente.