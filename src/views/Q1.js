import { Button, Divider, Image, Space } from 'antd';
import recordingScreen from '../images/recording-screen.png';

const QuestionOne = (props) => {
    return (
        <div style={{ marginBottom: '100px' }}>
            <h2>How was your experience with Dr. Dewan?</h2>
            <Image width={250} height={375} src={recordingScreen} />
            <Divider />
            <Space>
                <Button type="primary">
                    Record
                </Button>
                <Button type="ghost">
                    Stop
                </Button>
            </Space>
        </div>
    );
};

export default QuestionOne;