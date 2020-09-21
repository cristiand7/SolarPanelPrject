import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MyModel } from 'src/app/share/class/my-model';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  modelos: MyModel[]=[];

  displayedColumns: string[] = ['id','nombre', 'descripcion'];
  dataSource = new MatTableDataSource<MyModel>();

  constructor() { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar(){

        for (var _i = 1; _i < 21; _i++) {
          var item=new MyModel();
          item.id=''+_i;
          item.nombre='item '+_i;
          item.descripcion='description '+_i;          
          this.modelos.push(item);
        }
       
       
        this.dataSource.data=this.modelos;
  
  }

}
