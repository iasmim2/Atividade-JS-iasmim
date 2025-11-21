function atividade1(){
    let metros =  prompt("Metros:")
    let resultado = metros * 100
    alert(metros+' m é equivalente a '+resultado+' cm')
}

function atividade2(){
  let lado = prompt('Valor:')
  let area = lado * lado
  let dobro = area * 2

  alert('A área do quadrado é: '+area+'\n'
  +'Dobro da área: '+dobro
)
}

function atividade3(){
    let ValorHora = prompt('Valor por Hora R$')
    let horasTrabalhadas = prompt('Horas trabalhadas:')
    let salario = (ValorHora * horasTrabalhadas) * 30
    alert('Salário R$ '+salario)
}

function atividade4(){
let f = Number(prompt("Temperatura em Fahrenheit:"));
let c = (5 * (f - 32)) / 9;
alert(f + "°F equivalem a " + c.toFixed(2) + "°C");
}

function atividade5(){
let n1 = parseInt(prompt("Primeiro número inteiro:"));
let n2 = parseInt(prompt("Segundo número inteiro:"));
let n3 = Number(prompt("Número real:"));

let a = (2 * n1) * (n2 / 2);
let b = (3 * n1) + n3;
let c = n3 ** 3;

alert("a) Produto do dobro do 1º com metade do 2º: " + a +
      "\nb) Soma do triplo do 1º com o 3º: " + b +
      "\nc) O 3º elevado ao cubo: " + c);
}

function atividade6(){
let altura = Number(prompt("Digite sua altura:"));
let pesoIdeal = (72.7 * altura) - 58;
alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}

function atividade7(){
let c = Number(prompt("Temperatura em Celsius:"));
let f = (c * 9/5) + 32;
alert(c + "°C equivalem a " + f.toFixed(2) + "°F");
}

function atividade8(){
let r = Number(prompt("Digite o raio do círculo:"));
let area = Math.PI * (r ** 2);
alert("A área do círculo é: " + area.toFixed(2));
}

function atividade9(){
let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let n4 = Number(prompt("Nota 4:"));
let media = (n1 + n2 + n3 + n4) / 4;
alert("A média é: " + media.toFixed(2));
}

function atividade10(){
let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
let soma = a + b;
alert("A soma é: " + soma);
}function atividade1(){
    let metros =  prompt("Metros:")
    let resultado = metros * 100
    alert(metros+' m é equivalente a '+resultado+' cm')
}

function atividade2(){
  let lado = prompt('Valor:')
  let area = lado * lado
  let dobro = area * 2

  alert('A área do quadrado é: '+area+'\n'
  +'Dobro da área: '+dobro
)
}

function atividade3(){
    let ValorHora = prompt('Valor por Hora R$')
    let horasTrabalhadas = prompt('Horas trabalhadas:')
    let salario = (ValorHora * horasTrabalhadas) * 30
    alert('Salário R$ '+salario)
}

function atividade4(){
let f = Number(prompt("Temperatura em Fahrenheit:"));
let c = (5 * (f - 32)) / 9;
alert(f + "°F equivalem a " + c.toFixed(2) + "°C");
}

function atividade5(){
let n1 = parseInt(prompt("Primeiro número inteiro:"));
let n2 = parseInt(prompt("Segundo número inteiro:"));
let n3 = Number(prompt("Número real:"));

let a = (2 * n1) * (n2 / 2);
let b = (3 * n1) + n3;
let c = n3 ** 3;

alert("a) Produto do dobro do 1º com metade do 2º: " + a +
      "\nb) Soma do triplo do 1º com o 3º: " + b +
      "\nc) O 3º elevado ao cubo: " + c);
}

function atividade6(){
let altura = Number(prompt("Digite sua altura:"));
let pesoIdeal = (72.7 * altura) - 58;
alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}

function atividade7(){
let c = Number(prompt("Temperatura em Celsius:"));
let f = (c * 9/5) + 32;
alert(c + "°C equivalem a " + f.toFixed(2) + "°F");
}

function atividade8(){
let r = Number(prompt("Digite o raio do círculo:"));
let area = Math.PI * (r ** 2);
alert("A área do círculo é: " + area.toFixed(2));
}

function atividade9(){
let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let n4 = Number(prompt("Nota 4:"));
let media = (n1 + n2 + n3 + n4) / 4;
alert("A média é: " + media.toFixed(2));
}

function atividade10(){
let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));
let soma = a + b;
alert("A soma é: " + soma);
}