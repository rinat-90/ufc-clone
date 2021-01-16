import React from 'react';
import ImageSlider from "./ImageSlider";

const ListItem = ({ index, logo, event }) => {
  return <li className="listing-item" key={index}>
    <article className="card">
      <div className="card-header">
        <img className="card-header-logo" src={logo} alt=""/>
      </div>
      <div className="card-fight-container">
        <ImageSlider />
      </div>
      <div className="card-info">
        <h3 className="card-headline">
          <a href={ () => false }>{event.title}</a>
        </h3>
        <div className="card-date">
          <a href={ () => false }>{event.date}/ {event.time} / {event.card}</a>
        </div>
        <div className="card-location">
          <div className="card-field-name-title">
            <h5>
              {event.venue}
            </h5>
          </div>
          <div className="card-field-name-location">
            <p>
              <span className="administrative-area">{event.location}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-action">
        <a href={ () => false } className="btn">how to watch</a>
      </div>
    </article>
  </li>;
};

export default ListItem;
