class Figura{
    x:number
    y:number
    color:string
    relleno:boolean
    dibujar(c:CanvasRenderingContext2D){
        if(this.relleno){
            c.fillStyle=this.color;
            c.fillRect(this.x,this.y,50,50)
        }
        else{
            c.rect(this.x,this.y,50,50);
            c.stroke();
        }
    }
    mostrarInformacion(){
        console.log("Posicion:")
        console.log("x:"+this.x,"y:"+this.y)
    }
//mover una figura solo realizando un metodo
   // mover(){
   //     this.x+=20
   //     this.y= this.y+30
   // }
 mover(unidDerecha:number, unidAbajo:number){
   this.x=this.x+unidDerecha;
   this.y= this.y+unidAbajo;
}
}

var lienzo:any=document.getElementById("lienzo");
var ctx:CanvasRenderingContext2D = lienzo.getContext("2d")
let f:Figura = new Figura();
f.x=10;
f.y=10;
f.relleno=true;
f.color="white";

f.dibujar(ctx);
f.mostrarInformacion();
for (let i=1;i<=100;i++){
    f.mover(20+i*5,30+i*5);
    f.dibujar(ctx);
}
