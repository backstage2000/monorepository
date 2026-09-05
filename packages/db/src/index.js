const { log } = require("@mono/shared");

const users = [{ id: 1, name: "tolik" }];

function findUser(id) {
  log(`db: looking for user ${id}`);
  return users.find((u) => u.id === id) ?? null;
}

module.exports = { findUser };
