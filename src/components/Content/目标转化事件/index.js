import React, { Component } from 'react';
//引入组件
import { Select } from 'antd';
//引入css文件
import './style.css';
//从组件中获取组件
const { Option } = Select;

class ContentFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            attrs: []
        }
    }

    mapRenderEventOption = () => {
        return this.props.events.map(item => {
            return (
                <Option key={item.id} value={item.event} >{item.name}</Option>
            )
        })
    }

    mapRenderAttrOption = () => {
        return this.props.attrs.map(item => {
            return (
                <Option key={item.id}>{item.name}</Option>
            )
        })
    }

    ontargetEventChange = (e) => {
        this.props.acqTargetEventData(e)
    }

    render() {
        return (
            <div className='eventComponent1'>
                <Select
                    name='targetEvents'
                    className='select'
                    defaultValue='事件'
                    style={{ width: 120 }}
                    ref={(Slect) => {this.targetEventsElem = Slect}}
                    onChange={this.ontargetEventChange}
                >
                    {this.mapRenderEventOption()};
                </Select>
                <Select
                    className='select'
                    defaultValue="属性"
                    style={{ width: 120 }}
                >
                    {this.mapRenderAttrOption()};
                </Select>
            </div>
        )
    }

}

export default ContentFirst;