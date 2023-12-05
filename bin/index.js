"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typia_1 = __importDefault(require("typia"));
console.log((input => {
    return "object" === typeof input && null !== input && ("number" === typeof input.id && "string" === typeof input.name);
}).toString(), JSON.stringify({
    schemas: [
        {
            $ref: "#/components/schemas/IMember"
        }
    ],
    components: {
        schemas: {
            IMember: {
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number"
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string"
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name"
                ],
                "x-typia-jsDocTags": []
            }
        }
    },
    purpose: "swagger"
}, null, 2));
