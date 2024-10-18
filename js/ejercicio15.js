let numero=prompt ("Ingresa un número: ");

if (isNaN(numero) || numero.trim() === ""){
    console.log("Error no es un numero.")
} else{
    console.log("si es un numero: "+ numero)
}
