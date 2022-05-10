import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';
@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  subject: Subject = {
    title: '',
    description: '',
    
  };
  submitted = false;
  constructor(    private route: ActivatedRoute,
    private router: Router,private subjectservice : SubjectService) { }
    id_s:any;
  ngOnInit(): void {
    this.id_s = this.route.snapshot.paramMap.get('id');
  }
  updateSubject(): void {
    const data = {
      id:this.id_s,
      title: this.subject.title,
      description: this.subject.description
    };
    this.subjectservice.update(data,1)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
