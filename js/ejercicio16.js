let palabra=prompt("Ingresa una palabra: ");

function esPolindromo(palabra){
    let palabraLimpia = palabra.toLowerCase().replace(/\s/g, '');
    return palabraLimpia === palabraLimpia.split('').reverse().join('');
}

if (esPolindromo(palabra)) {
    console.log(palabra + " es un palindromo.");
}else{
    console.log(palabra + " no es un palindromo.");
}