import React from 'react';
import './About.css';

const About = () => {
  // Define team structure with hierarchical levels
  const leads = [
    { name: 'SATHYAM A', role: 'Lead' },
    { name: 'DEVANSH VASHIST', role: 'Co-Lead' }
  ];

  const team1 = {
    lead: { name: 'UNNATI AGARWAL', role: 'Lead of Data Analytics' },
    members: [
      { name: 'KRISHNA GUPTA', role: 'Data Analytics Core Member' },
      { name: 'PATIL ADARSH REDDY', role: 'Data Analytics Core Member' }
    ]
  };

  const team2 = {
    lead: { name: 'ADITYA PANDE', role:'Lead of Machine&Deep Learning' },
    members: [
      { name: 'PURVAL MADHUKAR BHUDE', role: 'Machine&Deep Learning Core Member' },
      { name: 'SHREYAAN LOKE', role: 'Machine&Deep Learning Core Member' }
    ]
  };

  const team3 = {
    lead: { name: 'SUSHANT KURIL', role: 'Lead of Public Relations&Design' },
    members: [
      { name: 'SIDDHARTH SINGH', role: 'Public Relations&Design Core Member' },
      { name: 'KARTHIK M SARMA', role: 'Public Relations&Design Core Member' },
      { name: 'PATEL AADI', role: 'Public Relations&Design Core Member' }
    ]
  };

  return (
    <div className="about-container">
      {/* Leads Section */}
      <div className="team-section leads">
        {leads.map((member, index) => (
          <div key={index} className={`team-member-circle from-${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="circle"></div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      {/* Team 1 and Team 2 Sections */}
      <div className="team-sections">
        <div className="team-column">
          <div className="team-member-circle from-left">
            <div className="circle"></div>
            <h2>{team1.lead.name}</h2>
            <p>{team1.lead.role}</p>
          </div>
          <div className="team-row">
            {team1.members.map((member, index) => (
              <div key={index} className="team-member-circle from-left">
                <div className="circle"></div>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-column">
          <div className="team-member-circle from-right">
            <div className="circle"></div>
            <h2>{team2.lead.name}</h2>
            <p>{team2.lead.role}</p>
          </div>
          <div className="team-row">
            {team2.members.map((member, index) => (
              <div key={index} className="team-member-circle from-right">
                <div className="circle"></div>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team 3 Section */}
      <div className="team-section team-3">
        <div className="team-member-circle from-left">
          <div className="circle"></div>
          <h2>{team3.lead.name}</h2>
          <p>{team3.lead.role}</p>
        </div>
        <div className="team-row">
          {team3.members.map((member, index) => (
            <div key={index} className={`team-member-circle from-${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="circle"></div>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
