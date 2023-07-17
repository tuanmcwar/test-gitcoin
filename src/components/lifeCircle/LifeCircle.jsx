import React, { Component } from 'react'
import Child from './Child'

export default class LifeCircle extends Component {
    /**
     * Nó có 3 giai đoạn:
     * MOUNTING: Khởi tạo component
     *  - constructor: khởi tạo state hoặc để bind this vào các method
     *  - getDerivedStateFromProps: thường sử dụng để update state trước khi render ra giao diện.
     *  - render: Render giao diện
     *  - componentDidMount: Thường dùng để call API..., chỉ chạy duy nhất 1 lần sau khi component được render ra giao diện
     * UPDATING: update component, được chạy khi component nhận props mới hoặc hàm setState được gọi.
     *  - getDerivedStateFromProps: thường được sử dụng để chuyển props thành state nội bộ của component
     *  - shouldComponentUpdate: Sử dụng để hạn chế việc rerender không cần thiết => tối ưu performance của ứng dụng.
     *  - render:
     *  - getSnapShotBeforceUpdate: Thường được sử dụng để lấy giá trị trước khi update DOM.
     *  - componentDidUpDate: Lấy giá trị từ getSnapShotBeforceUpdate hoặc để xử lý việc call API.
     * UNMOUNTING: Trước khi component bị huỷ.
     *  - componentWillUnMount: Chạy trước khi component bị huỷ, dùng để clear các sự kiện như setTimeout, setInterval
     */

    constructor() {
        super()
        console.log('constructor')
        this.state = {
            number: 10,
            like: 1,
        }
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log('getDerivedStateFromProps')
        // console.log('this', this)
        // currentState.number = 20
        return currentState
    }

    render() {
        console.log('Render')
        return (
            <div>
                LifeCircle
                <p className="text-40 text-red-500">Number: {this.state.number}</p>
                <p className="text-40 text-red-500">Like : {this.state.like}</p>
                <button
                    className="p-10 bg-green-300 hover:bg-red-500"
                    onClick={() => {
                        this.setState({ number: this.state.number + 1 })
                    }}
                >
                    INCREASE Number
                </button>
                <button
                    className="p-10 ml-7 bg-green-300 hover:bg-red-500"
                    onClick={() => {
                        this.setState({ like: this.state.like + 1 })
                    }}
                >
                    INCREASE Like
                </button>
                {this.state.number < 13 && (
                    <Child number={this.state.number} student={{ name: 'Hai' }} />
                )}
            </div>
        )
    }

    componentDidMount() {
        // Call API
        console.log('componentDidmount')
    }
}
