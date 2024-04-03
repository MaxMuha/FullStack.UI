import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Pump } from '../models/pump.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllPumps(): Observable<Pump[]> {
    return this.http.get<Pump[]>(this.baseApiUrl + '/api/Pump');
  }

  addPump(addPumpRequest: Pump): Observable<Pump> {
    addPumpRequest.id = '00000000-0000-0000-0000-000000000000';
    addPumpRequest.engine.id = '00000000-0000-0000-0000-000000000000';
    addPumpRequest.housingMaterial.id = '00000000-0000-0000-0000-000000000000';
    addPumpRequest.lmpellerMaterial.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Pump>(this.baseApiUrl + '/api/Pump', addPumpRequest);
  }

  getPump(id: string): Observable<Pump> {
    return this.http.get<Pump>(this.baseApiUrl + '/api/Pump/' + id);
  }

  updatePump(id: string, updatePumpRequest: Pump): Observable<Pump>{
    return this.http.put<Pump>(this.baseApiUrl + '/api/Pump/' + id, updatePumpRequest);
  }

  deletePump(id: string): Observable<Pump>{
    return this.http.delete<Pump>(this.baseApiUrl + '/api/Pump/' + id);
  }
}
