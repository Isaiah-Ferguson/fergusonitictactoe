import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Square from "../squarecomponent/SquareComponent";
import calculateWinner from "../calculatewinnercomponent/CalculateWinnerComponent";

let count = 0;
let countTwo = 0;
export default function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
    calculateWinner(squares);
    console.log(count)
    const winner = calculateWinner(squares);
    let status;
    let playerOne;
    if (winner) {
        if(winner === "X"){
            count++;
                playerOne = 'Player X is on a ' + count + " Game Win Streak";
                status = 'Winner: Player X';
                countTwo=0;
        }else{
            countTwo++;
                playerOne = 'Player O is on a ' + countTwo + " Game Win Streak"
                status = 'Winner: O';
                count = 0;
        }
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }




    return (
      <div>
        
        <Row>
            <Col className="col-12">
            
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
            </Col>
        </Row>
        <div className="status">{playerOne}</div>
        <div className="status">{status}</div>
      </div>
    );
  }

