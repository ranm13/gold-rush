class GoldRush extends Matrix{
    constructor(){
        super()
        this.playerScore = {"player1": 0, "player2": 0}
        this.rows = 0
        this.cols = 0
    }

    loadBoard(rows, cols){
       this.matrix = []
       this.rows = rows
       this.cols = cols
        
        for (let r = 0; r < rows; r++) {
            this.matrix.push([])
            for (let c = 0; c < cols; c++) {
                let randomNum = Math.random()
                this.matrix[r].push(randomNum <= 0.5? "empty" 
                : randomNum <= 0.8? "coin"
                : "wall")
            }
        }
        this.matrix[0][0] = "player1"
        this.matrix[rows-1][cols-1] = "player2"
        return 
    }

    scoreUp(playerNum, playerLocation, moveInX, moveInY){
        if(this.matrix[playerLocation.y + moveInY][playerLocation.x + moveInX] === "coin"){
            this.playerScore[playerNum] += 10
        }
    }

    checkForObsitcles(playerLocation, moveInX, moveInY){
        switch(this.matrix[playerLocation.y + moveInY][playerLocation.x + moveInX]){
            case("wall"): return true;
            case("player1"): return true;
            case("player2"): return true;
        }
    }

    move(playerNum, playerLocation, direction){
        let moveInX = 0
        let moveInY = 0
        
        if(direction === "up" && playerLocation.y !== 0){
            moveInY = -1
        }
        else if(direction === "down" && playerLocation.y !== this.rows-1){
            moveInY = 1
        }
        else if(direction === "left" && playerLocation.x !== 0){
            moveInX = -1
        }
        else if(direction === "right" && playerLocation.x !== this.cols-1){
            moveInX = 1
        }
        else{
            return
        }
        
        if(this.checkForObsitcles(playerLocation, moveInX, moveInY)){return}
        this.scoreUp(playerNum, playerLocation, moveInX, moveInY)
        this.matrix[playerLocation.y + moveInY][playerLocation.x + moveInX] = playerNum
        this.matrix[playerLocation.y][playerLocation.x] = "empty"

    }
    
    movePlayer(playerNum, direction){
        let playerLocation = this.findCoordinate(playerNum)
        this.move(playerNum, playerLocation, direction)
    }

    getMatrix = () => this.matrix
	
}
