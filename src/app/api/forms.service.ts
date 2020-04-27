import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Intake, IntakePost } from '../interfaces/intake.interface';
import { QuestionnaireForm } from '../interfaces/questionnaire.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiFormsService {
    constructor(private http: HttpClient) { }

    public getIntakeForm() {
        return this.http.get<QuestionnaireForm>(
            `${environment.api}/v1/userinfo/intake`
        );
    }

    public getFollowupForm() {
        return this.http.get<QuestionnaireForm>(
            `${environment.api}/v1/userinfo/followup`
        );
    }

    public getQuizForm() {
        return this.http.get<QuestionnaireForm>(
            `${environment.api}/v1/userinfo/quiz`
        );
    }
}

