import React from "react";
import styled from "@emotion/styled";

const MobileNavLink = styled.li`
  font-size: 140%;
  list-style-type: none;
`

const NavLink = styled.a`
`

function MobileNavItem({href, title, onClick}={}){
  return (<MobileNavLink className="text-white border-bottom border-white-20 my-4">
              <a className="nav-link text-white" href={href} onClick={onClick}>
                {title}
              </a>
            </MobileNavLink>)
}

function NavItem({href, title, onClick, circle, dark, language}={}){
  return (<li className="nav-item dropdown ">
              <NavLink className={`nav-link ${language? "h6 mt-1": ""}`} href={href} onClick={onClick}>
                <span className={`${circle? "circle": ""} ${dark? "dark": ""}`}>{title}</span>
              </NavLink>
            </li>)
}
export {NavItem, MobileNavItem};