import React from "react";
import { Button } from 'primereact/button';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            LOGO
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Lunsj Pa Dora Plans
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                How It Works
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Our Menus
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Sustainability
              </a>
            </li>
            
            <li>
              <a href="#contact" className="page-scroll">
              <button class="button">Login </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
