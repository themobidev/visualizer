import "../css/Canvas.css"
import { SortableContext } from "@dnd-kit/sortable"
import { useBuilderProvider } from "../providers/BuilderProvider"
import { useDroppable } from "@dnd-kit/core"

const Canvas: React.FC = () => {

    const {CanvasChildren} = useBuilderProvider()

    const {setNodeRef} =  useDroppable({
        id: "canvas"
    })

    return (
        <div className="canvas">
            <div className="title-bar">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </div>
            <SortableContext id={"canvas"} items={CanvasChildren["canvas"].map(e => e.id)} >
                <div ref={setNodeRef} className="canvas-body">
                    {CanvasChildren["canvas"].map((e, i) => <e.Child key={i} id={e.id}/>)}
                </div>
            </SortableContext>
        </div>
    )
}

export default Canvas