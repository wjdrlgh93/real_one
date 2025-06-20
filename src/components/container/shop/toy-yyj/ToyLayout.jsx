import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const ToyLayout = () => {
  return (
    <>
    
    <div className="toy">
      <div className="toy-con">
          <div className="toy-wrap">
              <div className="head-title">
                  <h1><Link to={'/shop/toy'}>TOY</Link></h1>
              </div>
              <div className="toy-filter">
                  <div className="toy-filter-type">
                      <ul>
                          <li>
                              <Link to={'/shop/toy'}>ALL</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/ball'}>Ball</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/tug'}>Tug toy</Link>
                          </li>
                          <li>
                              <Link to={'/shop/toy/stuffed'}>Stuffed toy</Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <Outlet/>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default ToyLayout