import { BaseRequestOptions } from '@angular/http';
import { TOKEN_NAME } from './user.service';


const HEADER_KEY_AUTH: string = 'Authorization';
const PREFIX_AUTH: string = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    const token = localStorage.getItem(TOKEN_NAME);
    if(token) {
      console.log(this.headers, token);
      this.headers.append(HEADER_KEY_AUTH, `${PREFIX_AUTH} ${token}`);
    }
  }
}
