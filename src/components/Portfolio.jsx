import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  // Assuming you have an array of projects like this:
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://via.placeholder.com/150',
      liveLink: 'https://example.com',
      repoLink: 'https://github.com/example',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://via.placeholder.com/150',
      liveLink: 'https://example.com',
      repoLink: 'https://github.com/example',
    },
    // Add more projects as needed...
  ];

  return (
    <div id="portfolio" className="p-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.liveLink} target="_blank">
                  View Live
                </Button>
                <Button variant="secondary" href={project.repoLink} target="_blank" className="ml-2">
                  View Repo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
