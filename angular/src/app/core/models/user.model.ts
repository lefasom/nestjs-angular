export class IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
    }
}