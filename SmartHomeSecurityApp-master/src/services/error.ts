import { environment } from "./environment";
import { Observable } from "rxjs";
import { Response } from "@angular/http";

export abstract class ErrorService {
  constructor() {}

  urlAPI: string = environment.endpoint;

  protected handleError(error: Response) {
    alert(error.json().error || "Cannot Establish Connection with Server");
    return Observable.throw(
      error.json().error || "Cannot Establish Connection with Server"
    );
  }
}
