import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // here Firebase API goes
  }

  signinUser(email: string, password: string) {
    // here Firebase API goes and redirecting:
    this.router.navigate(['/']);
    // as well as getting token - this.token = some token
  }

  logout() {
    // clear db from token ?
    // and:
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
