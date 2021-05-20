let fibonacci=[1,1]

for(let i=0; i<19; i++){
    let numNuevo=fibonacci[i]+fibonacci[i+1]
    fibonacci.push(numNuevo)
}

for(let i=0; i<fibonacci.length; i++){
    document.querySelector("#pRes").innerHTML+=`${fibonacci[i]}<br>`
}




/* for(let i=1; i<=19; i++){
    let numNuevo=fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]
    fibonacci.push(numNuevo)
} */

/* console.log(fibonacci) */

/* let numNuevo=fibonacci[0]+fibonacci[i+1]
fibonacci.push(numNuevo)

numNuevo=fibonacci[1]+fibonacci[2]
fibonacci.push(numNuevo) */