function listarNumeros(){
    for(let i=0; i<=3; i++){
        console.log(i)
    }
}

function ejecutar(numeroEjercicio){
 if(numeroEjercicio==1){
listarNumeros()
 } else if (numeroEjercicio==2){
    listarNumerosReversa();
 } else if (numeroEjercicio==3){
    listarPares();
 }
}

function listarNumerosReversa(){
    for(let i=3; i>0; i--){
        console.log(i)
    }
}

function listarPares(){
    for (let i=0; i<10 ; i+=2){
console.log(i)
    }

}