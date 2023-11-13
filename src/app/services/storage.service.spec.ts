import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

fdescribe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should store a value', () => {
    //spyOn(service.storage, 'removeItem');
// let getItemSpy= spyOn(service.storage, 'getItem').and.returnValue('Daniel');
let setItemSpy = spyOn(service.storage, 'setItem');
    let key = "name";
    let value = "Daniel";

    service.setData(key, value);

    expect(setItemSpy).toEqual(value);
  });

  it('should get value', () => {
    let key = "email";
    let value = "email@email.com";

    service.storage.setItem(key, value);

    let result = service.getData(key);

    expect(result).toEqual(value);
  });
});
