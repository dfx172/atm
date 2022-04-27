var imagenes=[];
imagenes["50"] = "imagenes/billete50.png";
imagenes["20"] = "imagenes/billete20.png";
imagenes["10"] = "imagenes/billete10.png";

class billete {
    constructor(v,c)
    {
    this.imagen= new Image();
    this.valor=v;
    this.cantidad=c;  
    this.imagen.src = imagenes[this.valor];
    }
}

var caja = [];
caja[0]=  (new billete (50,10));
caja[1] = (new billete (20,5));
caja[2] = (new billete (10,3));

document.addEventListener("keydown",teclaApretada);
function teclaApretada(evento)
{if (evento.keyCode == 13){retirar()}}

var dinerillo = document.getElementById("dinerito");
var dentregadito = document.getElementById("dentregado");
var butonc = document.getElementById("botoncito");
var butons = document.getElementById("botoncito2");
var butonb = document.getElementById("botoncito3");
var billetones = document.getElementById("billeticos");
var denominacion = document.getElementById("denominacion");

butonc.addEventListener("click", retirar);
butons.addEventListener("click", saldo);
butonb.addEventListener("click", borrar);

function retirar (){
denominacion.innerHTML= "";
billetones.innerHTML ="";
var entregados = [];
var dinero = parseInt(dinerillo.value);
var saldo = ((caja[0].valor * caja[0].cantidad)+(caja[1].valor * caja[1].cantidad)+ (caja[2].valor* caja[2].cantidad));
if (dinero > saldo){dentregadito.value =("No tengo suficiente dinero, te quedaría faltando");}
else if (dinero < 0) { dentregadito.value=("Cantidad seleccionada Erronea.")}
else { for (var b of caja){
        var div = Math.floor(dinero / b.valor);
            if (div >= b.cantidad) {
                entregados.push((new billete(b.valor,b.cantidad)));
                dinero = dinero - (b.valor*b.cantidad);
                b.cantidad = 0;}
             else {
             entregados.push((new billete(b.valor,div)));
             dinero = dinero - (b.valor*div);
             b.cantidad -= div;}}
     console.log(caja);
     dentregadito.value = ("el dinero entregado total es " + dinerillo.value);
        for (var d of entregados) 
            {denominacion.innerHTML += "la cantidad de billetes de "  +d.valor + " es de "+ d.cantidad + "<br>";}
         for (var e of entregados) {for (var i = 0; i < e.cantidad; i++)
            {billetones.innerHTML += "<img src=" + e.imagen.src + " />" + " ";}
    }}}              


function saldo(){
    var saldo2 = ((caja[0].valor * caja[0].cantidad)+(caja[1].valor * caja[1].cantidad)+ (caja[2].valor* caja[2].cantidad));
    dentregadito.value= ("el dinero que tengo es de " + saldo2);
    dinerillo.value="";
    denominacion.innerHTML= "";
    billetones.innerHTML ="";
}

function borrar(){dinerillo.value=""; dentregadito.value= ("Esperando retiro"); denominacion.innerHTML= ""; billetones.innerHTML =""; }