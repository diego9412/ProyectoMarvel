import './login.css'
import InputProject from '../../elements/InputProject/InputProject'
import Button from '../../elements/ButtonPr/ButtonPr'

export default function Login() {
    return(
        <section className="form-container">
            <form className='form'>
                <h1 className='title'>Welcome!!! Please Login to your account</h1>
                <InputProject 
                    identifier = "userName"
                    inputName = "Username"
                    inputType = "text"    
                    placeholder = "Write your UserName"        
                />
                <InputProject 
                    identifier = "password"
                    inputName = "Password"
                    inputType = "password"    
                    placeholder = "Write your Password"        
                />
                <p className='newMember'>Are you new? <a href='#'>Register here</a></p>
                <Button buttonType="submit" buttonText="Login Now" buttonClass="sendInfo"/>
            </form>
        </section>
    )
}