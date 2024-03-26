const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" }
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Pop",
    "Groot": "R&B"
};

function generatePlaylist(array, preferences) {
    const results = {};
    for (const guardian in preferences) {
        const preferredGenre = preferences[guardian].toLowerCase();
        const playlist = array.filter(song => song.genre.toLowerCase() === preferredGenre);
        results[guardian] = playlist;
    }
    return results;
}

const playlists = generatePlaylist(songs, guardians);
const card = document.getElementById("playlists");

for (const guardian in playlists) {
    const playlist = playlists[guardian];
    const guardianElement = document.createElement("div");
    guardianElement.innerHTML = `<h2>${guardian}'s Playlist:</h2>`;
    const listElement = document.createElement("ul");

    playlist.forEach(song => {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.title} - ${song.artist}`;
        listElement.appendChild(listItem);
    });

    guardianElement.appendChild(listElement);
    card.appendChild(guardianElement);
}

