import { student } from './models/studentInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  totalSemesters: number = 5;
  constructor(private http: HttpClient) {}
  async getScoresById(roll: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://results-angular.herokuapp.com/results/' + roll.toUpperCase()
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
