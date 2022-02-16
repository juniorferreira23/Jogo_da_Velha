// Regras do jogo
// 1 - temos 9 espaços para serem preenchidos
// 2 - temos 2 players
// 3 - os players revezam movimentos/escolhas unicos/as
// 4 - Ao alinhas três icones do player na vertical, horizontal ou diagonal ele vence.

var board = []
for(let i = 0; i < 9; i++){
    board.push('')
}
// console.log(board)


var players = ['shield','sword']
// console.log(players)

var turn = 0

var fimDeJogo = false

var winner = ''

function playerWin(){

    

    if(board[0] ==  players[0] && board[1] == players[0] && board[2] == players[0]){        
        winner = players[0]
        fimDeJogo = true

    }else if(board[3] == players[0] && board[4] == players[0] && board[5] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[6] == players[0] && board[7] == players[0] && board[8] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[0] == players[0] && board[3] == players[0] && board[6] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[1] == players[0] && board[4] == players[0] && board[7] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[2] == players[0] && board[5] == players[0] && board[8] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[0] == players[0] && board[4] == players[0] && board[8] == players[0]){       
        winner = players[0]
        fimDeJogo = true

    }else if(board[2] == players[0] && board[4] == players[0] && board[6] == players[0]){
        winner = players[0]
        fimDeJogo = true
    }


    // Vitoria da Sword
    else if(board[0] == players[1] && board[1] == players[1] && board[2] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[3] == players[1] && board[4] == players[1] && board[5] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[6] == players[1] && board[7] == players[1] && board[8] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[0] == players[1] && board[3] == players[1] && board[6] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[1] == players[1] && board[4] == players[1] && board[7] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[2] == players[1] && board[5] == players[1] && board[8] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[0] == players[1] && board[4] == players[1] && board[8] == players[1]){
        winner = players[1]
        fimDeJogo = true

    }else if(board[2] == players[1] && board[4] == players[1] && board[6] == players[1]){
        winner = players[1]
        fimDeJogo = true
    }

    if(board)
}

function resetVariables(){

    for(let i = 0; i < 9; i++){
        board[i] = ''
    }

    turn = 0

    fimDeJogo = false

    winner = ''
}