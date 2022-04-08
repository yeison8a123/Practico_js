// Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "Los lados del triangulo miden: " 
//   + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//    + baseTriangulo 
//   + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

//const radiocirculo = 4;
//console.log("El radio del circulo es: " + radiocirculo + "cm");

//const diametroCirculo = radiocirculo * 2;
//console.log("El Diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;
console.log("PI es: " + PI);

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const areaCirculo = (radiocirculo * radiocirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm2");
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el html
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area de cuadrado es: " + area);
}
//Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert("El diametro del circulo es: " + diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del Circulo es: " + area);
}

//Triangulo

function calcularAreaTriangulo() {
    const inputB = document.getElementById("InputBase");
    const valueB = Number(inputB.value);

    const inputA = document.getElementById("InputAltura");
    const valueA = Number(inputA.value);

    const area = areaTriangulo(valueB, valueA);
    alert("El area del Triangulo es: " + area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputLado2");
    const value2 = Number(input2.value);

    const inputB = document.getElementById("InputBase");
    const valueB = Number(inputB.value);

    const perimetro = perimetroTriangulo(value1, value2, valueB);
    alert("El perimetro del Triangulo es: " + perimetro);
}