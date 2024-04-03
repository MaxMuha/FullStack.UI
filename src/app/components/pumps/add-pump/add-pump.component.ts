import { Component } from '@angular/core';
import { Pump } from '../../../models/pump.model';
import { PumpsService } from '../../../services/pumps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pump',
  templateUrl: './add-pump.component.html',
  styleUrl: './add-pump.component.css'
})
export class AddPumpComponent {

  addPumpRequest: Pump = {
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
  }
  constructor(private pumpService: PumpsService, private router: Router){

  }
  addPump(){
    this.pumpService.addPump(this.addPumpRequest)
    .subscribe({
      next: (pump) => {
        this.router.navigate(['pumps']);
      }
    });
  }
}
