import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-card',
  templateUrl: './grade-card.component.html',
  styleUrls: ['./grade-card.component.css'],
})
export class GradeCardComponent implements OnInit {
  @Input() item: any;
  @Input() semNumber: any;
  @Input() showTitle!: boolean;
  @Input() classNames: any;

  constructor() {}

  ngOnInit(): void {}
}
