import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {
    render() {
        console.log(this.props)
        const { demoRedux, increase, decrease } = this.props
        return (
            <div className="container">
                <p className="display-3">Number: {demoRedux}</p>
                <button className="btn btn-success mr-5" onClick={increase}>
                    +
                </button>
                <button className="btn btn-danger" onClick={decrease}>
                    -
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducers) => {
    return {
        demoRedux: rootReducers.demoRedux,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch({
                type: 'TĂNG_SỐ',
                payload: 1,
            })
        },
        decrease: () => {
            dispatch({
                type: 'GIẢM_SỐ',
                payload: -1,
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux)
