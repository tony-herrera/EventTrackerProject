import { GarrisonService } from './../../services/garrison.service';
import { Veteran } from './../../models/veteran';
import { Component, OnInit } from '@angular/core';
import '@angular/compiler';

@Component({
  selector: 'app-veteran-list',
  templateUrl: './garrison.component.html',
  styleUrls: ['./garrison.component.css'],
})
export class GarrisonComponent implements OnInit {
  veterans: Veteran[] = [];
  selected: Veteran = null;

  constructor(private garrisonService: GarrisonService) {}

  ngOnInit(): void {
    this.loadVeteran();
  }

  loadVeteran(): void {
    this.garrisonService.index().subscribe(
      (data) => {
        this.veterans = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getNumOfVets = function() {
    return this.veterans.length;
  }
}
