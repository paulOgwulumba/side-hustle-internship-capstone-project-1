import "../App.css";
import styles from '../css/Body.module.css';
import React, {useState} from 'react';

const Body = () => {
  const [input, setInput] = useState('');

  // our logo image
  const imgElement = <img className = {styles.google_logo} src="https://sidehustle.ng/resources/img/sh-logo-dark.png" alt="Side Hustle Logo"/>
  
  // entry that replaces logo when user types in text
  const inputedText = <p className = {styles.inputed_text} >{(input)}</p>;

  return  (
  <div> 
    <div className = {styles.google}>
      {input === ''? imgElement : inputedText}
    </div>
    
    <div className = {styles.form}>  
      <form>
        <div className = {styles.form_control}>
          <span class="fa fa-search" style={{color: "rgb(190, 190, 190)", fontWeight: "100"}}></span>
          <input type="text" title="Search" onChange = {(event) => setInput(event.target.value)}/>
          <span class="fa fa-microphone" title="Search by voice"
            style={{ fontSize: "20px", color: "rgb(190, 190, 190)", cursor: "pointer"}}>
          </span>
        </div>
      </form>
    </div>  
    
    <div className = {styles.buttons}>  
      <input type="submit" value="Google Search" />
      <input type="submit" value="I'm Feeling Lucky" />
    </div>
  </div>);
}

export default Body;