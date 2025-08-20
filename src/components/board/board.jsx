import './board.css'
import Files from './parts/files'
import Ranks from './parts/ranks'
import Pieces from '../pieces/pieces'

function Board(){

    const getClassName = (i,j) => {
        let c = 'tile'
        c+= (i+j) % 2 === 0 ? ' tile--light':' tile--dark'
        return c
    }

    //Defining what goes into arrays
    //ranks.map in return displays what is in the mapped array
    const ranks = Array(8).fill().map((x,i) => 8-i-1)
    const files = Array(8).fill().map((x, i) => i)

    //ranks 
    return (
        <div className = 'board'>

            <Ranks ranks = {ranks}/>
            <div className = 'tiles'>
                {ranks.map((rank,i)=>
                    files.map((file,j) =>
                        <div key={file+'-'+rank} className={getClassName(i,j)}></div>
                        )
                    )}
            </div>

            <Pieces/>

            <Files files = {files}/>
        </div>
    )
}

export default Board
