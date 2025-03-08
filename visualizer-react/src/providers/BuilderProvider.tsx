import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import React, { createContext, JSX, useContext, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable';
import { DarkToplineElement, GrayToplineElement } from '../components/ToplineMenuElements';


interface BuilderContextType {
    CanvasChildren: {[key: string]: CanvasChildrenType[]};
    OverlayElement: JSX.Element | null;
    onDragCancel: () => void;
    onDragStart: (e: DragStartEvent) => void;
    onDragOver: (e: DragOverEvent) => void
    onDragEnd: (e: DragEndEvent) => void;
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
            {id: 3, Child: DarkToplineElement},
            {id: 4, Child: GrayToplineElement},
            {id: 5, Child: DarkToplineElement},
        ]
    })

    const [OverlayElement, setOverlayElement] = useState<JSX.Element | null>(null)

    const onDragStart = (e: DragStartEvent) => {
        if(e.active.data.current?.sortable.containerId == "sidebar") {
            if(e.active.data.current?.element == null) {
                return
            }
            let Overlay = e.active.data.current?.element as React.FC<any>
            setOverlayElement(<Overlay id={"preveiw"}/>)
        } else {
            let Overlay = CanvasChildren["canvas"].find(el => el.id == e.active.id)?.Child
            if(Overlay == null) {
                return
            }
            setOverlayElement(<Overlay id={e.active.id}/>)
        }
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

        if(activeContainer == "sidebar") {

            if (activeContainer !== overContainer) {
                if(e.over?.id == "canvas") {
                    let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id =="preview")
                    if(oldIndex != -1) {
                        return
                    }
                    setCanvasChildren(prev => {
                        let next = Object.fromEntries(Object.entries(prev))
                        next["canvas"].push({id: "preview", Child: e.active.data.current?.element})
                        return next
                    })
                } else {
                    let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id =="preview")
                    if(oldIndex == -1) {
                        let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                        setCanvasChildren(prev => {
                            let next = Object.fromEntries(Object.entries(prev))
                            let arr: CanvasChildrenType[] = []
                            next["canvas"].forEach((el, i) => {
                                if(i == newIndex) {
                                    arr.push({id: "preview", Child: e.active.data.current?.element})
                                }
                                arr.push(el)
                            })
                            next["canvas"] = arr
                            return next
                        })
                    } else {
                        let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                        setCanvasChildren(prev => {
                            let next = Object.fromEntries(Object.entries(prev))
                            next["canvas"] = arrayMove(next["canvas"], oldIndex, newIndex)
                            return next
                        })
                    }
                }
            }
        } else {
            if(e.over.id == "canvas") {
                return
            }
            let oldIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.active.id)
            let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
            if(oldIndex == newIndex || oldIndex == -1 || newIndex == -1) {
                return
            } 
            setCanvasChildren(prev => {
                let next = Object.fromEntries(Object.entries(prev))
                next["canvas"] = arrayMove(next["canvas"], oldIndex, newIndex)
                return next
            })
        }
    }

    const onDragEnd = (e: DragEndEvent) => {
        setCanvasChildren(prev => {
            let next = Object.fromEntries(Object.entries(prev))
            next["canvas"] = next["canvas"].filter(el => el.id != "preview")
            return next
        })
        if (!e.over?.id) {
            return;
        }
        if(e.over?.id == "sidebar") {
            return
        }
        if(CanvasChildren["sidebar"].findIndex(el => el.id == e.over?.id) != -1) {
            return
        }
        const activeContainer = e.active.data.current?.sortable.containerId;
        const overContainer = e.over?.data.current?.sortable.containerId || e.over?.id;
        if(activeContainer == "sidebar") {
            if (activeContainer !== overContainer) {
                if(e.over?.id == "canvas") {
                    setCanvasChildren(prev => {
                        let next = Object.fromEntries(Object.entries(prev))
                        next["canvas"].push({id: next["canvas"].length+1, Child: e.active.data.current?.element})
                        return next
                    })
                } else {
                    let newIndex = CanvasChildren["canvas"].findIndex(el => el.id == e.over?.id)
                    setCanvasChildren(prev => {
                        let next = Object.fromEntries(Object.entries(prev))
                        let arr: CanvasChildrenType[] = []
                        next["canvas"].forEach((el, i) => {
                            if(i == newIndex) {
                                arr.push({id: next["canvas"].length+1, Child: e.active.data.current?.element})
                            }
                            arr.push(el)
                        })
                        next["canvas"] = arr
                        return next
                    })
                }
            }
        }
        setOverlayElement(null)
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