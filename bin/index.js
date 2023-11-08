"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typia_1 = __importDefault(require("typia"));
const IMember_1 = require("./IMember");
console.log((input => {
    return "object" === typeof input && null !== input && ("number" === typeof input.id && "string" === typeof input.name);
})(IMember_1.IMember.generate()));
