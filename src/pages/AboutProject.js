import React from 'react';
import { Link } from 'react-router-dom';
import imageReact from '../assets/images/about-images/react2.png';
import mongo from '../assets/images/about-images/mongo.png';
import sass from '../assets/images/about-images/sass.png';
import axios from '../assets/images/about-images/axios.png';
import redux from '../assets/images/about-images/redux.png';
import rrd from '../assets/images/about-images/rrd.png';
import mantine from '../assets/images/about-images/mantine.png';
import toast from '../assets/images/about-images/toast.png';
import cypress from '../assets/images/about-images/cypress.png';
import netlify from '../assets/images/about-images/netlify.png';
import epayco from '../assets/images/about-images/epayco.png';
import node1 from '../assets/images/about-images/node1.png';
import express from '../assets/images/about-images/express.png';
import mongoose from '../assets/images/about-images/mongoose.png';
import socket from '../assets/images/about-images/socket.png';
import jwt from '../assets/images/about-images/jwt.png';
import mailer from '../assets/images/about-images/mailer.png';
import bcryp from '../assets/images/about-images/bcryp.png';
import jest from '../assets/images/about-images/jest.png';
import heroku from '../assets/images/about-images/heroku.png';
import git from '../assets/images/about-images/git1.png';
import github from '../assets/images/about-images/github.png';
import scrum from '../assets/images/about-images/scrum.png';
import jira from '../assets/images/about-images/jira.png';
import cloudinary from '../assets/images/about-images/cloudinary.png';
import diagrama from '../assets/images/about-images/diagrama.png';

import { useState } from 'react';
import { Modal, Group } from '@mantine/core';

export const AboutProject = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="about-project-container">
      <Link to="/auth/login">
        <div className="icono-back-project">
          <i className="fa-solid fa-circle-left"></i>
        </div>
      </Link>
      <div className="stack-container">
        <h2>Front End</h2>
        <div className="div__lib-card-container">
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={imageReact} alt="img" />
            <h2 className="h2__card-product-title">React</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={sass} alt="img" />
            <h2 className="h2__card-product-title">Sass</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={axios} alt="img" />
            <h2 className="h2__card-product-title">Axios</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={redux} alt="img" />
            <h2 className="h2__card-product-title">redux</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={rrd} alt="img" />
            <h2 className="h2__card-product-title">React Router Dom</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={mantine} alt="img" />
            <h2 className="h2__card-product-title">Mantine</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={toast} alt="img" />
            <h2 className="h2__card-product-title">React-toastify</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={epayco} alt="img" />
            <h2 className="h2__card-product-title">Epayco</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={cypress} alt="img" />
            <h2 className="h2__card-product-title">Cypress</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={netlify} alt="img" />
            <h2 className="h2__card-product-title">Netlify</h2>
          </div>
        </div>
      </div>
      <div className="stack-container">
        <h2>Back End</h2>
        <div className="div__lib-card-container">
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={node1} alt="img" />
            <h2 className="h2__card-product-title">NodeJS</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={express} alt="img" />
            <h2 className="h2__card-product-title">Express</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={mongoose} alt="img" />
            <h2 className="h2__card-product-title">Mongoose</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={socket} alt="img" />
            <h2 className="h2__card-product-title">Socket IO</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={jwt} alt="img" />
            <h2 className="h2__card-product-title">Json Web Token</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={mailer} alt="img" />
            <h2 className="h2__card-product-title">Node Mailer</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={bcryp} alt="img" />
            <h2 className="h2__card-product-title">Bcript</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={cloudinary} alt="img" />
            <h2 className="h2__card-product-title">Cloudinary</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={jest} alt="img" />
            <h2 className="h2__card-product-title">Jest</h2>
          </div>
          <div className="div__card-product-container">
            <img className="img__card-product-img" src={heroku} alt="img" />
            <h2 className="h2__card-product-title">Heroku</h2>
          </div>
        </div>
      </div>
      <div className="flex-2-container">
        <div className="stack-container">
          <Modal
            size="65%"
            opened={opened}
            onClose={() => setOpened(false)}
            withCloseButton={false}>
            <img className="img_modal_diagram" src={diagrama} alt="img" />
          </Modal>
          <h2>Data Base</h2>
          <div className="div__lib-card-container">
            <Group position="center">
              <div
                id="show-modal-diagram"
                className="div__card-product-container"
                type="button"
                onClick={() => setOpened(true)}>
                <img className="img__card-product-img" src={mongo} alt="img" />
                <h2 className="h2__card-product-title">MongoDB</h2>
              </div>
            </Group>
          </div>
        </div>

        <div className="stack-container-work">
          <h2>Work methodology</h2>
          <div className="div__lib-card-container">
            <div className="div__card-product-container">
              <img className="img__card-product-img" src={git} alt="img" />
              <h2 className="h2__card-product-title">Git</h2>
            </div>
            <div className="div__card-product-container">
              <img className="img__card-product-img" src={github} alt="img" />
              <h2 className="h2__card-product-title">Git Hub</h2>
            </div>
            <div className="div__card-product-container">
              <img className="img__card-product-img" src={scrum} alt="img" />
              <h2 className="h2__card-product-title">Scrum</h2>
            </div>
            <div className="div__card-product-container">
              <img className="img__card-product-img" src={jira} alt="img" />
              <h2 className="h2__card-product-title">Jira</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
