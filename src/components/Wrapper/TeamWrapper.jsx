const TeamWrapper = ({img, name, title}) => {
    console.log(name)
    return (
        <>
            <img src={img} alt="jemar" className='circle' width="50%"/>
            <div className="">
                <h4> {name} </h4>
                <span color='red' style={style}> {title}  </span>
            </div>
        </>
    )
}

const style ={
    fontFamily: 'monospace',
    color: 'gray'
}

export default TeamWrapper