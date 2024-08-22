import { useNavigate } from 'react-router-dom'
import SignInComponent from '../components/SignInComponent'

const LoginPage = () => {
    const navigate = useNavigate()
    const handleLoginSuccess = () => {
        navigate("/home")
    }
    return (
        <div>
            <SignInComponent handleLoginSuccess={handleLoginSuccess} />
        </div>
    )
}

export default LoginPage