import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IAlgorithm } from '../IAlgorithm';
import { AlgorithmsService } from '../algorithms.service';

@Component({
  selector: 'app-algorithms-details',
  templateUrl: './algorithms-details.component.html',
  styleUrls: ['./algorithms-details.component.css']
})
export class AlgorithmsDetailsComponent implements OnInit {
  algorithm: IAlgorithm;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private algorithmsService: AlgorithmsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.algorithmsService.getAlgorithmById(params.get('algorithmId'))
        .subscribe((data: IAlgorithm) => {
          this.algorithm = data;
        });
    });
  }

  goBack() {
    this.location.back();
  }

}
