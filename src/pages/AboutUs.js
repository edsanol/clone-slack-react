import React from 'react';
import { Link } from 'react-router-dom';
import guitar from '../assets/images/about-images/guitar.png';
import daniel from '../assets/images/about-images/daniel.png';

export const AboutUs = () => {
  return (
    <div className="div__about-container">
      <Link to="/auth/login">
        <div className="icono-back-abour">
          <i className="fa-solid fa-circle-left"></i>
        </div>
      </Link>

      <div className="div__cards-container">
        <div className="card-container-1">
          <h2>Juan Alejandro Albites Tapia</h2>
          <div className="div__card-product-container-about">
            <img
              className="img__card-product-img-about"
              src={guitar}
              alt="img"
            />
            <div>
              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Git Hub: </strong>{' '}
                github.com/AlejandroAlbites/{' '}
              </h3>

              <h3 className="h2__card-product-title-about">
                <strong className="strong-subtitle">Linkedin: </strong>{' '}
                www.linkedin.com/in/juan-alejandro-albites-tapia/
              </h3>

              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Email: </strong>
                albites.tapia@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="card-container-2">
          <h2>Edinael Sanguino Olivares</h2>
          <div className="div__card-product-container-about">
            <img
              className="img__card-product-img-about"
              src={guitar}
              alt="img"
            />
            <div>
              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Git Hub: </strong>{' '}
                github.com/edsanol
              </h3>

              <h3 className="h2__card-product-title-about">
                <strong className="strong-subtitle">Linkedin: </strong>{' '}
                www.linkedin.com/in/edinael-sanguino-olivares-3338941aa/
              </h3>

              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Email: </strong>
                edsanol99@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <div className="card-container-1">
          <h2>Daniel Felipe Quispe Mamani</h2>
          <div className="div__card-product-container-about">
            <img
              className="img__card-product-img-about"
              src={daniel}
              alt="img"
            />
            <div>
              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Git Hub: </strong>{' '}
                github.com/danielfelipeq
              </h3>

              <h3 className="h2__card-product-title-about">
                <strong className="strong-subtitle">Linkedin: </strong>{' '}
                www.linkedin.com/in/daniel-felipe-quispe/
              </h3>

              <h3 className="h2__card-product-title-about">
                {' '}
                <strong className="strong-subtitle">Email: </strong>
                danielquispe.m@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
