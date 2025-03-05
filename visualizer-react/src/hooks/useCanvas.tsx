import { useRef, useState } from "react"
export type CanvasChildrenType = {
    id: number,
    Child: React.FC<any>
}
const useCanvas = () => {
    const totalChild = useRef(0)
    const [CanvasChildren, setCanvasChildren] = useState<CanvasChildrenType[]>([])
    const addChild = (child: React.FC) => {
        totalChild.current++
        setCanvasChildren(prev => {
            let next = [...prev]
            next.push({id: totalChild.current, Child: child})
            return next
        })
    }
    const swapChildren = (e: any) =>  {
        const {active, over} = e;
        if (active.id !== over.id) {
            let oldIndex = CanvasChildren.findIndex(e => e.id == active.id)
            let newIndex = CanvasChildren.findIndex(e => e.id == over.id)
            if(oldIndex == -1 || newIndex == -1) {
                return
            }
            setCanvasChildren(prev => {
                let next = [...prev]
                var move = next[oldIndex];
                next.splice(oldIndex, 1);
                next.splice(newIndex, 0, move);
                return next
            })
        }
    }
    return {
        CanvasChildren,
        addChild,
        swapChildren
    }
}

export default useCanvas