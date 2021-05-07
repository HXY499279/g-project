import React, { Component, Fragment } from 'react';
import { Input, Select, Checkbox, Button } from 'antd';
//引入css文件
import './style.css';

const { Option } = Select;


class DataUplode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guiyin: [
                { value: '首次触点归因', id: 0 },
                { value: '末次触点归因', id: 1 },
                { value: '线性归因', id: 2 },
                { value: '基于位置归因', id: 3 },
                { value: '时间衰减归因', id: 4 }
            ],
            tiaoshu: [
                { value: 10, id: 10 },
                { value: 20, id: 20 },
                { value: '全部', id: 0 }
            ]
        }
    }

    mapRenderGuiyinOption = () => {
        return this.state.guiyin.map(item => {
            return (
                <Option key={item.id} value={item.id} >{item.value}</Option>
            )
        })
    }

    mapRenderTiaoshuOption = () => {
        return this.state.tiaoshu.map(item => {
            return (
                <Option key={item.id} value={item.id} >{item.value}</Option>
            )
        })
    }

    onStartTimeChange = (e) => {
        this.props.acqStartTimeData(e.target.value)
    }

    onEndTimeChange = (e) => {
        this.props.acqEndTimeData(e.target.value)
    }

    onGuiyinModeChange = (e) => {
        this.props.acqGuiyinmodeData(e)
    }

    onGuiyinWindowChange = (e) => {
        this.props.acqGuiyinWindowData(e.target.value)
    }

    onCheckboxChange = (e) => {
        if (e.target.checked === true) {
            this.props.acqOtherConverseData(1)
        } else {
            this.props.acqOtherConverseData(0)
        }
    }

    onTiaoshuChange = (e) => {
        this.props.acqNData(e)
    }


    submit = () => {
        this.props.sendPostandAcquireRes();

    }

    

    render() {
        return (
            <Fragment>
                <div className='secondarytitle' style={{ display: 'inline-block' }}>时间选择：</div>
                <Input placeholder='请输入开始时间' className='data_input start' name='beginTime' onChange={this.onStartTimeChange} />
                <Input placeholder='请输入结束时间' className='data_input end' name='endTime' onChange={this.onEndTimeChange} />
                <div className='secondarytitle' style={{ display: 'inline-block' }}>归因模型：</div>
                <Select
                    name='mode'
                    className='data_select'
                    placeholder='归因模型'
                    ref={(Select) => { this.GuiyinElem = Select }}
                    onChange={this.onGuiyinModeChange}
                >
                    {this.mapRenderGuiyinOption()};
                </Select>
                <div className='secondarytitle' style={{ display: 'inline-block' }}>归因窗口期（单位：秒）：</div>
                <Input placeholder='归因窗口期' className='data_input guiyin' name='window' onChange={this.onGuiyinWindowChange} />
                <div className='secondarytitle' style={{ display: 'inline-block' }}>是否归于其他转换：</div>
                <Checkbox onChange={this.onCheckboxChange} className='data_checkbox' name='otherConversion' ref={(checkbox) => { this.checkboxElem = checkbox }} />
                <div className='secondarytitle' style={{ display: 'inline-block' }}>展示条数：</div>
                <Select
                    name='N'
                    className='data_select tiaoshu'
                    placeholder='条数'
                    ref={(Select) => { this.TiaoshuElem = Select }}
                    onChange={this.onTiaoshuChange}
                >
                    {this.mapRenderTiaoshuOption()};
                </Select>
                <Button type="primary" htmlType='submit' className='data_button' onClick={this.submit}>查询</Button>
            </Fragment>

        )
    }
}

export default DataUplode;