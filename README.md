## Temática: Un Previdiano en Racoon-City

Nada hacía presagiar, que al puro estilo Cloverfield-Paradox nuestro planeta sería transportado a una dimensión donde vivimos en Racoon-City
antes de la caída. Para tu suerte buen Previdiano, te encuentras con Alice con su pistola SIG-Sauer P226R, con la que puede matar zombies
de un solo tiro, y está decidida a salvarte.

A pesar de contar con Alice, hay zombies acercándose, y alguno puede alcanzarlos y terminar con todo. Así que, querido Previdiano
veamos si sobrevives.

### Desafío:

Figurativamente, imagina que el terreno donde te encuentras se define por cuadrículas de 1 metro cuadrado, formándose un plano cartesiano, 
y los zombies caminan hacia ustedes. Sólo ellos se moverán, y podrán hacerlo de forma recta o en diagonal en todas direcciones sólo 1 metro por turno
, cómo se puede visualizar en el ejemplo de las figuras siguientes, donde los números 0,1,2 representan los pasos que dan en cada dirección:

a) En diagonal:
|    |    |    |    |
|----|----|----|----|
|X   |X   |X   |X   |
|X   |X   |X   |X   |
|X   |0   |X   |X   |
|X   |X   |1   |X   |
|X   |X   |X   |2   |

|    |    |    |    |
|----|----|----|----|
|X   |X   |X   |0   |
|X   |X   |1   |X   |
|X   |2   |X   |X   |
|X   |X   |X   |X   |
|X   |X   |X   |X   |

b) Recto:

|    |    |    |    |
|----|----|----|----|
|X   |X   |X   |X   |
|X   |X   |X   |X   |
|X   |X   |X   |X   |
|0   |1   |2   |X   |
|X   |X   |X   |X   |

|    |    |    |    |
|----|----|----|----|
|X   |X   |0   |X   |
|X   |X   |1   |X   |
|X   |X   |2   |X   |
|X   |X   |X   |X   |
|X   |X   |X   |X   |

Se asumirá, que Alice (A) se encuentra en la posición (0,0), y tu ubicación (P) Previdiano con suerte o sin ella será entregada como entrada
en el desafío con un array [X,Y] que significará tu ubicación, debes recordar que ni tú ni Alice se pueden mover, sólo los zombies, y
que sólo Alice puede disparar, tu estás en posición fetal sufriendo por tu vida.

Así también, se entregarán como entrada las ubicaciónes de los zombies (Z) en una matriz M[2xN] del tipo [[X1,Y1],[X2,Y2],[X3,Y3],[X4,Y5],...[XN,YN],] 

Alice, sólo puede matar un zombie por vez, y en cada turno los zombies caminan al objetivo ( Alice o tú ) más cercano sólo 1 metro a la vez.
Y sólo terminará el algoritmo cuando Alice muera, Alice sobreviva a todos los zombies, o no se ingresen zombies.

A continuación se muestra un ejemplo:

| Entrada                 | Identificar Variables               |
|-------------------------|-------------------------------------|
| [[1,3],[[-1,-2],[2,-3]] | A=[0,0] P=[1,3] Z=[[-1,-2],[2,-3]]  |

Lo que se puede interpretar como:

|    |    |    |    |    |    |    |
|----|----|----|----|----|----|----|
|X   |X   |X   |X   |P(1,3)   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |A(0,0)   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |Z1(-1,-2)   |X   |X   |X   |X   |
|X   |X   |X   |X   |X   |Z2(2,-3)   |X   |

A partir de ahí, Alice comienza a disparar. Siempre le dispara al más cercano a ella, y los zombies se acercan un metro
en línea recta o diagonal a su presa más cercana, quedándo de la siguiente manera:

|    |    |    |    |    |    |    |
|----|----|----|----|----|----|----|
|X   |X   |X   |X   |P(1,3)   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |A(0,0)   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |E   |X   |Z2(1,-2)   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |

Finalmente Alice logra matar a los dos zombies antes de se coman a alguno, quedándo figurativamente de la siguiente manera:

|    |    |    |    |    |    |    |
|----|----|----|----|----|----|----|
|X   |X   |X   |X   |P(1,3)   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |X   |   |X   |X   |
|X   |X   |X   |A(0,0)   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |E   |X   |E   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |

En cuanto a lo que debe entregar el algoritmo, es como sigue:
a) Si sobreviven Alice y tú debe entregar el siguient texto: Gracias Alice!
b) Sólo Alice sobrevive: Adiós mundo cruel!
c) Si muere Alice: RIP Alice
d) Cualquier otro caso que no cumpla con las condiciones anteriores: Error

Por lo que la salida del ejemplo es:
Gracias Alice!

Restricciones:
1) Se descontará por usar bucles for y/o while
2) La cantidad de zombies: 0 > Zcant > 10
3) Las coordenadas: -15 > Xi < 15 , -15 > Yi < 15 

Motivación: Un ejercicio similar a este fue utilizado para una entrevista
en una reconocida empresa en USA.

Ánimo Previdiano, ya termina la semana, 
aprovecha de hacer amigos y aprender en el proceso!.
