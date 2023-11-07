import React, {useState} from 'react'
import './pop.css'
import axios from 'axios'

function Pop(props) {
    
  const [name, setName] =useState("")
  const [isVisible, setIsVisible] = useState(false);
  const val = "-1";


  
  
function handleSubmit(event)
{
  const tableName = props.tableName;
  console.log(tableName)
  let  type;
  if(props.type == "Card")
  {
    type = "cardName"
  }
  else
  {
    type = "listName"
  }
  event.preventDefault();
  if(name != "")
  {
    axios.post('http://localhost:8087/checkExists', {name, type, tableName }).then(res => 
        {
            if(res.data.status == "error")
            {
              document.getElementById('errorMSg').innerText = res.data.message;
              setIsVisible(true)
            }
            else
            {
              setIsVisible(false)
              console.log(props.id)
              props.addList(name, props.id,setIsVisible);
            }
            
        }).catch(err => console.log(err));
  }
      
}
console.log(props.type)
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popupInner'>
        <button className='cancel-btn' onClick={() => props.addList(val, props.id, setIsVisible)}>X</button>
          <form className='form' onClick={(event) => handleSubmit(event)}>
            <h6 className='errorStatus' id="errorMSg" hidden = {!isVisible}></h6>
            <h4>Enter the {props.type} Name {props.id}</h4>
            <input type='text' onChange={(e) => setName(e.target.value)}/><br/>
            <button className='submit-btn'>Enter</button>
          </form>
        </div>
    </div>
  ) : "";
}

export default Pop