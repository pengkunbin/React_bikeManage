import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './index.less'
const { Footer } = Layout;

export default class MFooter extends React.Component {
    render() {
        return (
            <Footer>This is a Footer</Footer>
        )
    }
}