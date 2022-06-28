import React, {useState} from 'react'
import twitter from "/src/images/twitter-brands.svg"
import dashboard from "/src/images/illustration-dashboard.png"
import ping from "/src/images/logo.svg"

function Page() {

    
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [test, setTest] = useState('')




const validateEmail = (e) => {
  setEmail(e.target.value)
}

const emailformat = /\S+@\S+\.\S+/;


const submit = (e) => {

       
 if(email.trim().length == 0){
    setMessage("Whoops! It looks like you forgot to add your email")
   }
   else{
       
   
       if (emailformat.test(email)) {
        setTest(true);
        setMessage(" Thank you!, you will recieve a notification when we launch! ")
       }
       else{
        setTest(false);
        setMessage("Please provide a valid email address")
       }
  
   }
  
  
  

   e.preventDefault();   
  }
  
  

    
 


  return (
    <>
      <header>
        <div className="logo">
            <img src={ping} />
        </div>
    </header>
    <main>
        <section className="intro-container">
            <h2>We are launching <span>soon!</span></h2>
            <p>Subscribe and get notified</p>
        </section>
        <section className="form" align="center">
            <form action="#" target="_blank"  onClick={submit} >
                <div className="input" >
                    <input type="email" name="email" id="email" placeholder="Enter your email address" 
                     onChange={validateEmail} 
                    
                    />
                </div>

                <div className="input-btn">
                    <button className="btn" >Notify Me</button>
                </div>

            </form>
             <p className={`message ${test ? 'success' : 'error'}`} > {message} </p>
        </section>
        <aside>
            <div className="hero-img">
                <img src= {dashboard} />
            </div>
        </aside>
    </main>
    <footer>
        <nav>
            <ul>
                <li>
                    <div className="icon">
                        <img src={twitter} />
                    </div>
                </li>
            </ul>
        </nav>
        <p>&copy;Copyright Ping. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Page
