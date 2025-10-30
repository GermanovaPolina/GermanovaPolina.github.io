import { Container, Text } from '@gravity-ui/uikit';
import Longread from './components/Longread';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Container maxWidth="l">
          <Text variant="display-2" className="app-title">
            Интернет-технологии
          </Text>
          <Text variant="body-1" color="secondary" className="app-subtitle">
            Лабораторная №3
          </Text>
        </Container>
      </header>

      <main className="app-main">
        <Longread
          title="Web 3.0 технологии в образовании"
          subtitle="Семантическая паутина и искусственный интеллект как основа персонализированного обучения"
          author="Германова Полина, ИДМ-25-07"
          publishDate="30 октября 2025"
        />
      </main>

      <footer className="app-footer">
        <Container maxWidth="l">
          <Text variant="body-2" color="secondary">
            Интернет-технологии, МГТУ "СТАНКИН", 2025
          </Text>
        </Container>
      </footer>
    </div>
  );
}

export default App;
