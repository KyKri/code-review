import { Component, OnInit } from '@angular/core';

import { IAlgorithm } from '../IAlgorithm';
import { algorithms } from '../Algorithms';

@Component({
  selector: 'app-algorithms-list',
  templateUrl: './algorithms-list.component.html',
  styleUrls: ['./algorithms-list.component.css']
})
export class AlgorithmsListComponent implements OnInit {
  algorithms: IAlgorithm[];

  constructor() { }

  ngOnInit() {
    this.algorithms = algorithms;
  }

}
