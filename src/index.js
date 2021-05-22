import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import emitter from './event';
//引入组件
import { Layout } from 'antd';
import ContentFirst from './components/Content/目标转化事件/index';
import ContentSecond from './components/Content/待归因事件/index';
import ContentThird from './components/Content/过程事件/index';
import ContentFourth from './components/Content/查看方式/index';
import DataUplode from './components/Content/DataUplode/index';
import ReasultShow from './components/Footer/ResultShow/index';
//引入图标
import { SendOutlined } from '@ant-design/icons';
//引入css文件
import 'antd/dist/antd.css';
import './style.css';

const { Header, Footer, Content } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            attrs: [],
            values: [],
            sendData: {
                targetEvent: "",
                processEvents: [""],
                touchEvents: [
                    ""
                ],
                valueAttr: "",
                beginTime: '',
                endTime: '',
                mode: '',
                window: '',
                otherConverse: 0,
                N: ''

                // targetEvent: "success",
                // processEvents: [
                //     "details"
                // ],
                // touchEvents: [
                //     "browse"
                // ],
                // valueAttr: "amount",
                // beginTime: '0',
                // endTime: '6000',
                // mode: '0',
                // window: '86400',
                // otherConverse: 1,
                // N: '0'


            },
            resultData: [
                // [['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'],['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页']],
                // [10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7,10, 5, 6, 2, 7],
                // [4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6,4, 1, 0, 2, 6],
                // [0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571,0.4, 0.2, 0, 1, 0.8571428571428571],
                // [[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [],[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10,5, 5, 40, 10, 10],
                // [0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285,0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285]

                // [['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页']],
                // [10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7],
                // [4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6],
                // [0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571],
                // [[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10],
                // [0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285]

                // [['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页']],
                // [10, 5, 6, 2, 7],
                // [4, 1, 0, 2, 6],
                // [0.4, 0.2, 0, 1, 0.8571428571428571],
                // [[2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                // [5, 5, 40, 10, 10],
                // [0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285]
            ]
        }
    }

    componentDidMount() {
        //接口请求数据
        //events
        axios.get('/events')
            .then((res) => {
                this.setState({
                    events: res.data
                })
                // console.log(this.state.events)
            })
            .catch((err) => {
                console.log(err)
            })
        //attrs
        axios.get('/attrs')
            .then((res) => {
                this.setState({
                    attrs: res.data
                })
                // console.log(this.state.attrs)
            })
            .catch((err) => {
                console.log(err)
            })
        //values
        axios.get('/values')
            .then((res) => {
                this.setState({
                    values: res.data
                })
                // console.log(this.state.values)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //获取目标转化事件的数据
    acqTargetEventData = (value) => {
        let sendData = this.state.sendData
        sendData.targetEvent = value
        this.setState({
            sendData
        })
    }
    //获取过程事件的数据
    acqProcessEventData = (index, value) => {
        let sendData = this.state.sendData
        sendData.processEvents[index] = value
        this.setState({
            sendData
        })
    }
    //删除过程事件的数据
    deleteProcessEventData = (index) => {
        let sendData = this.state.sendData
        sendData.processEvents[index] = '1'
        this.setState({
            sendData
        })
    }
    //获取待归因事件的数据
    acqTouchEventData = (index, value) => {
        let sendData = this.state.sendData
        sendData.touchEvents[index] = value
        this.setState({
            sendData
        })
    }
    //删除待归因事件的数据
    deleteTouchEventData = (index) => {
        let sendData = this.state.sendData
        sendData.touchEvents[index] = '1'
        this.setState({
            sendData
        })
    }
    //获取查看方式的数据
    acqValueAttrData = (value) => {
        let sendData = this.state.sendData
        sendData.valueAttr = value
        this.setState({
            sendData
        })
    }
    //获取时间的数据
    acqStartTimeData = (value) => {
        let sendData = this.state.sendData
        sendData.beginTime = value
        this.setState({
            sendData
        })
    }
    acqEndTimeData = (value) => {
        let sendData = this.state.sendData
        sendData.endTime = value
        this.setState({
            sendData
        })
    }
    //获取归因模型的数据
    acqGuiyinmodeData = (value) => {
        let sendData = this.state.sendData
        sendData.mode = value
        this.setState({
            sendData
        })
    }
    //获取归因窗口期的数据
    acqGuiyinWindowData = (value) => {
        let sendData = this.state.sendData
        sendData.window = value
        this.setState({
            sendData
        })
    }
    //获取是否转于其他规划的数据
    acqOtherConverseData = (value) => {
        let sendData = this.state.sendData
        sendData.otherConverse = value
        this.setState({
            sendData
        })
    }
    //获取展示条数的数据
    acqNData = (value) => {
        let sendData = this.state.sendData
        sendData.N = value
        this.setState({
            sendData
        })
    }

    // 发送请求
    sendPostandAcquireRes = () => {
        console.log('未处理的发送数据', this.state.sendData)
        // 处理发送前的数据中的待归因事件和过程事件的数据
        let workedData = Object.assign({},this.state.sendData) 
        const willworkedTouchEventData = this.state.sendData.touchEvents
        const willworkedProcessEventData = this.state.sendData.processEvents
        let workedTouchEventData = willworkedTouchEventData.filter((item) => {
            if (item !== '1') {
                return item
            }
        })
        let workedProcessEventData = willworkedProcessEventData.filter((item) => {
            if (item !== '1') {
                return item
            }
        })
        workedData.touchEvents = workedTouchEventData
        workedData.processEvents = workedProcessEventData
        console.log('处理后的发送数据', workedData)
        // 发送请求
        axios.post('/result', workedData)
            .then(res => {
                if (typeof (res.data) === 'string') {
                    res.data = eval(`(${res.data})`)
                }
                // console.log(res.data[0].length)
                for (let i = 0; i < res.data[0].length; i++) {
                    if (res.data[0][i][0] === '$other_conversions') {
                        res.data[0][i][0] = '其他转换'
                    }
                    if (res.data[0][i][1] === '$other_conversions') {
                        res.data[0][i][1] = '其他转换'
                    }
                }
                //先让结果表中的数据清零 
                let Timeout = setTimeout(() => {
                    this.setState({
                        resultData: [
                            // [['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页'], ['browse', '活动页'], ['browse', '赠品页'], ['$other_conversions', ''], ['browse', '红包页'], ['browse', '折扣页']],
                            // [10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7, 10, 5, 6, 2, 7],
                            // [4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6, 4, 1, 0, 2, 6],
                            // [0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571, 0.4, 0.2, 0, 1, 0.8571428571428571],
                            // [[2, 10, 10, 10, 10, 10, 11, 12, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [2, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                            // [[1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], [], [1, 2, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [], []],
                            // [5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10, 5, 5, 40, 10, 10],
                            // [0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285, 0.07142857142857142, 0.07142857142857142, 0.5714285714285714, 0.14285714285714285, 0.14285714285714285]
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ]
                    })
                    emitter.emit('callMe')
                    clearTimeout(Timeout)
                }, 0);


                let timeout = setTimeout(() => {
                    this.setState({
                        resultData: res.data
                    })
                    // console.log('接收到的结果数据', this.state.resultData)
                    emitter.emit('callMe')
                    clearTimeout(timeout)
                }, 200);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Layout className='layout'>
                <Header className='header'>
                    归因分析
                </Header>
                <Content className='content'>
                    <h1 className='primarytitle'><SendOutlined className='icon icon_top' />选择事件</h1>
                    <div id='top'>
                        <div className='contentfirst'>
                            <span className='secondarytitle span'>目标转化事件：</span>
                            <ContentFirst events={this.state.events} attrs={this.state.attrs} acqTargetEventData={this.acqTargetEventData} />
                        </div>
                        <div className='contentsecond'>
                            <p className='secondarytitle'>待归因事件：</p>
                            <ContentSecond events={this.state.events} attrs={this.state.attrs} acqTouchEventData={this.acqTouchEventData} deleteTouchEventData={this.deleteTouchEventData} />
                        </div>
                        <div className='contentthird'>
                            <p className='secondarytitle'>过程事件：</p>
                            <ContentThird events={this.state.events} attrs={this.state.attrs} acqProcessEventData={this.acqProcessEventData} deleteProcessEventData={this.deleteProcessEventData} />
                        </div>
                        <div className='contentfourth'>
                            <p className='secondarytitle'>查看方式：</p>
                            <ContentFourth values={this.state.values} acqValueAttrData={this.acqValueAttrData} />
                        </div>
                    </div>
                    <div className='middle' >
                        <div className='contentfifth'>
                            <DataUplode
                                acqStartTimeData={this.acqStartTimeData}
                                acqEndTimeData={this.acqEndTimeData}
                                acqGuiyinmodeData={this.acqGuiyinmodeData}
                                acqGuiyinWindowData={this.acqGuiyinWindowData}
                                acqOtherConverseData={this.acqOtherConverseData}
                                acqNData={this.acqNData}
                                sendPostandAcquireRes={this.sendPostandAcquireRes}
                            />
                        </div>
                    </div>
                </Content>
                <Footer className='footer'>
                    <ReasultShow resultData={this.state.resultData} sendData={this.state.sendData} />
                </Footer>
            </Layout>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))

