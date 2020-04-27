import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SignupStatus } from '../interfaces/signup-status.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiStatusService {
    constructor(private http: HttpClient) { }

    public getStatus() {
        return this.http.get<SignupStatus>(
            `${environment.api}/v1/userinfo/status`
        );
    }
}

