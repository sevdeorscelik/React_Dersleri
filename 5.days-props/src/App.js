import './App.css';
import User from './components/User'




function App() {
  return (
    <>
      <User
        name='Sevde'
        surname='Örscelik'
        isLoggedIn={true}
        age={28}
        friends={['Semih', 'Zeynep', 'Kübra', 'Sevde']}
        /*
        address = { {
          title:"Hemer-De",
          zip: 58675
        } }
        */
      />

    </>
  );
}

export default App;
