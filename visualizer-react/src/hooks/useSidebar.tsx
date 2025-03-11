import { useState } from "react"
import { useDndMonitor } from "@dnd-kit/core"
import { CategoryToMenuItem } from "../utils/MenuItemMap"

const useSidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [activeCategory, setActiveCategory] = useState<keyof typeof CategoryToMenuItem>("")

    const style = {transform: sidebarOpen ? "translate(0px)" : "translate(-100%)"}

    useDndMonitor({onDragStart: () => setSidebarOpen(false)})

    return {
        style,
        sidebarOpen,
        setSidebarOpen,
        CategoryToMenuItem,
        activeCategory,
        setActiveCategory
    }
}

export default useSidebar