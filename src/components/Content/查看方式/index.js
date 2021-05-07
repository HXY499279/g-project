import React, { Component } from 'react';
import { Select } from 'antd';
//引入css文件
import './style.css';

const { Option } = Select;

export default class ContentFouth extends Component {

    //添加查看方式下拉框的数据
    mapRenderEventOption = () => {
        return this.props.values.map(item => {
            return (
                <Option key={item.id} value={item.attr}>{item.name}</Option>
            )
        })
    }

    onindexValueIdChange = (e) => {
        this.props.acqValueAttrData(e)
    }

    render() {
        return (
            <Select
                name='indexValueId'
                className='select_bottom'
                defaultValue='事件名'
                ref={(Select) => { this.indexValueIdElem = Select }}
                onChange = {this.onindexValueIdChange}
            >
                {this.mapRenderEventOption()}
            </Select>
        )
    }
}

