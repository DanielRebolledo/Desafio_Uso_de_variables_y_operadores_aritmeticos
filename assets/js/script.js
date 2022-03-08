//Calculadora

function resultado(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);  
    var suma   = Math.floor(num1 + num2);
    var resta  = Math.floor(num1 - num2);
    var multi  = Math.floor(num1 * num2);
    var divi   = Math.floor(num1 / num2);
    var modulo = Math.floor(num1 % num2);

    
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
    var temp = parseInt(document.getElementById("temperatura").value);
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
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);
    var nota5 = parseInt(document.getElementById("nota5").value);

    var sumaNotas = nota1 + nota2 + nota3 + nota4 + nota5;
    var promedio  = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
    document.getElementById("promedio").innerHTML=
    
    "Resultado:" + "<br>"  + "<br>" + 
    "La suma de notas es:" + " " + sumaNotas + "<br>" + 
    "El Promedio es:"      + " " + promedio  + "<br>";
};

document.getElementById("button_promedio").onclick= function(){
    promedio()
};











 








