import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student, scores } from '../models/studentInfo';
import { ResultService } from '../result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rollNumber: string = '';
  studentData: Array<scores> = [];
  showProgressBar: boolean = false;
  showResults: boolean = false;
  recentGrades: any;
  displayErrorMessage: boolean = false;
  form!: FormGroup;
  constructor(
    private _resultService: ResultService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      rollNumber: [null, [Validators.required]],
    });
  }
  getResult() {
    this.displayErrorMessage = false;
    this.showProgressBar = true;
    this._resultService
      .getScoresById(this.form.controls.rollNumber.value)
      .then((data: Array<student>) => {
        this.studentData = data[0].scores;
        this.recentGrades = this.studentData.slice(-1)[0];
        console.log(this.recentGrades, this.studentData);
        this.showResults = true;
      })
      .catch((err) => {
        this.displayErrorMessage = true;
        this.showProgressBar = false;
      });
  }
}
