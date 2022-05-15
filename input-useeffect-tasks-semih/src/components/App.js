import '../css/App.scss';
import UserForm from "./UserForm";
import OrderForm from "./OrderForm";
import {useState} from "react";

function App() {
  const [userData, setUserData] = useState({})
  const [orderData, setOrderData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="App" id="App">
      {
        (currentStep==1)? <OrderForm setOrderData={setOrderData} setCurrentStep={setCurrentStep}/>
          :
          null
      }
      {
        (currentStep==2)?<UserForm setUserData={setUserData} setCurrentStep={setCurrentStep}/>
          :
          null
      }
      {
        (currentStep==3)?"Hier deine neue Komponente mit: 'Danke für deine Bestellung' Hamburger: x, Cola: x, Eis: x, Preis: x,xx"
          :
          null
      }

    </div>
  );
}

export default App;
