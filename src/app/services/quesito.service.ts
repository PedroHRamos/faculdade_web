import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuesitoDTO } from '../dto/quesitoDTO';

@Injectable({
  providedIn: 'root'
})
export class QuesitoService {

  constructor(private http: HttpClient) { }

  obterQuesitos(): Observable<Array<QuesitoDTO>> {
    return this.http.get<Array<QuesitoDTO>>('http://localhost:52738/quesito');
  }
  
}
