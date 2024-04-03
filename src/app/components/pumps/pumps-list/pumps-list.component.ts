import { Component, OnInit } from '@angular/core';
import { Pump } from '../../../models/pump.model';
import { PumpsService } from '../../../services/pumps.service';

@Component({
  selector: 'app-pumps-list',
  templateUrl: './pumps-list.component.html',
  styleUrl: './pumps-list.component.css'
})
export class PumpsListComponent implements OnInit{

  pumps: Pump[] = [];

  constructor(private pumpsService: PumpsService) {}

  ngOnInit(): void {
    this.pumpsService.getAllPumps()
    .subscribe({
      next: (pumps) => {
        this.pumps = pumps;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
