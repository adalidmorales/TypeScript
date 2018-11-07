
var lienzo:any=document.getElementById("lienzo");
var ancho:number = lienzo.width;
var alto:number = lienzo.height;
if (lienzo.getContext){
    var ctx1:CanvasRenderingContext2D;
    ctx1 = lienzo.getContext("2d");
    // linea diagonal
    ctx1.beginPath();
    ctx1.moveTo(20,20);
    ctx1.lineTo(ancho,alto);
    ctx1.stroke();
    // triangulo
    ctx1.beginPath();
    ctx1.moveTo(ancho,0);
    ctx1.lineTo(ancho-70,0);
    ctx1.lineTo(ancho,70);
    ctx1.fill();
    ctx1.closePath();
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.arc(ancho/2,alto/2,ancho/2,0,Math.PI*2);
    ctx1.fillStyle="yellow";
    ctx1.fill();
    ctx1.stroke();

    ctx1.fillStyle="green";
    ctx1.fillRect(80,80,140,140);
    ctx1.font="30px time";
    ctx1.fillText("jose luis",80,280);
}