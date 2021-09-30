import './App.css';
import UserCard from './components/UserCard';
import Users from './components/Users';

function App() {

  let name = "Hichem"

  let persons = [{
    name: "Khalil",
    email: "khalil@gmail.com",
    phone: 11111
  },
  {
    name: "Hichem",
    email: "hichem@gmail.com",
    phone: 222222
  },
  {
    name: "Mouna",
    email: "mouna@gmail.com",
    phone: 333333
  }
  ]

  const affichage = () => {
    alert('Hello')
  }



  return (
    <div className="App">
      {/* <UserCard name={name} email="hichem@gmail.com" phone={2587410} age={18} affichage={affichage} /> */}
      <UserCard name={name} email="hichem@gmail.com" phone={2587410} age={18} affichage={affichage} >
        <h6>Welcome</h6>
      </UserCard>
      {/* <UserCard /> */}
      {/* <Users persons={persons} /> */}
    </div>
  );
}

export default App;
