import React, { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
    render() {
        // props là dữ liệu truyền từ component cha xuống component con
        // props : property
        // Ngoài dữ liệu là string, number, boolean,
        // props còn có thể là 1 object, function hay thậm chí 1 component
        // Ở component nhận props => props không thể thay đổi được.
        // Luôn luôn có 1 props mặc định là children => là giá trị nằm giữa 2 thẻ.

        const product = {
            name: 'Iphone',
            price: 1000,
            color: 'black',
        }

        const logger = (message) => {
            alert(message)
        }

        return (
            <div>
                <Children
                    content="BC32"
                    color="red"
                    name="Hello BC32"
                    product={product}
                    logger={logger}
                />
                <Children content="BC32" color="yellow" name="nguyễn viết hải" />
                <Children content="BC32" color="blue" name="Cybersoft" />

                <Children>
                  <p>Nguyễn Viết Hải</p>
                  <p>Cybersoft Bc32E</p>
                </Children>

                {/* <Children>
                  <p>Hello Mọi người</p>
                </Children>

                <Children>
                  <p>Hello BC32E 112Cao Thắng</p>
                </Children> */}
            </div>
        )
    }
}
