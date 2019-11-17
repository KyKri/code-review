import { Component, OnInit } from '@angular/core';

import { IAlgorithm } from '../IAlgorithm';
import { AlgorithmsService } from '../algorithms.service';

@Component({
  selector: 'app-algorithm-new',
  templateUrl: './algorithm-new.component.html',
  styleUrls: ['./algorithm-new.component.css']
})
export class AlgorithmNewComponent implements OnInit {
  algorithm: IAlgorithm;

  constructor(
    private algorithmsService: AlgorithmsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
