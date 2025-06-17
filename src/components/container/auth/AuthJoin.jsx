import { current } from '@reduxjs/toolkit';
import React from 'react'
import { useNavigate } from 'react-router-dom'

// {
// function createLoopingText(el) {
//     const lerp = (current, target, factor) => current * (1 - factor) * target * factor;

//     const state = {
//         el,
//         lerp: {
//             current: 0,
//             target: 0
//         },
//         interpolationFactor: 0.1,
//         speed: 0.2,
//         direction: -1
//     };

//     state.el.style.cssText = 'position: relative; display: inline-flex; white-space: nowrap;';
//     state.el.children[1].style.cssText = `position: absolute; left: ${100 * -state.direction}%;`;

//     function animate() {
//         state.lerp.target += state.speed;
//         state.lerp.current = lerp(state.lerp.current, state.lerp.target, state.interpolationFactor);

//         if (state.lerp.target > 100) {
//             state.lerp.current -= state.lerp.target;
//             state.lerp.target = 0;
//         }

//         const x = state.lerp.current * state.direction;
//         state.el.style.trasnform = `translateX(${x}%)`;
//     }

//     function render() {
//         animate();
//         window.requestAnimationFrame(render);
//     }

//     render();
//     return state;
// }
// const test = document.querySelectorAll('.auth-join .loop-test').forEach(el => createLoopingText(el));
// }
const AuthJoin = () => {
    const Navigate = useNavigate()
    // test();

    return (
        <div className="auth-join">
            {/* <section className='hero-section'>
                <div className='loop-text'>test test test&nbsp;</div>
                <div className='loop-text'>test test test&nbsp;</div>
            </section> */}
            <div className="auth-join-con">
                <h1>SIGN UP</h1>
                <ul>
                    <li>
                        <input type='email' name='userEmail' id='userEmail'
                            placeholder='EMAIL' />
                    </li>
                    <li>
                        <input type="password" name="userPw" id="userPw"
                            placeholder='PASSWORD' />
                    </li>
                    <li>
                        <input type="text" name="userName" id="userName"
                            placeholder='NAME' />
                    </li>
                    <li>
                        <input type="text" name="age" id="age"
                            placeholder='age' />
                    </li>
                    <li>
                        <input type="text" name="address" id="address"
                            placeholder='Address' />
                    </li>
                    <li>
                        <label htmlFor="role">ROLE</label>
                        <select name="role" id="role">
                            <option value="ROLE_MEMBER">MEMBER</option>
                            <option value="ROLE_ADMIN">ADMIN</option>
                        </select>
                    </li>
                    <li className='button_li'>
                        <button>SIGNUP</button>
                        <button onClick={() => { Navigate('/auth/login') }}>LOGIN</button>
                        <button onClick={() => { Navigate('/') }}>HOME</button>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthJoin