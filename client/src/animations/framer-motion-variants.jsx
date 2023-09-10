export const cardVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  hidden: {
    opacity: 0.2,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export const sliderVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  hidden: {
    opacity: 0.2,
    x: -100,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
