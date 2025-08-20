import './pieces.css'
import Piece from './piece'
import {useState} from 'react'
import { createPosition } from '../../helper'
const Pieces = () => {

    const [state, setState] = useState(createPosition())

    

    console.log(position);

    return (
        <div className='pieces'>
            {state.map((r, rank) => 
                r.map((f,file) => 
                    state[rank][file]
                    ? <Piece
                        key={rank + '-' + file}
                        rank={rank}
                        file={file}
                        piece={state[rank][file]}/>
                    : null
                ))}
        </div>
    )

}

export default Pieces
