// rcc
import React, { Component } from 'react'

export default class State extends Component {
    // State nó là 1 object đặc biệt của class component
    // dùng để lưu trữ dự liệu của component và phản hồi các tương tác của người dùng
    // Khi state thay đổi thì component sẽ được render lại (Hàm render sẽ được chạy lại) với giá trị state mới
    // state nó không thể thay đổi bằng cách gán giá trị trực tiếp mà phải thông qua hàm setState
    // setState là 1 hàm bất đồng bộ

    state = {
        isShowMessage: true,
        number: 1,
    }

    showMessage = () => {
        // this.state.isShowMessage = true
        const newState = {
            isShowMessage: true,
        }
        this.setState(newState)
    }

    hideMessage = () => {
        // this.state.isShowMessage = false
        console.log('giá trị state trước khi thay đổi', this.state)
        const newState = {
            isShowMessage: false,
        }
        this.setState(newState, () => {
            // callback này chỉ được chạy khi quá trình thay đổi state hoàn thành
            console.log('giá trị state hiện tại', this.state)
        })
        // console.log("giá trị state sau khi thay đổi", this.state)
    }

    increase = () => {
        const newState = {
            number: this.state.number + 1,
        }
        // this.setState(newState)
        // this.setState(newState)
        // khi muốn sử dụng giá trị của state hiện tại để thực hiện phép tính toán, logic thì mình sử dụng callback
        this.setState((state)=>{
            return {
                number: state.number + 1
            }
        })

        this.setState((state)=>{
            return {
                number: state.number + 1
            }
        })
    }

    decrease = () => {
        const newState = {
            number: this.state.number - 1,
        }
        this.setState(newState)
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div>
                    <button className="btn btn-success" onClick={this.showMessage}>
                        Show
                    </button>
                    <button className="btn btn-danger ml-5" onClick={this.hideMessage}>
                        Hide
                    </button>
                </div>
                {this.state.isShowMessage && (
                    <p className="text-danger display-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, hic!
                    </p>
                )}

                <hr />

                <div>
                    <h1>{this.state.number}</h1>
                    <button className="btn btn-success mr-5" onClick={this.increase}>
                        +
                    </button>
                    <button className="btn btn-danger" onClick={this.decrease}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}
