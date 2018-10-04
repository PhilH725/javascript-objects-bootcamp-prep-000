var playlist = {'artist name': []};

function updatePlaylist(object, string, title) {
  Object.assign(object, {string:title})
  return object
}