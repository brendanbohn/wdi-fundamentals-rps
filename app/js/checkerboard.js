var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
                

//Sets player- either R for Red or B for Black- in a given row and col in the checkerboard array
           
function setSquare(player, row, col) {
	checkerboard[row][col] = player;
	return checkerboard;

//returns the piece- ether Red or Black- in a given row and col in the checkerboard array

}

function getPieceAt(row,col) {
	return checkerboard[row][col];
}

//clears the board of all R and B pieces

function clearBoard(checkerboard) {
	for (i=0; i<8; i+=1) {
		for (n=0; n<8; n+=1) {
			checkerboard[i][n] = null;
		}
	}
	return checkerboard;
}

//sets up Red pieces on the top of the board

function setUpRed() {
    for (var i=0; i<3; i+=1) {
        for (var j=0; j<8; j+=1) {
            if ((i%2===0) && (j%2===0)) {
                checkerboard[i][j]= "R";
            } else if ((i===1) && ((j+1)%2===0)) {
                checkerboard[i][j]= "R";
            }
        }
    }
}

//sets up Black pieces on the bottom of the board

function setUpBlack() {
	for (var i=0; i<8; i+=1) {
		for (var j=0; j<8; j+=1) {
			if ((i===5 || i===7) && ((j+1)%2===0)) {
				checkerboard[i][j]= "B";
			}
			else if ((i===6) && (j%2===0)) {
				checkerboard[i][j]= "B";
			}
		}
	}
}
 
//nested array to store the locations of every piece on the board

var pieces = {
    'red': [],
    'black': []
};

//finds where every piece on the board is and adds the location to the pieces nested array

 function findPieces(){
    for (var i = 0; i <8; i +=1){
        for (var j = 0; j <8; j+=1){
            if (getPieceAt(i,j) === "R"){
                pieces.red.push([i,j]);
            }else if(getPieceAt(i,j) === "B"){
                pieces.black.push([i,j]);
            }
        }
    }
}

setUpRed();
setUpBlack();
console.log(checkerboard);
findPieces();

//two operations to test my work, if true- it works (This is written by GA)

  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });