export const updateTitle = title => {
  return {
    type: "UPDATE_TITLE",
    title: title
  };
};

export const updateArtist = artist => {
  return {
    type: "UPDATE_ARTIST",
    artist: artist
  };
};
