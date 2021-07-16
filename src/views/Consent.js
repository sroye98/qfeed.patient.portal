import { Skeleton } from 'antd';

const Consent = (props) => {
    return (
        <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '100px' }}>
            <Skeleton active={true} paragraph={{ rows: 4 }} />
            <Skeleton active={true} paragraph={{ rows: 7 }} />
            <Skeleton active={true} paragraph={{ rows: 10 }} />
        </div>
    );
};

export default Consent;