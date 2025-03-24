import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider } from './contexts/LoadJsonDBContext';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <ClientLanguageProvider>
      <LoadJsonDBProvider>
        <>
          <Header />
          <main>
            <Home />
            <Skills />
            <Experience />
            <Education />
            <Faqs />
            <Contact />
          </main>
          <Footer />
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
