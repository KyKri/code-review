import { Component, OnInit } from '@angular/core';

import { IAlgorithm } from '../IAlgorithm';
import { algorithms } from '../Algorithms';

import { AlgorithmsService } from '../algorithms.service';

@Component({
  selector: 'app-algorithms-list',
  templateUrl: './algorithms-list.component.html',
  styleUrls: ['./algorithms-list.component.css']
})
export class AlgorithmsListComponent implements OnInit {
  algorithms: IAlgorithm[];

  constructor(
    private algorithmsService: AlgorithmsService
  ) { }

  ngOnInit() {
    this.algorithmsService.getAlgorithms()
      .subscribe((data: IAlgorithm[]) => {
        this.algorithms = data;
        console.log("Data requested...");
        console.log(this.algorithms);
      });
  }

}
