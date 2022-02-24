import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';

import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [showName, setShowName] = useState('');

  const inputName = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowName(name);
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <main>
      {name}
      <Header showName={showName} />
      <Form
        name={name}
        inputName={inputName}
        age={age}
        setAge={setAge}
        email={email}
        setEmail={setEmail}
        submitHandler={submitHandler}
      />
    </main>
  );
};

export default App;
