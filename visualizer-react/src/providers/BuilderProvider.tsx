import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import React, { createContext, JSX, useContext, useState } from 'react'
import { AllMenuItemMap, AllMenuItemToElementMap, IdToElementType } from '../utils/MenuItemMap';
import { addToGroup, addToGroupAtIndex, moveInGroup } from '../utils/SortableOperation';

interface BuilderContextType {
    CanvasChildren: {[key: string]: IdToElementType[]};
    OverlayElement: JSX.Element | undefined;
    onDragCancel: () => void;
    onDragStart: (e: DragStartEvent) => void;
    onDragOver: (e: DragOverEvent) => void
    onDragEnd: (e: DragEndEvent) => void;
}

const BuilderContext = createContext<BuilderContextType | null>(null)

export const BuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [CanvasChildren, setCanvasChildren] = useState<{[key: string] : IdToElementType[]}>({
        "canvas" : []
    })

    const [OverlayElement, setOverlayElement] = useState<JSX.Element>()

    const onDragStart = (e: DragStartEvent) => {
        if(e.active.data.current?.sortable.containerId == "sidebar") {
            let Overlay = AllMenuItemToElementMap[e.active.id as keyof typeof AllMenuItemToElementMap]
            if(Overlay == null) {return}
            setOverlayElement(<Overlay id={"preveiw"}/>)
            return
        }
        if(e.active.data.current?.sortable.containerId == "canvas") {
            let Overlay = CanvasChildren["canvas"].find(el => el.id == e.active.id)?.Element
            if(Overlay == null) {return}
            setOverlayElement(<Overlay id={e.active.id}/>)
            return
        }
    }

    const onDragOver = (e: DragOverEvent) => {
        if(!e.over?.id) {return}
        if(e.over?.id == "preview") {return}
        if(AllMenuItemMap[e.over?.id as keyof typeof AllMenuItemMap] != null) {return}
        const activeContainer = e.active.data.current?.sortable.containerId;
        const overContainer = e.over?.data.current?.sortable.containerId || e.over?.id;
        
        if(activeContainer == "sidebar") {
            if(activeContainer == overContainer){return}
            if(e.over?.id == "canvas") {
                if(CanvasChildren["canvas"].find(el => el.id == "preview") != null) {return}
                setCanvasChildren(prev => {
                    let el = AllMenuItemToElementMap[e.active.id as keyof typeof AllMenuItemToElementMap]
                    return addToGroup(prev, "canvas", {id: "preview", Element: el})
                })
            } else {
                let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id =="preview")
                let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                if(oldIndex == -1) {
                    setCanvasChildren(prev => {
                        let el = AllMenuItemToElementMap[e.active.id as keyof typeof AllMenuItemToElementMap]
                        return addToGroupAtIndex(prev, "canvas", {id: "preview", Element: el}, newIndex)
                    })
                    return
                }
                setCanvasChildren(prev => moveInGroup(prev, "canvas", oldIndex, newIndex))
            }
            return
        }
        if(activeContainer == "canvas") {
            if(e.over?.id == "canvas") {return}
            let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.active.id)
            let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
            setCanvasChildren(prev => moveInGroup(prev, "canvas", oldIndex, newIndex))
        }
    }

    const onDragEnd = (e: DragEndEvent) => {
        if(!e.over?.id) {return}
        if(AllMenuItemMap[e.over?.id as keyof typeof AllMenuItemMap] != null) {return}
        const activeContainer = e.active.data.current?.sortable.containerId;
        const overContainer = e.over?.data.current?.sortable.containerId || e.over?.id;

        if(activeContainer == "sidebar") {
            if(activeContainer == overContainer){return}
            let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == "preview")
            if(newIndex == -1) {return}
            setCanvasChildren(prev => {
                let el = AllMenuItemToElementMap[e.active.id as keyof typeof AllMenuItemToElementMap]
                return addToGroupAtIndex(prev, "canvas", {id: prev["canvas"].length+1, Element: el}, newIndex)
            })
        }

        setCanvasChildren(prev => {
            let next = Object.fromEntries(Object.entries(prev).map((e: any) => [e[0], [...e[1]]]));
            next["canvas"] = next["canvas"].filter((el: any) => el.id != "preview")
            return next
        })
        setOverlayElement(undefined)
    }

    const onDragCancel = () => setOverlayElement(undefined)

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