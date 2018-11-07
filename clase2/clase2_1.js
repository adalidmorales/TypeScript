var lienzo = document.getElementById("lienzo");
var ancho = lienzo.width;
var alto = lienzo.height;
if (lienzo.getContext) {
    var ctx1;
    ctx1 = lienzo.getContext("2d");
    //loinea diagonal corta de prueba
    ctx1.beginPath();
    ctx1.moveTo(0, 0);
    ctx1.lineTo(ancho, alto);
    ctx1.stroke();
    //linea diagonal que parte el canvas
    ctx1.beginPath();
    ctx1.moveTo(300, 0);
    ctx1.lineTo(0, 300);
    ctx1.stroke();
    //triangulo
    ctx1.beginPath();
    ctx1.moveTo(ancho, 0);
    ctx1.lineTo(ancho - 70, 0);
    ctx1.lineTo(ancho, 70);
    //fill antes del closePath para rellenar
    ctx1.fill();
    ctx1.closePath();
    ctx1.stroke();
    //circulo
    //(x, y, angulo de inicio, angulo de fin, radians a grados)
    // la multiplicación de radianes es por la cirfunferencia entera es de 2 y va -
    ctx1.beginPath();
    ctx1.arc(150, 150, 100, 0, Math.PI * 2);
    //el fillStyle modifica apartir de ponde esta
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.stroke();
    //Cuadrado dento del circulo
    ctx1.fillStyle = "lightpink";
    ctx1.fillRect(80, 80, 140, 140);
}
