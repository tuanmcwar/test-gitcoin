import React, { Component } from 'react'

export default class HandleEvent extends Component {
    constructor(){
        super()
        this.showMessage4 = this.showMessage4.bind(this)
    }

    name = "Cybersoft"
    showAlert = () => {
        alert('BC32E CyberSoft')
    }

    showMessage = (mess) => {
        alert(mess)
    }

    //closure functions
    // showMessage1 = (mess) => {
    //     const show = (event) => {
    //         alert(mess)
    //         console.log(event)
    //     }
    //     return show
    // }

    showMessage1 = (mess) => (event) => {
        console.log(event)
        alert(mess)
    }

    showMessage3 = (event, mess) => {
        console.log(mess)
        console.log(event)
    }

    // MỌI HÀM XỬ LÝ SỰ KIỆN ĐỀU CÓ 1 THAM SỐ LÀ EVENT

    showMessage2 = (event) => {
        console.log(event)
        alert(event.target.innerHTML)
    }
    showMessage4(){
        alert(this.name)
    }

    render() {
        return (
            <div className="container">
                <p>HandleEvent</p>
                {/* Đối với hàm không có tham số thì khi onclick 
                để gọi chỉ cần truyền vào callback 
                không thêm dấu gọi hàm */}
                <button className="btn btn-success" onClick={this.showAlert}>
                    Click Me!!!
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        alert('Hello mọi người lại là mình đây')
                    }}
                >
                    Click Me 2!
                </button>

                {/* Hàm có tham số */}
                <div className="mt-5">
                    <button
                        className="btn btn-outline-info"
                        onClick={(event) => this.showMessage3(event, 'Cybersoft')}
                    >
                        Show message 3
                    </button>
                    <div className="mt-5">
                        <button
                            className="btn btn-outline-warning"
                            onClick={this.showMessage1('Nguyễn Viết Hải')}
                        >
                            Show message 2
                        </button>
                    </div>
                    <div
                        className="mt-5"
                        onClick={(e) => {
                            console.log(e.currentTarget)
                            console.log(e.target)
                        }}
                    >
                        <button
                            className="btn btn-outline-primary"
                            onClick={(event) => this.showMessage2(event)}
                        >
                            Show Event
                        </button>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control mt-5"
                            onChange={(e) => {
                                console.log(e.currentTarget)
                                console.log(e.target)
                            }}
                        />
                    </div>

                    <button className="btn btn-success" onClick={this.showMessage4}>Show Message 4</button>
                </div>
            </div>
        )
    }
}
