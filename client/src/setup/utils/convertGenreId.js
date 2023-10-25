export const convertTvGenreId = (idArray) => {
  const genreMappings = [
    { from: 27, to: "" },
    { from: 10402, to: "" },
    { from: 10770, to: "" },
    { from: 12, to: 10759 },
    { from: 28, to: 10759 },
    { from: 53, to: 9648 },
    { from: 14, to: 10765 },
    { from: 10749, to: 10766 },
    { from: 36, to: 10768 },
    { from: 878, to: 10765 },
    { from: 53, to: 10759 },
    { from: 10752, to: 10768 },
  ];

  const mappedGenres = idArray.map((id) => {
    const mapping = genreMappings.find((mapping) => mapping.from === id);
    return mapping ? mapping.to : id;
  });
  return mappedGenres;
};

export const convertMovieGenreId = (idArray) => {
  const genreMappings = [
    { from: "", to: 27 },
    { from: "", to: 10402 },
    { from: "", to: 10770 },
    { from: 10759, to: 12 },
    { from: 10759, to: 28 },
    { from: 9648, to: 53 },
    { from: 10765, to: 14 },
    { from: 10766, to: 10749 },
    { from: 10768, to: 36 },
    { from: 10765, to: 878 },
    { from: 10759, to: 53 },
    { from: 10768, to: 10752 },
  ];

  const mappedGenres = idArray.map((id) => {
    const mapping = genreMappings.find((mapping) => mapping.from === id);
    return mapping ? mapping.to : id;
  });

  return mappedGenres;
};
