var playlist = {'artist name': []};

function updatePlaylist(object, string, title) {
  return Object.assign(object, {[string]:title})
}

function removeFromPlaylist(playlist, artistName) {
  playlist = delete playlist.artistName
  return playlist
}

var test = {'testname': 'title', 'phil':'song'}

console.log(removeFromPlaylist(test, 'testname'))
removeFromPlaylist(test, 'testname')