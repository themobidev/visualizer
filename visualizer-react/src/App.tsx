import { DragOverlay, useDndMonitor } from '@dnd-kit/core';
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './css/App.css'
import { useState } from 'react';
import React from 'react';

const App: React.FC = () => {
  const [OverlayElement, setOverlayElement] = useState<React.FC | null>(null)
  useDndMonitor({
    onDragStart: e => {
      setOverlayElement(() => e.active.data.current?.element)
    },
    onDragEnd: () => setOverlayElement(null)
  })

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='app-body'>
        <Canvas />
      </div>
      <DragOverlay>
        {OverlayElement==null ? null : <OverlayElement/>}
      </DragOverlay>
    </div>
  )
};

export default App