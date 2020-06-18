import React from 'react'
import './Home.css';


const Home = (props) => {

    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='SalonTitle'>Welcome to <span>Hair Salon!</span></h1>
                <img className='Picture' src='https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Salon' />
                <hr className='new1'/>
                <br />
                <div className='SalonDtls'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <p>Urna neque viverra justo nec ultrices dui sapien. Tempus quam pellentesque nec nam aliquam. Sem nulla pharetra diam sit amet. Non consectetur a erat nam at. Lacus suspendisse faucibus interdum posuere. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis lectus magna fringilla urna porttitor rhoncus. Senectus et netus et malesuada fames. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Feugiat in ante metus dictum. Consequat nisl vel pretium lectus. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Et leo duis ut diam. Gravida in fermentum et sollicitudin. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</p>
                </div>
            </div>
        </div>
    )
}


export default Home;