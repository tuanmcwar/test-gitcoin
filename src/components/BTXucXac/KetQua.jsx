import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        const {
            ketQua: { isTai, soBanThang, soBanChoi },
        } = this.props
        return (
            <div>
                <div className="mt-20 text-center">
                    <p className="text-40 font-bold">
                        Bạn chọn: <span className="text-red-500">{isTai ? 'Tài' : 'Xỉu'}</span>
                    </p>
                    <p className="text-40 font-bold">Số bàn thắng: {soBanThang}</p>
                    <p className="text-40 font-bold">Số bàn chơi: {soBanChoi}</p>
                    <button
                        className="bg-green-400 px-6 py-7 text-30 text-white rounded-sm hover:bg-green-700"
                        onClick={() => {
                            this.props.dispatch({
                                type: 'PLAY',
                            })
                        }}
                    >
                        PLAY
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.baiTapXucXac,
    }
}

export default connect(mapStateToProps)(KetQua)
