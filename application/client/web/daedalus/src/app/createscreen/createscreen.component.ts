import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatescreenService } from './createscreen.service';





@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
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




    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
        this.employee.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}