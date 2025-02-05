import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container id="resume" className="p-5">
      <h2 className="text-center mb-4">Resume</h2>

      {/* Link to Download Resume */}
      <div className="text-center mb-4">
        <Button
          variant="success"
          href="/assets/GLOVIERMargauxResume2025.pdf" // Correct path to the file in public folder
          target="_blank"
        >
          Download Resume
        </Button>
      </div>

      {/* Proficiencies List */}
      <h4>Proficiencies</h4>
      <ListGroup>
        <ListGroup.Item>HTML5, CSS3, JavaScript</ListGroup.Item>
        <ListGroup.Item>React, Redux</ListGroup.Item>
        <ListGroup.Item>Node.js, Express</ListGroup.Item>
        <ListGroup.Item>MongoDB, SQL</ListGroup.Item>
        <ListGroup.Item>Git, GitHub</ListGroup.Item>
        <ListGroup.Item>Bootstrap, TailwindCSS</ListGroup.Item>
        <ListGroup.Item>RESTful APIs, Webpack, Babel</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Resume;
