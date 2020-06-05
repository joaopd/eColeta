// document
// .querySelector("select[name=uf]")
// .addEventListener("change", () => {
    
// } )

function populateUFs(){

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( states => {

        for( const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }
    } )
}

populateUFs()

function getCities(event){

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/microrregioes`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res =>  res.json() )
    .then( cities => {

        for( const city of cities ){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    } )
}

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//Itens de coleta
//Pegar todos os Li's

const itensToCollect = document.querySelectorAll(".itens-grid li")

for(const item of itensToCollect){
    item.addEventListener("click", handSelectedItem)
}

let selectedItems = [2,3]

function handSelectedItem(event){

    const itemLi = event.target
    //adcionar ou remover uma classe com JS
    
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

     //Verificar se existe itens selecionados
    //Pegar itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    //Se ja estiver selecionado
    if( alreadySelected >= 0){
        //- tirar da selecao
        const filteredItems = selectedItems.filter( item=>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
    }

    //Se nao estiver selecionado -> adicionar

    //Atualizar o campo escondido com os itens selecionados
}
