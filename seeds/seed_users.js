const bcrypt = require("bcrypt");
const moment = require("moment");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 6,
      name: "David Davis",
      email: "david.davis@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 7,
      name: "Emily Thompson",
      email: "emily.thompson@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      id: 8,
      name: "Frank Miller",
      email: "frank.miller@example.com",
      password: await bcrypt.hash("password123", 10),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
  ]);
};
