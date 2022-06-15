
import { useState } from 'react';
import ReviewInfo from '../../../components/SignUp/ReviewInfo';
import UserDetails from '../../../components/SignUp/UserDetails';
import DoctorDetails from '../../../components/SignUp/DoctorDetails';

const LogIn = () => {

    const [step, setStep] = useState(1);
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
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handlePasswordShow = () => setState({
        ...state, 
        show: !state.show
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit called babe");
        console.log(state);
    }

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
                                <ReviewInfo 
                                    state        = {state}
                                    prevStep     = {prevStep}
                                    handleSubmit = {handleSubmit}
                                />
                               
    
    switch(step) {
        case 1: return(
            <UserDetails 
                state              = {state}
                nextStep           = {nextStep}
                inputType          = {inputType}
                handleInputChange  = {handleInputChange}
                handlePasswordShow = {handlePasswordShow}
            />
        );
        case 2: return(
            <DoctorDetails 
                state             = {state}
                prevStep          = {prevStep}
                nextStep          = {nextStep}
                handleInputChange = {handleInputChange}
            />
        )
        case 3: return(
            <ReviewInfo 
                state        = {state}
                prevStep     = {prevStep}
                handleSubmit = {handleSubmit}
            />
        )
        default: return(
            null
        )
    }
    // return(
    //     <>
    //         {renderFormStep}   
    //     </>
    // )
}

export default LogIn;