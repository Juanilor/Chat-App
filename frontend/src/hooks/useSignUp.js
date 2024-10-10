import { useState } from "react";

function useSignUp() {
  const [loading, setLoading] = useState(false);

  const signup = async ({ username, password, confirmPassword }) => {
    const success = handleInputErrors({ username, password, confirmPassword });
    if (!success) return;

    setLoading(true)
    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password, confirmPassword})
        })


        const data = await res.json()
        console.log(data);
        

    } catch (Error) {
        console.log(Error.message);
        
    } finally{
        setLoading(false)
    }
  };

  return {loading, signup}
}

export default useSignUp;


const handleInputErrors = ({username, password, confirmPassword}) =>{
    if(!username || !password || !confirmPassword){
        console.log('Por favor completar todos los campos');
        return false
    }

    if(password !== confirmPassword){
        console.log("Las contraseñas no coinciden");
        return false
    }

    if(password.length < 6){
        console.log('La contraseña debe contener mas de 6 caracteres');
        return false
    }

    return true
}




