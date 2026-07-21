import { Service } from '@angular/core';

@Service()
export class Authentication {
    constructor(){}

    authenticate(username: string, password: string) {
        if(username == 'Pramod' && password === 'Pramod') {
            return true;
        }
        return false;
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        return !(user == null)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }
}
