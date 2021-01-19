import { Component, OnInit } from '@angular/core';
import { ParkingPlaceService } from 'src/app/services/parking-place.service';

@Component({
  selector: 'app-parking-place',
  templateUrl: './parking-place.component.html',
  styleUrls: ['./parking-place.component.css']
})
export class ParkingPlaceComponent implements OnInit {

  parkingplaces$

  constructor(private parkingPlaceService: ParkingPlaceService) { }

  ngOnInit() {
    this.parkingplaces$ = this.parkingPlaceService.getAll()
  }

  onDelete(id) {
    this.parkingPlaceService.removeParkingPlace(id)
  }

}
