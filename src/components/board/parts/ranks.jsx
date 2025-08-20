import "./ranks.css"

const Ranks = ({ranks}) => {
    return (
        <div className="ranks">
            {ranks.map(rank => <span key={rank}>{rank+1}</span>)}
        </div>
    )
}

export default Ranks
