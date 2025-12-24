import React, { useState, useRef, useEffect } from 'react'
import '../css/header.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import img01 from '../imgs/index/1.png'
import img02 from '../imgs/index/5.png'
import img03 from '../imgs/index/2.png'
import img04 from '../imgs/index/6.png'
import img05 from '../imgs/index/7.png'
import img06 from '../imgs/index/8.png'

export default function Header() {
  const navigate = useNavigate()
  const [shown, setShown] = useState(false)
  const lan = ['English', 'French', 'Arabic'];
  const [selectedLan, setSelectedLan] = useState('English');
  const lanRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lanRef.current && !lanRef.current.contains(event.target)) {
        setShown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleClick = () => {
    setShown(!shown)
  }
  const handleLanClick = (lan) => {
    setSelectedLan(lan);
  };
  const [shown1, setShown1] = useState(false)
  const handleClick1 = () => {
    setShown1(!shown1)
  }
  const scRef = useRef(null);
  useEffect(() => {
    const handleClickOutside1 = (event) => {
      if (scRef.current && !scRef.current.contains(event.target)) {
        setShown1(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside1);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside1);
    };
  }, []);
  const [shown2, setShown2] = useState(false)
  const handleClick2 = () => {
    setShown2(!shown2)
  }
  const notiRef = useRef(null);
  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (notiRef.current && !notiRef.current.contains(event.target)) {
        setShown2(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside2);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside2);
    };
  }, []);
  const [shown3, setShown3] = useState(false)
  const handleClick3 = () => {
    setShown3(!shown3)
  }
  const userRef = useRef(null);
  useEffect(() => {
    const handleClickOutside3 = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShown3(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside3);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside3);
    };
  }, []);
  return (
    <div className="header">
      <div className="main">
        <div className="left">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"></path></svg>
          <p>Search (Ctrl+/)</p>
        </div>
        <div className="right">
          <svg ref={lanRef} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10.007 10.007 0 0 0 2.583-4.491a1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343a7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483a10.027 10.027 0 0 0 2.89 7.848a9.972 9.972 0 0 0 7.848 2.891a8.036 8.036 0 0 1-1.484 2.059z"></path></svg>
          <svg ref={scRef} onClick={handleClick1} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
          <div ref={notiRef} onClick={handleClick2} className="im1"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg></div>
          <div className="wrapper" ref={userRef}>
            <div className="im" onClick={handleClick3}>
            <img src={img01} alt="" />
            {shown3 && <div className="user" >
              <div className="us1">
                <img src={img01} alt="" />
                <div className="us11">
                  <p>John Doe</p>
                  <p>Admin</p>
                </div>
              </div>
              <div className="us2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                  <p>Profile</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z"></path></svg>
                  <p>Inbox</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path></svg>
                  <p>Chat</p>
                </div>
              </div>
              <div className="us2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2s-2-.916-2-2s.916-2 2-2z"></path><path fill="currentColor" d="m2.845 16.136l1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65l.998-1.729l1.145.662a.997.997 0 0 0 1.188-.142a6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956a6.083 6.083 0 0 1 2.384 1.399a.999.999 0 0 0 1.188.142l1.144-.661l1 1.729l-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378c0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649l-.998 1.729l-1.145-.661a.996.996 0 0 0-1.188.142a6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956a6.083 6.083 0 0 1-2.384-1.399a.992.992 0 0 0-1.188-.141l-1.144.662l-1-1.729l1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
                  <p>Settings</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path></svg>
                  <p>Pricing</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793c.15-.15.339-.3.535-.458c.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"></path></svg>
                  <p>FAQ</p>
                </div>
              </div>
              <div className="us3" onClick={() => navigate('/')}>
                <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c4.411 0 8-3.589 8-8c0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"></path><path fill="currentColor" d="M11 2h2v10h-2z"></path></svg>
                  <p>Sign Out</p>
                </div>
              </div>
            </div>}
          </div>
          </div>
        </div>
      </div>
      {shown && <div className="lan">
        {lan.map((lan) => (
          <div
            key={lan}
            className={`${selectedLan === lan ? 'active' : ''}`}
            onClick={() => handleLanClick(lan)}
          >
            {lan}
          </div>
        ))}
      </div>}
      {shown1 && <div className="scut">
        <div className="scut3">
          <p>Shortcuts</p>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"></path></svg>
        </div>
        <div className="scut1">
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg></span>
            <p>Calendar</p>
            <p>Appointments</p>
          </div>
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path><path fill="currentColor" d="M8 6h9v2H8z"></path></svg></span>
            <p>Invoice App</p>
            <p>Manage Accounts</p>
          </div>
        </div>
        <div className="scut1">
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></span>
            <p>User</p>
            <p>Manage Users</p>
          </div>
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path><path fill="currentColor" d="m11 12.586l-2.293-2.293l-1.414 1.414L11 15.414l5.707-5.707l-1.414-1.414z"></path></svg></span>
            <p>Role Management</p>
            <p>Permissions</p>
          </div>
        </div>
        <div className="scut1">
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm7.931 9H13V4.069A8.008 8.008 0 0 1 19.931 11zM4 12c0-4.072 3.061-7.436 7-7.931V12a.996.996 0 0 0 .111.438c.015.03.022.063.041.093l4.202 6.723A7.949 7.949 0 0 1 12 20c-4.411 0-8-3.589-8-8zm13.052 6.196L13.805 13h6.126a7.992 7.992 0 0 1-2.879 5.196z"></path></svg></span>
            <p>Dashboard</p>
            <p>User Dashboard</p>
          </div>
          <div className="scut2">
            <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2s-2-.916-2-2s.916-2 2-2z"></path><path fill="currentColor" d="m2.845 16.136l1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65l.998-1.729l1.145.662a.997.997 0 0 0 1.188-.142a6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956a6.083 6.083 0 0 1 2.384 1.399a.999.999 0 0 0 1.188.142l1.144-.661l1 1.729l-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378c0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649l-.998 1.729l-1.145-.661a.996.996 0 0 0-1.188.142a6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956a6.083 6.083 0 0 1-2.384-1.399a.992.992 0 0 0-1.188-.141l-1.144.662l-1-1.729l1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg></span>
            <p>Settings</p>
            <p>Account Settings</p>
          </div>
        </div>
      </div>}
      {shown2 && <div className="notii">
        <div className="noti11">
          <h1>Notifications</h1>
          <div className="noti2">6 NEW</div>
        </div>
        <div className="noti">
          <div className="noti1">
            <div className="noti3">
              <div className="noti5"><img src={img02} alt="" /></div>
              <div className="noti4">
                <h2>Congratulation Flora! 🎉</h2>
                <p>Won the monthly best seller badge</p>
              </div>
            </div>
            <span>Today</span>
          </div>
          <div className="noti1">
            <div className="noti3">
              <div className="noti6">RA</div>
              <div className="noti4">
                <h2>New user registered.</h2>
                <p>5 hours ago</p>
              </div>
            </div>
            <span>Yesterday</span>
          </div>
          <div className="noti1">
            <div className="noti3">
              <div className="noti5"><img src={img03} alt="" /></div>
              <div className="noti4">
                <h2>New message received 👋🏻</h2>
                <p>You have 10 unread messages</p>
              </div>
            </div>
            <span>11 Aug</span>
          </div>
          <div className="noti1">
            <div className="noti3">
              <div className="noti5"><img src={img04} alt="" /></div>
              <div className="noti4">
                <h2>Paypal</h2>
                <p>Received Payment</p>
              </div>
            </div>
            <span>25 May</span>
          </div>
          <div className="noti1">
            <div className="noti3">
              <div className="noti5"><img src={img05} alt="" /></div>
              <div className="noti4">
                <h2>Received Order 📦</h2>
                <p>New order received from John</p>
              </div>
            </div>
            <span>19 Mar</span>
          </div>
          <div className="noti1">
            <div className="noti3">
              <div className="noti5"><img src={img06} alt="" /></div>
              <div className="noti4">
                <h2>Finance report has been generated</h2>
                <p>25 hrs ago</p>
              </div>
            </div>
            <span>27 Dec</span>
          </div>
        </div>
        <div className="noti6">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#696cff',
              '&:hover': {
                backgroundColor: '#6062e8',
                transform: 'translateY(-1px)',
                transition: 'all 0.5s ease',
              },
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            READ ALL NOTIFICATIONS
          </Button>
        </div>
      </div>}
    </div>
  )
}
