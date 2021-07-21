import { Checkbox, Form, Typography } from 'antd';

const { Title } = Typography;

const Consent = (props) => {
    return (
        <div style={{ marginLeft: '25%', marginRight: '20px', marginBottom: '100px', textAlign: 'left' }}>
            <Title level={2}>Do you give us consent to ...</Title>
            <Form>
                <div>
                    <Checkbox>
                        <Title level={3}>
                            use your photo on our Social Media Platforms?
                        </Title>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                        <Title level={3}>
                            use your name on our Social Media Platforms?
                        </Title>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                        <Title level={3}>
                            use your video on our Social Media Platforms?
                        </Title>
                    </Checkbox>
                </div>
                <div>
                    <Checkbox>
                        <Title level={3}>
                            tag you on our Social Media Platforms?
                        </Title>
                    </Checkbox>
                </div>
            </Form>
        </div>
    );
};

export default Consent;