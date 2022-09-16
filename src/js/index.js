
const nome = document.getElementById ("nome")
const email = document.getElementById ("email")
const telefone = document.getElementById ("telefone")
const mensagem = document.getElementById("mensagem")
const button = document.getElementById ("button")
const mensagemErro = document.getElementsByClassName("campo-obrigatorio")

button.addEventListener('click',function() {
    erroDeValidacao()
})


nome.addEventListener ('blur', function() {
    if(nome.value){
        nome.classList.add("preenchido")
        nome.classList.remove("nao-preenchido")
        mensagemErro[0].classList.remove("span")
    }
    else{
        nome.classList.remove("preenchido")
    }

})
email.addEventListener ('blur', function() {
    if(email.value){
        email.classList.add("preenchido")
        email.classList.remove("nao-preenchido")
        mensagemErro[1].classList.remove("span")
    }
    else{
        email.classList.remove("preenchido")

    }
})
telefone.addEventListener ('blur', function(){
    if(telefone.value){
        telefone.classList.add("preenchido")
        telefone.classList.remove("nao-preenchido")
        mensagemErro[2].classList.remove("span")
    }
    else{
        telefone.classList.remove("preenchido")
    }
})
mensagem.addEventListener('blur', function(){
    if(mensagem.value){
        mensagem.classList.add("preenchido")
        mensagem.classList.remove("nao-preenchido")
        mensagemErro[3].classList.remove("span")
    }
    else{
        mensagem.classList.remove("preenchido")
    }
})


 function erroDeValidacao () {

    if(nome.value === ''){
        nome.classList.add('nao-preenchido')
        mensagemErro[0].classList.add("span")
    }

    if(email.value === ''){
        email.classList.add("nao-preenchido")
        mensagemErro[1].classList.add("span")

    }

    if(telefone.value === ''){
        telefone.classList.add("nao-preenchido")
        mensagemErro[2].classList.add("span")
    }
    
    if(mensagem.value === ''){
        mensagem.classList.add("nao-preenchido")
        mensagemErro[3].classList.add("span")
    }

}