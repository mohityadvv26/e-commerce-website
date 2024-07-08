import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAdrressForm from './DeliveryAdrressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    const step = parseInt(querySearch.get("step"), 10) || 0;
    const [activeStep, setActiveStep] = React.useState(step);

    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <div>Login Form</div>; // Replace with actual Login component
            case 1:
                return <DeliveryAdrressForm />;
            case 2:
                return <OrderSummary />;
            case 3:
                return <div>Payment Form</div>; // Replace with actual Payment component
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        <div className='mt-10'>
                            {renderStepContent(activeStep)}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
