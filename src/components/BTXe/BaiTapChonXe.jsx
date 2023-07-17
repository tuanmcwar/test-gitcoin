import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './images/products/black-car.jpg',
    }

    onChangeCar = (colorCar) => {
        // const newState = {
        //     srcImg: `./images/products/${colorCar}-car.jpg`
        // }
        // this.setState(newState)
        this.setState({
            srcImg: `./images/products/${colorCar}-car.jpg`,
        })
    }

    render() {
        return (
            <div>
                <h2>BaiTapChonXe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className="img-fluid" src={this.state.srcImg} alt="..." />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-around">
                        <div onClick={() => this.onChangeCar('black')}>
                            <img width={50} src="./images/icons/icon-black.jpg" alt="" />
                            <span className="ml-3">BLACK</span>
                        </div>
                        <div onClick={() => this.onChangeCar('red')}>
                            <img width={50} src="./images/icons/icon-red.jpg" alt="" />
                            <span className="ml-3">RED</span>
                        </div>
                        <div onClick={() => this.onChangeCar('silver')}>
                            <img width={50} src="./images/icons/icon-silver.jpg" alt="" />
                            <span className="ml-3">SILVER</span>
                        </div>
                        <div onClick={() => this.onChangeCar('steel')}>
                            <img width={50} src="./images/icons/icon-steel.jpg" alt="" />
                            <span className="ml-3">STEEL</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
