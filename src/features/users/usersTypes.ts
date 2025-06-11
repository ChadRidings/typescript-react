export interface UserType {
    id: string;
    name: string;
    phone: string;
    email: string;
    website: string;
    address: {
        city: string;
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    username: string;
    age: number;
    isMarried: boolean;
}
