import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreatescreenService } from './createscreen.service';
import { SharedService } from '../../shared/shared.service';

describe('createscreenService', () => {
  let service: CreatescreenService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CreatescreenService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(CreatescreenService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
});