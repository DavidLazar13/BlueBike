import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import CarouselItem from './CarouselItem';
import styled from "styled-components";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1 : -1,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1 : -1,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const AnimatedCarousel = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.div`
`;

function Carousel({data}) {
    const {gallery} = data;
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, gallery.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <CarouselWrapper>
            {/*<PageButton className="prev" onClick={() => paginate(-1)}>*/}
            {/*    {"<"}*/}
            {/*</PageButton>*/}
            <AnimatePresence initial={false} custom={direction} exitBeforeEnter={true}>
                <AnimatedCarousel
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
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
            {/*<PageButton className="next" onClick={() => paginate(1)}>*/}
            {/*    {">"}*/}
            {/*</PageButton>*/}
        </CarouselWrapper>
    );
}

export default Carousel;