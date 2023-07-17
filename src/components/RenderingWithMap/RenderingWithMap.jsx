import React, { Component } from 'react'

export default class RenderingWithMap extends Component {
    students = [
        {
            id: 1,
            name: 'Hai',
            age: 18,
            address: 'HCM VN',
        },
        {
            id: 2,
            name: 'Sang',
            age: 19,
            address: 'Hà Nội',
        },
        {
            id: 3,
            name: 'Kenny Sang',
            age: 19,
            address: 'Hà Nội',
        },
    ]
    render() {
        return (
            <div>
                RenderingWithMap
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.students.map((value, index) => {
                            // Bắt buộc phải có thuộc tính key ở thẻ cha ngoài cùng
                            // Và giá trị của key là duy nhất (Không được trùng lặp)
                            return (
                                // index
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
