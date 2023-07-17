import React, { Component } from 'react'
import ChiTietSP from './ChiTietSP'
import data from './data.json'
import GioHang from './GioHang'
import PhoneList from './PhoneList'

export default class BTPhoneRedux extends Component {
    render() {
        return (
            <div className="container">
                BTPhoneRedux
                <GioHang />
                <PhoneList data={data} />
                <ChiTietSP />
            </div>
        )
    }
}
