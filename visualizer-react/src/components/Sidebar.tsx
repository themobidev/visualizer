import "../css/Sidebar.css"
import useSidebar from "../hooks/useSidebar"

const Sidebar: React.FC = () => {

   const {
        sidebarOpen, 
        elementList, 
        elementCategory, 
        setSidebarOpen, 
        setActiveCategory,
        setElementList
    } = useSidebar() 

    return (
        <div className="sidebar" style={{left: sidebarOpen? "0px" : "-200px"}}>
            <div 
                className="sidebar-icon" 
                onClick={() => {
                    if(sidebarOpen) {
                        setElementList([])
                    }
                    setSidebarOpen(prev => !prev)
                }}
            >
                {sidebarOpen?"⨯": "⚙"}
            </div>
            <div className="category-wrapper">
                <h2>ELEMENTS</h2>
                {
                    elementCategory
                    .map((e, i) => {
                        return (
                            <CaterogyItem 
                                key={i} 
                                text={e.text} 
                                active={e.active} 
                                onClick={() => {
                                    e.onClick()
                                    setActiveCategory(i)
                                }} 
                            />
                        )
                    })
                }
            </div>
            <div className="element-wrapper">
                {elementList.map((Comp, i) => <Comp key={i}/>)}
            </div>
        </div>
    )
}

interface CaterogyItemProp {
    text: string,
    active: boolean,
    onClick?: () => void
}

const CaterogyItem: React.FC<CaterogyItemProp> = (prop) => {
    return (
        <div onClick={prop.onClick} className={`caterogy-item ${prop.active?"active":""}`}>
            <div>{prop.text.toUpperCase()}</div>
        </div>
    )
}

export default Sidebar