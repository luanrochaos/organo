import './Member.css'

const Member = (props) => {
    return (
        <div className='member'>
            <div className='header' style={{backgroundColor: props.backgroundColor}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='bottom'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Member