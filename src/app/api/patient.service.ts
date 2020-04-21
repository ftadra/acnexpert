import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Patient } from '../interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPatientService {
  constructor(private http: HttpClient) { }

  public getPatient() {
    return this.http.get<Patient>(
      `${environment.api}/v1/userinfo/patient`
    );
  }

  public postPatient(data: Patient) {
    return this.http.post<Patient>(
      `${environment.api}/v1/userinfo/patient`,
      data
    );
  }

  public patchPatient(data: Partial<Patient>) {
    return this.http.patch<Patient>(
      `${environment.api}/v1/userinfo/patient`,
      data
    );
  }
}

