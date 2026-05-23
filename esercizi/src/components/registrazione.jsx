import { useEffect, useState } from "react"

export function Registrazione() {

const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))|| [])
const [error, setError]= useState(null)
const [ message,setMessage]=useState(null)
    const [user, setUser] = useState({
        nome: '',
        cognome:'',
        email:'',
        password:'',
    })

    function handleChange(event){

     const {name, value} = event.target

     setUser((prev)=> ({...prev, [name]:value}))
    }

    function handleRegistrati(event) {
     event.preventDefault()

     const userExist=users.find((u)=>u.email === user.email )
     if(userExist){
      setError("Utente già registrato")
      setMessage(null)
     } 
     else { 
     setUsers((prev)=> [...prev, user])
     setError(null)
     setMessage("Registrazione effettuata con successo")
     setUser({
        nome: '',
        cognome:'',
        email:'',
        password:'',
    })
     }
    
     
     
    }
useEffect(()=>{localStorage.setItem("users",JSON.stringify(users))},[users])

    return (
        <div>
            <form onSubmit={handleRegistrati}>
                <input type="text" name="nome" value={user.nome} onChange={handleChange} placeholder="Inserisci il tuo nome"/>
                 <input type="text" name="cognome" value={user.cognome} onChange={handleChange} placeholder="Inserisci il tuo cognome"/>
                  <input type="email" name="email" style={{borderColor:error? "red": ""}} value={user.email} onChange={handleChange} placeholder="Inserisci la tua email"/>
                   <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Inserisci la tua password"/>
                   <button type="submit">Registrati</button>
            </form>
            {error && <p>{error}</p>}
            { message && <p>{message}</p>}
        </div>
    )
}