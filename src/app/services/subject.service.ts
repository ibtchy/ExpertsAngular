import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8087/SpringMVC/subjects/';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl+"retrieve-all-subjects");
  }
  create(data:any,u_id:any): Observable<any> {
    return this.http.post(baseUrl+"add-subject/"+u_id, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}delete-subject/${id}`);
  }
  update(data:any,id_u:any): Observable<any> {
    return this.http.put(`${baseUrl}edit-subject/`+id_u, data);
  }
}
