import React from 'react'
import './Page.css'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <div>
      <nav className="bg-body-tertiary">
        <div className="container-fluid p-2 nav-part">
            <div className="left-nav-part">
                <span className='title'>{props.title}</span>
            </div>
            <div className="right-nav-part">
              <div className='bg-primary' style={{width:'30px',borderRadius:'15px',height:'30px',border:'1px solid black',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
              <div className='bg-success' style={{width:'30px',borderRadius:'15px',height:'30px',border:'1px solid black',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
              <div className='bg-warning' style={{width:'30px',borderRadius:'15px',height:'30px',border:'1px solid black',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
              <div className='bg-white' style={{width:'30px',borderRadius:'15px',height:'30px',border:'1px solid black',cursor:'pointer'}} onClick={()=>{props.toggleMode('white')}}></div>
              <div className='bg-black' style={{width:'30px',borderRadius:'15px',height:'30px',border:'1px solid black',cursor:'pointer'}} onClick={()=>{props.toggleMode('black')}}></div>
            </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, about: PropTypes.string}

// Navbar.defaultProps = {title:"Set Title Here",about:"About Text Here"}

export default Navbar
