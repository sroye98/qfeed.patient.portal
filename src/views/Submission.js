import { Form, Input, Result } from 'antd';

const Submission = (props) => {
    return (
        <div style={{ marginBottom: '100px' }}>
            <Result title="Are you satisfied with your testimonial?" subTitle="Please enter your social media handles to be tagged on the post and increase your brand." />
            <Form layout="vertical" style={{ marginLeft: '25%', marginRight: '25%'}}>
                <Form.Item label="Facebook Handle" tooltip="Enter your Facebook Handle">
                    <Input placeholder="Facebook Handle" />
                </Form.Item>
                <Form.Item label="Instagram Handle" tooltip="Enter your Instagram Handle">
                    <Input placeholder="Instagram Handle" />
                </Form.Item>
                <Form.Item label="Twitter Handle" tooltip="Enter your Twitter Handle">
                    <Input placeholder="Twitter Handle" />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Submission;