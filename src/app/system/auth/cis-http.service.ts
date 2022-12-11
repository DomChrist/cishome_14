import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {Observable} from 'rxjs';
import {CisAuthService} from './cis-auth-service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CisHttpService {

    constructor(private http: HttpClient, private app: CisAuthService, private msg: MessageService) { }


    public ping( success: () => void , error: () => void ){
        const uri = environment.cisHome.base + 'q/health';

        this.http
            .get<HealthCheck>(
                uri,
                { headers: this.httpHeader , observe: 'response'}
            )
            .subscribe( {
                next: (r) => {
                    if ( this.is2xx( r.status ) ) {
                        success();
                    } else {
                        error();
                    }
                },
                error: (e) => error()
            });
    }

    public cisGet<T>( url , headers: HttpHeaders = new HttpHeaders() ): Observable<HttpResponse<T>>{
        const uri = environment.cisHome.service  + url;
        let h = this.httpHeader;
        headers.keys().forEach( k => {
                const v = headers.get( k );
                h = h.append( k , v);
            });
        return this.http.get<T>( uri , {headers: h, observe: 'response'});
    }


    public cisPost<T>( url , body: any ): Observable<HttpResponse<T>>{
        const uri = environment.cisHome.service + url;

        return this.http.post<T>(
            uri ,
            body,
            {headers: this.httpHeader, observe: 'response'}
        );
    }

    public cisPut<T>( url , body: any ): Observable<HttpResponse<T>>{
        const uri = environment.cisHome.service + url;
        return this.http.put<T>(
            uri ,
            body,
            {headers: this.httpHeader, observe: 'response'}
        );
    }

    public cisDelete<T>( url ): Observable<HttpResponse<T>>{
        const uri = environment.cisHome.service + url;
        return this.http.delete<T>(
            uri ,
            {headers: this.httpHeader, observe: 'response'}
        );
    }

    public is2xx( status: number ): boolean{
        if ( status >= 200 && status < 300 ){
            return true;
        }
        return false;
    }

    public success( summary: string , detail: string ){
        this.msg.add( {severity: 'success' , summary, detail} );
    }

    get httpHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', this.app.securityIdentity.access.plain);
        return headers;
    }

}

interface HealthCheck{
    status: string;
}

