import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GatsbyImg = styled(Img)`
  width: 100%;
  height: 100%;   
  /* max-width: 85%;
  max-height: 85%; */
`;

function CarouselItem(data) {
  return (
    <Wrapper>
      <GatsbyImg
        imgStyle={{
          objectFit: 'contain',
          objectPosition: '50% 50%',
          maxHeight: '100vh',
        }}
        fluid={data.data.fluid}
      />
    </Wrapper>
  );
}

export default CarouselItem;
