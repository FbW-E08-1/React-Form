const Form = ({
  name,
  inputName,
  age,
  setAge,
  email,
  setEmail,
  submitHandler,
}) => {
  return (
    <form>
      <input
        onChange={(e) => inputName(e)}
        type='text'
        value={name}
        placeholder='Name'
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        type='text'
        value={age}
        placeholder='Age'
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        value={email}
        placeholder='Email'
      />
      <button onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  );
};

export default Form;
