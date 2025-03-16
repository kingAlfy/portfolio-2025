import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider } from './contexts/LoadJsonDBContext';
import Main from './components/Main';

function App() {

  return (
    <ClientLanguageProvider>
      <LoadJsonDBProvider>
        <>
          <Header />
          <Main />
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
