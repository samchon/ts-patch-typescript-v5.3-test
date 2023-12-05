export interface IMember {
    /**
     * Primary Key.
     * 
     * @type uint
     * @minimum 1
     */
    id: number;

    /**
     * Name of the member.
     * 
     * @minLength 2
     */
    name: string;
}