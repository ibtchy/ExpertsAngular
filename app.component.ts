import { Component, OnInit } from '@angular/core';
import { Voyage } from './voyage';
import { VoyageServiceService } from './voyage-service.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  Voyage: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private VoyageServiceService: VoyageServiceService) {}
  
  ngOnInit(): void {

    this.fetchPosts();
    }
  title = 'Gestion__Voyage';
  
  fetchPosts(): void {
    this.VoyageServiceService.findAll().subscribe(
      (response) => {
        this.Voyage = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
