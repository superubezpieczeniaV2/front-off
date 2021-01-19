import { Component, OnInit } from '@angular/core';
import { EnginePowerService } from 'src/app/services/engine-power.service';

@Component({
  selector: 'app-engine-power-table',
  templateUrl: './engine-power-table.component.html',
  styleUrls: ['./engine-power-table.component.css']
})
export class EnginePowerTableComponent implements OnInit {

  enginePowers$

  constructor(private enginePowerService: EnginePowerService) { }

  ngOnInit() {
    this.enginePowers$ = this.enginePowerService.getAll()
  }

  onDelete(id) {
    this.enginePowerService.removeEnginePower(id)
  }

}
