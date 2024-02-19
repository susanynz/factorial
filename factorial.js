function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else if (numero > 1) {
      return numero * calcularFactorial(numero - 1);
    } else {
      // Manejar el caso de números negativos
      console.error("Error: No se puede calcular el factorial de un número negativo.");
      alert("¡Error! No se puede calcular factorial en numeros negativos");
      return null;
    }
  }
  
  function obtenerNumeroDesdeUsuario() {
    let input = document.getElementById("numeroInput").value;
  
    while (true) {
      if (!isNaN(input) && input !== "" && input !== null) {
        return parseInt(input);
      } else {
        alert("Por favor, ingrese un número para calcular el factorial");
        input = document.getElementById("numeroInput").value;
      }
    }
  }
  
  function main(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
  
    let numero = obtenerNumeroDesdeUsuario();
  
    while (true) {
      let esNumeroValido = !isNaN(numero) && Number.isInteger(numero);
  
      if (esNumeroValido) {
        let resultadoFactorial = calcularFactorial(numero);
        console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
        alert(`El factorial de ${numero} es: ${resultadoFactorial}`);
        document.getElementById("factorialForm").reset(); // Limpiar el formulario
        break; // Salir del bucle después de mostrar el resultado
      } else {
        console.error("Error: La entrada no es un número entero válido.");
        alert("Error: La entrada no es un número entero válido.");
        document.getElementById("factorialForm").reset(); // Limpiar el formulario
        break; // Salir del bucle después de mostrar el mensaje de error
      }
    }
  }
  
  document.getElementById("factorialForm").addEventListener("submit", main);
  