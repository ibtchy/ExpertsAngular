import { Component, OnInit } from '@angular/core';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-commentaires-list-admin',
  templateUrl: './commentaires-list-admin.component.html',
  styleUrls: ['./commentaires-list-admin.component.css']
})
export class CommentairesListAdminComponent implements OnInit {

  constructor(private commentairesservice: CommentaireService,    private route: ActivatedRoute,
    private router: Router) { }
  commentaires: any;
  id_p: any;
  ngOnInit(): void {
    this.id_p = this.route.snapshot.paramMap.get('id');
    this.retrieveComments();
  }
  retrieveComments(): void {
    this.commentairesservice.getpostscomments(this.id_p)
      .subscribe(
        data => {
          this.commentaires = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
  deleteCommentaire(id:any): void {
    this.commentairesservice.delete(id)
      .subscribe(
        response => {
          this.router.navigate(['/adminposts']);
          location.reload();
        },
        error => {
          console.log(error);
        });
     
  }



}
