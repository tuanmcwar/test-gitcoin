const stateDefault = {
    phoneSelected: {
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
        {
            maSP: 2,
            tenSP: 'Meizu 16Xs',
            manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
            heDieuHanh: 'Android 9.0 (Pie); Flyme',
            cameraTruoc: '20 MP',
            cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
            ram: '4 GB',
            rom: '64 GB',
            giaBan: 7600000,
            hinhAnh: './images/phones/meizuphone.jpg',
            soLuong: 1,
        },
    ],
}

export const baiTapPhone = (state = stateDefault, {type, payload}) => {
    switch (type) {
        case 'CHANGE_PRODUCT_SELECTED': {
            state.phoneSelected = payload
            return { ...state }
        }
        case 'ADD_TO_CART': {
            const data = { ...state }
            const index = data.cart.findIndex((item) => item.maSP === payload.maSP)
            if (index !== -1) {
                data.cart[index].soLuong += 1
            } else {
                data.cart.push({ ...payload, soLuong: 1 })
            }

            return { ...data, cart: [...data.cart] }
        }
        case 'REMOVE_CART': {
            const data = [...state.cart]
            // C1
            // const index = data.findIndex((item) => item.maSP === payload)
            // data.splice(index, 1)

            // C2
            const value = data.filter((item) => item.maSP !== payload)

            return { ...state, cart: value }
        }

        case 'HANDLE_QUANTITY': {
            const data = [...state.cart]
            const index = data.findIndex((item) => item.maSP === payload.maSP)
            // data[index].soLuong += payload.quantity
            if (data[index].soLuong > 1 || payload.quantity > 0) {
                data[index].soLuong += payload.quantity
            } else if (window.confirm('Bạn có muốn xoá sản phẩm này không?')) {
                data.splice(index, 1)
            }

            return { ...state, cart: data }
        }
        default:
            return state
    }
}
