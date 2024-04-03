import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PumpsService } from '../../../services/pumps.service';
import { Pump } from '../../../models/pump.model';
import { response } from 'express';

@Component({
  selector: 'app-edit-pump',
  templateUrl: './edit-pump.component.html',
  styleUrl: './edit-pump.component.css'
})
export class EditPumpComponent implements OnInit {

  pumpDetails: Pump = {
    id: '',
    name: '',
    maxPressure: 0,
    liquidTemperature: '',
    weight: 0,
    engine: {
      id: '',
      name: '',
      power: 0,
      amperage: 0,
      ratedSpeed: 0,
      description: '',
      price: 0,
    },
    housingMaterial: {
      id: '',
      name: '',
      description: ''
    },
    lmpellerMaterial: {
      id: '',
      name: '',
      description: ''
    },
    description: '',
    image: '',
    price: 0
  };

  constructor(private route: ActivatedRoute, private pumpService: PumpsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.pumpService.getPump(id)
          .subscribe({
            next: (response) => {
              this.pumpDetails = response;
              // this.pumpDetails.id = response.id
              // this.pumpDetails.name = response.name
              // this.pumpDetails.maxPressure = response.maxPressure
              // this.pumpDetails.liquidTemperature = response.liquidTemperature
              // this.pumpDetails.weight = response.weight
              // this.pumpDetails.engine = response.engine
              // this.pumpDetails.housingMaterial = response.housingMaterial
              // this.pumpDetails.lmpellerMaterial = response.lmpellerMaterial
              // this.pumpDetails.description = response.description
              // this.pumpDetails.image = response.image
              // this.pumpDetails.price = response.price
            }
          });
        }
      }
    })
  }

  updatePump(){
    this.pumpService.updatePump(this.pumpDetails.id, this.pumpDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['pumps']);
      }
    })
  }

  deletePump(id: string){
    this.pumpService.deletePump(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['pumps']);
      }
    });
  }
}
