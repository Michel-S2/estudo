"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var User = zod_1.z.object({
    age: zod_1.z.number().int()
});
var result = User.parse({
    age: 19.2
});
console.log(result);
