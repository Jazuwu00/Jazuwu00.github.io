import React from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import Experience from './components/experienceComponent';
import Courses from './components/coursesComponent';
import Technologies from './components/technologiesComponent';
import Proyects from './components/proyects';

const App: React.FC = () => {
    return (
        <div className="App relative min-h-screen">
            {/* Fondo gif */}
            <img
                src="./assets/backgroundCode.gif"
                alt="background"
                className="fixed inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay */}
            <div className="fixed inset-0 bg-overlay z-10"></div>
            <div className="relative z-20">
                <Header />
                <AboutMe />
                
                <Technologies />
                <Proyects />
                <Experience />
                <Courses />
                
                <Footer /> 
            </div>
        </div>
    );
};

export default App;