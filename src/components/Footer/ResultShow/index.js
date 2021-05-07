import React, { Component, Fragment } from 'react';
import { Chart } from '@antv/g2';
import emitter from "../../../event";
//引入组件
import { Table } from 'antd';
//引入css文件
import './style.css';

const { Column, ColumnGroup } = Table;

class ReasultShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {
                //     key: '1',
                //     touchEvents: 'John',
                //     totalClicks: 'Brown',
                //     clickRate: 32,
                //     durationDistr: '',
                //     stepLengthDistr: ['nice', 'developer'],
                //     valueRealization: 'valueRealization',
                //     contributionRate: 'contributionRate'
                // }
            ]
        }
    }

    //返回结果数据渲染到页面
    componentDidMount = () => {
        this.eventEmitter = emitter.addListener("callMe", () => {
            console.log("发射器被启动，数据发送到了页面组件中")
            let update = function () {
                let data = [];
                let result = this.props.resultData
                if (typeof (result) === 'string') {
                    result = eval(`(${result})`)
                }
                console.log(result)
                if (result[0] !== '' && result[0] !== undefined && result !== '') {
                    for (let i = 1; i <= result[0].length; i++) {
                        data.push({
                            key: i,
                            touchEvents: `${result[0][i - 1][0]}(${result[0][i - 1][1]}) `,
                            totalClicks: result[1][i - 1],
                            clickRate: `${result[2][i - 1]} (${(result[3][i - 1]).toFixed(4) * 100 + '%'})`,
                            durationDistr: <div id={`c${i}`}></div>,
                            stepLengthDistr: <div id={`C${i}`} ></div>,
                            // durationDistr: result[4][i-1],
                            // stepLengthDistr: result[5][i-1],
                            valueRealization: result[6][i - 1],
                            contributionRate: `${(result[7][i - 1]*100).toFixed(2)}%`
                        }
                        )
                    }
                }
                return data
            }
            update = update.bind(this)
            let data = update();
            this.setState({
                data
            })
            //bug!!!!!
            // if (this.divElem[1]) {
            //     if (this.divElem[1].innerHTML === '') {
            let timeout = setTimeout(() => {
                console.log('直方图的第一次渲染')
                let result = this.props.resultData
                if (typeof (result) === 'string') {
                    result = eval(`(${result})`)
                }
                if (result[0] !== '' && result[0] !== undefined && result !== '') {
                    if (result[0].length < 10) {
                        //转换时长
                        for (let i = 1; i <= result[0].length; i++) {
                            const data = [
                                { year: '1', value: result[4][i - 1][0] },
                                { year: '2', value: result[4][i - 1][1] },
                                { year: '3', value: result[4][i - 1][2] },
                                { year: '4', value: result[4][i - 1][3] },
                                { year: '5', value: result[4][i - 1][4] },
                                { year: '6', value: result[4][i - 1][5] },
                                { year: '7', value: result[4][i - 1][6] },
                                { year: '8', value: result[4][i - 1][7] },
                                { year: '9', value: result[4][i - 1][8] },
                                { year: '10', value: result[4][i - 1][9] }
                            ];
                            const chart = new Chart({
                                container: `c${i}`,
                                autoFit: true,
                                height: 100,
                                width: 10
                            });

                            chart.data(data);

                            chart.tooltip({
                                showMarkers: false,
                            });

                            chart.interval().position('year*value');

                            chart.interaction('element-active');

                            chart.render();
                        }
                        //转化步长
                        for (let i = 1; i <= result[0].length; i++) {
                            const data = [
                                { year: '1', value: result[5][i - 1][0] },
                                { year: '2', value: result[5][i - 1][1] },
                                { year: '3', value: result[5][i - 1][2] },
                                { year: '4', value: result[5][i - 1][3] },
                                { year: '5', value: result[5][i - 1][4] },
                                { year: '6', value: result[5][i - 1][5] },
                                { year: '7', value: result[5][i - 1][6] },
                                { year: '8', value: result[5][i - 1][7] },
                                { year: '9', value: result[5][i - 1][8] },
                                { year: '10', value: result[5][i - 1][9] }
                            ];
                            const chart = new Chart({
                                container: `C${i}`,
                                autoFit: true,
                                height: 100,
                            });

                            chart.data(data);

                            chart.tooltip({
                                showMarkers: false,
                            });

                            chart.interval().position('year*value');

                            chart.interaction('element-active');

                            chart.render();
                        }
                    } else if (result[0].length >= 10) {
                        //转换时长
                        for (let i = 1; i <= 10; i++) {
                            const data = [
                                { year: '1', value: result[4][i - 1][0] },
                                { year: '2', value: result[4][i - 1][1] },
                                { year: '3', value: result[4][i - 1][2] },
                                { year: '4', value: result[4][i - 1][3] },
                                { year: '5', value: result[4][i - 1][4] },
                                { year: '6', value: result[4][i - 1][5] },
                                { year: '7', value: result[4][i - 1][6] },
                                { year: '8', value: result[4][i - 1][7] },
                                { year: '9', value: result[4][i - 1][8] },
                                { year: '10', value: result[4][i - 1][9] }
                            ];
                            const chart = new Chart({
                                container: `c${i}`,
                                autoFit: true,
                                height: 100,
                                width: 10
                            });

                            chart.data(data);

                            chart.tooltip({
                                showMarkers: false,
                            });

                            chart.interval().position('year*value');

                            chart.interaction('element-active');

                            chart.render();
                        }
                        //转化步长
                        for (let i = 1; i <= 10; i++) {
                            const data = [
                                { year: '1', value: result[5][i - 1][0] },
                                { year: '2', value: result[5][i - 1][1] },
                                { year: '3', value: result[5][i - 1][2] },
                                { year: '4', value: result[5][i - 1][3] },
                                { year: '5', value: result[5][i - 1][4] },
                                { year: '6', value: result[5][i - 1][5] },
                                { year: '7', value: result[5][i - 1][6] },
                                { year: '8', value: result[5][i - 1][7] },
                                { year: '9', value: result[5][i - 1][8] },
                                { year: '10', value: result[5][i - 1][9] }
                            ];
                            const chart = new Chart({
                                container: `C${i}`,
                                autoFit: true,
                                height: 100,
                            });

                            chart.data(data);

                            chart.tooltip({
                                showMarkers: false,
                            });

                            chart.interval().position('year*value');

                            chart.interaction('element-active');

                            chart.render();
                        }
                    }
                }
                clearTimeout(timeout)
            }, 0);
            //     }
            // }


        })
    }


    componentDidUpdata() {
    }

    showColumn = () => {
        return (
            <>
                <ColumnGroup title="待归因事件">
                    <Column title="触点事件" dataIndex="touchEvents" key="touchEvents" />
                </ColumnGroup>
                <ColumnGroup title="点击规模">
                    <Column title="总点击数" dataIndex="totalClicks" key="totalClicks" />
                    <Column title="有效点击率" dataIndex="clickRate" key="clickRate" />
                </ColumnGroup>
                <ColumnGroup title="转化分布">
                    <Column title="转化时长分布" dataIndex="durationDistr" key="durationDistr" />
                    <Column title="转化步长分布" dataIndex="stepLengthDistr" key="stepLengthDistr" />
                </ColumnGroup>
                <ColumnGroup title="目标转化">
                    <Column title="实现价值" dataIndex="valueRealization" key="valueRealization" />
                    <Column title="贡献率" dataIndex="contributionRate" key="contributionRate" />
                </ColumnGroup>
            </>
        )
    }


    render() {
        let result = this.props.resultData
        if (typeof (result) === 'string') {
            result = eval(`(${result})`)
        }
        return (
            <Fragment>
                <Table
                    bordered={true}
                    dataSource={this.state.data}
                    className='reasult'
                    pagination={{
                        position: ['bottomCenter'],
                        pageSize: 10,
                        // 只有一页是不显示分页按钮
                        hideOnSinglePage: true,
                        onChange: function (page) {
                            let timeout = setTimeout(function () {
                                if (result[0] !== '' && result[0] !== undefined && result !== '') {
                                    if (result[0].length <= 10) {
                                        //转化时长分布
                                        for (let i = (page - 1) * 10 + 1; i <= result[0].length; i++) {
                                            const data = [
                                                { year: '1', value: result[4][i - 1][0] },
                                                { year: '2', value: result[4][i - 1][1] },
                                                { year: '3', value: result[4][i - 1][2] },
                                                { year: '4', value: result[4][i - 1][3] },
                                                { year: '5', value: result[4][i - 1][4] },
                                                { year: '6', value: result[4][i - 1][5] },
                                                { year: '7', value: result[4][i - 1][6] },
                                                { year: '8', value: result[4][i - 1][7] },
                                                { year: '9', value: result[4][i - 1][8] },
                                                { year: '10', value: result[4][i - 1][9] }
                                            ];
                                            const chart = new Chart({
                                                container: `c${i}`,
                                                autoFit: true,
                                                height: 100,
                                            });

                                            chart.data(data);

                                            chart.tooltip({
                                                showMarkers: false,
                                            });

                                            chart.interval().position('year*value');

                                            chart.interaction('element-active');

                                            chart.render();

                                        }
                                        //转化步长分布
                                        for (let i = (page - 1) * 10 + 1; i <= result[0].length; i++) {
                                            const data = [
                                                { year: '1', value: result[5][i - 1][0] },
                                                { year: '2', value: result[5][i - 1][1] },
                                                { year: '3', value: result[5][i - 1][2] },
                                                { year: '4', value: result[5][i - 1][3] },
                                                { year: '5', value: result[5][i - 1][4] },
                                                { year: '6', value: result[5][i - 1][5] },
                                                { year: '7', value: result[5][i - 1][6] },
                                                { year: '8', value: result[5][i - 1][7] },
                                                { year: '9', value: result[5][i - 1][8] },
                                                { year: '10', value: result[5][i - 1][9] }
                                            ];
                                            const chart = new Chart({
                                                container: `C${i}`,
                                                autoFit: true,
                                                height: 100,
                                            });

                                            chart.data(data);

                                            chart.tooltip({
                                                showMarkers: false,
                                            });

                                            chart.interval().position('year*value');

                                            chart.interaction('element-active');

                                            chart.render();

                                        }
                                    } else if (result[0].length > 10) {
                                        let theOther = result[0].length % 10
                                        let pageTotalNumber = parseInt(result[0].length / 10)
                                        if (page <= pageTotalNumber) {
                                            //转化时长分布
                                            for (let i = (page - 1) * 10 + 1; i <= page * 10; i++) {
                                                const data = [
                                                    { year: '1', value: result[4][i - 1][0] },
                                                    { year: '2', value: result[4][i - 1][1] },
                                                    { year: '3', value: result[4][i - 1][2] },
                                                    { year: '4', value: result[4][i - 1][3] },
                                                    { year: '5', value: result[4][i - 1][4] },
                                                    { year: '6', value: result[4][i - 1][5] },
                                                    { year: '7', value: result[4][i - 1][6] },
                                                    { year: '8', value: result[4][i - 1][7] },
                                                    { year: '9', value: result[4][i - 1][8] },
                                                    { year: '10', value: result[4][i - 1][9] }
                                                ];
                                                const chart = new Chart({
                                                    container: `c${i}`,
                                                    autoFit: true,
                                                    height: 100,
                                                });

                                                chart.data(data);

                                                chart.tooltip({
                                                    showMarkers: false,
                                                });

                                                chart.interval().position('year*value');

                                                chart.interaction('element-active');

                                                chart.render();

                                            }
                                            //转化步长分布
                                            for (let i = (page - 1) * 10 + 1; i <= page * 10; i++) {
                                                const data = [
                                                    { year: '1', value: result[5][i - 1][0] },
                                                    { year: '2', value: result[5][i - 1][1] },
                                                    { year: '3', value: result[5][i - 1][2] },
                                                    { year: '4', value: result[5][i - 1][3] },
                                                    { year: '5', value: result[5][i - 1][4] },
                                                    { year: '6', value: result[5][i - 1][5] },
                                                    { year: '7', value: result[5][i - 1][6] },
                                                    { year: '8', value: result[5][i - 1][7] },
                                                    { year: '9', value: result[5][i - 1][8] },
                                                    { year: '10', value: result[5][i - 1][9] }
                                                ];
                                                const chart = new Chart({
                                                    container: `C${i}`,
                                                    autoFit: true,
                                                    height: 100,
                                                });

                                                chart.data(data);

                                                chart.tooltip({
                                                    showMarkers: false,
                                                });

                                                chart.interval().position('year*value');

                                                chart.interaction('element-active');

                                                chart.render();

                                            }
                                        } else if (page === pageTotalNumber + 1) {
                                            //转化时长分布
                                            for (let i = (page - 1) * 10 + 1; i <= (page - 1) * 10 + theOther; i++) {
                                                const data = [
                                                    { year: '1', value: result[4][i - 1][0] },
                                                    { year: '2', value: result[4][i - 1][1] },
                                                    { year: '3', value: result[4][i - 1][2] },
                                                    { year: '4', value: result[4][i - 1][3] },
                                                    { year: '5', value: result[4][i - 1][4] },
                                                    { year: '6', value: result[4][i - 1][5] },
                                                    { year: '7', value: result[4][i - 1][6] },
                                                    { year: '8', value: result[4][i - 1][7] },
                                                    { year: '9', value: result[4][i - 1][8] },
                                                    { year: '10', value: result[4][i - 1][9] }
                                                ];
                                                const chart = new Chart({
                                                    container: `c${i}`,
                                                    autoFit: true,
                                                    height: 100,
                                                });

                                                chart.data(data);

                                                chart.tooltip({
                                                    showMarkers: false,
                                                });

                                                chart.interval().position('year*value');

                                                chart.interaction('element-active');

                                                chart.render();

                                            }
                                            //转化步长分布
                                            for (let i = (page - 1) * 10 + 1; i <= (page - 1) * 10 + theOther; i++) {
                                                const data = [
                                                    { year: '1', value: result[5][i - 1][0] },
                                                    { year: '2', value: result[5][i - 1][1] },
                                                    { year: '3', value: result[5][i - 1][2] },
                                                    { year: '4', value: result[5][i - 1][3] },
                                                    { year: '5', value: result[5][i - 1][4] },
                                                    { year: '6', value: result[5][i - 1][5] },
                                                    { year: '7', value: result[5][i - 1][6] },
                                                    { year: '8', value: result[5][i - 1][7] },
                                                    { year: '9', value: result[5][i - 1][8] },
                                                    { year: '10', value: result[5][i - 1][9] }
                                                ];
                                                const chart = new Chart({
                                                    container: `C${i}`,
                                                    autoFit: true,
                                                    height: 100,
                                                });

                                                chart.data(data);

                                                chart.tooltip({
                                                    showMarkers: false,
                                                });

                                                chart.interval().position('year*value');

                                                chart.interaction('element-active');

                                                chart.render();

                                            }
                                        }
                                    }
                                }
                                clearTimeout(timeout)
                            }, 0)
                        }

                    }}
                    scroll={{
                        y: 290
                    }}
                    tableLayout='fixed'
                    style={{ minWidth: 700 }}
                >
                    {this.showColumn()}
                </Table>
            </Fragment >
        )
    }
}

export default ReasultShow;