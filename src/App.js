import { useSelector } from 'react-redux';
import './App.css';
import PreviewSession from './pages/PreviewSession';
import GenerateSession from './pages/GenerateSession';
import Header from './sections/Header';

function App() {
    const currentTab = useSelector((state) => state.ui.currentTab);

    return (
        <div className="App">
            <Header />
            {currentTab === 'preview' && <PreviewSession />}
            {currentTab === 'generate' && <GenerateSession />}
        </div>
    );
}

export default App;
