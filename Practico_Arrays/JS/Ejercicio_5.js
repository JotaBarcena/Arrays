document.querySelector("#btnAgregar").addEventListener("click", agregarNumero)

let numerosUsuario=[]

function agregarNumero(){
    let numero=Number(document.querySelector("#txtNum").value)
    numerosUsuario.push(numero)
    let arrFiltrados=obtenerMayores20(numerosUsuario)
    document.querySelector("#pRes").innerHTML=""
    for(let i=0; i<arrFiltrados.length; i++){
        document.querySelector("#pRes").innerHTML+=`${arrFiltrados[i]}<br>`
    }
}

function obtenerMayores20(arrTodosLosNumeros){
    let arrMayores20=[]
    for(let i=0; i<arrTodosLosNumeros.length; i++){
        if(arrTodosLosNumeros[i]>20){
            arrMayores20.push(arrTodosLosNumeros[i])
        }
    }
    return arrMayores20
}