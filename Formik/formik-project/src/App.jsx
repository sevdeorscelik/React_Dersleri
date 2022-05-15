import { useState } from 'react'
import './App.css'
import { Formik } from 'formik';

function App() {


  return (
    <div className="App">
      <h1>Sign Up</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender:'male',
          hobies:[],
          country:""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {
          ({ handleSubmit, handleChange, values }) => {
            return (
              <form onSubmit={ handleSubmit }>

                {/*input ********************************************************/}
                <label htmlFor="firstName">First Name</label>
                <input onChange={ handleChange } id="firstName" name="firstName" placeholder="Jane"  />
                <br />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input onChange={ handleChange }  id="lastName" name="lastName" placeholder="Doe" />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input
                onChange={ handleChange } 
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                <br />
                <br />

                {/*radio ********************************************************/}        
                <span>Male : </span>
                <input  
                    name='gender' 
                    type="radio" 
                    value="male" 
                    checked={values.gender === "male"} 
                    onChange={handleChange} />

                <span>Female : </span>
                <input  
                    name='gender' 
                    type="radio" 
                    value="female" 
                    checked={values.gender === "female"}  
                    onChange={handleChange} />

                <br /><br />

                {/*checkbox ********************************************************/}
                <div>
                  <input type="checkbox" name='hobies' value="Football" onChange={handleChange} />
                  Football
                </div>
                <div>
                  <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
                  Cinema
                </div>
                <div>
                  <input type="checkbox" name='hobies' value="Photography" onChange={handleChange}/>
                  Photography
                </div>

                <br /><br />

                {/*select option ********************************************************/}

                <select name="country" onChange={handleChange}>
                  <option value="turkey">Türkiye</option>
                  <option value="america">Amerika</option>
                  <option value="deutschland">Almanya</option>
                </select>

                
                
               

                <br /><br />

                <button type="submit">Submit</button>

                <br /><br />

                <code> {JSON.stringify(values)} </code>
                

              </form>
            )
          }
        }

      </Formik>

    </div>
  )
}

export default App

//23.satidaki name='firstname' ile 13. satirdaki deger ayni ismi tasimali

//ya da. satirdaki fonksiyonu kurarak, formu html'e dönüstürür ve bu fonksiyonun icine tasirz. 
//handleChange ve handleSubmit formik'e ait fonksiyonlardir. bu fonksiyonlari inputlara verdigimiz onChange fonsiyonu ile calistiriz.