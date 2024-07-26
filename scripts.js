function verificar(){
    var ano_hoje = Number(new Date().getFullYear())
    var ano_nasc = Number(document.getElementById('idade').value)
    var idade = ano_hoje - ano_nasc

    if (ano_nasc == 0 || ano_nasc > ano_hoje || ano_nasc < ano_hoje-130){
        alert('Escolha uma data de nascimento válida')
    }else{
        var fsex = document.getElementsByName('radio')
        var res = document.getElementById('res')
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero =  'Homem'

            if(idade<=12){//Criança
                img.setAttribute('src','imagens/homem/H-crianca.jpg')
            }else if(idade<=18){//Jovem
                img.setAttribute('src','imagens/homem/H-jovem.jpg')
            }else if(idade<=50){//Adulto
                img.setAttribute('src','imagens/homem/H-adulto.jpg')
            }else{//Idoso
                img.setAttribute('src','imagens/homem/H-idoso.jpg')
            }

        }else{
            genero = 'Mulher'

            if(idade<=12){//Criança
                img.setAttribute('src','imagens/mulher/M-crianca.jpg')
            }else if(idade<=18){//Jovem
                img.setAttribute('src','imagens/mulher/M-jovem.jpg')
            }else if(idade<=50){//Adulto
                img.setAttribute('src','imagens/mulher/M-adulta.jpg')
            }else{//Idoso
                img.setAttribute('src','imagens/mulher/M-idosa.jpg')
            }

        }
        res.style.textAlign = 'center'
    }
    res.innerHTML =`<p> Detectamos ${genero} com ${idade} anos</p>`
    res.appendChild(img)
}