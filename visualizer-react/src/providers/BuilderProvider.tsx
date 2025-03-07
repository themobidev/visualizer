import { DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import React, { createContext, useContext, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable';
import { DarkToplineElement, GrayToplineElement } from '../components/ToplineMenuElements';


interface BuilderContextType {
    CanvasChildren: {[key: string]: CanvasChildrenType[]};
    OverlayElement: React.FC<any> | null;
    onDragCancel: () => void;
    onDragStart: (e: DragStartEvent) => void;
    onDragOver: (e: DragOverEvent) => void
    onDragEnd: () => void;
}

export type CanvasChildrenType = {
    id: number | string,
    Child: React.FC<any>
}

const BuilderContext = createContext<BuilderContextType | null>(null)

export const BuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [CanvasChildren, setCanvasChildren] = useState<{[key: string] : CanvasChildrenType[]}>({
        "sidebar" : [
            {id: "GrayToplineMenuItem", Child: GrayToplineElement},
            {id: "DarkToplineMenuItem", Child: DarkToplineElement},
        ],
        "canvas" : [
            {id: 1, Child: DarkToplineElement},
            {id: 2, Child: GrayToplineElement},
        ]
    })

    const [OverlayElement, setOverlayElement] = useState<React.FC<any> | null>(null)

    const onDragStart = (e: DragStartEvent) => {
        setOverlayElement(() => e.active.data.current?.element)
    }

    const onDragCancel = () => setOverlayElement(null)

    const onDragOver = (e: DragOverEvent) => {
        if (!e.over?.id) {
            return;
        }
        if(e.over?.id == "sidebar" || e.over?.id == "preview") {
            return
        }
        if(CanvasChildren["sidebar"].findIndex(el => el.id == e.over?.id) != -1) {
            return
        }

        const activeContainer = e.active.data.current?.sortable.containerId;
        const overContainer = e.over?.data.current?.sortable.containerId || e.over?.id;

        if (activeContainer !== overContainer) {
            if(e.over?.id == "canvas") {
                let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id =="preview")
                if(oldIndex != -1) {
                    return
                }
                setCanvasChildren(prev => {
                    prev["canvas"].push({id: "preview", Child: e.active.data.current?.element})
                    return prev
                })
            } else {
                let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id =="preview")
                if(oldIndex == -1) {
                    let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                    setCanvasChildren(prev => {
                        let arr: CanvasChildrenType[] = []
                        prev["canvas"].forEach((el, i) => {
                            if(i == newIndex) {
                                arr.push({id: "preview", Child: e.active.data.current?.element})
                            }
                            arr.push(el)
                        })
                        prev["canvas"] = arr
                        return prev
                    })
                } else {
                    let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                    setCanvasChildren(prev => {
                        prev["canvas"] = arrayMove(prev["canvas"], oldIndex, newIndex)
                        return prev
                    })
                }
            }
        }
    }

    const onDragEnd = () => {
        setCanvasChildren(prev => {
            prev["canvas"] = prev["canvas"].filter(el => el.id != "preview")
            return prev
        })
    }

    return (
        <BuilderContext.Provider value={{CanvasChildren, OverlayElement, onDragCancel, onDragStart, onDragOver, onDragEnd}}>
            {children}
        </BuilderContext.Provider>
    )
}

export const useBuilderProvider = () => {
    const context = useContext(BuilderContext)
    if (context == null) {
        throw new Error("Error using BuilderContext")
    }
    return context
}