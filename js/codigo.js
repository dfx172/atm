var imagenes=[];
imagenes["100"] = "../imagenes/billete100.png";
imagenes["50"] = "../imagenes/billete50.png";
imagenes["20"] = "../imagenes/billete20.png";
imagenes["10"] = "../imagenes/billete10.png";
imagenes["5"] = "../imagenes/billete05.png";
imagenes["1"] = "../imagenes/billete01.png";

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
caja[0] = (new billete (100,10));
caja[1]=  (new billete (50,10));
caja[2] = (new billete (20,8));
caja[3] = (new billete (10,10));
caja[4] = (new billete (5,20));
caja[5] = (new billete (1,20));

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
var buton1 = document.getElementById("number1");
var buton2 = document.getElementById("number2");
var buton3 = document.getElementById("number3");
var buton4 = document.getElementById("number4");
var buton5 = document.getElementById("number5");
var buton6 = document.getElementById("number6");
var buton7 = document.getElementById("number7");
var buton8 = document.getElementById("number8");
var buton9 = document.getElementById("number9");
var buton0 = document.getElementById("number0");

butonc.addEventListener("click", retirar);
butons.addEventListener("click", saldo);
butonb.addEventListener("click", borrar);
buton1.addEventListener("click", numero);
buton2.addEventListener("click", numero2);
buton3.addEventListener("click", numero3);
buton4.addEventListener("click", numero4);
buton5.addEventListener("click", numero5);
buton6.addEventListener("click", numero6);
buton7.addEventListener("click", numero7);
buton8.addEventListener("click", numero8);
buton9.addEventListener("click", numero9);
buton0.addEventListener("click", numero0);

function retirar (){
denominacion.innerHTML= "";
billetones.innerHTML ="";
var entregados = [];
var dinero = parseInt(dinerillo.value);
var saldo = ((caja[0].valor * caja[0].cantidad)+(caja[1].valor * caja[1].cantidad)+ (caja[2].valor* caja[2].cantidad)+ (caja[3].valor* caja[3].cantidad)+ (caja[4].valor* caja[4].cantidad)+ (caja[5].valor* caja[5].cantidad));
if (dinero > saldo){dentregadito.value =("Saldo insuficiente");}
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
     dentregadito.value = ("Te entregue: $" + dinerillo.value);
        for (var d of entregados) 
            {if (d.cantidad != 0) {denominacion.innerHTML += "la cantidad de billetes de "  +d.valor + " es de "+ d.cantidad + "<br>";}}
         for (var e of entregados) {for (var i = 0; i < e.cantidad; i++)
            {billetones.innerHTML += "<img src=" + e.imagen.src + " />" + " ";}
    }}}              


function saldo(){
    var saldo2 = ((caja[0].valor * caja[0].cantidad)+(caja[1].valor * caja[1].cantidad)+ (caja[2].valor* caja[2].cantidad)+ (caja[3].valor* caja[3].cantidad)+ (caja[4].valor* caja[4].cantidad)+ (caja[5].valor* caja[5].cantidad));
    dentregadito.value= ("el saldo es " + saldo2);
    dinerillo.value="";
    denominacion.innerHTML= "";
    billetones.innerHTML ="";
}

function borrar(){dinerillo.value=""; dentregadito.value= ("Esperando retiro"); denominacion.innerHTML= ""; billetones.innerHTML =""; }

function numero(){dinerillo.value+=1;}
function numero2(){dinerillo.value+=2;}
function numero3(){dinerillo.value+=3;}
function numero4(){dinerillo.value+=4;}
function numero5(){dinerillo.value+=5;}
function numero6(){dinerillo.value+=6;}
function numero7(){dinerillo.value+=7;}
function numero8(){dinerillo.value+=8;}
function numero9(){dinerillo.value+=9;}
function numero0(){dinerillo.value+=0;}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }