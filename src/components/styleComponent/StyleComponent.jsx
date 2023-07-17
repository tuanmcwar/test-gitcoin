// rcc
import React, { Component } from 'react'

// styleSheet
import './style.css'

// module
import style from './style.module.css'

export default class StyleComponent extends Component {
    // Có 3 cách sử dụng css
    // 1. styleSheet => Css áp dụng cho toàn bộ ứng dụng
    // 2. inline
    // 3. module => Áp dụng cho component sử dụng css đó

    render() {
        return (
            <div className="container StyleComponent">
                <h2 style={{ color: 'blue', fontWeight: '700', fontSize: "20px" }}>StyleComponent</h2>
                <p className="title">Cybersoft BC32E</p>

                {/* <p className={style.heading}>Hello BC32</p> */}
                <p className={`${style.heading} ${style.title} ${style.heading1} ${style['about-heading']}`}>
                    Hello BC32
                </p>
            </div>
        )
    }
}

// styled - component
