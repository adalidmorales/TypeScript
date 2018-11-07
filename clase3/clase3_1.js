var Circulo = /** @class */ (function () {
    function Circulo(x, y) {
        //radio es el atributo de la clase estando en privado
        this.radio = 100;
        this._x = (x == undefined) ? Math.random() * 200 : x;
        this._y = (y == undefined) ? Math.random() * 200 : y;
        this._color = "white";
    }
    Object.defineProperty(Circulo.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color != "")
                this._color = color;
            else
                this._color = "black";
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.dibujar = function (contexto) {
        contexto.fillStyle = this.color;
        contexto.beginPath();
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };
    return Circulo;
}());
var c = new Circulo();
c.color = "";
c.setRadio(50);
console.log("El color del circulo es:", c.color);
console.log("El color del circulo es:", c.getRadio());
//agregar el tipo de dato
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
c.dibujar(ctx);
new Circulo().dibujar(ctx);
