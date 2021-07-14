import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Steps, Button } from 'antd';

import Record from './Record';
import Consent from './Consent';
import Submission from './Submission';

const { Step } = Steps;

const steps = [
    {
      title: 'Record',
    },
    {
      title: 'Consent',
    },
    {
      title: 'Submission',
    },
  ];

const StepNavigation = (props) => {
    const [current, setCurrent] = useState(0);
    const history = useHistory();

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const toConfirmation = () => {
        history.push('/confirmation');
    };

    const renderSteps = () => {
        switch (steps[current].title)
        {
            case 'Record':
                return <Record />
            case 'Consent':
                return <Consent />
            case 'Submission':
                return <Submission />
            default:
                return <></>
        }
    }

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">
                {renderSteps()}
            </div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => toConfirmation()}>
                        Yes
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
}

export default StepNavigation;