import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapChonXeRedux extends Component {
    render() {
        const { baiTapXe, handleCar } = this.props
        console.log(this.props)
        return (
            <div>
                <h2>BaiTapChonXe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className="img-fluid" src={baiTapXe} alt="..." />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-around">
                        <div onClick={() => handleCar('black')}>
                            <img width={50} src="./images/icons/icon-black.jpg" alt="" />
                            <span className="ml-3">BLACK</span>
                        </div>
                        <div onClick={() => handleCar('red')}>
                            <img width={50} src="./images/icons/icon-red.jpg" alt="" />
                            <span className="ml-3">RED</span>
                        </div>
                        <div onClick={() => handleCar('silver')}>
                            <img width={50} src="./images/icons/icon-silver.jpg" alt="" />
                            <span className="ml-3">SILVER</span>
                        </div>
                        <div onClick={() => handleCar('steel')}>
                            <img width={50} src="./images/icons/icon-steel.jpg" alt="" />
                            <span className="ml-3">STEEL</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// hàm kết nối lấy dữ liệu từ store redux
const mapStateToProps = (rootReducers) => {
    return {
        baiTapXe: rootReducers.baiTapXe,
    }
}

// hàm dispatch action lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        handleCar: (colorCar) =>{
            dispatch({
                type: 'CHANGE_COLOR',
                payload: colorCar
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXeRedux)
