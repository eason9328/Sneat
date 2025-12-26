import React, { useState, useEffect, useRef } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import Switch from '@mui/material/Switch';
import Header from '../pages/Header'
import Footer from '../pages/Footer'

import '../css/index.css';
export default function Index() {
  const [toggle, setToggle] = useState(false)
  const { pathname } = useLocation();
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState('Default');
  const [selectedMode, setSelectedMode] = useState('Light');
  const [selectedWidth, setSelectedWidth] = useState('Boxed');
  const [selectedColor, setSelectedColor] = useState('#696cff');
  const [selectedApp, setSelectedApp] = useState('Fixed');
  const [selectedFooter, setSelectedFooter] = useState('Static');
  const [selectedMenulayout, setSelectedMenulayout] = useState('Vertical');
  const [selectedMenutoggle, setSelectedMenutoggle] = useState('Accordion');
  const colors = ['#696cff', '#8592a3', '#71dd37', '#ff3e1d', '#ffab00', '#03c3ec']
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const handleChange = (event) => {
    setSelectedSkin(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedMode(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedWidth(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedApp(event.target.value);
  };
  const handleChange4 = (event) => {
    setSelectedFooter(event.target.value);
  };
  const handleChange5 = (event) => {
    setSelectedMenulayout(event.target.value);
  };
  const handleChange6 = (event) => {
    setSelectedMenutoggle(event.target.value);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const Click = (color) => {
    setSelectedColor(color);
  };
  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="d1">
        <div>
          <p style={{ color: '#32475cde', fontSize: 20, lineHeight: 1.5, fontWeight: 600 }}>Theme Customizer</p>
          <p style={{ color: '#32475c99', lineHeight: 1.5 }}>Customize & Preview in Real Time</p>
        </div>
        <svg style={{ cursor: 'pointer' }} onClick={toggleDrawer(false)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="20" class="iconify iconify--bx" width="20" height="20" viewBox="0 0 24 24"><path fill="#32475c99" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </div>
      <Divider />
      <div className="d2">
        <div className="d21">THEMING</div>
        <p>Skin</p>
        <div className="d22">
          <Radio
            checked={selectedSkin === 'Default'}
            onChange={handleChange}
            value="Default"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Default
          <Radio
            checked={selectedSkin === 'Bordered'}
            onChange={handleChange}
            value="Bordered"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Bordered
        </div>
        <p>Mode</p>
        <div className="d22">
          <Radio
            checked={selectedMode === 'Light'}
            onChange={handleChange1}
            value="Light"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Light
          <Radio
            checked={selectedMode === 'Dark'}
            onChange={handleChange1}
            value="Dark"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Dark
          <Radio
            checked={selectedMode === 'Semi Dark'}
            onChange={handleChange1}
            value="Semi Dark"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Semi Dark
        </div>
        <p>Primary Color</p>
        <div className="d23">
          {colors.map((color) => (
            <div className={`d231 ${selectedColor === color ? 'selected' : ''}`} style={{ backgroundColor: color }}
              onClick={() => Click(color)}></div>
          ))}
        </div>
      </div>
      <Divider />
      <div className="d2">
        <div className="d21">LAYOUT</div>
        <p>Content Width</p>
        <div className="d22">
          <Radio
            checked={selectedWidth === 'Full'}
            onChange={handleChange2}
            value="Full"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Full
          <Radio
            checked={selectedWidth === 'Boxed'}
            onChange={handleChange2}
            value="Boxed"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Boxed
        </div>
        <p>AppBar Style</p>
        <div className="d22">
          <Radio
            checked={selectedApp === 'Fixed'}
            onChange={handleChange3}
            value="Fixed"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Fixed
          <Radio
            checked={selectedApp === 'Static'}
            onChange={handleChange3}
            value="Static"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Static
          <Radio
            checked={selectedApp === 'Hidden'}
            onChange={handleChange3}
            value="Hidden"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Hidden
        </div>
        <p>Footer Type</p>
        <div className="d22">
          <Radio
            checked={selectedFooter === 'Fixed'}
            onChange={handleChange4}
            value="Fixed"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Fixed
          <Radio
            checked={selectedFooter === 'Static'}
            onChange={handleChange4}
            value="Static"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Static
          <Radio
            checked={selectedFooter === 'Hidden'}
            onChange={handleChange4}
            value="Hidden"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Hidden
        </div>
        <div className="d24">
          <p>AppBar Blur</p>
          <Switch {...label} defaultChecked
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: selectedColor,
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: selectedColor,
              },
            }} />
        </div>
      </div>
      <Divider />
      <div className="d2">
        <div className="d21">MENU</div>
        <p>Menu Layout</p>
        <div className="d22">
          <Radio
            checked={selectedMenulayout === 'Vertical'}
            onChange={handleChange5}
            value="Vertical"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Vertical
          <Radio
            checked={selectedMenulayout === 'Horizontal'}
            onChange={handleChange5}
            value="Horizontal"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Horizontal
        </div>
        <p>Menu Toggle</p>
        <div className="d22">
          <Radio
            checked={selectedMenutoggle === 'Accordion'}
            onChange={handleChange6}
            value="Accordion"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Accordion
          <Radio
            checked={selectedMenutoggle === 'Collapse'}
            onChange={handleChange6}
            value="Collapse"
            name="radio-buttons"
            sx={{
              color: '#32475c61',
              '&.Mui-checked': {
                color: `${selectedColor}`,
              },
            }}
          /> Collapse
        </div>
        <div className="d24" style={{ marginBottom: 20 }}>
          <p>Menu Collapsed</p>
          <Switch {...label}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: selectedColor,
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: selectedColor,
              },
            }} />
        </div>
        <div className="d24">
          <p>Menu Hidden</p>
          <Switch {...label}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: selectedColor,
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: selectedColor,
              },
            }} />
        </div>
      </div>
      <Divider />
      <div className="d2">
        <div className="d21">MISC</div>
        <div className="d24">
          <p>RTL</p>
          <Switch {...label}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: selectedColor,
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: selectedColor,
              },
            }} />
        </div>
      </div>
    </Box>
  );

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <div className="index" style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div onClick={toggleDrawer(true)}
        style={{
          width: 36,
          height: 36,
          padding: 8,
          backgroundColor: '#696cff',
          color: 'white',
          position: 'absolute',
          right: 15,
          top: '49%',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          cursor: 'pointer',
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="20" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2s-2-.916-2-2s.916-2 2-2z"></path><path fill="currentColor" d="m2.845 16.136l1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65l.998-1.729l1.145.662a.997.997 0 0 0 1.188-.142a6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956a6.083 6.083 0 0 1 2.384 1.399a.999.999 0 0 0 1.188.142l1.144-.661l1 1.729l-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378c0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649l-.998 1.729l-1.145-.661a.996.996 0 0 0-1.188.142a6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956a6.083 6.083 0 0 1-2.384-1.399a.992.992 0 0 0-1.188-.141l-1.144.662l-1-1.729l1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
      </div>
      <Drawer open={open} anchor="right">
        {DrawerList}
      </Drawer>
      <div className="buy">BUY NOW</div>
      <div style={{ display: "flex", height: '100%' }}>
        <Sidebar
          toggle={toggle}
          setToggle={setToggle}
          style={{
            height: '100vh',
            overflow: 'hidden',
            position: 'sticky',
            top: 0,
            left: 0,
          }}
        />
        <div
          ref={contentRef}
          style={{
            transition: 'all 0.5s ease',
            padding: "10px 0 0",
            backgroundColor: "#f5f5f9",
            flex: 1,
            height: '100vh',
            overflowY: 'auto',
          }}
        >
          <div style={{width:1392,margin:"0 auto"}}>
          <Header />
          <div style={{ paddingTop: 24, paddingBottom: 24 }}>
            <Outlet />
          </div>
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
