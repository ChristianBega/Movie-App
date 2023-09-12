export const convertTvGenreId = (idArray) => {
  // Defining the conditions and corresponding values
  const genreMappings = {
    12: 10759,
    28: 10759,
    878: 10765,
    14: 10765,
    10752: 10768,
    36: null,
    27: null,
    10402: null,
    10749: null,
    // 10759: 12,
    // 10759: 28,
    10770: null,
    53: null,
    10751: null,
  };

  // Mapping the genre IDs to new values based on conditions
  const mappedGenres = idArray.map((id) => {
    return genreMappings[id] !== undefined ? genreMappings[id] : id;
  });

  return mappedGenres;
};

export const convertMovieGenreId = (idArray) => {
  // Defining the conditions and corresponding values
  const genreMappings = {
    10759: 12,
    10759: 28,
    10765: 878,
    10765: 14,
    10768: 10752,
    10762: 10751,
  };
  // 36: null,
  // 27: null,
  // 10402: null,
  // 10749: null,
  // 10770: null,
  // 53: null,
  // 10751: null,

  // Mapping the genre IDs to new values based on conditions
  const mappedGenres = idArray.map((id) => {
    return genreMappings[id] !== undefined ? genreMappings[id] : id;
  });

  return mappedGenres;
};
