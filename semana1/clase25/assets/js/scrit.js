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
const paises = ['peru', 'uruguay', 'chile'];
let i = 0;
while (paises.length > i ){
    console.log(paises[i]);
i = i+1;
}