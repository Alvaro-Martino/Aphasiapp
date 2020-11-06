export class User {

    constructor(_id='', name ='', email='', pass=''){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.pass= pass;

    };

    _id: string;
    name: string;
    email: string;
    pass: string;
}
