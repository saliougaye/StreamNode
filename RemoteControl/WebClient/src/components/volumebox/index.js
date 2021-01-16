import { Component } from 'preact';

import { Card, Slider, Button } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

class VolumeBox extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Card title={this.props.title}>
                <Button type="primary" shape="circle" icon={<SoundOutlined />} />
                <Slider min={0} max={100} defaultValue={this.props.volume}/>
            </Card>
        );
    }
}

export default VolumeBox;