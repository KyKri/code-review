import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { algorithms } from '../Algorithms';

@Component({
  selector: 'app-algorithms-details',
  templateUrl: './algorithms-details.component.html',
  styleUrls: ['./algorithms-details.component.css']
})
export class AlgorithmsDetailsComponent implements OnInit {
  algorithm;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.algorithm = algorithms[+params.get('algorithmId')];
    });
  }

  goBack() {
    this.location.back();
  }

}
