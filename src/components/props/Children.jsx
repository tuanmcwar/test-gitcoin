import React, { Component } from 'react'

export default class Children extends Component {
    render() {
        console.log(this.props)
        // this.props.name = "cybersoft"
        return (
            <div>
                <div className="p-5 mt-3" style={{ backgroundColor: `${this.props.color}` }}>
                    {this.props.name}
                    {/* <div>
                      {this.props.children}
                    </div> */}

                    <button
                        className="btn btn-success"
                        onClick={() => this.props.logger?.('Hello BC32E')}
                    >
                        Logger
                    </button>
                    {this.props.children}
                    {/* {this.props.color} */}
                </div>
            </div>
        )
    }
}
