import typia from "typia";
import { IMember } from "@src/IMember";

console.log(
    typia.createIs<IMember>().toString(),
    JSON.stringify(typia.json.application<[IMember]>(), null, 2),
);