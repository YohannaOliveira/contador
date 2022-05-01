function contar(){
    var inicio = document.getElementById('txtinicio')
    var final = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando Passo 1.')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(var cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1F449}	`
            }
        }else{
            //Contagem decrescente
            for(var cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1F449} `
            }
        }  
        res.innerHTML += `\u{1F3C1}`   
    }
}
    