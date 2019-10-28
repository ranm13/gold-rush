class Matrix{
    constructor(numRows, numColumns){
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns){
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print(){
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    get = (rowNum, colNum) => this.matrix[rowNum][colNum]
    
    printRow(rowNum){
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    printColumn(columnNum){
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum])
        }
    }

    alter = (row, column, value) => this.matrix[row][column] = value
    
    findCoordinate(value){
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if(this.matrix[i][j] === value){
                    return {x: j, y: i}
                }
            }
        }
    }
}