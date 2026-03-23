const bcrypt = require("bcryptjs");

async function generateHashes() {
  const password1 = "Aartirana1606@";   // 👈 Admin 1 password
  const password2 = "NitinBisht8975@";   // 👈 Admin 2 password

  const hash1 = await bcrypt.hash(password1, 10);
  const hash2 = await bcrypt.hash(password2, 10);

  console.log("Admin 1 Hash:", hash1);
  console.log("Admin 2 Hash:", hash2);
}

generateHashes();