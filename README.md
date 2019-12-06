# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definiendo al usuario](#2-definiendo-al-usuario)
* [3. Testeo de usabiidad](#3-testeo-de-usabilidad)


***

## 1. Preámbulo

'League of Legends' es un juego del género MOBA (multijugador de arena de batalla online) que se estrenó en octubre de 2009. 

El usuario elige entre los 144 personajes existentes en el juego, llamados Campeones. Después, se debe pelear en equipo contra otros jugadores; para ganar, el modo más común es destruir la estructura central de la base enemiga, llamada Nexo.

Los personajes comienzan la batalla a bajo nivel y van subiendo conforme avanza la partida. Cuanto más nivel se tiene, más habilidades están disponibles. 

Es por esto, que creamos una página web que almacena los datos más importantes de los 144 campeones, tales como la posición donde juegan, nivel de habilidad, entre otros.

## 2. Definiendo al usuario

Para definir a nuestro usuario final, decidimos realizar una encuesta utilizando Form de Google. Para ello, redactamos 7 preguntas y la realizamos en un universo de 22 personas. A continuación se mostrarán las preguntas y gráficos obtenidos; además de las apreciaciones que tuvimos como dupla y conclusión:

![alt text](/src/Images/Encuesta/Preguna1.png)

![alt text](/src/Images/Encuesta/Pregunta2.png)
•	La mayoría de los encuestados tienes entre 30 a 35 años.

![alt text](/src/Images/Encuesta/Pregunta3.png)
•	Más del 68% dice jugar juegos de rol.

![alt text](/src/Images/Encuesta/Pregunta4.png)
•	Todos los encuestados dicen conocer los juegos mencionados. 

![alt text](/src/Images/Encuesta/Pregunta5.png)
•	A partir de esta pregunta, pudimos escoger qué juego utilizaríamos para el proyecto. En este caso fue League of Legends, ya que el preferido de los encuestados fue este.

![alt text](/src/Images/Encuesta/Pregunta6.png)
•	A pesar de que todos conocen los juegos, es relevante que más del 27% responde no jugar ninguno.

![alt text](/src/Images/Encuesta/Pregunta7.png)
•	Esta pregunta también es de importancia, ya que nos indica que nuestro usuario final será principiante a medio. Por ende nuestro proyecto está dirigido a estos.

## 3. Bosquejando

### Boceto a mano alzada
A partir de la encuesta, pudimos dedicarnos a realizar los bocetos a mano alzada de la interfaz que queríamos para nuestro proyecto. A continuación dejamos las imágenes

### Prototipo baja fidelidad

### Prototipo alta fidelidad

### Prototipo alta fidelidad con interacción

## 3. Testeo de usabilidad

Solo pudimos realizar tres testeos de usabilidad. A continuación adjuntamos los videos y apreciaciones finales:


### DOM

- [ ] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [ ] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).


## 5. Criterios de aceptación mínimos del proyecto

Los criterios que deberás considerar para saber si has completado este proyecto
son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de entendimiento de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina de construir una historia de usuario antes
de pasar a la siguiente (Cumple con Definición de Terminado + Criterios de
Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita. <!--filtrar y ordenar la data.-->
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones que tenga tu código. <!--encargadas de  _procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_
estadísticas.-->

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).


## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.
***