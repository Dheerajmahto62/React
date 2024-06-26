import { useState } from "react"


export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 })

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((preMoves) => {
            return { ...preMoves, blue: preMoves.blue + 1 };
        })
    };
    let updateRed = () => {
        console.log(`moves.red = ${moves.red}`);
        setMoves((preMoves) => {
            return { ...preMoves, red: preMoves.red + 1 };
        })
    };

    let updateGreen = () => {
        console.log(`moves.green = ${moves.green}`);
        setMoves((preMoves) => {
            return { ...preMoves, green: preMoves.green + 1 };
        })
    };
    let updateYellow = () => {
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow + 1 };
        })
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue} > +1 </button>

                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed} style={{ backgroundColor: "red" }}> +1 </button>

                <p>Yellow Moves = {moves.yellow} </p>
                <button onClick={updateYellow} style={{ backgroundColor: "yellow" }}> +1 </button>

                <p>Green Moves = {moves.green} </p>
                <button onClick={updateGreen} style={{ backgroundColor: "green" }}> +1 </button>
            </div>
        </div>
    )
}