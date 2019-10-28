const board = new GoldRush()
const renderer = new Renderer()

$('button').on("click", function(){
    let rows = $('#rows-input').val()
    let cols = $('#cols-input').val()
    board.loadBoard(rows, cols)
    renderer.renderBoard({matrix: board.matrix})
    renderer.renderScores(board.playerScore)

})


$(document).keypress(function (e){
    if (e.which == 119) {
          board.movePlayer("player1", "up")
    }
    else if(e.which == 97) {
          board.movePlayer("player1", "left")
    }
    else if(e.which == 115) {
        board.movePlayer("player1", "down")
    }
    else if(e.which == 100) {
        board.movePlayer("player1", "right")
    }
    else if(e.which == 105) {
        board.movePlayer("player2", "up")
    }
    else if(e.which == 106) {
        board.movePlayer("player2", "left")
    }
    else if(e.which == 107) {
        board.movePlayer("player2", "down")
    }
    else if(e.which == 108) {
        board.movePlayer("player2", "right")
    }

    renderer.renderBoard({matrix: board.matrix})
    renderer.renderScores(board.playerScore)
})

