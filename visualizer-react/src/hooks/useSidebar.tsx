import { useState } from "react"
import TopLine from "../components/Topline"

const useSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [elementList, setElementList] = useState<React.FC[]>([])

    const [elementCategory, setElementCategory] = useState([
        {text: "Topline sections", active: false, onClick: () => setElementList(TopLine)},
        {text: "Top Logo", active: false, onClick: () => setElementList([])},
        {text: "Headers", active: false, onClick: () => setElementList([])},
        {text: "Title Sections", active: false, onClick: () => setElementList([])},
        {text: "Intro Sections", active: false, onClick: () => setElementList([])},
        {text: "Action Sections", active: false, onClick: () => setElementList([])},
        {text: "Features sections", active: false, onClick: () => setElementList([])},
        {text: "Text Sections", active: false, onClick: () => setElementList([])},
        {text: "Block elements", active: false, onClick: () => setElementList([])},
        {text: "Contact Sections", active: false, onClick: () => setElementList([])},
        {text: "Footers", active: false, onClick: () => setElementList([])},
        {text: "Copyrights", active: false, onClick: () => setElementList([])},
        {text: "Carousels", active: false, onClick: () => setElementList([])},
        {text: "HTML elements", active: false, onClick: () => setElementList([])},
        {text: "Grid Elements", active: false, onClick: () => setElementList([])},
        {text: "Teasers", active: false, onClick: () => setElementList([])},
        {text: "Styled lists", active: false, onClick: () => setElementList([])},
        {text: "Bootstrap", active: false, onClick: () => setElementList([])}
    ])

    const setActiveCategory = (i: number) => {
        setElementCategory(prev => {
            prev = prev.map((e, index) => {
                if(index == i) {
                    e.active = true
                    return e
                }
                e.active = false
                return e
            })
            return prev
        })
    }

    return {
        sidebarOpen, 
        elementList, 
        elementCategory, 
        setSidebarOpen, 
        setActiveCategory,
        setElementList
    }
}

export default useSidebar