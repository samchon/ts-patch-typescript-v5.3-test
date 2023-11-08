import typia from "typia";
import { IMember } from "@src/IMember";

console.log(
    typia.is<IMember>(IMember.generate()),
);