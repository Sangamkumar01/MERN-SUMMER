import useLogin from '../hooks/useLogin';
import { useState } from 'react';

const Login = () => {
  const { login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    const validate1 = email.length > 4;
    const validate2 = password.length >= 8;
    if (validate1 && validate2) {
      login({ email, password });
    } else if (!validate1) {
      alert('Inncorect Email');
    } else {
      alert('Paasword must be greater than 7 character');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
      width: '350px',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      border: '2px solid #007BFF',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '300px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
      width: '300px',
      marginTop:'3rem'
    },

    maincontainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    },
    heading: {
      fontWeight: 'bold',
      fontSize: '4rem',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.maincontainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div style={styles.inputContainer}>
          <button style={styles.button} onClick={validate}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
