//Ao clicar no quadrado vai receber uma imagem representando X e O


var listBoard = document.querySelectorAll('.square')
for(let square of listBoard){
    
    // console.log(i.firstChild)
    square.addEventListener('click', function(){
        addingImage(square)
        popUp()
    })
}

buttonContinue()

function addingImage(square) {

    // console.log('evento iniciado')
    if(fimDeJogo == false){

        if(!square.firstChild.classList.contains('active')){

            // console.log('não tem a classe')
            square.firstChild.classList.add('active')

            if(turn == 0){
                square.firstChild.style.backgroundImage = 'url(./img/shield.png)'
                board[square.id] = players[turn]
                turn = 1
            }else {
                square.firstChild.style.backgroundImage = 'url(./img/sword.png)'
                board[square.id] = players[turn]
                turn = 0
            }
        }
    }
    // console.log(board)
    playerWin()
    // console.log(win)
    // console.log(fimDeJogo)
}

function popUp(){

    if(fimDeJogo == true){
        let popUp = document.querySelector('.popup')
        popUp.classList.add('popup-show')

        let textPop = document.querySelector('.popup h2')
        
        if(winner == 'shield'){
            textPop.innerHTML = `Vitória do ${winner}!`
        }else{
            textPop.innerHTML = `Vitória da ${winner}!`
        }
    }
}

function buttonContinue(){

    let btnContinue = document.querySelector('#btn-continue')
    btnContinue.addEventListener('click', function(){
        // console.log('clicado')

        resetGame()

        for(let square of listBoard){
            square.firstChild.classList.remove('active')
            square.firstChild.style.backgroundImage = 'none'
        }

        let popUp = document.querySelector('.popup')
        popUp.classList.remove('popup-show')

    })
}



function resetGame(){
    resetVariables()
}












// var tabela = document.querySelector('.container')

// tabela.addEventListener('click', function(event){
//     console.log(event.target.firstChild)
    
    

//     if(!event.target.firstChild.classList.contains('active')){

//         event.target.firstChild.classList.add('active')

//         if(vez == 0){
//             event.target.firstChild.style.backgroundImage = 'url(./img/shield.png)'
//             vez = 1
//         }else{
//             event.target.firstChild.style.backgroundImage = 'url(./img/sword.png)'
//             vez = 0
//         }
//     }
// })


