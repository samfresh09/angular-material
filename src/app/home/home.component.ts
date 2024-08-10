import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) page!: MatPaginator;
  student:any
  attribut:any
  ngOnInit(): void {
    this.student= new MatTableDataSource([
      {id:1, lastname:"samto", firstname:"GNAZOUYOUFEI", age:23},
      {id:2, lastname:"alex", firstname:"GNAZOUYOUFEI", age:34},
      {id:3, lastname:"david", firstname:"GNAZOUYOUFEI", age:43},
      {id:4, lastname:"emmanuel", firstname:"GNAZOUYOUFEI", age:45},
      {id:5, lastname:"balakiyem", firstname:"GNAZOUYOUFEI", age:34},
      {id:6, lastname:"samto", firstname:"GNAZOUYOUFEI", age:23},
      {id:7, lastname:"alex", firstname:"GNAZOUYOUFEI", age:34},
      {id:8, lastname:"david", firstname:"GNAZOUYOUFEI", age:43},
      {id:9, lastname:"emmanuel", firstname:"GNAZOUYOUFEI", age:45},
      {id:10, lastname:"balakiyem", firstname:"GNAZOUYOUFEI", age:34},
      {id:11, lastname:"samto", firstname:"GNAZOUYOUFEI", age:23},
      {id:12, lastname:"alex", firstname:"GNAZOUYOUFEI", age:34},
      {id:13, lastname:"david", firstname:"GNAZOUYOUFEI", age:43},
      {id:14, lastname:"emmanuel", firstname:"GNAZOUYOUFEI", age:45},
      {id:15, lastname:"balakiyem", firstname:"GNAZOUYOUFEI", age:34},
    ]);

    this.attribut=["id","lastname","firstname","age"]

  }

  ngAfterViewInit(): void {
    this.student.paginator= this.page;


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.student.filter = filterValue.trim().toLowerCase();

    if (this.student.paginator) {
      this.student.paginator.firstPage();
    }
  }

}
