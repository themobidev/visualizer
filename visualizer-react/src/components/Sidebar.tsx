import { SortableContext } from "@dnd-kit/sortable"
import "../css/Sidebar.css"
import useSidebar from "../hooks/useSidebar"

const Sidebar: React.FC = () => {

    const {
        style,
        sidebarOpen,
        setSidebarOpen,
        CategoryToMenuItem,
        activeCategory,
        setActiveCategory
    } = useSidebar() 

    return (
        <div className="sidebar" style={style}>
            <div 
                className="sidebar-icon" 
                onClick={() => setSidebarOpen(prev => !prev)}
            >
                {sidebarOpen?"⨯": "⚙"}
            </div>
            <div className="category-wrapper">
                <h2>ELEMENTS</h2>
                {
                    (Object.keys(CategoryToMenuItem) as (keyof typeof CategoryToMenuItem)[])
                    .filter(key => key != "")
                    .map(key  => 
                        <CaterogyItem 
                            key={key} 
                            text={key} 
                            active={activeCategory == key} 
                            onClick={() => {
                                setActiveCategory(key)
                            }}
                        />
                    )
                }
            </div>
            <SortableContext 
                id={"sidebar"} 
                items={CategoryToMenuItem[activeCategory].map(e => e.id)}
            >
                <div className="element-wrapper">                
                    {CategoryToMenuItem[activeCategory].map(ElMap => <ElMap.Element key={ElMap.id} id={ElMap.id}/>)}
                </div>
            </SortableContext>
        </div>
    )
}

const CaterogyItem: React.FC<any> = (prop) => {
    return (
        <div onClick={prop.onClick} className={`caterogy-item ${prop.active?"active":""}`}>
            <div>{prop.text.toUpperCase()}</div>
        </div>
    )
}

export default Sidebar