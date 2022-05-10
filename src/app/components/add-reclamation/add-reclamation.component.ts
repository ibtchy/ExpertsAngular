import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclmationModel';
import { ReclamtionServicesService } from 'src/app/services/reclamtion-services.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
reclamation = new Reclamation();

  constructor(private recServices : ReclamtionServicesService, private router: Router) { }
employeeList :any;
  ngOnInit(): void {
    this.recServices.getEmployeeList().subscribe((data: any) => {this.employeeList = data;

    console.log(data)
    });




  }
  addNewReclamation(){
    this.recServices.addNewReclamationToAdmin(this.reclamation.Employe,this.reclamation).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/reclamationList']);
        alert("Reclamation was sent successfully!")

      },
      (err) => {
        console.log(err)
      }
    );
  }

}
