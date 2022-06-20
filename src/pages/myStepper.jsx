import { useState } from 'react'
import {
    Box,
    Stepper,
    Step,
    StepButton,
    Typography,
    Button,
} from '@mui/material'

function MyStepper({ steps }) {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState({})

    const totalStepLength = totalStepCount.bind(this, steps)

    const compledtedStepLength = compledtedStep.bind(this, completed)

    const isLastActiveStep = isLastStep.bind(this, activeStep, steps)

    const isAllStepsCompleted = allStepsCompleted.bind(this, completed, steps)

    const onStepButtonClickEventHandler = (step) => () => {
        setActiveStep(step)
    }

    const onResetButtonClickEventHandler = () => {
        setActiveStep(0)
        setCompleted({})
    }

    const onBackButtonClickEventHandler = () => {
        setActiveStep((prev) => prev - 1)
    }

    const onNextButtonClickEventHandler = () => {
        const newActiveStep = isLastActiveStep() && !isAllStepsCompleted() ?
            steps.findIndex((step, i) => !(i in completed)) :
            activeStep + 1
        setActiveStep(newActiveStep)
    }

    const onCompletedButtonClickEventHandler = () => {
        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        onNextButtonClickEventHandler()
    }

    return (
        <Box sx={boxStyle}>
            <Stepper
                activeStep={activeStep}
                nonLinear={false}
                alternativeLabel={true}
            >
                {steps.map((label, i) => {
                    return (
                        <Step
                            key={label}
                            completed={completed[i]}
                        >
                            <StepButton
                                color="inherit"
                                onClick={onStepButtonClickEventHandler(i)}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    )}
                )}
            </Stepper>
            {isAllStepsCompleted() ? (
                <Box>
                    <Typography sx={typographyStyle}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={buttonBoxStyle}>
                        <Box sx={buttonStyle}>
                            <Button onClick={onResetButtonClickEventHandler}>Reset</Button>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box>
                    <Typography
                        variant='h6'
                        sx={typographyStyle}
                    >
                        {steps[activeStep]}
                    </Typography>
                    <Box sx={buttonBoxStyle}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={onBackButtonClickEventHandler}
                            sx={backNextButtonStyle}
                        >
                            Back
                        </Button>
                        <Box sx={buttonStyle} />
                        <Button
                            disabled={isLastActiveStep()}
                            onClick={onNextButtonClickEventHandler}
                            sx={backNextButtonStyle}
                        >
                            Next
                        </Button>
                        {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                            <Typography
                                variant="caption"
                                sx={completedStyle}
                            >
                                Step {activeStep + 1} already completed
                            </Typography>
                            ) : (
                            <Button onClick={onCompletedButtonClickEventHandler}>
                                {compledtedStepLength() === totalStepLength() - 1
                                    ? 'Finish'
                                    : 'Complete Step'}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

function totalStepCount(steps) {
    return steps.length
}

function compledtedStep(completed) {
    return Object.keys(completed).length
}

function isLastStep(activeStep, steps) {
    return activeStep === (totalStepCount(steps) - 1)
}

function allStepsCompleted(completed, steps) {
    return compledtedStep(completed) === totalStepCount(steps)
}

const boxStyle = {
    marginTop: '3rem',
    width: '100%',
}

const typographyStyle = {
    mt: 4,
    mb: 2,
}

const buttonBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    pt: 2,
}

const buttonStyle = {
    flex: '1 1 auto',
}

const backNextButtonStyle = {
    mr: 2,
}

const completedStyle = {
    display: 'inline-block',
}

export default MyStepper