import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Case } from '../interfaces/case.interface';
import { ImageAWSPayload } from '../interfaces/image.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiCaseService {
    constructor(private http: HttpClient) { }

    public getCase() {
        return this.http.get<Case>(
            `${environment.api}/v1/userinfo/case`
        );
    }

    public patchCase(data: Partial<Case>) {
        return this.http.patch<Partial<Case>>(
            `${environment.api}/v1/userinfo/case`,
            data
        );
    }

    public postCaseImage(url: string, awsPayload: ImageAWSPayload, file: File) {
        return this.http.post(
            url,
            {
                data: awsPayload,
                file
            }
        );
    }
}

