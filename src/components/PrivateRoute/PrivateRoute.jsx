import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const PrivateRoute = ({children}) => {
const {user} = useAuth()

if(user){
    return children
}

  return <Navigate to='signup_login'/>
}

export default PrivateRoute