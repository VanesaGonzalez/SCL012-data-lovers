# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definiendo al usuario](#2-definiendo-al-usuario)
* [3. Testeo de usabilidad](#3-testeo-de-usabilidad)
* [4. Decisiones de diseño](#4-decisiones-de-diseño)
* [5. Test unitarios](#5-test-unitarios)
* [6. Conclusión](#6-conclusion)


***

## 1. Preámbulo

'League of Legends' es un juego del género MOBA (multijugador de arena de batalla online) que se estrenó en octubre de 2009. 

El usuario elige entre los 144 personajes existentes en el juego, llamados Campeones. Después, se debe pelear en equipo contra otros jugadores. Para ganar, el modo más común es destruir la estructura central de la base enemiga, llamada Nexo.

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

### Conclusión

Gracias a la encuesta, pudimos determinar nuestro usuario final. El cual fue jugadores de LoL, ya que como se indica anteriormente
fue el juego preferido de los encuestados.

## 3. Testeo de usabilidad

Realizamos 3 testeo de usabilidad. A continuación los videos:

https://www.loom.com/share/68f26507f3c146ed848908601bb1a293


### Apreciaciones e iteración

Gracias a los testeos de usabilidad pudimos detectar cosas a mejorar en nuestro proyecto e iterar. 
  - Quitar información excesiva en Inicio.
  - Cambiar color de texto.
  - Bajar brillo color de texto.  
  - Diferenciación de color al estar en una pestaña de la página web.

  Todo esto, para que fuese menos cansador el estar frente a la pantalla y el usuario pudiera orientarse según dónde se encontraba
  en la página.

## 4. Decisiones de diseño

La decisión del diseño fue unánime. Lo más importante era incluir colores y gráficas del juego original, pero que no quedase
sobrecargado. Por eso, en este caso, los colores son sombríos en su mayoría, con destellos de brillo, como por ejemplo color
cyan y dorado; ya que el logo del juego lleva esos tonos.

El proyecto de creación de la página web, fue en esencia tener una base de datos para jugadores de nivel principiante y medio; para
que pudiesen escoger para su equipo a los campeones con mejores habilidades y destrezas.

### Historias de usuario

![alt text](/src/Images/persona1.png)
![alt text](/src/Images/persona2.png)
![alt text](/src/Images/persona3.png)


### Diseño de interfaz

Realizamos prototipos para versión escritorio y móvil. A continuación mostramos imágenes y links con cada prototipo del proyecto. Cabe destacar, que no hicimos test de usabilidad ni iteración en la verisón móvil; solo fue un ideal del proyecto. 

#### Boceto

![alt text](/src/Images/boceto1.png)

#### Prototipo de baja fidelidad escritorio

![alt text](/src/Images/prototipobajafidelidad1.png)
https://www.figma.com/proto/HyMCbw4JvXaZuUalUICR2Y/Data-Lovers-LoL?node-id=1%3A2&viewport=400%2C348%2C0.5201388597488403&scaling=scale-down


#### Prototipo de alta fidelidad escritorio

![alt text](/src/Images/prototipoaltafidelidad1.png)
https://www.figma.com/proto/oneo6NNMoZJ5mAYwJNOapL/Escritorio-Alta-Fidelidad?node-id=1%3A23&viewport=132%2C274%2C0.09203735738992691&scaling=scale-down

#### Prototipo de baja fidelidad móvil

![alt text](/src/Images/prototipobajamovil.png)
https://www.figma.com/proto/tgOj6wgj8hRAt9bRh0BM0A/BF-M%C3%B3vil?node-id=7%3A2&viewport=400%2C348%2C0.9670165181159973&scaling=scale-down

#### Prototipo de alta fidelidad móvil

![alt text](/src/Images/prototipoaltamovil.png)
https://www.figma.com/proto/HbdGJwK7q5F9L6uaJ36wgA/AF-M%C3%B3vil?node-id=10%3A2&viewport=197%2C171%2C0.23002852499485016&scaling=scale-down

### 6. Test unitarios

![alt text](/src/Images/testunitario1.png)
![alt text](/src/Images/testunitario2.png)

### 6. Conclusión

El propósito del proyecto fue crear una página web que fuese capaz de contener una base de datos, y en base a eso poder filtrar a los campeones según clase y posición de juego. Para esto tuvimos que aprender sobre objetos y arrays, para que realizara la funcionalidad de filtrado, según lo que el usuario quiere o necesita saber.

Nuestra problemática era que los jugadores de nivel principiante y medio de LoL pudiesen escoger a los mejores campeones para conformar su equipo de juego. Para ello, era muy importante que pudiesen filtrar, por cada clase que contiene un campeón y por cada posición de juego; además de saber las mejores habilidades y destrezas de cada campeón. 

Finalmente, el objetivo se cumple en la página web, ya que los usuarios pueden filtrar los campeones, según las características mencionadas anteriormente. Además, pueden obtener más información sobre los campeones, como por ejemplo, historia, nivel de vida, nivel de poder mágico, entre otros.

Para terminar, creemos 
creo que pudo ser mucho más explicativa la página, y haberle sacado más provecho al UX Desing.


