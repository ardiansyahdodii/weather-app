const Card = (props) => {
    return (
        <div className={`${props.className} bg-white rounded-lg shadow-lg`}>
            {props.children}
        </div>
    )
}

export default Card