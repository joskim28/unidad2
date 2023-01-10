function series(){

    var serie="Resultado: ";
    var i=2;
    while(i<=100){
        serie+=`${i} `;
        document.getElementById ("resultado").innerHTML=serie;
        i=i+2;
    }
    
}
function seriesimpar(){

    var seriesimpar="Resultado: ";
    var i=1;
    while(i<=12){
        seriesimpar+=`${i} `;
        document.getElementById ("resultado").innerHTML=seriesimpar;
        i=i+2;
    }
    
}

function seriesparimpar(){
    var seriesparimpar="resultado: ";
    var i=1;
    while(i<=12){
        seriesparimpar+=`${i} `;
        document.getElementById("resultado").innerHTML=seriesparimpar;
        i=i+1;               
    }
}
function paises(){
    const paises = ['peru', 'uruguay', 'chile'];
    let i = 0;
    while (paises.length > i ){
        console.log(paises[i]);
    i = i+1;
}
}

function hola() {
    //const patron= /hola/;
    const patron= /^[0-9]+$/;
    let dato; 
    do {
        dato=prompt('ingresa el valor: ');
    } while (!patron.test(dato));
    alert("por fin la pegaste")
} 

//haciendo funciones 
function suma(a,b){
    resultado=a+b;
    return resultado;
} 
function resta(a,b){
    resultado=a-b;
    return resultado;
}

function multiplicacion(a,b){
    resultado=a*b;
    return resultado;
} 

function divicion(a,b){
    resultado=a/b;
    return resultado;
} 
function potencia(a,b){
    resultado=a**b;
    return resultado;
} 
function residuo(a,b){
    resultado=a%b;
    return resultado;
}
//llmar funciones
resta(24,5);
document.getElementById("resultado").innerHTML=resultado;
console.log(resultado);
