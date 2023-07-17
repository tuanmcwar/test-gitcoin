import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'

export default class BTXucXac extends Component {
    render() {
        return (
            <div 
                className="h-screen" 
                style={{ background: 'url(./images/BTXucXac/bgGame.png)' }}>
                <div className="max-w-7xl m-auto">
                    <XucXac />
                    <KetQua />
                </div>
            </div>
        )
    }
}
