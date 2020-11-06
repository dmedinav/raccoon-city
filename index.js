
const raccoonCity = (input) => {
    /**
     *  Tu código va aquí
     */
    }
    
    
    /**
     * No modificar
     */
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    
    readline.question(`Ingrese la entrada para ver si sobrevives:  `, (input) => {
      const inputArray = eval(input);
      if(Array.isArray(inputArray)){
        raccoonCity(eval(input))
        readline.close()
      }else{
        console.log("Ingrese parámetros válidos")
      }
      readline.close()
    })