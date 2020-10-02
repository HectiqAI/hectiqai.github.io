import React from "react";
import {Redirect} from "react-router-dom";
import i18n from 'i18next';

const getLanguage = () => {
  return i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en';
};

export default function RedirectPage(props){
  const lang = getLanguage();
  if (lang.includes("fr")){
    return <Redirect to="/fr/"/>
  }
  return <Redirect to="/en/"/>
}
