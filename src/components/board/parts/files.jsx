import "./files.css"
import { colToRankChar } from "../../../helper"

const Files = ({files}) => {
    return (
        <div className="files">
            {files.map(file => <span key={file}>{colToRankChar(file)}</span>)}
        </div>
    )
}
export default Files
