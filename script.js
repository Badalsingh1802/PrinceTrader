// function animateCounters() {
//   let clients = document.getElementById("clients");
//   let trades = document.getElementById("trades");
//   let accuracy = document.getElementById("accuracy");

//   let count1 = 0, count2 = 0, count3 = 0;
//   let interval = setInterval(() => {
//     if (count1 < 150) clients.textContent = count1++;
//     if (count2 < 1200) trades.textContent = count2++;
//     if (count3 < 95) accuracy.textContent = count3++ + "%";
//     if (count1 >= 150 && count2 >= 1200 && count3 >= 95) clearInterval(interval);
//   }, 20);
// }