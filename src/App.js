import React from 'react'
import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  const showData = () => {
    console.log(values.email);
  }

  return (
    <div className="App">
      <input name="email" type="text" placeholder="Enter name" value={values.email} onChange={handleChange}></input>
      <input name="password" type="password" placeholder="Enter password" value={values.password} onChange={handleChange}></input>
      <button onClick={showData}>Show data</button>
    </div>
  );
}

export default App;
