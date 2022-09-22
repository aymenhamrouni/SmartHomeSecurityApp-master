import { map, catchError } from "rxjs/operators";
import { environment } from "./environment";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { ErrorService } from "./error";
import { skip } from "rxjs/operator/skip";

@Injectable()
export class LoginService extends ErrorService {
  headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*"
  });
  options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) {
    super();
  }

  ValidateUser(IUser): Observable<any> {
    return this._http
      .post(environment.endpoint + "/auth", IUser)
      .pipe(
        map((response: Response) => response.json()),
        catchError(this.handleError)
      )
      .do(response => {});
  }
  RefreshToken(): Observable<any> {
    var headers = new Headers({
      authorization:
        "Bearer " +
        JSON.parse(localStorage.getItem("userData")).accessToken.toString()
    });
    var options = new RequestOptions({ headers: headers });

    return this._http
      .post(
        environment.endpoint + "/auth/refresh",
        {
          refresh_token: JSON.parse(
            localStorage.getItem("userData")
          ).refreshToken.toString()
        },
        options
      )
      .pipe(
        map((response: Response) => {
          let newData = JSON.parse(localStorage.getItem("userData"));
          newData.accessToken = response.json().access_token;
          localStorage.setItem("userData", JSON.stringify(newData));
        }),
        catchError(this.handleError)
      )
      .do(response => {});
  }

  RegisterUser(IUser): Observable<any> {
    return this._http
      .post(environment.endpoint + "/users", IUser)
      .pipe(
        map((response: Response) => response.json()),
        catchError(this.handleError)
      )
      .do(response => {});
  }
  AddUser(IUser): Observable<any> {
    var headers = new Headers({
      authorization:
        "Bearer " +
        JSON.parse(localStorage.getItem("userData")).accessToken.toString()
    });
    var options = new RequestOptions({ headers: headers });
    return this._http
      .post(environment.endpoint + "/users/add", IUser, options)
      .pipe(
        map((response: Response) => response.json()),
        catchError(this.handleError)
      )
      .do(response => {});
  }

  CheckUser(): Observable<any> {
    var headers = new Headers({
      authorization:
        "Bearer " +
        JSON.parse(localStorage.getItem("userData")).accessToken.toString()
    });
    var options = new RequestOptions({ headers: headers });

    return this._http
      .post(environment.endpoint + "/users/check", {}, options)
      .pipe(map((response: Response) => response.json()));
  }

  RecoverPassword(email): Observable<any> {
    return this._http
      .get(
        environment.endpoint + "/users/recoverpassword/" + email,
        this.options
      )
      .pipe(
        map((response: Response) => response),
        catchError(this.handleError)
      )
      .do(response => {});
  }
}
