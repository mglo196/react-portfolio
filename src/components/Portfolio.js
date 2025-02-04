// Portfolio.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  // Example portfolio projects
  const projects = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/150',  // Replace with your project image
      deployedLink: 'https://example.com',     // Replace with the deployed project URL
      githubLink: 'https://github.com/yourusername/project1', // Replace with GitHub repo link
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/150',  // Replace with your project image
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Project 5',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/project5',
    },
    {
      title: 'Project 6',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/project6',
    },
  ];

  return (
    <div id="portfolio" className="p-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button
                  variant="primary"
                  href={project.deployedLink}
                  target="_blank"
                >
                  View Live
                </Button>
                <Button
                  variant="secondary"
                  href={project.githubLink}
                  target="_blank"
                  className="ml-2"
                >
                  GitHub
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
