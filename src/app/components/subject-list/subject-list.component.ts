import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  constructor(private subjectservice: SubjectService,    private route: ActivatedRoute,
    private router: Router) { }
  subjects: any;
  ngOnInit(): void {
    this.retrieveSubjects();
  }
  retrieveSubjects(): void {
    this.subjectservice.getAll()
      .subscribe(
        data => {
          this.subjects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deleteSubject(id:any): void {
    this.subjectservice.delete(id)
      .subscribe(
        response => {
          this.router.navigate(['/subjects']);
          location.reload();
        },
        error => {
          console.log(error);
        });
     
  }

}
