import profilePic from './assets/Custom_profile_picture.webp';
import logo from './assets/dealsdray_logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        
      <nav className="glassmorphic-navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <a href="#home">Home</a>
          <a href="#employee-list">Employee List</a>
        </div>
        <div className="nav-right">
          <span className="username">Hukum Gupta</span>
          <img src={profilePic} alt="Profile Pic" className="profile-pic" />
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar