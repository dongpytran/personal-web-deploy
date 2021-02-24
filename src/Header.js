import { debounce } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Header.css'
function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);  

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 50) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);
    return (
        <div className="header" style={{top: visible ? '0' : '-100%', transition: "all 500ms"}}>
            <div className="header__logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8BAAIAAADPz8/o6OiGhobw8PDZ2dnc3NwNDA2JiInt7e2CgoLr6+sqKiopKCkdHB0iIiIZGBnj4+MaGRoUExQhICEIBwigoKB8fHxFREW6urqm42qtAAAE30lEQVR4nO2d2VrrMAyEsQkppYSWfXv/9zzuKQHS2qrtSHL4NP8tkGSwFY0jLxcXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmPK4ELrp6FLhoJb2/FLjqpe8FrlpFtxNSuOsELltBd+eFFPq7RUjc3HsnpND5+43AhQvZrL0TU+j8urnELrSgoMLQio076rDdP4agQue3g8C1s+kf/j+FpELnHxomjeH58BCiCp1/btaKIU04BYWuWdLYbMdHEFYYYrHJG7Vffz+BtMKQNBrEYvfy8wDiCp1/Ue+oPzGoolA/FvvfLaihMLSiakfdrCd311Coa+C67fTmKgrDG1Wtow53R/fWURhiUSn198/Ht1ZSGNyNSiwODyd31lIYPKpCK57EoKZCjVjc3Efuq6dQftR/nCbUFUonjS7agqoKZUf93UmaaKBQ0sD1u8Q9dRU6vxNKGkM8BvUVhlgUSRrRNPF1Ry/RbzqfvqFE0hgogdf89wtcUxLZW7EnuqiQQFoi96i/S75kwr0kSmsHVsT/lbdsk0wT+xaUExgkEq3ImTTiVu1LoFQXPUB1VD4Dl7BqGgLPxCKTxJRVc7IxOELFIo+BI2NQugX3UK3IEYv9U2OBtMSn2UljOP1k8X31Vx2BQeJr+iHmlm0oq+bkY3Bk5aQM3EbfqsUhDdyMN2oTqxZHxsB1L+Jp4u0qyft0REYljdqyjYJVu/Fpbo9+l9/A9UQLMnXRq+RDnwqkO2pN2Yayao5H4C0h8Cry+7wGjkoTr2xdNCnwJvoXKyIvliYNhRF9uUDOUX+k+MItsCwGRyiJJWWbWPFlvM5aXmCqBfdcE6+H/LIN+VWtVQyOUEkjNxYVRvSUwNhb9DfzR/0KVo1KE+kYHJlr4BSsWn0XPTDPwOlYtVkC5xm4dPGlcZqYQnVUumxDFV+YRvSlVi0ONeqnyjaLtGpx6gxcY6uW34J7agycglWblyamlBs4heJLrVWLU1q2+RNpYkpZ0li4VYtTYuAUii88aWJK/qhfofjC3UUP5JZt/mAMjuTFokLxhcOqxckp2ygUX6gYnNOCe86XbRSKL1Jd9MC5so1C8YU/TUw5U7b5SP7U+U+G2/NatTifhIYP+TbktWoxzpXehONQNgb3nC+fir5LKYE8XTSnBC6YDyWs2pS8aQxinkahi2aOL4R8qYLA7OlEImMLOas2UlJRFBgftk0Tpx/42WNxOTE4wvydRtqq1UyvZf3WJm/VaoqljN9LG1u15Fdvtm/eCjFYOWmBqW6hkCYq6xZMtae2Vu3ckiGGpLG8NDFldg24rVXLmcQ3s47fNk3kTcScZeCWZtXizJhP0zYG8+e2Vc+JkrdqPHOiqg1c2zRRth1BlYGT76KcKxIrDNxyrVqc4jnCyxrR51A4z7ttDNZtz1Nk4G6JWfdLsGpxCgzc5Xt64cQbgzyZ9RYG1swYWPdkYO2agfWHBtaQGlgHbGAtt4H1+Ab2VDCwL4aBvU0M7E9jYI8hA/tEGdjry8B+bQb23DOwb6KBvS8N7F9qYA9aA/sIG9gL2sB+3gb2ZDewr76BsxEMnG9h4IwSA+fMGDgryMB5TwbO7DJw7pqBs/MMnH9o4AxLA+eQGjhL1sB5wAbOdDZwLjcAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIR/S7dITFAejgsAAAAASUVORK5CYII=" alt="Logo"/>
                <i>Everyday is a gift, so live it, and put your all into it!</i>
            </div>
            <div className="header__nav">
                <ul>
                    <li><a href=".">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
