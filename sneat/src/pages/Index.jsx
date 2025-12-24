import React, {useState,useEffect,useRef} from 'react'
import Sidebar from './Sidebar'
import { Outlet,useLocation } from 'react-router-dom'

export default function Index() {
  const [toggle,setToggle] = useState(false)
  const { pathname } = useLocation();
  const contentRef = useRef(null);
  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [pathname]);
 return (
  <div className="index" style={{ height: '100vh', overflow: 'hidden' }}>
    <div style={{ display: "flex", height: '100%' }}>
      <Sidebar 
        toggle={toggle} 
        setToggle={setToggle} 
        style={{
          flexGrow: 0,
          flexShrink: 0,
          flex: 1,
          height: '100vh',  
          overflow: 'hidden',  
          position: 'sticky',  
          top: 0,
          left: 0,
          width: 260,
        }}
      />
      <div 
        ref={contentRef} 
        style={{
          transition: 'all 0.5s ease',
          padding: "10px 130px",
          backgroundColor: "#f5f5f9",
          width: "86.5%",
          paddingLeft: toggle ? "35px" : "130px",
          height: '100vh',  
          overflowY: 'auto',  
        }}>
        <Outlet />
      </div>
    </div>
  </div>
);
}
