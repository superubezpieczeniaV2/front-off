import { Component, OnInit } from '@angular/core';
import { MethodUseService } from 'src/app/services/method-use.service';

@Component({
  selector: 'app-method-use',
  templateUrl: './method-use.component.html',
  styleUrls: ['./method-use.component.css']
})
export class MethodUseComponent implements OnInit {

  methodUse$

  constructor(private methodUseService: MethodUseService) { }

  ngOnInit() {
    this.methodUse$ = this.methodUseService.getAll()
  }

  onDelete(id) {
    this.methodUseService.removeMethodUse(id)
  }

}
