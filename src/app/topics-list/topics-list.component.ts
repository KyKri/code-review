import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  topics = [
    {
      name: 'Algorithms',
      url: 'algorithms'
    },
    {
      name: 'Concepts',
      url: ''
    },
    {
      name: 'Data Structures',
      url: ''
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
