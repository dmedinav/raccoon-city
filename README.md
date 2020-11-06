## Temática: Un Previdiano en Racoon-City

Nada hacía presagiar, que al puro estilo Cloverfield-Paradox nuestro planeta sería transportado a una dimensión donde vivimos en Racoon-City
antes de la caída. Para tu suerte buen Previdiano, te encuentras con Alice con su pistola SIG-Sauer P226R, con la que puede matar zombies
de un solo tiro, y está decidida a salvarte.

A pesar de contar con Alice, hay zombies acercándose, y alguno puede alcanzarlos y terminar con todo. Así que, querido Previdiano
veamos si sobrevives.

### Desafío:

Figurativamente, imagina que el terreno donde te encuentras se define por con cuadrículas de 1 metro cuadrado, formándose un plano cartesiano, 
y los zombies caminan hacia ustedes, pero sólo pueden caminar de forma recta o en diagonal, cómo se vé en la siguiente figura:

| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

|X   |X   |X   |X           X   X   X   X               X   X   X   X               X   X   X   X
|X   |X   |X   |X           X   X   X   X               X   2   X   X               X   X   0   X
|X   |0   |X   |X           X   0   1   2               X   1   X   X               X   1   X   X
|X   |X   |1   |X           X   X   X   X               X   0   X   X               2   X   X   X
|X   |X   |X   |2           X   X   X   X               X   X   X   X               X   X   X   X



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
