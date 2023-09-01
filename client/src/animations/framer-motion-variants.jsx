export const cardVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
