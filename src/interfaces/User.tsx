import { IUser } from "./IUser";

export class User implements IUser{
    id: number;
    firstname: string;
    lastname: string;

    constructor(id:number, fistname: string, lastname:string){
        this.id =id;
        this.firstname= fistname;
        this.lastname = lastname;
    }
}