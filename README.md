# Tạo 1 project React
## npx create-react-app tên-project 
=> Lưu ý: tên project không viết hoa
# chạy ứng dụng react
## npm start

# node_module 
=> Chứa các package cài đặt của project
=> Khi clone code hoặc down từ github về mọi người chạy lệnh npm i

# package.json 
=> Lưu các package được cài ở trong project
=> Dựa vào đây để cài lại thư mục node_modules

# public 
=> Thư mục chứa file index.html và hình ảnh

# src
=> Chứa các file component của project

# So sánh giữa state và props
## Giống nhau: 
 + State và props nó đều là thuộc tính có sẵn của class component.
 + Dùng để lưu trữ dữ liệu của component

## Khác nhau: 
## Props: 
+ Là dữ liệu được truyền từ component cha xuống component con
+ Không thể thay đổi trong quá trình truyền (không thể thay đổi ở component nhận props)
+ Thay đổi khi component truyền props render lại và thay đổi đổi giá trị props.

## State: 
+ Được định nghĩa trong chính component đó. 
+ Có thể thay đổi trong quá trình thực thi của component
+ Chỉ được thay đổi thông qua phương thức setState và mỗi lần setState thì component sẽ render lại

