import { Component, OnInit } from '@angular/core';

import { lastworks } from '../lastworks';

@Component({
  selector: 'app-last-works',
  templateUrl: './last-works.component.html',
  styleUrls: ['./last-works.component.css']
})
export class LastWorksComponent implements OnInit {
  lastworks = lastworks;

  constructor() { }

  ngOnInit(): void {
  }

}
