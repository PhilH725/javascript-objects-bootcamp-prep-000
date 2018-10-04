var playlist = {'artist name': []};

function updatePlaylist(object, string, title) {
  object.assign({}, {string:title})
  return object
}