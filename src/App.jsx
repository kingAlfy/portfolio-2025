import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider } from './contexts/LoadJsonDBContext';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {

  return (
    <ClientLanguageProvider>
      <LoadJsonDBProvider>
        <>
          <Header />
          <main className='container mx-auto px-6 py-4'>
            <Home />
            <Skills />
          </main>
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
