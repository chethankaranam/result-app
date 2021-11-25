import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { student, scores } from '../../models/studentInfo';
import { ResultService } from '../../result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rollNumber: string = '';
  @Output() studentData: Array<scores> = [];
  showResults: boolean = false;
  @Output() recentGrades: any;
  @Output() displayErrorMessage: boolean = false;
  @Output() errorMessage: string = '';

  @Output() recentGradesProperties: any = {
    className: 'recentGradesContainer',
    showTitle: false,
    classNames: {
      mainClass: 'recentGradesContainer',
      subClass: 'recentGrades',
    },
  };

  @Output() overallResultsProperties: any = {
    className: 'overallResults',
    showTitle: true,
    classNames: {
      mainClass: 'eachSemesterGrades',
      subClass: 'overAllGrades',
    },
  };
  constructor(private _resultService: ResultService) {}

  ngOnInit() {}
  getResult(roll: string) {
    this.displayErrorMessage = false;
    if (roll.length > 10 || roll.length < 10) {
      this.errorMessage = 'Invalid Roll Number';
      this.displayErrorMessage = true;
      return;
    }
    this._resultService
      .getScoresById(roll)
      .then((data: student) => {
        this.studentData = data.scores;
        this.recentGrades = [this.studentData.slice(-1)[0]];
        console.log(this.recentGrades, this.studentData);
        this.showResults = true;
      })
      .catch((err) => {
        this.errorMessage = "Sorry Can't Find Your Results";
        this.displayErrorMessage = true;
      });
  }
}
