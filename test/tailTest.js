const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail(["o", 8, "f"])[0], "w");
assertEqual(tail(["w", "w", "w"])[0], "w");
assertEqual(tail(["w", 8, "w", 5])[0], 8);