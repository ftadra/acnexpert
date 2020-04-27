import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Intake, IntakePost } from '../interfaces/intake.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiIntakeService {
    constructor(private http: HttpClient) { }

    public getIntake() {
        return this.http.get<Intake>(
            `${environment.api}/v1/userinfo/intake`
        );
    }

    public postIntakeQuestionnaire(data: IntakePost) {
        return this.http.post<Intake>(
            `${environment.api}/v1/userinfo/intake`,
            data
        );
    }

    public patchIntakeQuestionnaire(data: IntakePost) {
        return this.http.patch<Intake>(
            `${environment.api}/v1/userinfo/intake`,
            data
        );
    }
}

