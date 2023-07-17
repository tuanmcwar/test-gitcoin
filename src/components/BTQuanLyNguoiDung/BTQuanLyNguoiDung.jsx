import React, { Component } from 'react'
import DanhSachNguoiDung from './DanhSachNguoiDung'
import FormDangKy from './FormDangKy'

export default class BTQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className='max-w-7xl m-auto'>
        <FormDangKy />
        <DanhSachNguoiDung />
      </div>
    )
  }
}