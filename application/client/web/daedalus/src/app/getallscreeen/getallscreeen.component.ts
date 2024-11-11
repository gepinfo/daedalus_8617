import { Component, OnInit, ViewChild } from '@angular/core';
import { GetallscreeenService } from './getallscreeen.service';





@Component({
  selector: 'app-getallscreeen',
  templateUrl: './getallscreeen.component.html',
  styleUrls: ['./getallscreeen.component.scss'],
})

export class GetallscreeenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'age', field: 'age'  },{ headerName: 'address', field: 'address'  },];
    public employee:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
        email: '',
        address: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getallscreeenService: GetallscreeenService,
    ) { }

    ngOnInit() {
        this.employee.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}