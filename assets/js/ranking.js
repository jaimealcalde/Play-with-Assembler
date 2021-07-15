/**
 *  Ranking
 */

// Everytime a player finishes his game, his info will be save to the list
function addUserToRanking() {
  users.push(user);
}

var usersList;
function sortPlayers() {
  usersList = users.sort((a, b) => {
    if (a.time != b.time && a.movements != b.movements) {
      return a.time - b.time;
    } else if (a.time === b.time && a.movements != b.movements) {
      return a.movements - b.movements;
    }
  });
}

// Show ranking of players
function showRanking() {
  if (usersList.length != 0) {
    var html = `
    <table class="table">
      <tr class="table__row">
        <th class="table__header">Name</th>
        <th class="table__header">Time</th>
        <th class="table__header">Attempts</th>
      </tr>`;

    for (var i = 0; i < usersList.length; i++) {
      html += `<tr class="table__row">
        <td class="table__cell">${usersList[i].username}</td>
        <td class="table__cell">${usersList[i].time}</td>
        <td class="table__cell">${usersList[i].movements}</td>
      </tr>`;
    }

    html += `</table>`;

    containerRanking.innerHTML = html;
  }
}