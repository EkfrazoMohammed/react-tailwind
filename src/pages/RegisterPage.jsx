import { useNavigate } from 'react-router-dom'
import SignUpComponent from '../components/SignUpComponent'

const RegisterPage = () => {
    const navigate = useNavigate()
    const handleSignUpSuccess = () => {
        navigate("/home")
    }
    return (
        <div>
            <SignUpComponent handleSignUpSuccess={handleSignUpSuccess} />

        </div>
    )
}


export default RegisterPage