import { Component, OnInit } from '@angular/core';
import { TypeOwnerService } from 'src/app/services/type-owner.service';

@Component({
  selector: 'app-type-owner-table',
  templateUrl: './type-owner-table.component.html',
  styleUrls: ['./type-owner-table.component.css']
})
export class TypeOwnerTableComponent implements OnInit {

  typeOwners$

  constructor(private typeOwnerService: TypeOwnerService) { }

  ngOnInit() {
    this.typeOwners$ = this.typeOwnerService.getAll()
  }

  onDelete(id) {
    this.typeOwnerService.removeTypeOwner(id)
  }

}
