import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-models-table',
  templateUrl: './models-table.component.html',
  styleUrls: ['./models-table.component.css']
})
export class ModelsTableComponent implements OnInit {

  models$
  constructor(private modelsService: ModelsService) { }

  ngOnInit() {
    this.models$ = this.modelsService.getAll()
  }

  onDelete(id) {
    this.modelsService.removeModel(id)
  }

}
