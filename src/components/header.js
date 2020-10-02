import React from 'react';
import {useParams} from "react-router-dom";
import styled from '@emotion/styled'
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';
import {NavItem, MobileNavItem} from "./nav-item";

// Images
import logoLight from '../images/logo_xlight.svg';
import logoDark from '../images/logo_dark.svg';
import "../css/hamburger.min.css";


const getLanguage = () => {
  return i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en';
};

const getOtherLanguage = () => {
  return getLanguage()==="en"? "fr": "en"
};

const ImageBrand = styled.a`
  width: 110px;
  opacity: 0.9
`

function Header({location, withGrad, dark, isMenuOpen, setMenuOpen}={}){
  const { t } = useTranslation('nav');
  let { lang } = useParams();
  var navBarStyle = dark? "navbar-dark": "navbar-light"
  var logo = dark? logoLight: logoDark;
  if (isMenuOpen){
    logo = logoLight;
  }
  var divClassName = isMenuOpen? "fixed-top pt-4 h-100 bg-blue text-white" : "position-absolute w-100 "
  var transPath = "/";
  if (location.pathname==="/"){
    transPath = "/fr/"
  }
  else if ((location.pathname==="/fr") || (location.pathname==="/fr/")){
    transPath = "/en/"
  }
  else {
    if (location.pathname.includes("/en/")){
      transPath = location.pathname.replace("/en/", "/fr/")
    }
    else if (location.pathname.includes("/fr/")){
      transPath = location.pathname.replace("/fr/", "/en/")
    }
  }
  // const lang = getLanguage()
  return (
    <div className={divClassName}>
      <nav className={`navbar navbar-expand-lg ${navBarStyle} navbar-togglable border-0 ${withGrad&&!isMenuOpen? "bg-grad":""}`}>
        <div className="container">
          <ImageBrand href={lang==="en"? process.env.REACT_APP_LANDPAGE_URL: `${process.env.REACT_APP_LANDPAGE_URL}/fr`} >
            <img src={logo} alt="Hectiq.AI Logo"  />
          </ImageBrand>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto mr-auto">
              <NavItem title={t('services')} href={lang==="en"? process.env.REACT_APP_LANDPAGE_URL: `${process.env.REACT_APP_LANDPAGE_URL}/fr`}/>
              <NavItem title={t('products')} href={`${process.env.REACT_APP_LANDPAGE_URL}/${lang}/platforms`}/>
              <NavItem title={t('about')} href={`${process.env.REACT_APP_LANDPAGE_URL}/${lang}/about`}/>
              <NavItem title={t('blog')} href={process.env.REACT_APP_MAIN_URL}/>
              <NavItem language dark={!dark} circle title={getOtherLanguage().toUpperCase()} href={transPath} />
            </ul>
          </div>
          <button className={`navbar-toggler hamburger hamburger--spring ${isMenuOpen? "is-active": ""} `} type="button" onClick={setMenuOpen}>
            <span className="hamburger-box">
              <span className={`hamburger-inner ${dark? "": "dark-hamburger"}`}></span>
            </span>
          </button>  
        </div>
      </nav>

      {isMenuOpen? 
        <div>
          <ul className="mr-2">
            <MobileNavItem title={t('services')} href={lang==="en"? process.env.REACT_APP_LANDPAGE_URL: `${process.env.REACT_APP_LANDPAGE_URL}/fr`}/>
            <MobileNavItem title={t('products')} href={`${process.env.REACT_APP_LANDPAGE_URL}/${lang}/platforms`}/>
            <MobileNavItem title={t('about')} href={`${process.env.REACT_APP_LANDPAGE_URL}/${lang}/about`}/>
            <MobileNavItem title={t('blog')} href={`${process.env.REACT_APP_MAIN_URL}/${lang}`}/>
            <MobileNavItem title={getOtherLanguage().toUpperCase()} href={transPath}/>
          </ul>
        </div>
        :null}
    </div>
  )
}

Header.propTypes = {
};


export default Header;