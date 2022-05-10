import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../models/reclmationModel';

@Injectable({
  providedIn: 'root'
})
export class ReclamtionServicesService {

  constructor(private http: HttpClient) { }
  getEmployeeList() {
  return this.http.get('http://localhost:8888/empl/getAll');}

addNewReclamationToAdmin(id_employe : number ,reclamtion :Reclamation){
  return this.http.post('http://localhost:8888/rec/newToAdmin/'+5+'/'+id_employe , reclamtion)
}
getReclamationListByEmployee(idEmployee :number) {
  return this.http.get('http://localhost:8888/rec/getreclamtionbyidemp/'+idEmployee);}

}
