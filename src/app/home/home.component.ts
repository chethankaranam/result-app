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
  errorMessage: string = '';
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
    let roll = this.form.controls.rollNumber.value;
    if (roll.length > 10 || roll.length < 10) {
      this.errorMessage = 'Invalid Roll Number';
      this.displayErrorMessage = true;
      this.showProgressBar = false;
      return;
    }
    this._resultService
      .getScoresById(roll)
      .then((data: student) => {
        this.studentData = data.scores;
        this.recentGrades = this.studentData.slice(-1)[0];
        console.log(this.recentGrades, this.studentData);
        this.showResults = true;
      })
      .catch((err) => {
        this.errorMessage = "Sorry Can't Find Your Results";
        this.displayErrorMessage = true;
        this.showProgressBar = false;
      });
  }
}
