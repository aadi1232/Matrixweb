import React, { useEffect, useState } from 'react';
import './ResourceList.css'; // Import custom CSS

const dummyResources = [
  {
    _id: '1',
    name: 'Sample PDF Document',
    link: null,
    file: 'sample1.pdf'
  },
  {
    _id: '2',
    name: 'Example Study Link',
    link: 'https://example.com/study-material',
    file: null
  },
  {
    _id: '3',
    name: 'Another PDF Document',
    link: null,
    file: 'sample2.pdf'
  }
];

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setResources(dummyResources);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resources</h2>
      <div className="row">
        {resources.map((resource) => (
          <div key={resource._id} className="col-md-4 mb-4">
            <div className="card resource-card">
              <div className="card-body">
                <h5 className="card-title">{resource.name}</h5>
                {resource.link && (
                  <a href={resource.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Link
                  </a>
                )}
                {resource.file && (
                  <a href={`/${resource.file}`} className="btn btn-secondary mt-2" download>
                    Download PDF
                  </a>
                )}
                {!resource.link && !resource.file && (
                  <p className="text-muted">No resources available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
