## Temática: Un Previdiano en Racoon-City

Nada hacía presagiar, que al puro estilo Cloverfield-Paradox nuestro planeta sería transportado a una dimensión donde vivimos en Racoon-City
antes de la caída. Para tu suerte buen Previdiano, te encuentras con Alice con su pistola SIG-Sauer P226R, con la que puede matar zombies
de un solo tiro, y está decidida a salvarte.

A pesar de contar con Alice, hay zombies acercándose, y alguno puede alcanzarlos y terminar con todo. Así que, querido Previdiano
veamos si sobrevives.

### Desafío:

Figurativamente, imagina que el terreno donde te encuentras se define por con cuadrículas de 1 metro cuadrado, formándose un plano cartesiano, 
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
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |X   |A(0,0)   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |X   |
|X   |X   |Z1(-1,-2)   |X   |X   |X   |X   |
|X   |X   |X   |X   |X   |X   |Z2(2,-3)   |


Dado un número entero N que llamaremos base y un número K que llamaremos índice de concatenación, debemos encontrar el dígito base 
del número resultante de la concatenación de K veces N.

Por ejemplo:

> N = 856, K = 2, R = super_digit(865856) = super_digit(8 + 6 + 5 + 8 + 5 + 6) = 2

Formato de entrada:

> 856 2

Formato de salida:

> 2

Explicación:

>super_digit(P) = super_digit(8 + 5 + 6 + 8 + 5 +6)  
>               = super_digit(38)  
>               = super_digit(3 + 8)  
>               = super_digit(11)  
>               = super_digit(1 + 1)  
>               = super_digit(2)  
>               = 2  


Haz tu mayor esfuerzo y diviértete!
