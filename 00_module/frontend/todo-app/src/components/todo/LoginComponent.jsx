import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {

    const [username, setUsername] = useState('Hyun')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleSubmit() {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }
    
    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>UserName:</label>
                    <input type="text" name="username" value={username} 
                    onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password}
                    onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}
