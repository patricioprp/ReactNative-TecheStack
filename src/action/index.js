export const selectedLibrary = libraryId => {
  return {
    type: "selected_library",
    payload: libraryId
  };
};
