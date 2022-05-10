import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8087/SpringMVC/comments/';
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  getpostscomments(id_p:any): Observable<any> {
    return this.http.get(baseUrl+"retrieve-comms/"+id_p);
  }
  getpostscommentsuser(id_p:any,u_id:any): Observable<any> {
    return this.http.get(baseUrl+"retrieve-comms/"+u_id,id_p);
  }
  create(data:any,u_id:any,p_id:any): Observable<any> {
    return this.http.post(baseUrl+"add-comment/"+u_id
    +"/"+p_id, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}delete-comment/${id}`);
  }
  update(data:any,u_id:any,p_id:any): Observable<any> {
    return this.http.put(`${baseUrl}edit-comment/`+u_id,p_id, data);
  }
}
