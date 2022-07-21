import React from 'react'

const index = () => {
  return (
    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <ion-icon name="menu-outline"></ion-icon>
          </a>
        </li>
        <li class="nav-item  d-none d-sm-inline-block">
          HOME
        </li>
        <li className='nav-item d-none d-sm-inline-block'>
          Calculator
        </li>
      </ul>
    </div>
  )
}

export default index