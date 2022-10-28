import { useState, useRef } from 'react';
import '../components/AddPartyButton/AddPartyButton.css';
function AddPartyButton(props) {

   // Create a new reference which will be applied
  // to the input element
  const ref = useRef(null);

  // Initialise the states
  const [ parties, setParties ] = useState([]);
  const [ input, setInput ] = useState('');

  // When the input value changes update
  // the `input` state
  function handleChange(e) {
    setInput(e.target.value);
  }

  // When the button is clicked add the
  // `input` state to the `items` state,
  // reset the `input` state, and focus on 
  // the input element
  function handleClick() {
    setParties([...parties, input]);
    setInput('');
    ref.current.focus();
  }



  return (
    <div>
    <div className='AddingParty'>
      <input
        className='PartyNameInput'
        ref={ref}
        onChange={handleChange}
        value={input}
        palceholder="Add Party Name"
      />
      <button className='AddParty' disabled={!input} onClick={handleClick}>+ Add Party</button>
    </div>
    <div className='PartyList'>
      <div className='PartyListul'>{parties.map(item => <button className='Party'><div className='partyli'><a href="https://www.google.com" target="_blank" rel="noreferrer">{item}</a></div></button>)}</div>
    </div>
      
    </div>
  );
}

export default AddPartyButton;