import "../css/Sidebar.css"
import useSidebar from "../hooks/useSidebar"

const Sidebar: React.FC = () => {

   const {
        sidebarOpen, 
        setSidebarOpen,
        menuItemMap,
        setActiveCategory
    } = useSidebar() 

    return (
        <div className="sidebar" style={{marginLeft: sidebarOpen? "0px" : "-200px"}}>
            <div 
                className="sidebar-icon" 
                onClick={() => setSidebarOpen(prev => !prev)}
            >
                {sidebarOpen?"⨯": "⚙"}
            </div>
            <div className="category-wrapper">
                <h2>ELEMENTS</h2>
                {
                    Object.entries(menuItemMap)
                    .filter(([k]) => k!="")
                    .map(([k, v], i ) => 
                        <CaterogyItem 
                            key={i} 
                            text={k} 
                            active={v.active} 
                            onClick={() => setActiveCategory(k)}
                        />
                    )
                }
            </div>
            <div className="element-wrapper">
                {Object.values(menuItemMap).find(e => e.active)?.list?.map((Comp, i) => <Comp key={i}/>)}
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