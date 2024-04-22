import "./Comment.scss"

function Comment(props){

    const {data} = props

    

return(
    <>
        <div className="comment">
            <div className="comment__wrapper">
                <div className="comment__wrapper-stars">
                    <img src={data.stars} alt="" />
                </div>
                <div className="comment__wrapper-main">{data.main}</div>
                <div className="comment__wrapper-name">{data.name}</div>
            </div>
        </div>
    </>
)

}

export default Comment