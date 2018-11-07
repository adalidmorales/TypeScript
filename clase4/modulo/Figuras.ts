import{Colores, getColor} from "./Colores"
 export abstract class Figura{
    private _x:number
    private _y:number
    //tipo de dato de modelo enum
    static _color:Colores
    protected cxt:CanvasRenderingContext2D

    public abstract dibujar();

    constructor(
            contexto:CanvasRenderingContext2D,
            x?:number,y?:number){
        this._x = (x==undefined) ? Math.random()*1000 : x;
        this._y = (y==undefined) ? Math.random()*1000 : y;
        this.cxt = contexto
    }
    public get x():number{
        return this._x;
    }
    public set x(x:number){
        this._x = x;
    }
    public get y():number{
        return this._y;
    }
    public set y(y:number){
        this._y = y;
    }
}
