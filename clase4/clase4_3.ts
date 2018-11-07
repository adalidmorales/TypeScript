import {Figura} from"./modulo/Figuras"
import {Circulo} from"./modulo/Circulo"
import {Triangulo} from"./modulo/Triangulo"
import {Triangulito} from"./modulo/Triangulito"




var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

Figura._color=Colores.red
for (let i=1;i<=10;i++){
    let c:Circulo=new Circulo(ctx);
    //c.setColor(colores.yellow)
    c.dibujar();
}

for(let i=0; i<5;i++){
    Figura._color=getColor(i);
    new Triangulo(ctx).dibujar();
}
new Triangulito(ctx).dibujar();