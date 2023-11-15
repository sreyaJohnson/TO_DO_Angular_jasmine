import { TestBed } from '@angular/core/testing';
import { findIndex } from 'rxjs';

import { StorageService } from './storage.service';


describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(StorageService);
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };
    spyOn(service.storage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(service.storage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });
  it('should store a value', () => {
    let key = "name";
    let value = "Daniel";

    // service.storage.getItem(key) = value;

    let result = service.getData(key);

    expect(result).toEqual(value);
  });


it('should get value', () => {
  let key = "email";
  let value = "email@email.com";
  service.setData(key,value);
  let result =   service.storage.setItem(key, value);

  expect(result).toEqual(value);
});

});
