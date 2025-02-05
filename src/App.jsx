import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Using Bootstrap for layout
import NavBar from './components/NavBar'; // NavBar component
import Navigation from './components/Navigation'; // Navigation component
import Footer from './components/Footer'; // Footer component
import AboutMe from './components/AboutMe'; // AboutMe Section
import Portfolio from './components/Portfolio'; // Portfolio Section
import Resume from './components/Resume'; // Resume Section
import Contact from './components/Contact'; // Contact Section

// App component
const App = () => {
  // State to track the active section
  const [section, setSection] = useState('About Me');

  const styles = {
    background: {
      background: '#5e7e7c',
    },
    color: {
      color: '#fff',
    },
    font: {
      fontFamily: `'Oswald', sans-serif`,
      lineHeight: '2rem',
    },
  };

  // Function to render the correct section based on state
  const renderSection = () => {
    switch (section) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div style={{ ...styles.background, ...styles.font }} className="d-flex flex-column min-vh-100">
      {/* NavBar with navigation */}
      <NavBar selectSection={setSection} />
      
      {/* Main content section */}
      <Container fluid className="flex-grow-1 d-flex flex-column m-0 p-0" style={{ ...styles.background, ...styles.color }}>
        <Row className="my-auto m-0 p-0">
          <Col className="p-0">
            {/* Navigation Component for highlighting active section */}
            <Navigation section={section} />
          </Col>
        </Row>
        {/* Render the section based on the state */}
        <Row className="m-0 p-0">
          <Col className="p-0">
            {renderSection()}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;



