import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        console.log(this.props)
        const { mangXucXac, isTai } = this.props
        console.log('mangXucXac: ', mangXucXac);

        return (
            <div>
                <h1 className="text-center text-40">GAME ĐỔ XÚC XẮC</h1>
                <div className="flex gap-40 justify-center mt-20">
                    <div
                        className={`cursor-pointer w-[120px] h-[120px] rounded-xl  flex items-center justify-center text-white font-bold text-40 ${
                            isTai ? 'bg-red-500' : 'bg-blue-600'
                        }`}
                        onClick={() => {
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                payload: true,
                            })
                        }}
                    >
                        TÀI
                    </div>
                    <div className="flex">
                        {mangXucXac.map((item, index) => {
                            return (
                                <img
                                    key={index}
                                    className="w-[120px] object-cover object-center"
                                    src={item.hinhAnh}
                                    alt="..."
                                />
                            )
                        })}
                    </div>
                    <div
                        className={`cursor-pointer w-[120px] h-[120px] rounded-xl flex items-center justify-center text-white font-bold text-40 ${
                            isTai ? 'bg-blue-600' : 'bg-red-500'
                        }`}
                        onClick={() => {
                            this.props.dispatch({
                                type: 'DAT_CUOC',
                                payload: false,
                            })
                        }}
                    >
                        XỈU
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.baiTapXucXac.mangXucXac,
        isTai: state.baiTapXucXac.isTai,
    }
}

export default connect(mapStateToProps)(XucXac)
