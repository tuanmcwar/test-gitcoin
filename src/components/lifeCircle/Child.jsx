import React, { Component, createRef } from 'react'
import { PureComponent } from 'react'

// pureComponent nó chỉ so sánh được những kiểu dữ liệu là primitive type: string, number, boolean, null, undefined
// Không so sánh được nếu props là kiểu dữ liệu reference type: Object, array, function
//export default class Child extends PureComponent
export default class Child extends Component {
    constructor() {
        console.log('constructor child')
        super()
        this.state = {
            number: 1,
        }
        this.numberRef = createRef()
        this.timeOut = setInterval(() => {
            console.log('hello 32E')
        }, 1000)
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log('getDerivedStateFromProps child')
        console.log({ nextProps })
        currentState.number = nextProps.number
        return currentState
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     // return true => component sẽ được reRender
    //     // return false => component sẽ không được reRender
    //     if(this.props.number !== nextState.number){
    //         return true
    //     }
    //     return false
    // }

    render() {
        console.log('render child')
        return (
            <div>
                Child
                <p ref={this.numberRef}>Number Child: {this.state.number}</p>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prePops, preState) {
        console.log('getSnapShotBeforceUpdate child')
        console.log(this.numberRef.current.innerHTML)
        return null
    }

    componentDidMount() {
        console.log('componentDidmount child')
    }

    componentDidUpdate(preProps, preState, snapShot) {
        console.log('componentDidUpdate child')
        if (this.state.number === 15) {
            console.log('call API')
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeOut)
    }
}
