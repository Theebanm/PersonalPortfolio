import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Aswome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            eveniet asperiores facere nobis quaerat est enim. Minima eveniet
            voluptatum libero culpa quaerat qui nihil, ullam beatae molestias
            sit laboriosam totam.
          </p>
          <button>Hire Me</button>
        </div>
        {/* items */}
        <div className="service-item-container">
          <div className="services-items">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi sit, delectus nisi deleniti alias, officia beatae
                accusamus molestiae voluptas et debitis nihil nostrum sed eius
                natus ea animi perspiciatis incidunt?
              </p>
            </div>
          </div>
          <div className="services-items">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi sit, delectus nisi deleniti alias, officia beatae
                accusamus molestiae voluptas et debitis nihil nostrum sed eius
                natus ea animi perspiciatis incidunt?
              </p>
            </div>
          </div>
          <div className="services-items">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Ux Design</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi sit, delectus nisi deleniti alias, officia beatae
                accusamus molestiae voluptas et debitis nihil nostrum sed eius
                natus ea animi perspiciatis incidunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
