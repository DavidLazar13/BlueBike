import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Img from 'gatsby-image';

const Wrapper = styled.div`
`;

const GatsbyImg = styled(Img)`
`;


function CarouselItem(data) {
    return (
            <Wrapper>
                <GatsbyImg
                    imgStyle={{ objectPosition: '50% 50%', maxHeight: '100vh' }}
                    fluid={data.data.fluid}
                />
            </Wrapper>
    )
}

export default CarouselItem;