
document.querySelector(".music").innerHTML += `
  <p>Musik yang saya sukai saat ini:</p>
  <ul style='list-style: none; padding: 0;'>
    <li>1. Lo-Fi Beats</li>
    <li>2. Chillstep - Aurora</li>
    <li>3. Indie Pop - Dreamscape</li>
  </ul>
  <p>Silakan dengarkan:</p>
  <audio controls>
    <source src="assets/musik/lagu1.mp3" type="audio/mp3">
    Browser kamu tidak mendukung audio.
  </audio>
`;
