export class User {
     id: string;
     username: string;
     name: string;
     surname: string;
     password: string;
     email: string;
     constructor(obj: Object = {}) {
       Object.assign(this, obj);
     }
   }
