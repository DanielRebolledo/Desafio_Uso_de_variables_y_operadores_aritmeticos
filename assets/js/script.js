//Calculadora

function resultado(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);  
    let suma   = Math.floor(num1 + num2);
    let resta  = Math.floor(num1 - num2);
    let multi  = Math.floor(num1 * num2);
    let divi   = Math.floor(num1 / num2);
    let modulo = Math.floor(num1 % num2);

    
    document.getElementById("resultado").innerHTML= 
    "Resultado:" + "<br>" + "<br>" + 
    num1 + " " + "+" + " " + num2 + " " + "=" + " " + suma   + "<br>" + 
    num1 + " " + "-" + " " + num2 + " " + "=" + " " + resta  + "<br>" + 
    num1 + " " + "x" + " " + num2 + " " + "=" + " " + multi  + "<br>" + 
    num1 + " " + "/" + " " + num2 + " " + "=" + " " + divi   + "<br>" + 
    num1 + " " + "%" + " " + num2 + " " + "=" + " " + modulo + "<br>";
};

document.getElementById("button").onclick= function(){
    resultado()
};


//Convertor de Temperatura

function convertir(){
    let temp = parseInt(document.getElementById("temperatura").value);
    const kelvin      = Math.floor (temp + 273.15);
    const fahrenheit  = Math.floor (temp * 9/5 + 32);

    document.getElementById("grados").innerHTML=
    "Resultado:" + "<br>"  + "<br>" + 
    temp + "°C"  + "" + "=" + " " + kelvin     + "°"+ "K " + "<br>" + 
    temp + "°C"  + "" + "=" + " " + fahrenheit + "°"+ "F"  + "<br>"; 
};

document.getElementById("button_temp").onclick= function(){
    convertir()
};

//Calculadora de Días

function calcularDias(){
    let resultadoDias = parseInt(document.getElementById("dias").value);
    let ano     = Math.floor(resultadoDias / 365);
    let mes     = Math.floor(resultadoDias / 12);
    let semana  = Math.floor(resultadoDias / 7);    
    let dia     = Math.floor(resultadoDias / 1);
    
    
    document.getElementById("numeroDias").innerHTML=
    "Resultado:" + "<br>"    + "<br>" +  
    ano    + " " +  "Año"    + "<br>" +
    mes    + " " +  "Meses"  + "<br>" +
    semana + " " + "Semanas" +"<br>"  + 
    dia    + " " + "días";
};

    document.getElementById("button_dias").onclick= function(){
        calcularDias()
};

//Calcular Promedio

function promedio(){
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let nota4 = parseInt(document.getElementById("nota4").value);
    let nota5 = parseInt(document.getElementById("nota5").value);

    let sumaNotas = nota1 + nota2 + nota3 + nota4 + nota5;
    let promedio  = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
    document.getElementById("promedio").innerHTML=
    
    "Resultado:" + "<br>"  + "<br>" + 
    "La suma de notas es:" + " " + sumaNotas + "<br>" + 
    "El Promedio es:"      + " " + promedio  + "<br>";
};

document.getElementById("button_promedio").onclick= function(){
    promedio()
};











 








