import { DndContext } from "@dnd-kit/core"
import "../css/Canvas.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import useCanvas from "../hooks/useCanvas"

const Canvas: React.FC = () => {

    const {setNodeRef, CanvasChildren, moveChildren} = useCanvas()

    return (
        <div className="canvas">
            <div className="title-bar">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div ref={setNodeRef} className="canvas-body">
                <DndContext onDragEnd={moveChildren}>
                    <SortableContext items={CanvasChildren.map(e => e.id)} strategy={verticalListSortingStrategy} >
                        {CanvasChildren.map(e => <e.Child key={e.id} id={e.id}/>)}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}

export default Canvas