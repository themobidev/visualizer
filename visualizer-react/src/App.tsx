import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './css/App.css'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='app-body'>
        <Canvas />
      </div>
    </div>
  )
};

export default App