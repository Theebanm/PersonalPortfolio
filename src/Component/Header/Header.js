import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.png";
const Header = () => {
  return (
    <div className="header-container">
      {/* Header content */}
      <div className="header-content">
        <h1> Hey ! Am</h1>
        <h2 className="fullname">Parthiban M</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Front End Developer 🔅",
              1000,
              "BackEnd Developer 👨‍💻",
              1000,
              "React Developer 👨",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          soluta dolores aperiam eveniet aliquid illum quia quae id. Modi
          debitis ut reprehenderit doloremque nobis, accusamus veritatis
          accusantium corrupti doloribus totam?
        </p>
        {/* {payments links} */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
        </div>

        {/* image container */}
        <div className="profile-image-container">
          <img src={profileImg} alt="profile" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
