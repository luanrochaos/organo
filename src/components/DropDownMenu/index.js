import './DropDownMenu.css'

const DropDrownMenu = (props) => {
    return (
        <div className='drop-down-menu'>
            <label>{props.label}</label>
            <select onChange={e => props.changed(e.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.itens.map (item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDrownMenu