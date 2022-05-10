import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subject: Subject = {
    title: '',
    description: '',
    
  };
  submitted = false;
  constructor(private subjectservice : SubjectService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveSubject(): void {
    const data = {
      title: this.subject.title,
      description: this.subject.description
    };
    // 1 id user
    this.subjectservice.create(data,1)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newSubject(): void {
    this.submitted = false;
    this.subject = {
      title: '',
      description: '',
    };
  }
}
