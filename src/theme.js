export const theme = {
    colors: {
        primary: '#555555',
        secondary: '#C7C4C0',
        background: '#F2F1EE',
    },
};

export const animations = {
    slideAnimation: {
        in: {
            x: '-100vw',
        },
        animate: {
            x: '0vw',
            transition: {
                when: 'beforeChildren',
                ease: 'easeOut',
                duration: 0.5,
            },
        },
        exit: {
            x: '-100vw',
        },
    },

    fadeAnimation: {
        in: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                ease: 'easeIn',
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
        },
    },
};
