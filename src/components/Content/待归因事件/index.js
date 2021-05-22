import React, { Component, Fragment } from 'react';
//引入组件
import { Select, List } from 'antd';
//引入图标
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
//引入css文件
import './style.css';
//从组件中获取组件
const { Option } = Select;


class ContentSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    // 添加
    iconAddClick = () => {
        const list = [...this.state.list, 1]
        this.setState({
            list
        })
    }
    //删除 
    handleItemClick = (index) => {
        let list = [...this.state.list]
        list[index] = 0
        // 值变成0的时候，同时让数据数组中的数据移出
        this.setState({
            list
        })
        this.props.deleteTouchEventData(index)
    }

    ontouchEventsChange = (index, e) => {
        // console.log(index)
        this.props.acqTouchEventData(index, e);
    }

    //循环渲染每一项
    getListItems = () => {
        return this.state.list.map((item, index) => {
            if (this.state.list[index] === 1) {
                return (
                    <List.Item
                        key={index}
                        className='listitem'
                    >
                        <Select
                            name='touchEvents'
                            key={index}
                            className='select_middle'
                            placeholder='事件名'
                            ref={(Select) => { this.touchEventsElem = Select }}
                            onChange={this.ontouchEventsChange.bind(this, index)}
                        >
                            {this.mapRenderEventOption()};
                        </Select>
                        <Select
                            key={index + 500}
                            className='select_middle'
                            placeholder="分组属性名"
                        >
                            {this.mapRenderAttrOption()};
                        </Select>
                        <CloseCircleOutlined
                            key={index + 1000}
                            style={{ display: 'inline-block', marginRight: 10 }}
                            className='icon'
                            onClick={this.handleItemClick.bind(this, index)}
                        />
                    </List.Item>
                )
            } else {
                return '';
            }
        })
    }
    //添加事件的数据
    mapRenderEventOption = () => {
        return this.props.events.map(item => {
            return (
                <Option key={item.id} value={item.event} >{item.name}</Option>
            )
        })
    }
    //添加属性的数据
    mapRenderAttrOption = () => {
        return this.props.attrs.map(item => {
            return (
                <Option key={item.id + 's'}>{item.name}</Option>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <PlusCircleOutlined
                    className='icon'
                    style={{ position: 'relative', top: -21, left: 100 }}
                    onClick={this.iconAddClick}
                />
                <div className='eventComponent eventComponent2' >
                    <List
                        itemLayout="horizontal"
                    >
                        {this.getListItems()}
                    </List>
                </div>
            </Fragment>
        )
    }

}

export default ContentSecond;
