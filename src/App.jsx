import Header from './components/Header';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';
import { LoadJsonDBProvider, useLoadJsonDB } from './contexts/LoadJsonDBContext';

function App() {

  return (
    <ClientLanguageProvider>
      <LoadJsonDBProvider>
        <>
          <Header />
        </>
      </LoadJsonDBProvider>
    </ClientLanguageProvider>
  )
}

export default App
