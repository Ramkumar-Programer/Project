import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reg.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaSadCry } from 'react-icons/fa';

function Reg() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (val) => {
    setIsVisible(val);
  };
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [fNameError, setFNameError] = useState(false);
    const [lNameError, setLNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
      };
      
      const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
      };
      

    function validate()
    {
        const fNameError = fName.trim() === '';
        const lNameError = lName.trim() === '';
        let emailError ;
        let passwordError;
        let confirmPasswordError;
        if(fNameError)
        {
            toggleVisibility(true);
            document.getElementById('statusMessage').innerText = "Enter First Name";
            return false;
        }
        else if(lNameError)
        {
            toggleVisibility(true);
            document.getElementById('statusMessage').innerText = "Enter Last Name";
            return false;
        }
        else if(email.trim()==='')
        {
            toggleVisibility(true);
            document.getElementById('statusMessage').innerText = "Enter Email";
            emailError = true;
            return false;
        }
        else if(!validateEmail(email))
        {
            toggleVisibility(true);
            emailError = true;
            document.getElementById('statusMessage').innerText = "Email formate is incorrect";
            return false;
        }
        else 
        {
            var val;
            const name = email;
            const type = "email";
            const tableName = "userLogin";
            

            axios.post('http://localhost:8087/checkExists', {name, type, tableName }).then(res => 
            {
                const sts = res.data.status;
                console.log(val)
                if(sts == 'error')
                {
                    console.log("gone inside")
                    toggleVisibility(true);
                    emailError = true;
                    document.getElementById('statusMessage').innerText = "Email alredy exists";
                    setHasError(true)
                    console.log("error1  " + hasError)
                }
            }).catch(err => 
            {
                console.log(err)
                setHasError(true)
            }
        );
        
        if (hasError) {
            return false; // Exit the function if there's an error
          }
        }
        if(!validatePassword(password))
        {
            passwordError = true;
            confirmPasswordError = true
            toggleVisibility(true);
            document.getElementById('statusMessage').innerText = "Password should be 8 charcters, Atleast ! Captipal letter and digit";
            return false;
        }
        else if(password !== confirmPassword)
        {
            confirmPasswordError = true;
            toggleVisibility(true);
            document.getElementById('statusMessage').innerText = "Password Matched";
            return false;
        }
                
        setFNameError(fNameError);
        setLNameError(lNameError);
        setEmailError(emailError);
        setPasswordError(passwordError);
        setConfirmPasswordError(confirmPasswordError);
            
        return true;
    }

    function handleSubmit(event)
    {
        //if(validate() === true)
        {
            event.preventDefault();
            axios.post('http://localhost:8087/register', {fName, lName, email, password}).then(res => 
                {
                    console.log(res.data)
                    if (res.data.status === 'Success') 
                    {
                        toggleVisibility(false);
                        navigate('/Login');
                    }
                    else
                    {
                        toggleVisibility(true);
                        document.getElementById('statusMessage').innerText = res.data;
                    }
                    
                })
                .catch(err => console.log(err));
        }
        event.preventDefault();
    }


  return (
    <div className='reg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4 form login-form'>
                    <form autoComplete='' onSubmit={handleSubmit}> 
                        <h2 className='text-center'>Login Form</h2>
                        <p className='text-center'> Register with UserName and Password</p>
                        
               <p className="alert alert-danger text-center" id='statusMessage' hidden={!isVisible}></p>

                        <div className="form-group pad">
                            <input className={`form-control ${fNameError ? 'inputError' : ''}`} type="text"placeholder="First Name" onChange={e => {
                                const { value } = e.target;
                                setFName(value);
                            }}/>
                        </div>
                        <div className="form-group pad">
                        <input
                            className={`form-control ${lNameError ? 'inputError' : ''}`}
                            type="text"
                            placeholder="Last Name"
                            onChange={e => {
                                const { value } = e.target;
                                setLName(value);
                            }}
                            />
                        </div>
                        <div className='form-group pad'>
                        <input
                            className={`form-control ${emailError ? 'inputError' : ''}`}
                            type="text"
                            placeholder="Email ID"
                            onChange={e => {
                                const { value } = e.target;
                                setEmail(value);
                            }}
                            />
                        </div>
                        <div className="form-group pad">
                        <input
                            className={`form-control ${passwordError ? 'inputError' : ''}`}
                            type="password"
                            placeholder="Password"
                            onChange={e => {
                                const { value } = e.target;
                                setPassword(value);
                            }}
                            />
                        </div>
                        <div className="form-group pad">
                        <input
                            className={`form-control ${confirmPasswordError ? 'inputError' : ''}`}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={e => {
                                const { value } = e.target;
                                setconfirmPassword(value);
                            }}
                            />
                        </div>
                        <div className="form-group pad">
                        <input className="form-control button" type="submit" name="login" value="Login" />
                    </div>
                        <div className="link login-link text-center">Will you like to go back?? <Link to="/Login">Click here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reg;