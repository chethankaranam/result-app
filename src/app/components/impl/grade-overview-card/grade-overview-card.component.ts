import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-overview-card',
  templateUrl: './grade-overview-card.component.html',
  styleUrls: ['./grade-overview-card.component.css'],
})
export class GradeOverviewCardComponent implements OnInit {
  @Input() grades: any;
  @Input() className!: string;
  @Input() showTitle!: boolean;
  @Input() classNames!: any;

  constructor() {}

  ngOnInit(): void {}
}
