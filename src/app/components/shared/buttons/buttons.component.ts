import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Output() onClick: EventEmitter<null> = new EventEmitter<null>();
  @Input() disabled!: boolean;

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.onClick.emit();
  }
}
