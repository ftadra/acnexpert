import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  public getPatient() {
    return this.http.get<Patient>(
      `${environment.api}/v1/userinfo/patient`
    );
  }

  public postPatient() {
    return this.http.get<Patient>(
      `${environment.api}/v1/userinfo/patient`
    );
  }

  public patchPatient() {
    return this.http.get<Patient>(
      `${environment.api}/v1/userinfo/patient`
    );
  }
}

