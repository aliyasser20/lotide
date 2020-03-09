const assertEqual = require("../assertEqual");
const head = require("../head");


assertEqual(head(["o", 8, "f"]), "w");
assertEqual(head(["w", 8, "f"]), "w");