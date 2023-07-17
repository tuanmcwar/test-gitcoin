const stateDefault = './images/products/black-car.jpg'

export const baiTapXe = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            state = `./images/products/${action.payload}-car.jpg`
            return state
        }
        default:
            return state
    }
}
