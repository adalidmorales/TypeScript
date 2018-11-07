import{Triangulo} from "./Triangulo"
import{Colores} from "./Colores"
import{Figura} from "./Figuras"
export class Triangulito extends Triangulo{
    dibujar(){
        this.cxt.fillText("Triangulito",this.x,this.y);
        super.dibujar();
        Figura._color= Colores.orange
    }
    constructor(context:CanvasRenderingContext2D){
        super(context)
    }
}