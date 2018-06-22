import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  template: 
  `<h2>
  Inside Sub Component !
  </h2>`,
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
