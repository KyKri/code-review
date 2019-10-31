import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { algorithms } from '../Algorithms';

@Component({
  selector: 'app-algorithms-details',
  templateUrl: './algorithms-details.component.html',
  styleUrls: ['./algorithms-details.component.css']
})
export class AlgorithmsDetailsComponent implements OnInit {
  algorithm;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.algorithm = algorithms[+params.get('algorithmId')];
    });
  }

}
