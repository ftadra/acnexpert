import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Intake, IntakePost } from '../interfaces/intake.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiFollowupService {
    constructor(private http: HttpClient) { }

    public getFollowups() {
        return this.http.get<Intake>(
            `${environment.api}/v1/userinfo/followup`
        );
    }

    public getFollowup(id: number) {
        return this.http.get<Intake>(
            `${environment.api}/v1/userinfo/followup/${id}`
        );
    }

    public postFollowupQuestionnaire(data: IntakePost) {
        return this.http.post<Intake>(
            `${environment.api}/v1/userinfo/followup`,
            data
        );
    }

    public patchFollowupQuestionnaire(data: IntakePost) {
        return this.http.patch<Intake>(
            `${environment.api}/v1/userinfo/followup`,
            data
        );
    }
}

