document.addEventListener('DOMContentLoaded', function () {
  const hpElement = document.getElementById('hp');
  const goldElement = document.getElementById('gold');
  const logElement = document.getElementById('log');
  const exploreButton = document.getElementById('explore-btn');

  let hp = 100;
  let gold = 0;

  exploreButton.addEventListener('click', function () {
    const encounter = Math.random();
    if (encounter < 0.3) {
      // Find treasure
      const foundGold = Math.floor(Math.random() * 20) + 1;
      gold += foundGold;
      log(`You found ${foundGold} gold!`);
    } else if (encounter < 0.7) {
      // Fight monster
      const damage = Math.floor(Math.random() * 10) + 1;
      hp -= damage;
      if (hp <= 0) {
        log('You were defeated by a monster. Game over.');
        hp = 0;
        exploreButton.disabled = true;
      } else {
        log(`You fought a monster and took ${damage} damage.`);
      }
    } else {
      // Nothing happens
      log('You explored but found nothing.');
    }
    updateStats();
  });

  function updateStats() {
    hpElement.textContent = hp;
    goldElement.textContent = gold;
  }

  function log(message) {
    const entry = document.createElement('p');
    entry.textContent = message;
    logElement.appendChild(entry);
    logElement.scrollTop = logElement.scrollHeight;
  }
});