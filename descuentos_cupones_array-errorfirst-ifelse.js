
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    "JuanDC es Batman",
    "pero no le digas a nadie",
    "es un secreto"
];


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputcupon = document.getElementById("inputCupon");
    const cuponValue = inputcupon.value; 

    let descuento;

    if (!coupons.includes(cuponValue)) {
        alert("El cupón " + cuponValue + "no es válido");
     } else if (cuponValue === "JuanDC es Batman") {
        descuento = 15;
     } else if (cuponValue === "pero no le digas a nadie") {
        descuento = 30;
     } else if (cuponValue === "es un secreto") {
        descuento = 25;
     }

    //let descuento;

    //switch(cuponValue) {
    //  case coupons[0]: // "JuanDC_es_Batman"
    //    descuento = 15;
    //  break;
    //  case coupons[1]: // "pero_no_le_digas_a_nadie"
    //    descuento = 30;
    //  break;
    // case coupons[2]: // "es_un_secreto"
    //    descuento = 25;
    //  break;
    //}
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}

