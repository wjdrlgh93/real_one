import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ToyLayout = () => {
  return (
    <div className="toy">
      <div className="toy-con">
          <div className="toy-wrap">
              <div className="head-title">
                  <h1>장난감</h1>
              </div>
              <div className="toy-filter">
                  <div className="toy-filter-type">
                      <ul>
                          <li>
                              <Link to={'/shop/toy'}>전체</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/ball'}>공</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/tug'}>터그장난감</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/stuffed'}>인형</Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default ToyLayout