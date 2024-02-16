import './TextField.css'

const TextField = (props) => {


    const typed = (e) => {
        props.changed(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField