import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  public sendEmail(
    name: string,
    message: string,
    email: string
  ): Observable<EmailJSResponseStatus> {
    return from(
      emailjs.send(
        environment.SERVICE_ID,
        environment.TEMPLATE_ID,
        {
          from_name: name,
          to_name: 'Kinga',
          message: message,
          from_email: email,
          reply_to: email,
        },
        environment.PUBLIC_KEY
      )
    );
  }
}
