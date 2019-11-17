import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IAlgorithm } from '../IAlgorithm';
import { AlgorithmsService } from '../algorithms.service';

@Component({
  selector: 'app-algorithm-new',
  templateUrl: './algorithm-new.component.html',
  styleUrls: ['./algorithm-new.component.css']
})
export class AlgorithmNewComponent implements OnInit {
  algorithm: IAlgorithm;
  newAlgorithmForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    best: new FormControl(''),
    average: new FormControl(''),
    worst: new FormControl(''),
    spaceComplexity: new FormControl('')
  });

  constructor(
    private algorithmsService: AlgorithmsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.algorithm = {
      name: this.newAlgorithmForm.get('name').value,
      description: this.newAlgorithmForm.get('description').value,
      runtimeComplexities: {
        best: this.newAlgorithmForm.get('best').value,
        average: this.newAlgorithmForm.get('average').value,
        worst: this.newAlgorithmForm.get('worst').value,
      },
      spaceComplexity: this.newAlgorithmForm.get('spaceComplexity').value,
    };

    this.algorithmsService.addAlgorithm(this.algorithm).subscribe();
  }
}
