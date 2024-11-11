import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallscreeenComponent } from './getallscreeen.component';
import { GetallscreeenService } from './getallscreeen.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallscreeenComponent } from './getallscreeen.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


describe('GetallscreeenComponent', () => {
  let component: GetallscreeenComponent;
  let fixture: ComponentFixture<GetallscreeenComponent>;
  let service: GetallscreeenService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        NgbPaginationModule,
      ],
      declarations: [ GetallscreeenComponent ],
      providers: [ GetallscreeenService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallscreeenComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GetallscreeenService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.employee.created_by).toEqual(mockEmail);

  });
  


});