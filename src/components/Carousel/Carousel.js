import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import styled, { css } from 'styled-components';
import CarouselItem from './CarouselItem';

const variants = {
  enter: direction => ({
    x: direction > 0 ? 1 : -1,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 1 : -1,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const AnimatedCarousel = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.div`
  position: absolute;
  ${({ prev }) => prev && css`left: 10px;`}
  ${({ next }) => next && css`right: 10px;`}
  top: 40%;
  z-index: 100;
  opacity: 1;
`;

function Carousel({ data }) {
  const { gallery } = data;
  const [[page, direction], setPage] = useState([0, 0]);
  if (!gallery) {
    return null;
  }
  const imageIndex = wrap(0, gallery.length, page);
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <CarouselWrapper>
      <PageButton prev onClick={() => paginate(-1)}>
        <img src="/left.svg" alt="navigate-previous" />
      </PageButton>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <AnimatedCarousel
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <CarouselItem data={gallery[imageIndex]} />
        </AnimatedCarousel>
      </AnimatePresence>
      <PageButton next onClick={() => paginate(1)}>
        <img src="/right.svg" alt="navigate-next" />
      </PageButton>
    </CarouselWrapper>
  );
}

export default Carousel;
