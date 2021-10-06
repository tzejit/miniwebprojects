const gameBoard = (() => {
  const createBoard = () => {
    document.querySelector(".display").innerText = "";
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 9; i++) {
      let square = document.createElement("div");
      square.innerText= " ";
      square.classList += ("square n" + i);
      board.appendChild(square);
    }
    const reset = document.createElement("button");
    const butdiv = document.createElement("div");
    butdiv.classList.add("butdiv");
    reset.classList.add("reset");
    reset.innerText = "Go back to Menu";
    butdiv.appendChild(reset);
    document.querySelector(".boardcontainer").appendChild(butdiv);
    document.querySelector(".boardcontainer").appendChild(board);
    reset.addEventListener("click", ()=>{
      gameBoard.reset();
    })
  }

  const displayEnd = ((isWin, name) => {
    if (isWin) {
      document.querySelector(".display").innerText = `${name} has won`
    } else {
      document.querySelector(".display").innerText = `Draw`
    }
    const replayBut = document.createElement("button");
    replayBut.classList.add("replay");
    replayBut.innerText = "Play Again!";
    replayBut.addEventListener("click", () => {
      replay()
    })
    document.querySelector(".butdiv").appendChild(replayBut);
  })

  const reset = ()=>{
    document.querySelector(".boardcontainer").innerHTML = "";
    document.querySelector(".display").innerText = "";
    gameController.reset();
    webController.createMenu();
  }

  const replay = () => {
    document.querySelectorAll(".square").forEach( b => {
      b.innerText = "";
    })
    document.querySelector(".display").innerText = "";
    document.querySelector(".replay").remove();
    gameController.reset();
    if (webController.getCurr() == "cpu")
      gameController.playCpu(playerFactory(true,"x", "Player"),cpu,gameBoard)
    else
      gameController.play(playerFactory(true,"x", "Player1"),playerFactory(false,"o","Player2"),gameBoard)
  }

  return {displayEnd, reset, createBoard}
})();

const gameController =(()=>{
  let squares = new Array(9);
  const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 3, 6], [0, 4, 8], [2, 4, 6]];

  const getSquares = () => {
    return [...squares];
  }

  const updateSquare = (i, player, otherplayer) => {
    i = i.charAt(1);
    if (squares[i] == null) {
      squares[i] = player.sign;
      document.querySelector(`.n${i}`).innerText = player.sign;
      player.turn = !player.turn;
      otherplayer.turn = !otherplayer.turn;
      return true;
    }
    return false;
  }

  const win = (sq = squares) => {
    for (let i = 0; i < winning.length; i++) {
      let a = parseInt(winning[i][0]);
      let b = winning[i][1];
      let c = winning[i][2];
      if ((sq[a] == sq[b]) && (sq[a] == sq[c]) && sq[a] != null) {
        return true;
      }
    }
    return false;
  }

  const draw = (sq = squares) => {
    for (let i = 0; i <sq.length; i++) {
      if (sq[i] == null) {
        return false;
      }
    }
    return true;
  }

  const registerClick = (e, player, otherplayer) => {
    if ("square" == e.target.classList[0] && updateSquare(e.target.classList[1], player, otherplayer)) {
      return true;
    }
    return false;
  }

  const play = (player1, player2, board) => {
    document.querySelector(".board").addEventListener("click", (e) => {
      if (player1.turn) {
        if (registerClick(e, player1, player2)) {
          if (draw() || win()) {
            player2.turn = false;
            board.displayEnd(win(), player1.name);
            return
          }
        } 
      } else if (player2.turn) {
        if (registerClick(e, player2, player1)) {
          if (draw() || win()) {
            player1.turn = false;
            board.displayEnd(win(), player2.name);
            return
          }
        }
      }
    });
  }

  const playCpu = (player1, cpu, board) => {
    document.querySelector(".board").addEventListener("click", (e) => {
      if (player1.turn) {
        if (registerClick(e, player1, cpu)) {
          if (draw() || win()) {
            board.displayEnd(win(), player1.name);
            return
          }
          updateSquare(`n${cpu.cpuMoveIndex(getSquares())}`, cpu, player1)
          if (draw() || win()) {
            player1.turn = false;
            board.displayEnd(win(), "CPU");
            return
          }
        } 
      } 
    });
  }

  const reset = () => {
    squares = new Array(9);
  }

  return {play, getSquares, win, draw, playCpu, reset};

})()

const playerFactory = (turn, sign, name) => {
  return {turn, sign, name}
};

const cpu = (()=>{

  sign = "o"
  turn = false

  possibleSquares = ((squares) => {
    possible = new Array();
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        possible.push(i);
      }
    }
    return possible;
  })

  minimax = (squares, isPlayer1, alpha, beta, depth, index1, index2) => {
    if (gameController.win(squares)) {
      if (!isPlayer1)
        return 10-depth;
      else
        return depth-10;
    } else if (gameController.draw(squares)) {
      return 0;
    }
    if (isPlayer1) {
      let maxScore = -Infinity;
      const possible = possibleSquares(squares)
      for (let i = 0; i < possible.length; i++) {
        let j = possible[i]
        let s2 = [...squares]
        s2[j] = sign
        let score1 = minimax([...s2], false, alpha, beta, depth + 1, [], [])
        maxScore = Math.max(maxScore, score1)
        alpha = Math.max(alpha, score1)
        if (depth == 0) {
          index1.push(j)
          index2.push(score1)
        }
        if (beta < alpha) {
          break
        }
      }
      return maxScore
    } else {
      let minScore = Infinity
      const possible2 = possibleSquares(squares)
      for (let i = 0; i < possible2.length;i++) {
        let k = possible2[i]
        let s2 = [...squares]
        s2[k] = "x"
        let score2 = minimax([...s2], true, alpha, beta, depth + 1, [], [])
        minScore = Math.min(minScore, score2)
        beta = Math.min(beta, score2)
        if (beta < alpha) {
          break
        }
      }
      return minScore
    }
  }

  cpuMoveIndex = (sq)=> {
    index1 = []
    index2 = []
    minimax(sq, true, -Infinity, Infinity, 0, index1, index2)
    max = -Infinity
    idex = 0
    for (let i = 0; i < index2.length; i++) {
      if (index2[i] >= max) {
        max = index2[i];
        idex = i;
      }
    }
    return index1[idex]
  }

  return {cpuMoveIndex, sign}
})()

const webController = (() => {
  let curr = null;

  const createMenu = () => {
    document.querySelector(".display").innerText = "Tic-Tac-Toe";
    const typeMenu = document.createElement("div");
    typeMenu.classList.add("type");
    playerbut = document.createElement("button");
    playerbut.classList.add("player")
    playerbut.innerText = "Player"
    playerbut.addEventListener("click", ()=>{
      typeMenu.remove();
      gameBoard.createBoard();
      gameController.play(playerFactory(true,"x", "Player1"),playerFactory(false,"o","Player2"),gameBoard)
      curr = "player";

    })
    cpubut = document.createElement("button");
    cpubut.classList.add("cpu")
    cpubut.innerText = "CPU"
    cpubut.addEventListener("click", ()=>{
      typeMenu.remove();
      gameBoard.createBoard();
      gameController.playCpu(playerFactory(true,"x", "Player"),cpu,gameBoard)
      curr = "cpu";
    })
    typeMenu.appendChild(playerbut);
    typeMenu.appendChild(cpubut);
    document.querySelector("body").appendChild(typeMenu);
  }

  createMenu();

  const getCurr = () => {
    return curr;
  }

  return {createMenu, getCurr}
})();





