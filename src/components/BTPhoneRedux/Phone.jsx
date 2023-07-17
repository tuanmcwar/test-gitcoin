import React, { Component } from 'react'
import { connect } from 'react-redux'

class Phone extends Component {
    render() {
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

const mapDispatchToProps = (dispatch) => {
    return {
        handlePhoneDefault: (productDetail) =>{
            dispatch({
                type: 'CHANGE_PRODUCT_SELECTED',
                payload: productDetail
            })
        },
        handleCart: (product) =>{
            dispatch({
                type: 'ADD_TO_CART',
                payload: product
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Phone)
