import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8087/SpringMVC/posts/';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl+"retrieve-posts");
  }
  getpostssubject(id_s:any): Observable<any> {
    return this.http.get(baseUrl+"retrieve-posts/"+id_s);
  }
  getnbrlikes(id:any):any {
    return this.http.get(baseUrl+"nbrlike/"+id);
  }
  getnbrdislikes(id:any):any {
    return this.http.get(baseUrl+"nbrdislike/"+id);
  }
  create(data:any,u_id:any,s_id:any): Observable<any> {
    return this.http.post(baseUrl+"add-post/"+u_id+"/"+s_id, data);
  }
  like(u_id:any,p_id:any): any {
    return this.http.put(baseUrl+"like/"+p_id+"/"+u_id,{});
  }
  dislike(u_id:any,p_id:any): any {
    return this.http.put(baseUrl+"dislike/"+p_id+"/"+u_id,{});}
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}delete-post/${id}`);
  }
  update(data:any,u_id:any,s_id:any): Observable<any> {
    return this.http.put(`${baseUrl}edit-post/`+u_id+"/"+s_id, data);
  }
}
