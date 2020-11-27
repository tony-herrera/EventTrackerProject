import { Veteran } from '../../models/veteran';
import { Component, OnInit } from '@angular/core';
import { GarrisonService } from '../../services/garrison.service';

@Component({
  selector: 'app-garrison',
  templateUrl: './garrison.component.html',
  styleUrls: ['./garrison.component.css'],
})
export class GarrisonComponent implements OnInit {
  display = true;
  veterans: Veteran[] = [];
  title = '';

  onSubmit() {
    this.veterans.push(this.newVeteran);
    this.garrisonService.create(this.newVeteran);
    // this.veterans = this.garrisonService.index();
    this.newVeteran = new Veteran();
  }

  newVeteran: Veteran = new Veteran();
  Veterans = [];

  selected: Veteran = null;

  constructor(private garrisonService: GarrisonService) {}

  ngOnInit() {
    this.loadVeterans();
  }

  getNumberOfVeterans(): number {
    return this.veterans.length;
  }

  loadVeterans(): void {
    this.garrisonService.index().subscribe(
      (data) => {
        this.veterans = data;
        console.log('GarrisonComponent.loadVeterans(): veterans retrieved');
      },
      (err) => {
        console.error('GarrisonComponent.loadVeterans(): retrieve failed');
        console.log(err);
      }
    );
  }
}
