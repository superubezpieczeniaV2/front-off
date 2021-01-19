import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navs',
  templateUrl: './admin-navs.component.html',
  styleUrls: ['./admin-navs.component.css']
})
export class AdminNavsComponent implements OnInit {
  @Input()
  adminNavs

  constructor() { }

  ngOnInit(): void {
  }

}
