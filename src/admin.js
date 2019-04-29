import React from 'react'
import { Row,Col } from 'antd'
import 'antd/dist/antd.css'
import './style/common.less'
import Content from './pages/home'
import MHeader from './Components/Header'
import MFooter from './Components/Footer'
import MNavLeft from './Components/NavLeft'


export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <MNavLeft/>
                </Col>
                <Col span={21} className="main">
                    <MHeader/>
                        <Row className="content">
                            <Content/>
                        </Row>
                    <MFooter/>
                </Col>
            </Row>
        );
    }
}