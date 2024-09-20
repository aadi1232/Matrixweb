import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetail.css';

const dummyEvents = [
  {
    id: 1,
    year: 2023,
    title: 'Event 1',
    date: 'January 15, 2023',
    description: 'This is a detailed description of Event 1. It was a great event that took place in January with lots of exciting moments.',
    images: [
      'https://via.placeholder.com/500',
      'https://via.placeholder.com/500',
      'https://via.placeholder.com/500',
    ],
  },
  {
    id: 2,
    year: 2023,
    title: 'Event 2',
    date: 'February 12, 2023',
    description: 'This is a detailed description of Event 2...',
    images: ['https://via.placeholder.com/500'],
  },
  {
    id: 3,
    year: 2022,
    title: 'Event 3',
    date: 'March 22, 2022',
    description: 'This is a detailed description of Event 3...',
    images: ['https://via.placeholder.com/500'],
  },
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = dummyEvents.find((e) => e.id === parseInt(eventId));

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="event-detail-page">
      <Link to="/" className="back-button">
        ← Back to Events
      </Link>
      <h1>{event.title}</h1>
      <p className="event-date">{event.date}</p>
      <p className="event-description">{event.description}</p>
      <div className="event-images">
        {event.images.map((image, index) => (
          <img key={index} src={image} alt={`Event ${index + 1}`} className="event-image" />
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
