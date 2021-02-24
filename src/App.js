import './App.css';
import Header from './Header'
import Background from './Background'
import About from './About';
import Skills from './Skills';
import ProjectItem from './ProjectItem';
import Education from './Education';
import Footer from './Footer';
function App() {
  return (
    <div className="app">
      <Header />
      <Background />
      <About />
      <Skills />
      <ProjectItem />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
