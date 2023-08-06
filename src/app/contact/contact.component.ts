import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { MessageService } from 'primeng/api';
import { Subscription, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public form!: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(5000),
      ]),
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  public sendEmail(): void {
    this.subscription = this.contactService
      .sendEmail(
        this.form.get('name')?.value,
        this.form.get('message')?.value,
        this.form.get('email')?.value
      )
      .pipe(
        catchError((error) => {
          this.messageService.add({
            key: 'toast',
            severity: 'error',
            summary: 'Error',
            detail: 'An error occured, your message was not sent',
          });
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.form.reset();
        this.messageService.add({
          key: 'toast',
          severity: 'success',
          summary: 'Success',
          detail: 'Message sent!',
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
