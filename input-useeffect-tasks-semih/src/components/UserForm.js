import {useEffect, useState} from 'react'

const UserForm = (props) => {

  const [formValid, setFormValid] = useState(false)

  const [userName, setUserName] = useState("")
  const [nameValid, setNameValid] = useState({})



  const validateName = (name) => {
    if(name.length == ""){
      return {valid:false, msg: "Bitte geben Sie Ihren Namen ein"}
    }if(name.length < 2){
      return {valid:false, msg: "Der Name ist zu kurz"}
    }else{
      return {valid: true, msg:""}
    }
  }

  useEffect(()=>{
    setNameValid(validateName(userName))
  }, [userName])

  useEffect(()=>{
    if(nameValid && nameValid.valid === true){
      setFormValid(true)
    }else{
      setFormValid(false)
    }
  }, [nameValid])

  return (
    <div id="UserForm" className="step">
      <h1>
        Ihre Daten
      </h1>
        <div className="input-wrapper">
          <div className="top">
            <label htmlFor="inputName">Name</label>
            <input type="text"
                   value={userName}
                   name="name"
                   id="inputName"
                   onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          {
            (nameValid.valid===false)?<div className={"msg"}>{nameValid.msg}</div>:null
          }
        </div>

      <div className="btn-list">
        <div className="btn">zurück</div>
        <div className={"btn invalid"}>Bestellung abschließen</div>
      </div>
    </div>
  )
}

export default UserForm
