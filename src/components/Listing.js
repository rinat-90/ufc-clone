import React, { useState } from 'react';
import ImageSlider from "./ImageSlider";
import './listing.css'
import fightPasImg from '../assets/images/ufc-fight-pass.png'

const initialEvents = [
  { title:  'Jacob Kilburn vs Austin Lingo', date: 'Sat, Jan 16', time: '11:00 AM CST', card: 'Prelims', venue: 'UFC Fight Island', location: 'Abu Dhabi, United Arab Emirates', fighterRedImg: '../assets/images/fighter', fighterBlueImg: '../assets/images/fighter-2', },
  { title:  'Jacob Kilburn vs Austin Lingo', date: 'Sat, Jan 16', time: '11:00 AM CST', card: 'Prelims', venue: 'UFC Fight Island', location: 'Abu Dhabi, United Arab Emirates', fighterRedImg: '../assets/images/fighter', fighterBlueImg: '../assets/images/fighter-2', },
  // { title:  'Jacob Kilburn vs Austin Lingo', date: '', time: '', venue: '', location: '', fighterRedImg: '', fighterBlueImg: '', },
  // { title:  'Jacob Kilburn vs Austin Lingo', date: '', time: '', venue: '', location: '', fighterRedImg: '', fighterBlueImg: '', },
]


const Listing = () => {
  const [events, setEvents] = useState(initialEvents)
  return (
    <section className="listing">
      <ul className="listing-group">
        {events.map((event, index) => (
          <li className="listing-item" key={index}>
            <article className="card">
              <div className="card-header">
                <img className="card-header-logo" src={fightPasImg} alt=""/>
              </div>
              <div className="card-fight-container">
                <ImageSlider />
              </div>
              <div className="card-info">
                <h3 className="card-headline">
                  <a href="">{event.title}</a>
                </h3>
                <div className="card-date">
                  <a href="">{event.date}/ {event.time} / {event.card}</a>
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
                <a href="#" className="btn">how to watch</a>
              </div>
            </article>
          </li>
        ))}


      </ul>
    </section>
  );
};

export default Listing;
