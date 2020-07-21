
function finalizar(){
let capital = document.querySelector("input#capBTC")
let valorBTC = document.querySelector("input#valorBTC")
let valorC = document.querySelector("input#valorC")
let valorV = document.querySelector("input#valorV")
let taxa = document.querySelector("input#taxaBTC")
let res = document.getElementById("lucro")
   
    if(capital.value.lenght == 0 && valorBTC.value.lenght == 0 && valorC.value.lenght == 0 && valorV.value.lenght == 0 && taxa.value.lenght == 0){
        window.alert("[ERRO] verifique os dados e tente novamente!")
    }
    else{
        let capitalN = Number(capital.value)
        let valorBTCN = Number(valorBTC.value)
        let vcompra = Number(valorC.value)
        let vvenda = Number(valorV.value)
        let tax = Number(taxa.value)
        let qtdbtc = capitalN/valorBTCN*100
        let lucro = vvenda - vcompra
        let liquido = lucro * qtdbtc/100 - tax
        res.innerHTML=`<p> QTD BTC: = ${qtdbtc.toFixed(2)} %</p>`
        res.innerHTML+=`<p>Lucro Liquido: = US$ ${liquido.toFixed(2)}</p>`

    }
   
}

function limpar(){  //FUNÇÃO LIMPA OS CAMPOS CASO EXITAM DADOS EM ALGUM DELES 
let capital = document.querySelector("input#capBTC")
let valorBTC = document.querySelector("input#valorBTC")
let valorC = document.querySelector("input#valorC")
let valorV = document.querySelector("input#valorV")
let taxa = document.querySelector("input#taxaBTC")
if(capital.value != 0 || valorBTC.value != 0 || valorC.value != 0 || valorV.value != 0 || taxa.value != 0){
    capital.value = ""
    valorBTC.value = ""
    valorC.value = ""
    valorV.value = ""
    taxa.value = ""
    capital.focus()
    
}

}
qtdbtc = capitalN/valorBTCN*porcento
