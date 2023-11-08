export interface IMember {
    id: number;
    name: string;
}
export namespace IMember {
    export function generate(): IMember {
        return {
            id: 0,
            name: "something",
        };
    }
}