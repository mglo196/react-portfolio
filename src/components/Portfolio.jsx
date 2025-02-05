import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import weatherDashboardImg from '../assets/images/weather-dashboard.png'; 

import employeeDatabaseImg from '../assets/images/candidateSearchPage.png'

const Portfolio = () => {
  // Array of projects like this:
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'This Challenge builds a weather dashboard application that calls the OpenWeather API and renders data in the browser.',
      imageUrl: weatherDashboardImg,
      liveLink: 'https://module-9-challenge-62j9.onrender.com/',
      repoLink: 'https://github.com/mglo196/module-9-challenge',
    },

    {
      title: 'Employee Database',
      description: 'The Candidate Search app is a front-end project made with TypeScript and React that connects to the GitHub API. It helps employers find candidates, save their profiles to a list, and manage the saved list.',
      imageUrl: employeeDatabaseImg,
      liveLink: 'https://module-13-challenge-2.onrender.com/',
      repoLink: 'https://github.com/mglo196/module-13-challenge',
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
