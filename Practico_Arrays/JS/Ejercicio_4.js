let numeros=[]

document.querySelector("#txtNum").focus()
document.querySelector("#btnIng").addEventListener("click", agregarNumeros)
document.querySelector("#btnCalc").addEventListener("click", calcularPromedio)
document.querySelector("#txtNum").addEventListener("keyup",enter)
document.querySelector("#txtNum").addEventListener("keyup",calc)

function enter(evento){
    console.log(evento.keyCode)
    if(evento.keyCode===13){
        document.querySelector("#pNumIng").removeAttribute("hidden")        
        agregarNumeros()
        document.querySelector("#txtNum").focus()
    }
}
function calc(evento){
    console.log(evento.keyCode)
    if(evento.keyCode===88){
        document.querySelector("#pPromedio").removeAttribute("hidden")
        calcularPromedio()
        document.querySelector("#txtNum").focus()
    }
}
function agregarNumeros(){    
    let numero=Number(document.querySelector("#txtNum").value)
    document.querySelector("#txtNum").value=""
    document.querySelector("#txtNum").focus()
    numeros.push(numero)
    console.log(numeros)    
    mostrarNumerosIngresados()
}

function mostrarNumerosIngresados(){
    document.querySelector("#pNumIng").innerHTML="Usted ha ingresado los siguientes números:<br>"
    for(let i=0; i<numeros.length; i++){
        document.querySelector("#pNumIng").innerHTML+=`${numeros[i]}<br>`
    }
}
function calcularPromedio(){
    let acum=0
    let suma=0
    let promedio=0
    let promRoundUp
    for(let i=0; i<numeros.length; i++){
        acum++
        suma=suma+numeros[i]
    }
    promedio=suma/acum
    promRoundUp=Math.round((promedio+Number.EPSILON)*10)/10
    document.querySelector("#pPromedio").innerHTML=`El el valor del promedio de los números ingresados es:<br>${promRoundUp}`
}