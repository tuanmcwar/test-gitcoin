import React, { Component } from 'react'

export default class Phone extends Component {
    state = {}
    render() {
        // console.log("props", this.props)
        const { product, handlePhoneDefault, handleCart } = this.props
        return (
            <div className="card">
                <img style={{ height: '350px' }} src={product.hinhAnh} alt="..." />
                <div className="card-body">
                    <p>{product.tenSP}</p>
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-success"
                            onClick={() => handlePhoneDefault(product)}
                        >
                            Xem chi tiết
                        </button>
                        <button className="btn btn-info" onClick={() => handleCart(product)}>
                            Thêm giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
