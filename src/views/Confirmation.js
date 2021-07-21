import { Result } from 'antd';

const Confirmation = (props) => {
    return (
        <Result
            status="success"
            title="You have successfully submitted your testimonial"
            subTitle="Keep a watch out on your social media for your mention on <Practice Name>"
        />
    );
};

export default Confirmation;