import { GarrisonService } from './../../services/garrison.service';
import { Veteran } from './../../models/veteran';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veterans',
  templateUrl: './garrison.component.html',
  styleUrls: ['./garrison.component.css'],
})
export class GarrisonComponent implements OnInit {
  title: String = 'Garrison';
  veterans: Veteran[] = [];
  branch = ['Army', 'Airforce', 'Coast Guard', 'Marines', 'Navy'];
  selected: Veteran = null;
  newVeteran = new Veteran();
  editVeteran: Veteran = null;
  displayTable() {
    this.selected = null;
  }

  constructor(
    private garrisonService: GarrisonService,
    // private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadVeteran();
  }
  index() {
    this.garrisonService.index().subscribe(
      (good) => {
        this.veterans = good;
      },
      (bad) => {
        console.error(bad);
      }
    );
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

  getNumOfVets = function () {
    return this.veterans.length;
  };

  displayVeteran(veteran) {
    this.selected = veteran;
  }
  addVeteran(addVeteranForm: NgForm) {
    console.log(addVeteranForm.value);
    this.veterans.push(this.newVeteran);
    this.garrisonService.create(addVeteranForm.value).subscribe(
      (data) => {
        this.loadVeteran();
      },
      (err) => {
        console.error(err);
      }
    );
    this.garrisonService.index().subscribe(
      (data) => {
        this.veterans = data;
      },
      (err) => {
        console.error(err);
      }
    );
    this.newVeteran = new Veteran();
    addVeteranForm.reset();
    console.log(addVeteranForm.value);
    console.log('veteran added!!+++++****');
  }

  updateVeteran(veteran: Veteran) {
    // if (veteran.completed) {
    //   todo.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
    // } else {
    //   todo.completeDate = '';
    // }
    console.log(veteran);

    this.garrisonService.update(veteran).subscribe(
      (good) => {
        this.index();
        if (this.selected != null) {
          this.selected = Object.assign({}, veteran);
        }
      },
      (bad) => {
        console.error(bad);
      }
    );
    this.editVeteran = null;
  }

  setEditVeteran() {
    this.editVeteran = Object.assign({}, this.selected);
  }

  deleteVeteran(id) {
    this.garrisonService.destroy(id).subscribe(
      (good) => {
        this.index();
      },
      (bad) => {
        console.error(bad);
      }
    );
    this.garrisonService.index();
  }
}
