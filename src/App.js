import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer'

function App() {

  const teams = [
    {
      name:'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#D9f7e7'
    },
    {
      name:'Front-End',
      primaryColor: '#82cFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name:'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#F0f8e2'
    },
    {
      name:'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name:'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name:'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name:'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }

  ]

  const [members, setMembers] = useState([])

  const SignUpNewMember = (member) => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} signUpMember={member => SignUpNewMember(member)}/>

      {teams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} members={members.filter(member => member.team === team.name)}/>)}
      <Footer />
    </div>
  );
}

export default App;
