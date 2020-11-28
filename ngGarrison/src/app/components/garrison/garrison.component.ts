import { Veteran } from './../../models/veteran';
import { Component, OnInit } from '@angular/core';
import { GarrisonService } from '../../services/garrison.service';

@Component({
  selector: 'app-garrison',
  templateUrl: './garrison.component.html',
  styleUrls: ['./garrison.component.css'],
})
export class GarrisonComponent implements OnInit {
  addVeteran: Veteran = new Veteran();
  editVeteran: Veteran;
  display = true;
  veterans: Veteran[] = [];
  firstName = '';
  displayTable() {
    this.selected = null;
  }

  getNumOfVeterans(): number {
    console.log(this.getNumOfVeterans());

    return this.veterans.length;
  }

  displayVeterans(veteran) {
    this.selected = veteran;
  }

  newVeteran() {
    this.garrisonService.create(this.addVeteran);
    // this.veteran = this.garrisonService.index();
    this.addVeteran = new Veteran();
  }

  setEditVeteran() {
    this.editVeteran = Object.assign({}, this.selected);
  }

  updateVeteran(Veteran) {
    this.garrisonService.updateVeteran(Veteran);
    this.veterans = this.garrisonService.index();
    this.editVeteran = null;
    this.selected = null;
  }

  deleteVeteran(vetId: number) {
    this.garrisonService.destroy(vetId);
    this.veterans = this.garrisonService.index();
  }

  // onSubmit() {
  //   this.garrisonService.create(this.newVeteran);
  //   this.veterans.push(this.newVeteran);
  //   // this.veterans = this.garrisonService.index();
  //   this.newVeteran = new Veteran();
  // }

  // newVeteran: Veteran = new Veteran();
  // Veterans = [];

  selected: Veteran = null;

  constructor(private garrisonService: GarrisonService) {}

  ngOnInit(): void {
    this.loadVeterans();
    this.veterans = this.garrisonService.index();
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
