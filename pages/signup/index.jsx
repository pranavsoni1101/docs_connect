
import { useState } from 'react';
import DoctorDetails from '../../components/SignUp/DoctorDetails';

const LogIn = () => {

    const [step, setStep] = useState(0);
    const [state, setState] = useState({
        name: "",
        qualification: "",
        specialization: "",
        password: "",
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
                                <DoctorDetails 
                                    state             = {state}
                                    nextStep    =   {nextStep}
                                    handleInputChange = {handleInputChange}
                                />
                            : step === 1 ?
                                <h1>HHHIHHIHIH</h1>
                            :
                                <h1>HihgihgigoygoiygHHIHHIHIH</h1>
                                 
    return(
        <>
            {renderFormStep}   
        </>
    )
}

export default LogIn;