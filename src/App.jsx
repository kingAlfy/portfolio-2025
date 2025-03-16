import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider } from './contexts/LoadJsonDBContext';
import Main from './components/Main';
import Skills from './components/Skills';

function App() {

  return (
    <ClientLanguageProvider>
      <LoadJsonDBProvider>
        <>
          <Header />
          <Main />
          <Skills />
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
