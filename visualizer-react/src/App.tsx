import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './css/App.css'
import { useState } from 'react';

const App: React.FC = () => {
  const [overlayElement, setOverlayElement] = useState()
  useDndMonitor({
    onDragStart: e => setOverlayElement(e.active.data.current?.element),
    onDragEnd: () => setOverlayElement(undefined)
  })
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='app-body'>
        <Canvas />
      </div>
      <DragOverlay>
        {overlayElement}
      </DragOverlay>
    </div>
  )
};

export default App