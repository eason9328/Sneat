import React, { useState } from 'react'
import '../css/sidebar.css';
import { useLocation, Link } from "react-router-dom"


export default function Sidebar({ toggle, setToggle }) {
    const location = useLocation()
    const currentPath = location.pathname
    const [shown, setShown] = useState(true)
    const [shown1, setShown1] = useState(false)
    const [shown2, setShown2] = useState(false)
    const [shown3, setShown3] = useState(false)
    const [shown4, setShown4] = useState(false)
    const [shown5, setShown5] = useState(false)
    const [shown6, setShown6] = useState(false)
    const [shown7, setShown7] = useState(false)
    const [shown8, setShown8] = useState(false)
    const [shown9, setShown9] = useState(false)
    const [shown10, setShown10] = useState(false)
    const [shown11, setShown11] = useState(false)
    const [shown12, setShown12] = useState(false)
    const [shown13, setShown13] = useState(false)
    const [shown14, setShown14] = useState(false)
    const [shown15, setShown15] = useState(false)
    const [shown16, setShown16] = useState(false)
    const [shown17, setShown17] = useState(false)
    const [shown18, setShown18] = useState(false)
    const [shown19, setShown19] = useState(false)
    const [shown20, setShown20] = useState(false)
    const [isExpanded, setIsExpanded] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleMouseEnter = () => {
        if (toggle) {
            setIsExpanded(true);
        }
    };

    const handleMouseLeave = () => {
        if (toggle) {
            setIsExpanded(false);
            setShown(false)
            setShown18(false)
            setShown19(false)
            setShown1(false)
            setShown2(false)
            setShown3(false)
            setShown4(false)
            setShown5(false)
            setShown6(false)
            setShown7(false)
            setShown8(false)
            setShown9(false)
            setShown10(false)
            setShown11(false)
            setShown12(false)
            setShown13(false)
            setShown14(false)
            setShown15(false)
            setShown16(false)
            setShown17(false)
            setShown20(false)
        }
    };
    const handleClick = () => {
        setShown(!shown)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick1 = () => {
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick2 = () => {
        setShown1(!shown1)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick3 = () => {
        setShown2(!shown2)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick4 = () => {
        setShown3(!shown3)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick5 = () => {
        setShown4(!shown4)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick6 = () => {
        setShown5(!shown5)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick7 = () => {
        setShown6(!shown6)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick8 = () => {
        setShown7(!shown7)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown6(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick9 = () => {
        setShown8(!shown8)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown6(false)
        setShown7(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick10 = () => {
        setShown9(!shown9)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick11 = () => {
        setShown10(!shown10)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick12 = () => {
        setShown11(!shown11)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick13 = () => {
        setShown12(!shown12)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown11(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick14 = () => {
        setShown13(!shown13)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick15 = () => {
        setShown14(!shown14)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick16 = () => {
        setShown15(!shown15)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick17 = () => {
        setShown16(!shown16)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick18 = () => {
        setShown17(!shown17)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown20(false)
    }
    const handleClick19 = () => {
        setShown18(!shown18)
        setShown(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick20 = () => {
        setShown19(!shown19)
        setShown(false)
        setShown18(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
        setShown20(false)
    }
    const handleClick21 = () => {
        setShown20(!shown20)
        setShown(false)
        setShown18(false)
        setShown19(false)
        setShown1(false)
        setShown2(false)
        setShown3(false)
        setShown4(false)
        setShown5(false)
        setShown6(false)
        setShown7(false)
        setShown8(false)
        setShown9(false)
        setShown10(false)
        setShown11(false)
        setShown12(false)
        setShown13(false)
        setShown14(false)
        setShown15(false)
        setShown16(false)
        setShown17(false)
    }
    return (
        <div className="sidebar" style={{ width: isExpanded ? 260 : 82 }} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {isExpanded && ( 
            <div>
            <div className="arr" onClick={handleToggle}>
                <div>
                    <svg style={{ transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.5s ease' }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z" /></svg>
                </div>
            </div>
            <div className="container">
                <div className="s1">
                    <svg width="22" height="32" viewBox="0 0 55 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#696CFF" d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"></path>
                        <path fill-opacity="0.2" fill="#FFF" d="M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z"></path>
                        <path fill-opacity="0.2" fill="#FFF" d="M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z"></path></svg><path fill="#696CFF" d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"></path>
                    <h1>sneat</h1>
                </div>
                <div className={`s2 ${currentPath.startsWith('/index/dashboards/') ? 'active' : ''} ${shown ? 'dis1' : ''}`} onClick={handleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bx"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        style={{ fontSize: '1.375rem' }}
                    >
                        <path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"></path>
                        <path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"></path>
                    </svg>
                    <p>Dashboards</p>
                    <span>New</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        fill="currentColor"
                        className="arrow-icon"
                        style={{
                            transform: shown ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                    </svg>
                </div>
                <div className={`${currentPath.startsWith('/index/dashboards/') ? 'highlight' : ''}`}></div>
                <div className={`s3 ${shown ? 'dis' : ''}`}>
                    <Link to="/index/dashboards/analytics"
                        className={currentPath === "/index/dashboards/analytics" ? "active" : " "}>
                        <span className="dot"></span>Analytics
                    </Link>
                    <Link to="/index/dashboards/crm"
                        className={currentPath === "/index/dashboards/crm" ? "active" : " "}>
                        <span className="dot"></span>CRM
                    </Link>
                    <Link to="/index/dashboards/ecommerce"
                        className={currentPath === "/index/dashboards/ecommerce" ? "active" : " "}>
                        <span className="dot"></span>eCommerce
                    </Link>
                </div>
                <div className="s4">
                    <div className="s41">Apps & Pages</div>
                    <div onClick={handleClick1}>
                        <Link to="/index/email"
                            className={currentPath === "/index/email" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z"></path></svg>Email
                            <div className={`${currentPath.startsWith('/index/email') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div onClick={handleClick1}>
                        <Link to="/index/chat"
                            className={currentPath === "/index/chat" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path></svg>Chat
                            <div className={`${currentPath.startsWith('/index/chat') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div onClick={handleClick1}>
                        <Link to="/index/calendar"
                            className={currentPath === "/index/calendar" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>Calendar
                            <div className={`${currentPath.startsWith('/index/calendar') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className={`s43 ${currentPath.startsWith('/index/invoice') ? 'active' : ''} ${shown1 ? 'dis1' : ''}`} onClick={handleClick2}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path><path fill="currentColor" d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path></svg>Invoice</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown1 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                    </div>
                    <div className={`${currentPath.startsWith('/index/invoice') ? 'highlightinv' : ''}`}></div>
                    <div className={`s42 ${shown1 ? 'dis' : ''}`}>
                        <Link to="/index/invoice/list"
                            className={currentPath === "/index/invoice/list" ? "active" : " "}>
                            <span className="dot"></span>List
                        </Link>
                        <Link to="/index/invoice/preview"
                            className={currentPath === "/index/invoice/preview" ? "active" : " "}>
                            <span className="dot"></span>Preview
                        </Link>
                        <Link to="/index/invoice/edit"
                            className={currentPath === "/index/invoice/edit" ? "active" : " "}>
                            <span className="dot"></span>Edit
                        </Link>
                        <Link to="/index/invoice/add"
                            className={currentPath === "/index/invoice/add" ? "active" : " "}>
                            <span className="dot"></span>Add
                        </Link>
                    </div>
                    <div className={`s43 ${currentPath.startsWith('/index/user') ? 'active' : ''} ${shown2 ? 'dis1' : ''}`} onClick={handleClick3}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>User</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown2 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/user') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s42 ${shown2 ? 'dis' : ''}`}>
                        <Link to="/index/user/list"
                            className={currentPath === "/index/user/list" ? "active" : " "}>
                            <span className="dot"></span>List
                        </Link>
                        <div className={`s43 ${shown3 ? 'dis1' : ''} ${currentPath.startsWith('/index/user/view') ? 'dis1' : ''}`} onClick={handleClick4}>
                            <div><span className="dot"></span>View</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown3 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                    </div>
                    <div className={`s44 ${shown3 ? 'dis' : ''}`}>
                        <Link to="/index/user/view/account"
                            className={currentPath === "/index/user/view/account" ? "active" : " "}>
                            <span className="dot"></span>Account
                        </Link>
                        <Link to="/index/user/view/security"
                            className={currentPath === "/index/user/view/security" ? "active" : " "}>
                            <span className="dot"></span>Security
                        </Link>
                        <Link to="/index/user/view/billingplan"
                            className={currentPath === "/index/user/view/billingplan" ? "active" : " "}>
                            <span className="dot"></span>Billing & Plans
                        </Link>
                        <Link to="/index/user/view/notifications"
                            className={currentPath === "/index/user/view/notifications" ? "active" : " "}>
                            <span className="dot"></span>Notifications
                        </Link>
                        <Link to="/index/user/view/connection"
                            className={currentPath === "/index/user/view/connection" ? "active" : " "}>
                            <span className="dot"></span>Connection
                        </Link>
                    </div>
                    <div className={`s43 ${currentPath.startsWith('/index/rolepermission') ? 'active' : ''} ${shown4 ? 'dis1' : ''}`} onClick={handleClick5}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="22px" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path><path fill="currentColor" d="m11 12.586l-2.293-2.293l-1.414 1.414L11 15.414l5.707-5.707l-1.414-1.414z"></path></svg>Role & Permissi...</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown4 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/rolepermission') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s42 ${shown4 ? 'dis' : ''}`}>
                        <Link to="/index/rolepermission/roles"
                            className={currentPath === "/index/rolepermission/roles" ? "active" : " "}>
                            <span className="dot"></span>Roles
                        </Link>
                        <Link to="/index/rolepermission/permissions"
                            className={currentPath === "/index/rolepermission/permissions" ? "active" : " "}>
                            <span className="dot"></span>Permissions
                        </Link>
                    </div>
                    <div className={`s43 ${currentPath.startsWith('/index/pages') ? 'active' : ''} ${shown5 ? 'dis1' : ''}`} onClick={handleClick6}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v3H5V5zM5 19v-9h14v9z"></path></svg>Pages</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown5 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/pages') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s42 ${shown5 ? 'dis' : ''}`}>
                        <div className={`s43 ${shown6 ? 'dis1' : ''} ${currentPath.startsWith('/index/pages/userprofile') ? 'dis1' : ''}`} onClick={handleClick7}>
                            <div><span className="dot"></span>User Profile</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown6 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s44 ${shown6 ? 'dis' : ''}`}>
                            <Link to="/index/pages/userprofile/profile"
                                className={currentPath === "/index/pages/userprofile/profile" ? "active" : " "}>
                                <span className="dot"></span>Profile
                            </Link>
                            <Link to="/index/pages/userprofile/teams"
                                className={currentPath === "/index/pages/userprofile/teams" ? "active" : " "}>
                                <span className="dot"></span>Teams
                            </Link>
                            <Link to="/index/pages/userprofile/projects"
                                className={currentPath === "/index/pages/userprofile/projects" ? "active" : " "}>
                                <span className="dot"></span>Projects
                            </Link>
                            <Link to="/index/pages/userprofile/connections"
                                className={currentPath === "/index/pages/userprofile/connections" ? "active" : " "}>
                                <span className="dot"></span>Connections
                            </Link>
                        </div>
                        <div className={`s43 ${shown7 ? 'dis1' : ''} ${currentPath.startsWith('/index/pages/accountsettings') ? 'dis1' : ''}`} onClick={handleClick8}>
                            <div><span className="dot"></span>Account Settings</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown7 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s44 ${shown7 ? 'dis' : ''}`}>
                            <Link to="/index/pages/accountsettings/account"
                                className={currentPath === "/index/pages/accountsettings/account" ? "active" : " "}>
                                <span className="dot"></span>Account
                            </Link>
                            <Link to="/index/pages/accountsettings/security"
                                className={currentPath === "/index/pages/accountsettings/security" ? "active" : " "}>
                                <span className="dot"></span>Security
                            </Link>
                            <Link to="/index/pages/accountsettings/billingplan"
                                className={currentPath === "/index/pages/accountsettings/billingplan" ? "active" : " "}>
                                <span className="dot"></span>Billing & Plans
                            </Link>
                            <Link to="/index/pages/accountsettings/notifications"
                                className={currentPath === "/index/pages/accountsettings/notifications" ? "active" : " "}>
                                <span className="dot"></span>Notifications
                            </Link>
                            <Link to="/index/pages/accountsettings/connections"
                                className={currentPath === "/index/pages/accountsettings/connections" ? "active" : " "}>
                                <span className="dot"></span>Connections
                            </Link>
                        </div>
                        <Link to="/index/pages/faq"
                            className={currentPath === "/index/pages/faq" ? "active" : " "}>
                            <span className="dot"></span>FAQ
                        </Link>
                        <Link to="/index/pages/helpcenter"
                            className={currentPath === "/index/pages/helpcenter" ? "active" : " "}>
                            <span className="dot"></span>Help Center
                        </Link>
                        <Link to="/index/pages/pricing"
                            className={currentPath === "/index/pages/pricing" ? "active" : " "}>
                            <span className="dot"></span>Pricing
                        </Link>
                        <div className={`s43 ${shown8 ? 'dis1' : ''}`} onClick={handleClick9}>
                            <div><span className="dot"></span>Miscellaneous</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown8 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown8 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Coming soon
                            </div>
                            <div>
                                <span className="dot"></span>Under Maintenance
                            </div>
                            <div>
                                <span className="dot"></span>Page Not Found
                            </div>
                            <div>
                                <span className="dot"></span>Not Authorized
                            </div>
                            <div>
                                <span className="dot"></span>Server Error
                            </div>
                        </div>
                    </div>
                    <div className={`s43 ${shown9 ? 'dis1' : ''}`} onClick={handleClick10}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4l.002 8H6v-8h12z"></path></svg>Auth Pages</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown9 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                    </div>
                    <div className={`s42 ${shown9 ? 'dis' : ''}`}>
                        <div className={`s43 ${shown10 ? 'dis1' : ''}`} onClick={handleClick11}>
                            <div><span className="dot"></span>Login</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown10 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown10 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Login v1
                            </div>
                            <div>
                                <span className="dot"></span>Login v2
                            </div>
                            <div>
                                <span className="dot"></span>Login With AppBar
                            </div>
                        </div>
                        <div className={`s43 ${shown11 ? 'dis1' : ''}`} onClick={handleClick12}>
                            <div><span className="dot"></span>Register</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown11 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown11 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Register v1
                            </div>
                            <div>
                                <span className="dot"></span>Register v2
                            </div>
                            <div>
                                <span className="dot"></span>Register Multi-Steps
                            </div>
                        </div>
                        <div className={`s43 ${shown12 ? 'dis1' : ''}`} onClick={handleClick13}>
                            <div><span className="dot"></span>Verify Email</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown12 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown12 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Verify Email v1
                            </div>
                            <div>
                                <span className="dot"></span>Verify Email v2
                            </div>
                        </div>
                        <div className={`s43 ${shown13 ? 'dis1' : ''}`} onClick={handleClick14}>
                            <div><span className="dot"></span>Forgot Password</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown13 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown13 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Forgot Password v1
                            </div>
                            <div>
                                <span className="dot"></span>Forgot Password v2
                            </div>
                        </div>
                        <div className={`s43 ${shown14 ? 'dis1' : ''}`} onClick={handleClick15}>
                            <div><span className="dot"></span>Reset Password</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown14 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown14 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Reset Password v1
                            </div>
                            <div>
                                <span className="dot"></span>Reset Password v2
                            </div>
                        </div>
                        <div className={`s43 ${shown15 ? 'dis1' : ''}`} onClick={handleClick16}>
                            <div><span className="dot"></span>Two Steps</div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown15 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`s45 ${shown15 ? 'dis' : ''}`}>
                            <div>
                                <span className="dot"></span>Two Steps v1
                            </div>
                            <div>
                                <span className="dot"></span>Two Steps v2
                            </div>
                        </div>
                    </div>
                    <div className={`s43 ${currentPath.startsWith('/index/wizard') ? 'active' : ''} ${shown16 ? 'dis1' : ''}`} onClick={handleClick17}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path><path fill="currentColor" d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path></svg>Wizard Examples</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown16 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/wizard') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s42 ${shown16 ? 'dis' : ''}`}>
                        <Link to="/index/wizard/checkout"
                            className={currentPath === "/index/wizard/checkout" ? "active" : " "}>
                            <span className="dot"></span>Checkout
                        </Link>
                        <Link to="/index/wizard/propertylisting"
                            className={currentPath === "/index/wizard/propertylisting" ? "active" : " "}>
                            <span className="dot"></span>Property Listing
                        </Link>
                        <Link to="/index/wizard/createdeal"
                            className={currentPath === "/index/wizard/createdeal" ? "active" : " "}>
                            <span className="dot"></span>Create Deal
                        </Link>
                    </div>
                    <div onClick={handleClick1}>
                        <Link to="/index/dialog"
                            className={currentPath === "/index/dialog" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path><path fill="currentColor" d="M13 21v-5h3l-4-5l-4 5h3v5z"></path></svg>Dialog Examples
                            <div className={`hl ${currentPath.startsWith('/index/dialog') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                </div>
                <div className="s5">
                    <div className="s51">USER INTERFACE</div>
                    <div className="s52">
                        <Link to="/index/ui/typography"
                            className={currentPath === "/index/ui/typography" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></path></svg>
                            Typography
                            <div className={`hl ${currentPath.startsWith('/index/ui/typography') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/ui/icons"
                            className={currentPath === "/index/ui/icons" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.219 3.375L8 7.399L4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851L19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path></svg>
                            Icons
                            <div className={`hl ${currentPath === ('/index/ui/icons') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/ui/iconstest"
                            className={currentPath === "/index/ui/iconstest" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.219 3.375L8 7.399L4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851L19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path></svg>
                            Icons Test
                            <div className={`hl ${currentPath.startsWith('/index/ui/iconstest') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className={`s53 ${currentPath.startsWith('/index/ui/cards') ? 'active' : ''} ${shown17 ? 'dis1' : ''}`} onClick={handleClick18}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z"></path></svg>Cards</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown17 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/ui/cards') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s54 ${shown17 ? 'dis' : ''}`}>
                        <Link to="/index/ui/cards/basic"
                            className={currentPath === "/index/ui/cards/basic" ? "active" : " "}>
                            <span className="dot"></span>Basic
                        </Link>
                        <Link to="/index/ui/cards/advanced"
                            className={currentPath === "/index/ui/cards/advanced" ? "active" : " "}>
                            <span className="dot"></span>Advanced
                        </Link>
                        <Link to="/index/ui/cards/statistics"
                            className={currentPath === "/index/ui/cards/statistics" ? "active" : " "}>
                            <span className="dot"></span>Statistics
                        </Link>
                        <Link to="/index/ui/cards/widgets"
                            className={currentPath === "/index/ui/cards/widgets" ? "active" : " "}>
                            <span className="dot"></span>Widgets
                        </Link>
                        <Link to="/index/ui/cards/gamification"
                            className={currentPath === "/index/ui/cards/gamification" ? "active" : " "}>
                            <span className="dot"></span>Gamification
                        </Link>
                        <Link to="/index/ui/cards/actions"
                            className={currentPath === "/index/ui/cards/actions" ? "active" : " "}>
                            <span className="dot"></span>Actions
                        </Link>
                    </div>
                    <div className={`s53 ${currentPath.startsWith('/index/ui/components') ? 'active' : ''} ${shown18 ? 'dis1' : ''}`} onClick={handleClick19}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2zM4 5h16v2H4zm1 14V9h14v10z"></path><path fill="currentColor" d="M8 11h8v2H8z"></path></svg>Components</div>
                        <div>
                            <span>19</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="currentColor"
                                className="arrow-icon"
                                style={{
                                    transform: shown18 ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                            </svg>
                        </div>
                        <div className={`hl ${currentPath.startsWith('/index/ui/components') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s54 ${shown18 ? 'dis' : ''}`}>
                        <Link to="/index/ui/components/accordion"
                            className={currentPath === "/index/ui/components/accordion" ? "active" : " "}>
                            <span className="dot"></span>Accordion
                        </Link>
                        <Link to="/index/ui/components/alerts"
                            className={currentPath === "/index/ui/components/alerts" ? "active" : " "}>
                            <span className="dot"></span>Alerts
                        </Link>
                        <Link to="/index/ui/components/avatars"
                            className={currentPath === "/index/ui/components/avatars" ? "active" : " "}>
                            <span className="dot"></span>Avatars
                        </Link>
                        <Link to="/index/ui/components/badges"
                            className={currentPath === "/index/ui/components/badges" ? "active" : " "}>
                            <span className="dot"></span>Badges
                        </Link>
                        <Link to="/index/ui/components/buttons"
                            className={currentPath === "/index/ui/components/buttons" ? "active" : " "}>
                            <span className="dot"></span>Buttons
                        </Link>
                        <Link to="/index/ui/components/buttongroup"
                            className={currentPath === "/index/ui/components/buttongroup" ? "active" : " "}>
                            <span className="dot"></span>Button Group
                        </Link>
                        <Link to="/index/ui/components/chips"
                            className={currentPath === "/index/ui/components/chips" ? "active" : " "}>
                            <span className="dot"></span>Chips
                        </Link>
                        <Link to="/index/ui/components/dialogs"
                            className={currentPath === "/index/ui/components/dialogs" ? "active" : " "}>
                            <span className="dot"></span>Dialogs
                        </Link>
                        <Link to="/index/ui/components/list"
                            className={currentPath === "/index/ui/components/list" ? "active" : " "}>
                            <span className="dot"></span>List
                        </Link>
                        <Link to="/index/ui/components/menu"
                            className={currentPath === "/index/ui/components/menu" ? "active" : " "}>
                            <span className="dot"></span>Menu
                        </Link>
                        <Link to="/index/ui/components/pagination"
                            className={currentPath === "/index/ui/components/pagination" ? "active" : " "}>
                            <span className="dot"></span>Pagination
                        </Link>
                        <Link to="/index/ui/components/progress"
                            className={currentPath === "/index/ui/components/progress" ? "active" : " "}>
                            <span className="dot"></span>Progress
                        </Link>
                        <Link to="/index/ui/components/Ratings"
                            className={currentPath === "/index/ui/components/Ratings" ? "active" : " "}>
                            <span className="dot"></span>Ratings
                        </Link>
                        <Link to="/index/ui/components/snackbar"
                            className={currentPath === "/index/ui/components/snackbar" ? "active" : " "}>
                            <span className="dot"></span>Snackbar
                        </Link>
                        <Link to="/index/ui/components/Swiper"
                            className={currentPath === "/index/ui/components/Swiper" ? "active" : " "}>
                            <span className="dot"></span>Swiper
                        </Link>
                        <Link to="/index/ui/components/Tabs"
                            className={currentPath === "/index/ui/components/Tabs" ? "active" : " "}>
                            <span className="dot"></span>Tabs
                        </Link>
                        <Link to="/index/ui/components/Timeline"
                            className={currentPath === "/index/ui/components/Timeline" ? "active" : " "}>
                            <span className="dot"></span>Timeline
                        </Link>
                        <Link to="/index/ui/components/Toasts"
                            className={currentPath === "/index/ui/components/Toasts" ? "active" : " "}>
                            <span className="dot"></span>Toasts
                        </Link>
                        <Link to="/index/ui/components/treeview"
                            className={currentPath === "/index/ui/components/treeview" ? "active" : " "}>
                            <span className="dot"></span>Tree View
                        </Link>
                        <Link to="/index/ui/components/More"
                            className={currentPath === "/index/ui/components/More" ? "active" : " "}>
                            <span className="dot"></span>More
                        </Link>
                        <Link to="/index/ui/components/Test"
                            className={currentPath === "/index/ui/components/Test" ? "active" : " "}>
                            <span className="dot"></span>Test
                        </Link>
                    </div>
                </div>
                <div className="s5">
                    <div className="s51">FORMS & TABLETS</div>
                    <div className={`s53 ${currentPath.startsWith('/index/forms/formelements') ? 'active' : ''} ${shown19 ? 'dis1' : ''}`} onClick={handleClick20}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path><path fill="currentColor" d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path></svg>Form Elements</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown19 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/forms/formelements') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s54 ${shown19 ? 'dis' : ''}`}>
                        <Link to="/index/forms/formelements/textfield"
                            className={currentPath === "/index/forms/formelements/textfield" ? "active" : " "}>
                            <span className="dot"></span>Text Field
                        </Link>
                        <Link to="/index/forms/formelements/Select"
                            className={currentPath === "/index/forms/formelements/Select" ? "active" : " "}>
                            <span className="dot"></span>Select
                        </Link>
                        <Link to="/index/forms/formelements/Checkbox"
                            className={currentPath === "/index/forms/formelements/Checkbox" ? "active" : " "}>
                            <span className="dot"></span>Checkbox
                        </Link>
                        <Link to="/index/forms/formelements/Radio"
                            className={currentPath === "/index/forms/formelements/Radio" ? "active" : " "}>
                            <span className="dot"></span>Radio
                        </Link>
                        <Link to="/index/forms/formelements/custominputs"
                            className={currentPath === "/index/forms/formelements/custominputs" ? "active" : " "}>
                            <span className="dot"></span>Custom Inputs
                        </Link>
                        <Link to="/index/forms/formelements/Textarea"
                            className={currentPath === "/index/forms/formelements/Textarea" ? "active" : " "}>
                            <span className="dot"></span>Textarea
                        </Link>
                        <Link to="/index/forms/formelements/Autocomplete"
                            className={currentPath === "/index/forms/formelements/Autocomplete" ? "active" : " "}>
                            <span className="dot"></span>Autocomplete
                        </Link>
                        <Link to="/index/forms/formelements/datepickers"
                            className={currentPath === "/index/forms/formelements/datepickers" ? "active" : " "}>
                            <span className="dot"></span>Data Pickers
                        </Link>
                        <Link to="/index/forms/formelements/Switch"
                            className={currentPath === "/index/forms/formelements/Switch" ? "active" : " "}>
                            <span className="dot"></span>Switch
                        </Link>
                        <Link to="/index/forms/formelements/fileuploader"
                            className={currentPath === "/index/forms/formelements/fileuploader" ? "active" : " "}>
                            <span className="dot"></span>File Uploader
                        </Link>
                        <Link to="/index/forms/formelements/Editor"
                            className={currentPath === "/index/forms/formelements/Editor" ? "active" : " "}>
                            <span className="dot"></span>Editor
                        </Link>
                        <Link to="/index/forms/formelements/Slider"
                            className={currentPath === "/index/forms/formelements/Slider" ? "active" : " "}>
                            <span className="dot"></span>Slider
                        </Link>
                        <Link to="/index/forms/formelements/inputmask"
                            className={currentPath === "/index/forms/formelements/inputmask" ? "active" : " "}>
                            <span className="dot"></span>Input Mask
                        </Link>
                        <Link to="/index/forms/formelements/Test"
                            className={currentPath === "/index/forms/formelements/Test" ? "active" : " "}>
                            <span className="dot"></span>Test
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/forms/formlayouts"
                            className={currentPath === "/index/forms/formlayouts" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path><path fill="currentColor" d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path></svg>
                            Form Layouts
                            <div className={`hl ${currentPath.startsWith('/index/forms/formlayouts') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/forms/formvalidation"
                            className={currentPath === "/index/forms/formvalidation" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.299-2.708l-4.3 4.291l-1.292-1.291l-1.414 1.415l2.706 2.704l5.712-5.703z"></path></svg>
                            Form Validation
                            <div className={`hl ${currentPath.startsWith('/index/forms/formvalidation') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/forms/formwizard"
                            className={currentPath === "/index/forms/formwizard" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19h2c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2h2c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zM20 7v10h-2V7h2zM8 5h8l.001 14H8V5zM4 7h2v10H4V7z"></path></svg>
                            Form Wizard
                            <div className={`hl ${currentPath.startsWith('/index/forms/formwizard') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/forms/table"
                            className={currentPath === "/index/forms/table" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"></path></svg>
                            Table
                            <div className={`hl ${currentPath.startsWith('/index/forms/table') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/forms/muidatagrid"
                            className={currentPath === "/index/forms/muidatagrid" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3H4.984c-1.103 0-2 .897-2 2v14.016c0 1.103.897 2 2 2H19c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-4zm4 5h-3V5h3v3zM4.984 10h3v4.016h-3V10zm5 0H14v4.016H9.984V10zM16 10h3v4.016h-3V10zm-2-5v3H9.984V5H14zM7.984 5v3h-3V5h3zm-3 11.016h3v3h-3v-3zm5 3v-3H14v3H9.984zm6.016 0v-3h3.001v3H16z"></path></svg>
                            Mui DataGrid
                            <div className={`hl ${currentPath.startsWith('/index/forms/muidatagrid') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                </div>
                <div className="s5">
                    <div className="s51">CHARTS & MISC</div>
                    <div className={`s53 ${currentPath.startsWith('/index/charts') ? 'active' : ''} ${shown20 ? 'dis1' : ''}`} onClick={handleClick21}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z"></path><path fill="currentColor" d="m13.553 11.658l-4-2l-2.448 4.895l1.79.894l1.552-3.105l4 2l2.448-4.895l-1.79-.894z"></path></svg>Charts</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="currentColor"
                            className="arrow-icon"
                            style={{
                                transform: shown20 ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                        </svg>
                        <div className={`hl ${currentPath.startsWith('/index/charts') ? 'highlight' : ''}`}></div>
                    </div>
                    <div className={`s54 ${shown20 ? 'dis' : ''}`}>
                        <Link to="/index/charts/apex"
                            className={currentPath === "/index/charts/apex" ? "active" : " "}>
                            <span className="dot"></span>Apex
                        </Link>
                        <Link to="/index/charts/Recharts"
                            className={currentPath === "/index/charts/Recharts" ? "active" : " "}>
                            <span className="dot"></span>Recharts
                        </Link>
                        <Link to="/index/charts/ChartJS"
                            className={currentPath === "/index/charts/ChartJS" ? "active" : " "}>
                            <span className="dot"></span>ChartJS
                        </Link>
                    </div>
                    <div className="s52">
                        <Link to="/index/accesscontrol"
                            className={currentPath === "/index/accesscontrol" ? "active" : " "}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" font-size="1.375rem" class="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767c-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523l6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path></svg>
                            Access Control
                            <div className={`hl ${currentPath.startsWith('/index/accesscontrol') ? 'highlight' : ''}`}></div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
          )}
        </div>
    )
}
