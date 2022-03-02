import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() errorMessage!: string;
  @Input() displayErrorMessage!: boolean;
  @Output() formSubmitEvent: EventEmitter<string> = new EventEmitter<string>();
  showProgressBar: boolean = false;

  form!: FormGroup;
  buttonText: string = 'GET RESULT';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      rollNumber: [null, [Validators.required]],
    });
  }

  ngOnChanges() {
    if (this.displayErrorMessage) {
      this.showProgressBar = false;
    }
  }

  formOnSubmit() {
    this.showProgressBar = true;
    this.formSubmitEvent.emit(this.form.controls.rollNumber.value);
  }
}
