// rcc
import React, { Component } from 'react'
import data from './data.json'
import Shoe from './Shoe'

export default class BTShoeShop extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">BTShoeShop</h2>
        <div className="row">
          <div className="col-2">
            <p>Sidebar</p>
            <p>Nike</p>
            <p>Adidas</p>
            <p>Puma</p>
            <p>Thượng Đỉnh</p>
          </div>
          <div className="col-10">
            <div className="row">
              {data.map((value) => {
                // console.log(value)
                return (
                  <div className="col-4 mt-3" key={value.id}>
                    {/* <div className="card">
                      <img src={value.image} alt="..." />
                      <div className="card-body">
                        <p>{value.name}</p>
                        <p>{value.price}</p>
                        <button 
                          className="btn btn-success"
                        >
                          Thêm giỏ hàng
                        </button>
                      </div>
                    </div> */}
                    <Shoe product={value}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
