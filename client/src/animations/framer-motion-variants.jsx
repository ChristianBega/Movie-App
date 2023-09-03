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
