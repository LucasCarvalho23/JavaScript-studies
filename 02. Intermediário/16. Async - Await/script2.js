function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

// Canceling the submit default
let lyricsForm = document.querySelector ("#lyricsForm")
lyricsForm.addEventListener('submit', el => {
    el.preventDefault()
    doSubmit()
})

// New function submit
async function doSubmit() {
    let artist = document.querySelector ("#artist")
    let song = document.querySelector ("#song")
    let result = document.querySelector ("#result")

    const lyricsResponse = await findLyrics(artist.value, song.value)
    const data = await lyricsResponse.json()
    result.innerHTML = data.lyrics 
}