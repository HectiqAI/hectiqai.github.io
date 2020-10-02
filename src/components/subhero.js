import React from "react";
import styled from '@emotion/styled'

const Container = styled.h1`
  padding-top: 3em;
  padding-bottom: 3em;
`

const Title = styled.h1`
  font-family: serif;
  letter-spacing: 2px;
`

const Subtitle = styled.div`
  letter-spacing: 1px;
  font-family: 'HKGroteskPro';
  font-size: 80%;
`

function SubHero({title, subtitle}={}){
  return (
    <Container className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center ">
            <Title className="display-1 font-weight-bold mb-5 mt-8">
              {title}
            </Title>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center">
                <Subtitle className="text-gray-600 mb-7 mb-md-9">{subtitle}</Subtitle>
              </div>
            </div>
          </div>
        </div> 

      </Container>)
}
export default SubHero;