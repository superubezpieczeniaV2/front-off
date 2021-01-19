import { Component, OnInit } from '@angular/core';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css']
})
export class MarksTableComponent implements OnInit {

  marks$

  constructor(private marksService: MarksService) { }

  ngOnInit() {
    this.marks$ = this.marksService.getAll()
  }

  onDelete(id) {
    this.marksService.removeMark(id)
  }
}
