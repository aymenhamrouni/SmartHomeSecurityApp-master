import { map, catchError } from "rxjs/operators";
import { environment } from "./environment";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { ErrorService } from "./error";
@Injectable()
export class ModifyService extends ErrorService {
  headers = new Headers({
    authorization:
      "Bearer " +
      JSON.parse(localStorage.getItem("userData")).accessToken.toString()
  });
  options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) {
    super();
  }

  PostValue(IUser, token): Observable<any> {
    this.headers = new Headers({ authorization: "Bearer " + token.toString() });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .post(environment.endpoint + "/values", IUser, this.options)
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)
      )
      .do(response => {});
  }
}
