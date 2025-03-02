import Header from './components/Header';
//import { JsonDBProvider } from './contexts/JsonDBContext';
import { ClientLanguageProvider } from './contexts/ClientLanguageContext';

function App() {

  return (
    <ClientLanguageProvider>
      <>
        <Header />
      </>
    </ClientLanguageProvider>
  )
}

export default App
