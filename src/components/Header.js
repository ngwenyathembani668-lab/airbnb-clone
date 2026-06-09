import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>

    <nav>

        <div className='logo'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuvYP6vm8lO1UU821piFpPNYQv4v2nJa903fZjk7jEw&s=10' alt='Airbnb logo' />
        </div>

        <div className='navigation'>

            <div className='nav-item'>
                <span>Places to stay</span>
                <span className='underline'></span>
            </div>
            <div className='nav-item'>
                <span>Experiences</span>
                <span className='underline'></span>
            </div>
            <div className='nav-item'>
                <span>Online Experiences</span>
                <span className='underline'></span>
            </div>

        </div>

        <div className='user-options'>

            <div clasName='action'>
                <span>Become a Host</span>
                
            </div>

        </div>

    </nav>
      
    </>
  );
};

export default Header;
