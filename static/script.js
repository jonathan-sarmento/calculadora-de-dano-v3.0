const p = document.getElementsByClassName('elemento personagem');
const v = document.getElementsByClassName('elemento vilao');
const a = document.getElementsByClassName('elemento arma');

// Declarando os objects
var caractersLife = new Object();
var villainLife = new Object();
var damageWeapon = new Object();
// Pegando as informacoes dos personagens, viloes e armas do app.py
for(let x of p){
    caractersLife[x.id] = parseInt(x.getAttribute('data-dano'));
}

for(let x of v){
    villainLife[x.id] = parseInt(x.getAttribute('data-dano'));
}

for(let x of a){
    damageWeapon[x.id] = parseInt(x.getAttribute('data-dano'));
}


let personagemSelecionado, vilaoSelecionado, armaSelecionada;

function iniciar(){
    const elementos = document.getElementsByClassName('elemento');

    for(const elemento of elementos){
        elemento.addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('calcular').addEventListener('click', calcularDano);
}

function marcarElementoSelecionado(evento) {
    const elementoSelecionado = evento.target.parentElement;

    // Se o bloco clicado n�o possui a classe 'elemento', consideramos que n�o
    // � um clique v�lido e encerramos a fun��o, retornando algo vazio.
    if (!elementoSelecionado.classList.contains('elemento')) {
        return;
    }

    const idElementoSelecionado = elementoSelecionado.getAttribute('id');

    if (elementoSelecionado.classList.contains('personagem')) {
        if(elementoSelecionado.classList.contains('selecionado')){
            limparElementosSelecionados('personagem');
            personagemSelecionado = false;
            return;
        }
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados('personagem');
    } else if(elementoSelecionado.classList.contains('arma')) {
        if(elementoSelecionado.classList.contains('selecionado')){
            limparElementosSelecionados('arma');
            armaSelecionada = false;
            return;
        }
        armaSelecionada = idElementoSelecionado;
        limparElementosSelecionados('arma');
    } else {
        if(elementoSelecionado.classList.contains('selecionado')){
            limparElementosSelecionados('vilao');
            vilaoSelecionado = false;
            return;
        }
        vilaoSelecionado = idElementoSelecionado;
        limparElementosSelecionados('vilao');
    }

    elementoSelecionado.classList.add('selecionado');
}

function calcularDano() {
    if (!(personagemSelecionado && armaSelecionada && vilaoSelecionado)) {
        document.getElementById('dano').innerHTML = '';
        alert('Selecione o personagem, o vilão e a arma para calcular o dano');
        return;
    }

    const danoDados = rolarOsDados();
    const danoArma = damageWeapon[armaSelecionada];
    const danoTotal = danoDados + danoArma;
    const vidaPersonagem = caractersLife[personagemSelecionado];
    const vidaVilao = villainLife[vilaoSelecionado];
    let resultado = 'Dano: ' + danoTotal + '! ';

    if (danoTotal + vidaPersonagem >= vidaVilao) {
        resultado += 'Parabéns, você matou ' + document.querySelector(`#${vilaoSelecionado} img`).alt;
    } else {
        resultado += 'Putz, não foi dessa vez, tente novamente!';
    }

    document.getElementById('dano').innerHTML = resultado;
}

function limparElementosSelecionados(tipo) {
    const elementos = document.getElementsByClassName('elemento');

    for (const elemento of elementos) {
        if (elemento.classList.contains(tipo)) {
            elemento.classList.remove('selecionado');
        }
    }
}

function rolarOsDados() {
    const min = Math.ceil(1);
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}