const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail(["o", 8, "f"]), "w");
assertEqual(tail(["w", 8, "w"]), "w");
assertEqual(tail(["w", 8, "w", 5]), 5);