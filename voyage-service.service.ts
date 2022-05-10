import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from './voyage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
  
})
export class VoyageServiceService {
  list:Voyage[]= [];
  Voyage:Voyage;
  show : Boolean = false;
  url:'http://localhost:8087/SpringMVC/servlet/search'

  private apiBaseUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) {  
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      JSON.parse(JSON.stringify(data)).dataforEach((element: { numVoyage: Voyage; }) => {
        this.list.push(element.numVoyage);
      });
    });

   }
  public findAll(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiBaseUrl+"/getvoyagee");
  }
  public save(voyage: Voyage) {
    return this.http.post<Voyage>(this.apiBaseUrl+"/ajoutervoyage", voyage);
  }
  deleteVoyageById(id:number){
    return this.http.delete(this.apiBaseUrl+"deletevoyage/"+id);
    }
    public updateVoyage(voyage: Voyage): Observable<Voyage> {
      return this.http.put<Voyage>(`${this.apiBaseUrl}/updatevoyage`, voyage);
    }
    getData(keyword : string)  
    {  
      let url = this.apiBaseUrl + "/search"+keyword;  
      return  this.http.post(url , keyword);  
    }  
}
