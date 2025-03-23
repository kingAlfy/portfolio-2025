import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider } from './contexts/LoadJsonDBContext';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

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
          </main>
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
