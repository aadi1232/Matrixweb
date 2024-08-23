import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  const events = [
    { number: 1, title: 'Event 1', date: 'January 2023', description: 'Description of event 1.' },
    { number: 2, title: 'Event 2', date: 'February 2023', description: 'Description of event 2.' },
    { number: 3, title: 'Event 3', date: 'March 2023', description: 'Description of event 3.' },
    { number: 4, title: 'Event 4', date: 'April 2023', description: 'Description of event 4.' },
    { number: 5, title: 'Event 5', date: 'May 2023', description: 'Description of event 5.' },
    { number: 6, title: 'Event 6', date: 'June 2023', description: 'Description of event 6.' },
    { number: 7, title: 'Event 7', date: 'July 2023', description: 'Description of event 7.' },
    { number: 8, title: 'Event 8', date: 'August 2023', description: 'Description of event 8.' },
    { number: 9, title: 'Event 9', date: 'September 2023', description: 'Description of event 9.' },
    { number: 10, title: 'Event 10', date: 'October 2023', description: 'Description of event 10.' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timelineEvents = document.querySelectorAll('.timeline-event');
      timelineEvents.forEach((event) => {
        const eventPosition = event.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Trigger animation when the event is within the viewport
        if (eventPosition < windowHeight - 100 && eventPosition > 0) {
          event.classList.add('appear');
        } else {
          event.classList.remove('appear');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll function initially to check positions on page load
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="content">
            <div className="event-number">{event.number}</div>
            <h2>{event.title}</h2>
            <p className="date">{event.date}</p>
          </div>
          <p className="description">{event.description}</p>
        </div>
      ))}
      <div className="timeline-line"></div>
    </div>
  );
};

export default Home;
