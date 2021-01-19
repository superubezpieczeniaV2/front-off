import { Component, OnInit } from '@angular/core';
import { EnginePowerService } from 'src/app/services/engine-power.service';

@Component({
  selector: 'app-engine-power',
  templateUrl: './engine-power.component.html',
  styleUrls: ['./engine-power.component.css']
})
export class EnginePowerComponent implements OnInit {
  enginePowers$

  constructor(private EnginePowerService: EnginePowerService) { }

  ngOnInit = () => {
    this.enginePowers$ = this.EnginePowerService.getAll()
  }

}
