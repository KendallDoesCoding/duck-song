const songs = {
  "Duck Song 1": "8",
  "Duck Song 2": "200",
  "Duck Song 3": "356",
  }
const songsDOM = document.querySelector(".songs")
const embed = document.getElementById("embed")
            
Object.keys(songs).map(song_title => {
  const seconds = songs[song_title]
  const outerElem = document.createElement("p")
  const link = document.createElement("a")
  link.innerHTML = song_title
  link.style = "cursor: pointer"
  link.onclick = () => {
    embed.src = `https://www.youtube.com/embed/ECmpUJdgm-g?start=${seconds}&autoplay=1`
    console.log('The song you chose has loaded. Please tap play, to play the song.')
    console.log('If you dont know this song, we suggest you go to the lyrics page, dont worry... You can play the song from that page too :)')
  }
  outerElem.appendChild(link)
  songsDOM.appendChild(outerElem)
})
