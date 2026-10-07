function listarNumeros(){
    for(let i=0; i<=3; i++){
        console.log(i)
    }
}

function ejecutar(numeroEjercicio){
 switch (numeroEjercicio){
    case 1 : listarNumeros();
    break;
    case 2 : listarNumerosReversa();
    break;
    case 3 : listarImpares();
    break;
    case 4 : listarPares();
    break;
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

function listarImpares(){
    for (let i=1 ; i<=7 ; i+=2){
        console.log(i)
    }
}