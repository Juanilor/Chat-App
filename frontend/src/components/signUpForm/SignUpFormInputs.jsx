function SignUpFormInputs({inputType, inputPlaceholder, inputValue, inputs, setInputs}) {

    

  return <>
            <div>
          <label htmlFor={inputValue}>
            <span>Username</span>
          </label>
          <input type={inputType} placeholder={inputPlaceholder} name={inputValue} value={inputValue} onChange={(e) => setInputs({...inputs, [inputValue] : e.target.value})}/>
        </div>
  
  </>
}

export default SignUpFormInputs;
