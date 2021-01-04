import React, {useState} from "react";
import styled from '@emotion/styled'

import Header from "./header";
import SEO from "./seo";
import { ParallaxProvider } from 'react-scroll-parallax';
// Images
import MetaImage from '../images/meta-image.png';

const PageStyled = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  overflow: hidden;
`;

export default function Page({metadata, withGrad, location, dark, children}={}){
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSetMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  };
  return <ParallaxProvider><PageStyled>
            <SEO
              url={`${metadata.siteURL}${location.pathname}`}
              title={metadata.title}
              image={`${metadata.siteURL}${MetaImage}`}
              description={metadata.description}
              twitter={metadata.twitter}
            />
            <Header withGrad={withGrad} location={location} dark={dark} isMenuOpen={isMenuOpen} setMenuOpen={handleSetMenuOpen}/>
            {isMenuOpen? 
              null
              :
              children
            }
        </PageStyled></ParallaxProvider>
}

