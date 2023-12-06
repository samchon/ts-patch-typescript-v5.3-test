"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typia_1 = __importDefault(require("typia"));
console.log((input => {
    return "object" === typeof input && null !== input && ("number" === typeof input.id && (Math.floor(input.id) === input.id && 0 <= input.id && input.id <= 4294967295 && 1 <= input.id) && ("string" === typeof input.name && 2 <= input.name.length));
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
                        description: "Primary Key.",
                        "x-typia-jsDocTags": [
                            {
                                name: "type",
                                text: [
                                    {
                                        text: "uint",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "1",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "integer",
                        minimum: 1,
                        "x-typia-typeTags": [
                            {
                                target: "number",
                                name: "Type<\"uint32\">",
                                kind: "type",
                                value: "uint32",
                                validate: "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                                exclusive: true
                            },
                            {
                                target: "number",
                                name: "Minimum<1>",
                                kind: "minimum",
                                value: 1,
                                validate: "1 <= $input",
                                exclusive: [
                                    "minimum",
                                    "exclusiveMinimum"
                                ]
                            }
                        ]
                    },
                    name: {
                        description: "Name of the member.",
                        "x-typia-jsDocTags": [
                            {
                                name: "minLength",
                                text: [
                                    {
                                        text: "2",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        minLength: 2,
                        "x-typia-typeTags": [
                            {
                                target: "string",
                                name: "MinLength<2>",
                                kind: "minLength",
                                value: 2,
                                validate: "2 <= $input.length",
                                exclusive: true
                            }
                        ]
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
