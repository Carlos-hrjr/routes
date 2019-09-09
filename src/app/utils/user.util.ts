import { User } from '../models/user.model';

export class UserUtil {

    static save(user: User) {
        let data = JSON.stringify(user);
        localStorage.setItem('app.user', data);
    }

    static getUser(): User {
        const data = localStorage.getItem('app.user');
        if (data)
            return JSON.parse(data);
        else
            return null;
    }

    static removeUser() {
        localStorage.removeItem('app.user');
    }

    public static isInRole(role: string): boolean {
        const user = this.getUser();

        if (!user)
            return false;

        if (!user.roles || user.roles.length == 0)
            return false;

        return user.roles.includes(role);
    }

}