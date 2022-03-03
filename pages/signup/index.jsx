
import { useState } from 'react';
import DoctorDetails from '../../components/SignUp/DoctorDetails';
import UserDetails from '../../components/SignUp/UserDetails';

const LogIn = () => {

    const [step, setStep] = useState(0);
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
        qualification: "",
        specialization: "",
        show: false,
    });

    const prevStep = () => {
        if(step !== 0)
            setStep(step - 1);
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handlePasswordShow = () => setState({
        ...state, 
        show: !state.show
    })

    const inputType = state.show ? 'text' : 'password';
    
    const renderFormStep = 
                            step === 0 ? 
                                <UserDetails 
                                    state              = {state}
                                    nextStep           = {nextStep}
                                    inputType          = {inputType}
                                    handleInputChange  = {handleInputChange}
                                    handlePasswordShow = {handlePasswordShow}
                                />
                                : step === 1 ?
                                <DoctorDetails 
                                    state             = {state}
                                    prevStep          = {prevStep}
                                    nextStep          = {nextStep}
                                    handleInputChange = {handleInputChange}
                                />
                            :
                                <h1>HihgihgigoygoiygHHIHHIHIH</h1>
                                 
    return(
        <>
            {renderFormStep}   
        </>
    )
}

export default LogIn;