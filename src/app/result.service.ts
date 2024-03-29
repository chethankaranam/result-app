import { student, scores } from './models/studentInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StringLiteral } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  totalSemesters: number = 5;
  roll = '';
  studentData: Array<scores> = [];
  recentGrades: any;

  constructor(private http: HttpClient) {}
  async getScoresById(roll: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://results-angular.herokuapp.com/results/' + roll.toUpperCase()
        )
        .subscribe(
          (data) => {
            let score = <student>data;
            console.log(score);
            if (score['scores'].length != 0) {
              this.studentData = score['scores'];
              this.recentGrades = this.studentData.slice(-1)[0];
              resolve(true);
            } else {
              resolve(false);
            }
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
