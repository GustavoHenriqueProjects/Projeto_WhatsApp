/*******************************************************************************************
 * Objetivo: Realizar a criação de uma lista dinamica, utilizando os dados do arquivo JASON.
 * Autor: Gustavo Henrique
 * Data: 24/02/2023
 * Versão: 1.0
 *******************************************************************************************/

//Ajuda a policiar o código, o uso das váriaveis.
'use strict'

import {contatos} from "./contatos.js"

console.log(contatos[0].messages[3])

var cont = 0

const criarNovaLista = (contatos) =>{
    //Criando uma div
    var div = document.createElement('div')
    //Criando uma classe para a div
    div.classList.add('lista')
    div.id = cont++
    //div.id = 'lista'

    //Criando uma imagem
    const img = document.createElement('img')
    //Adicionando uma classe para a imagem
    img.classList.add('img_usuario')
    //Pagando as sequencia das imagens no JSON
    img.src = `./imagens_aplicativo/${contatos.image}`

    //Criando uma div chamada titulo_texto 
    const titulo_texto = document.createElement('div')
    titulo_texto.classList.add('titulo_texto')

    //Criando elemento titulo para receber o nome
    const titulo = document.createElement('h5')
    titulo.classList.add('lista_titulo')
    titulo.textContent = contatos.name

    //Criando o elemento profissão
    const profisao = document.createElement('p')
    profisao.classList.add('texto_profissao')
    profisao.textContent = contatos.description

    //Adionando o titulo e o texto a div
    titulo_texto.append(titulo,profisao)
    div.append(img,titulo_texto)

    div.addEventListener('click',function(){
        let id = document.getElementById(div.id)
        
        idUsuarioSelecionado(id)

    })

    return div
}

const carregarWhatsApp = () => {

    const conteudoLista = document.getElementById('conteudo-lista')

    // Chama a função criarNovaLista, e para cada elemento da matriz cria uma nova matriz
    const criarLista = contatos.map(criarNovaLista)

    conteudoLista.replaceChildren(...criarLista)
}

carregarWhatsApp()

const idUsuarioSelecionado = ($divID) =>{  
    let divID = Number($divID.id)

    //Tranforma somente o ID da div em numero o resto é descartado
    let id = divID

    console.log(id)
}
