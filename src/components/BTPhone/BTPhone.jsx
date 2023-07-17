import React, { Component } from 'react'
import ChiTietSP from './ChiTietSP'
import data from './data.json'
import GioHang from './GioHang'
import Phone from './Phone'

export default class BTPhone extends Component {
    state = {
        phoneDefault: {
            maSP: 1,
            tenSP: 'VinSmart Live',
            manHinh: 'AMOLED, 6.2, Full HD+',
            heDieuHanh: 'Android 9.0 (Pie)',
            cameraTruoc: '20 MP',
            cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            ram: '4 GB',
            rom: '64 GB',
            giaBan: 5700000,
            hinhAnh: './images/phones/vsphone.jpg',
        },
        cart: [
            // {
            //     maSP: 2,
            //     tenSP: 'Meizu 16Xs',
            //     manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
            //     heDieuHanh: 'Android 9.0 (Pie); Flyme',
            //     cameraTruoc: '20 MP',
            //     cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            //     ram: '4 GB',
            //     rom: '64 GB',
            //     giaBan: 7600000,
            //     hinhAnh: './images/phones/meizuphone.jpg',
            //     soLuong: 1,
            // },
        ],
    }

    handlePhoneDefault = (phone) => {
        // console.log(phone)
        this.setState({
            phoneDefault: phone,
        })
    }

    handleCart = (phoneClick) => {
        // console.log(phoneClick)
        // spread operator
        const value = { ...phoneClick, soLuong: 1 }
        const data = [...this.state.cart]

        const index = data.findIndex((phone) => phone.maSP === phoneClick.maSP)

        if (index !== -1) {
            data[index].soLuong += 1
        } else {
            data.push(value)
        }

        // set lại state thêm vào state sản phẩm được click
        this.setState({
            cart: data,
        })
    }

    handleRemoveCart = (maSP) => {
        // console.log(maSP)
        // const data = this.state.cart.filter((item) => {
        //     return item.maSP !== maSP
        // })
        const data = this.state.cart.filter((item) => item.maSP !== maSP)

        this.setState({
            cart: data,
        })
    }

    handleQuantity = (maSP, quantity) => {
        console.log('ma SP', maSP)
        console.log('quantity', quantity)
        const data = [...this.state.cart]
        // tìm trong giỏ hàng index của sản phẩm = với mã sp truyền vào
        const index = data.findIndex((item) => item.maSP === maSP)

        // data[index].soLuong += quantity
        if (data[index].soLuong > 1 || quantity > 0) {
            data[index].soLuong += quantity
        } else if (window.confirm('Bạn có muốn xoá sản phẩm này không?')) {
            data.splice(index, 1)
        }

        this.setState({
            cart: data,
        })
    }

    render() {
        return (
            <div className="container">
                <h2>BT Phone</h2>

                {/* giỏ hàng */}

                <GioHang
                    cart={this.state.cart}
                    handleRemoveCart={this.handleRemoveCart}
                    handleQuantity={this.handleQuantity}
                />

                {/* Danh sách điện thoại */}
                <div className="row">
                    {data.map((phone) => {
                        return (
                            <div className="col-4" key={phone.maSP}>
                                <Phone
                                    handlePhoneDefault={this.handlePhoneDefault}
                                    handleCart={this.handleCart}
                                    product={phone}
                                />
                            </div>
                        )
                    })}
                </div>
                <hr />

                {/* Xem chi tiết */}
                <ChiTietSP phone={this.state.phoneDefault} />
            </div>
        )
    }
}
