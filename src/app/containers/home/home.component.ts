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
  @Output() studentData: Array<scores> = this._resultService.studentData;
  showResults: boolean = false;
  recentGrades: any;
  @Output() displayErrorMessage: boolean = false;
  @Output() errorMessage: string = '';

  @Output() recentGradesProperties: any = {
    className: 'recentGradesContainer',
    showTitle: false,
    titleContent: 'Your Recent Grades',
    classNames: {
      mainClass: 'recentGradesContainer',
      subClass: 'recentGrades',
      matCardContentClass: 'recentGrades',
      pointsClass: 'recentPoints',
      pointsLabelClass: 'recentPointsLabel',
    },
  };

  @Output() overallResultsProperties: any = {
    className: 'overallResults',
    showTitle: true,
    titleContent: 'Your Overall Grades',
    classNames: {
      mainClass: 'eachSemesterGrades',
      subClass: 'overAllGrades',
      matCardContentClass: 'semesterGrade',
      pointsClass: 'points',
      pointsLabelClass: 'pointsLabel',
    },
  };
  constructor(private _resultService: ResultService, private _route: Router) {}

  ngOnInit() {}
  getResult(roll: string) {
    this.displayErrorMessage = false;
    console.log(roll);
    if (roll.length > 10 || roll.length < 10) {
      this.errorMessage = 'Invalid Roll Number';
      this.displayErrorMessage = true;
      return;
    }
    this._resultService
      .getScoresById(roll.toUpperCase())
      .then((data: boolean) => {
        //this.studentData = data.scores;
        //this.recentGrades = this.studentData.slice(-1)[0];
        if (!data) {
          this.errorMessage = "Sorry Can't Find Your Results";
          this.displayErrorMessage = true;
        } else {
          console.log(data);
          this._route.navigate(['/result']);
        }
      })
      .catch((err) => {
        this.errorMessage = "Sorry Can't Find Your Results";
        this.displayErrorMessage = true;
      });
  }
}
