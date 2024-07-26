import { useContext } from "react";
import AppContext from "../context/appContext";


const uselogin = () => {
  const {appLogin} = useContext(AppContext);
  const login = async ({ email, password }) => {
    
    const URL = 'http://localhost:3000/api/v1/auth/login';
    const OPTIONS = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const res = await fetch(URL, OPTIONS);
    const data = await res.json();
    console.log(data);

    if(data.status == 'success'){
      appLogin(data.user);
      alert(data.message);
      localStorage.setItem("authorization",data.token);
    }else{
      alert("Error", data.message);
    }
  }
  
  return { login };
};
export default uselogin;
