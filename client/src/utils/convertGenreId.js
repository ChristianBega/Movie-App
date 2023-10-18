// export const convertTvGenreId = (idArray) => {
//   // Defining the conditions and corresponding values
//   const genreMappings = {
//     12: 10759,
//     28: 10759,
//     878: 10765,
//     14: 10765,
//     10752: 10768,
//     36: null,
//     27: null,
//     10402: null,
//     10749: null,
//     // 10759: 12,
//     // 10759: 28,
//     10770: null,
//     53: null,
//     10751: null,
//   };

//   // Mapping the genre IDs to new values based on conditions
//   const mappedGenres = idArray.map((id) => {
//     return genreMappings[id] !== undefined ? genreMappings[id] : id;
//   });

//   return mappedGenres;
// };

// export const convertMovieGenreId = (idArray) => {
//   // Defining the conditions and corresponding values
//   const genreMappings = {
//     10759: 12,
//     10759: 28,
//     10765: 878,
//     10765: 14,
//     10768: 10752,
//     10762: 10751,
//   };
//   // 36: null,
//   // 27: null,
//   // 10402: null,
//   // 10749: null,
//   // 10770: null,
//   // 53: null,
//   // 10751: null,

//   // Mapping the genre IDs to new values based on conditions
//   const mappedGenres = idArray.map((id) => {
//     return genreMappings[id] !== undefined ? genreMappings[id] : id;
//   });

//   return mappedGenres;
// };

// const genreMappings = {
//   // Matching Genres
//   16: 16, // Animation
//   35: 35, // Comedy
//   80: 80, // Crime
//   99: 99, // Documentary
//   18: 18, // Drama
//   10751: 10751, // Family
//   9648: 9648, // Mystery
//   37: 37, // Western

//   // Genres Exclusive to Movie
//   28: 28, // Action
//   12: 12, // Adventure
//   14: 14, // Fantasy
//   36: 36, // History
//   27: 27, // Horror
//   10402: 10402, // Music
//   10749: 10749, // Romance
//   878: 878, // Science Fiction
//   53: 53, // Thriller
//   10752: 10752, // War

//   // Genres Exclusive to TV
//   10759: 10759, // Action & Adventure
//   10762: 10762, // Kids
//   10763: 10763, // News
//   10764: 10764, // Reality
//   10765: 10765, // Sci-Fi & Fantasy
//   10766: 10766, // Soap
//   10767: 10767, // Talk
//   10768: 10768, // War & Politics
// };

export const convertMovieGenreId = (id) => {
  const genreMappings = {
    12: 10759,
    28: 10759,
    878: 10765,
    14: 10765,
    10752: 10768,
    36: "",
    27: "",
    10402: "",
    10749: "",
    // 10759: 12,
    // 10759: 28,
    10770: "",
    53: "",
    10751: "",
  };
  return genreMappings[id] !== undefined ? genreMappings[id] : id;
};

export const convertTvGenreId = (id) => {
  const genreMappings = {
    10759: 12,
    10759: 28,
    10765: 878,
    10765: 14,
    10768: 10752,
    10762: 10751,
  };

  return genreMappings[id] !== undefined ? genreMappings[id] : id;
};
