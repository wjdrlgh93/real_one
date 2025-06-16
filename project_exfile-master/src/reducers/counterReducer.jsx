import React, { act } from 'react'


const iniState = {
    num: 1,
    isTrue: false
}


// 반드시 상태, 액션 매개변수가 있어야됨 
// 글로벌 데이터 
const counterReducer = (state = iniState, action) => {
    // console.log(`------------- counterReducer`)
    // console.log(`state ->` + state)
    // console.log(`action ->` + action)


    // action.type
    switch (action.type) {
        case 'PLUS':
            return { num: state.num + 1 }     // num+1
        case 'MINUS':
            if (state.num === 1) {
                return { num: 1 }
            }
            else
                return { num: state.num - 1 }
        // num+1


        case 'RESET':
            return { num: 1 }     // num+1
        default:
            return state.num
    }

}

export default counterReducer