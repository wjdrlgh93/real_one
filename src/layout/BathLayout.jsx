import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BathLayout = () => {
  return (
    <div className="toy">
      <div className="toy-con">
          <div className="toy-wrap">
              <div className="head-title">
                  <h1><Link to={'/shop/bath'}>GROOMING</Link></h1>
              </div>
              <div className="toy-filter">
                  <div className="toy-filter-type">
                      <ul>
                          <li>
                              <Link to={'/shop/bath'}>ALL</Link>
                          </li>
                          <li>
                              <Link to={'/shop/bath/shampoo'}>Shampoo</Link>
                          </li>
                          <li>
                              <Link to={'/shop/bath/comb'}>Comb & Brush</Link>
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

export default BathLayout