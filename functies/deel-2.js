function hallo(docent) {
  if (docent === "Jordy") return "Hallo Jordy!";
  if (docent === "Mark") return "Hallo Mark!";
  if (docent === "John") return "Hallo John!";
  else {
    return "Hallo vreemdeling!";
  }
}

console.log(hallo("Mark"));
console.log(hallo("Jordy"));
console.log(hallo("John"));
console.log(hallo("Maarten"));
