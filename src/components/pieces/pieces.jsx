import './pieces.css'
import Piece from './piece'
import {useState, useRef} from 'react'
import { createPosition, copyPosition} from '../../helper'
const Pieces = () => {

    const ref = useRef()

    const [board, setBoard] = useState(createPosition())

    const calculateCoords = e => {
        const {width, left, top} = ref.current.getBoundingClientRect()
        const size = width / 8
        const y = Math.floor((e.clientX - left)/ size)
        const x = 7 - Math.floor((e.clientY - top) / size)
        return {x,y}
    }

    const onDrop = e => {
        const newPosition = copyPosition(board)
        const {x,y} = calculateCoords(e)
        const [p,rank,file] = e.dataTransfer.getData('text').split(',')

        newPosition[rank][file] = ''
        newPosition[x][y] = p

        setBoard(newPosition)
        
        console.log(p,rank,file)
        console.log(x,y)
    }
    const onDragOver = e => e.preventDefault()

    return (
        <div 
        ref = {ref}
        onDrop = {onDrop}
        onDragOver={onDragOver}
        className='pieces'>

            {board.map((r, rank) => 
                r.map((f,file) => 
                    board[rank][file]
                    ? <Piece
                        key={rank + '-' + file}
                        rank={rank}
                        file={file} 
                        piece={board[rank][file]}/>
                    : null
                ))}
        </div>
    )

}

export default Pieces
