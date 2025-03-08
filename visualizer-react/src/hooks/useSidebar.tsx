import { useState } from "react"
import TopLine from "../components/ToplineMenuItems"
import { useDndMonitor, useDroppable } from "@dnd-kit/core"

const useSidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [menuItemMap, setMenuItemMap] = useState<{[key: string]: {active: boolean; list: React.FC<{}>[]}}>({
        "": {active: true, list: []},
        "Topline sections": {active: false, list: TopLine},
        "Top Logo": {active: false, list: []},
        "Headers": {active: false, list: []},
        "Title Sections": {active: false, list: []},
        "Intro Sections": {active: false, list: []},
        "Action Sections": {active: false, list: []},
        "Features sections": {active: false, list: []},
        "Text Sections": {active: false, list: []},
        "Block elements": {active: false, list: []},
        "Contact Sections": {active: false, list: []},
        "Footers": {active: false, list: []},
        "Copyrights": {active: false, list: []},
        "Carousels": {active: false, list: []},
        "HTML elements": {active: false, list: []},
        "Grid Elements": {active: false, list: []},
        "Teasers": {active: false, list: []},
        "Styled lists": {active: false, list: []},
        "Bootstrap": {active: false, list: []}
    })

    const setActiveCategory = (key: keyof typeof menuItemMap) => {
        setMenuItemMap(prev => {
            let next = Object.fromEntries(
                Object.entries(prev)
                .map(([k, v]) => {
                    v.active = false
                    return [k, v]
                })
            )
            next[key].active = true
            return next
        })
    }

    useDndMonitor({
        onDragStart: () => setSidebarOpen(false)
    })

    const style = {transform: sidebarOpen ? "translate(0px)" : "translate(-100%)"}

    const {setNodeRef} = useDroppable({
        id: "sidebar"
    })

    return {
        style,
        setNodeRef,
        sidebarOpen, 
        setSidebarOpen,
        menuItemMap,
        setActiveCategory
    }
}

export default useSidebar