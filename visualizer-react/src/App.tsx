import { DndContext, DragOverlay } from '@dnd-kit/core';
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './css/App.css'
import React from 'react';
import { useBuilderProvider } from './providers/BuilderProvider';

const App: React.FC = () => {
  
  const {OverlayElement, onDragCancel, onDragStart, onDragOver, onDragEnd} = useBuilderProvider()

  return (
    <DndContext 
      onDragCancel={onDragCancel}
      onDragStart={onDragStart} 
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <Navbar />
      <Sidebar />
      <div className='app-body'>
        <Canvas />
      </div>
      <DragOverlay>
        {OverlayElement == null ? null : <OverlayElement id={"preview"}/>}
      </DragOverlay>
    </DndContext>
  )
};

export default App