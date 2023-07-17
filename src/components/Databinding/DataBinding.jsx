import React, { Component } from 'react'

export default class DataBinding extends Component {

    // để truyền biến, hàm vào trong jsx ta đưa vào trong cặp dấu ngoặc nhọn {}
    age = 18

    renderMessage = () => {
        return 'Hello BC32E'
    }

    renderMessage1 = () => {
        const name = 'ABCDEF'
        return (
            <div className="text-danger">
                Hello BC32E Cybersoft {name} {this.age}
            </div>
        )
    }
    render() {
        const name = 'Nguyễn Viết Hải'
        const message = 'Cybersoft'
        return (
            <div>
                DataBinding
                <p>
                    Hello {name} {this.age}
                </p>
                <p>{message}</p>
                <p>{this.renderMessage()}</p>
                <div>{this.renderMessage1()}</div>
            </div>
        )
    }
}
