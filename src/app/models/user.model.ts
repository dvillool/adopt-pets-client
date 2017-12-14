export class User {
  id: string;
  logo: string;
  name: string;
  description: string;
  password: string;
  email: string;
  adopt: boolean;
  donate: boolean;
  volunteers: boolean;
  address: {
    street: string;
    number: number;
    postalCode: number;
    telephone: string;
    city: string;
    province: string;
  };
  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
