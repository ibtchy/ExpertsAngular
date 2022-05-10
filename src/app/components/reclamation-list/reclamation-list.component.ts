import { Component, OnInit } from '@angular/core';
import { ReclamtionServicesService } from 'src/app/services/reclamtion-services.service';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamationList :any;
  constructor(private recServices : ReclamtionServicesService) { }

  ngOnInit(): void {
    this.recServices.getReclamationListByEmployee(5).subscribe((data: any) => {this.reclamationList = data;

      console.log(data)
      });  }
      edit(){}
      deleteReclamation(){}
}
