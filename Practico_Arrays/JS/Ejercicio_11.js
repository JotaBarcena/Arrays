let animales=["Tom", "Jerry", "Firulais", "Fido", "Pluto", "Nombre Largo", "Nombre Mas Largo"]

function obtenerMascotas(arrMascotas, letra){
    let nuevoArrMascotas=[]
    for(let i=0; i<arrMascotas.length; i++){
        if(arrMascotas[i].charAt(arrMascotas[i].length-1)===letra){
            nuevoArrMascotas.push(arrMascotas[i])
        }
    }
    return nuevoArrMascotas
}

let mascotasO=obtenerMayores20(animales,"o")

for (let i=0; i<mascotasO.length; i++){
    const mascota=mascotasO[i];
    document.querySelector("#pRes").innerHTML+=`${mascota}<br>`    
}

mostrar(animales)
function mostrar(arrayMascotas){
    let cantidadMas7=0
    for (let i = 0; i < arrayMascotas.length; i++) {
        const mascota = arrayMascotas[i];
        if(mascota.length>7){
            cantidadMas7++
        }
    }
    document.querySelector("#pRes2").innerHTML=cantidadMas7
}




function mostrar(arrayMascotas){
    //let cantidadMas7 = 0;
    let mas7 = [];
    for (let i = 0; i < arrayMascotas.length; i++) {
        const mascota = arrayMascotas[i];
        if(mascota.length > 7){
            mas7.push(mascota);
            //cantidadMas7++;
        }
    }
    //document.querySelector("#pResultado2").innerHTML = cantidadMas7;
    document.querySelector("#pResultado2").innerHTML = mas7.length;


}
