import React  from 'react';
import './listing.css'
import fightPasImg from '../assets/images/ufc-fight-pass.png'
import ListItem from "./ListItem";

const events = [
  { title:  'Jacob Kilburn vs Austin Lingo',
    date: 'Sat, Jan 16',
    time: '11:00 AM CST',
    card: 'Prelims',
    venue: 'UFC Fight Island',
    location: 'Abu Dhabi, United Arab Emirates',
    fighterRedImg: '../assets/images/fighter',
    fighterBlueImg: '../assets/images/fighter-2',
  },
  {
    title:  'Jacob Kilburn vs Austin Lingo',
    date: 'Sat, Jan 16',
    time: '11:00 AM CST',
    card: 'Prelims',
    venue: 'UFC Fight Island',
    location: 'Abu Dhabi, United Arab Emirates',
    fighterRedImg: '../assets/images/fighter',
    fighterBlueImg: '../assets/images/fighter-2',
  },
]


const Listing = () => {
  return (
    <section className="listing">
      <ul className="listing-group">
        {events.map((event, index) => <ListItem index={index} event={event} logo={fightPasImg} /> )}
      </ul>
    </section>
  );
};

export default Listing;
