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
        <div className="App relative min-h-screen bg-background ">
          
            <div className="relative z-20 flex flex-col gap-10">
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