import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

const dummyEvents = [
  {
    year: 2023,
    events: [
      {
        id: 1,
        title: 'Event 1',
        date: 'January 15, 2023',
        description: 'Description of event 1.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Event 2',
        date: 'February 12, 2023',
        description: 'Description of event 2.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        title: 'Event 3',
        date: 'March 22, 2023',
        description: 'Description of event 3.',
        image: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        id: 4,
        title: 'Event 4',
        date: 'April 5, 2022',
        description: 'Description of event 4.',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        title: 'Event 5',
        date: 'June 14, 2022',
        description: 'Description of event 5.',
        image: 'https://via.placeholder.com/150',
      },
    ],
  },
];

const Home = () => {
  const [activeYear, setActiveYear] = useState(2023);

  const handleScrollToYear = (year) => {
    const yearSection = document.getElementById(`year-${year}`);
    if (yearSection) {
      yearSection.scrollIntoView({ behavior: 'smooth' });
      setActiveYear(year);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const yearButtons = document.querySelectorAll('.year-button');
      yearButtons.forEach((button) => {
        const year = button.dataset.year;
        const section = document.getElementById(`year-${year}`);
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveYear(Number(year));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Sticky Year Navigation */}
      <div className="sticky-year-nav">
        {dummyEvents.map((yearData) => (
          <button
            key={yearData.year}
            className={`year-button ${activeYear === yearData.year ? 'active' : ''}`}
            data-year={yearData.year}
            onClick={() => handleScrollToYear(yearData.year)}
          >
            {yearData.year}
          </button>
        ))}
      </div>

      {/* Events Section */}
      {dummyEvents.map((yearData) => (
        <div key={yearData.year} id={`year-${yearData.year}`} className="year-section">
          <h2 className="year-heading">{yearData.year} Events</h2>
          <div className="events-container">
            {yearData.events.map((event, index) => (
              <div key={event.id} className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p>{event.description}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
