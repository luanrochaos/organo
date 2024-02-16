import './Form.css'
import TextField from '../TextField'
import DropDownMenu from '../DropDownMenu'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.signUpMember({name, position, image, team})
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField required={true} label="Nome" placeholder="Digite o seu nome" value={name} changed={value => setName(value)}/>
                <TextField required={true} label="Cargo" placeholder="Digite o seu cargo" value={position} changed={value => setPosition(value)}/>
                <TextField label="Imagem" placeholder="Insira o endereço da imagem" value={image} changed={value => setImage(value)}/>
                <DropDownMenu required={true} label="Time" itens={props.teams} value={team} changed={value => setTeam(value)}/>
                <Button text="Criar Card"/>
            </form>
        </section>
    )
}

export default Form