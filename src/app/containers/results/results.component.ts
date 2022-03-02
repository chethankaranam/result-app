import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { student, scores } from '../../models/studentInfo';
import { ResultService } from '../../result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  rollNumber: string = '';
  buttonText: string = 'BACK TO HOME';
  @Output() studentData: Array<scores> = [];
  @Output() recentGrades: any;

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
    className: 'overAllResults',
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

  toHome() {
    this._route.navigate(['/']);
  }

  constructor(private _resultService: ResultService, private _route: Router) {}

  ngOnInit(): void {
    this.studentData = this._resultService.studentData;
    this.recentGrades = this._resultService.recentGrades;
  }
}
