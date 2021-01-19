import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-func-item',
  templateUrl: './admin-func-item.component.html',
  styleUrls: ['./admin-func-item.component.css']
})
export class AdminFuncItemComponent implements OnInit {
  @Input()
  public adminFunc

  constructor() { }

  ngOnInit(): void {
  }

}
