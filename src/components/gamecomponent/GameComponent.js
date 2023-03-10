import React from "react";
import Board from "../boardcomponents/BoardComponent";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        
    }
   
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li style={{ paddingTop: 14 }} key={move}>
                <button className="algoia" onClick={() => jumpTo(move)}>{description}</button>

            </li>
        );
    });

    return (

        <div className="bg container-fluid">
            <br></br>
            <div className="text-center ">
                <p className="titleText">Tic Tac Toe</p>
            </div>



            <Row>
                <Col className="col-12 d-flex justify-content-center">
                    <div className="game-board">
                        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                    </div>
                    <div className="game-info">
                        <div>{moves}</div>
                    </div>
                </Col></Row>

        </div>
    );
}

