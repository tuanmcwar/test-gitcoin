import React, { Component } from 'react'

export default class Shoe extends Component {
  render() {
    console.log(this.props.product)
    // destructuring
    const {product} = this.props
    return (
      <div className="card">
        <img src={product.image} alt="..." />
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button 
            className="btn btn-success"
            >
                Thêm giỏ hàng
            </button>
        </div>
      </div>
    )
  }
}
