import { DndContext, useDndMonitor, useDroppable } from "@dnd-kit/core"
import "../css/Canvas.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import useCanvas from "../hooks/useCanvas"

const Canvas: React.FC = () => {

    const {CanvasChildren, addChild, swapChildren} = useCanvas()

    const {setNodeRef} = useDroppable({
        id: "canvas",
        data: {
            accepts: ["ToplineMenuItem"]
        }
    })

    useDndMonitor({
        onDragEnd: e => {
            if(e.over?.data.current?.accepts?.includes(e.active.data.current?.type)) {
                addChild(e.active.data.current?.element)
            } 
        }
    })

    return (
        <div className="canvas">
            <div className="title-bar">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <div ref={setNodeRef} className="canvas-body">
                <DndContext onDragEnd={swapChildren}>
                    <SortableContext items={CanvasChildren.map(e => e.id)} strategy={verticalListSortingStrategy} >
                        {CanvasChildren.map(e => <e.Child key={e.id} id={e.id}/>)}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}

export default Canvas