var playlist = {'artist name': []};

function updatePlaylist(object, string, title) {
  return Object.assign(object, {[string]:title})
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName
}

var test = {'testname': 'title', 'phil':'song'}

console.log(removeFromPlaylist(test, 'testname'))