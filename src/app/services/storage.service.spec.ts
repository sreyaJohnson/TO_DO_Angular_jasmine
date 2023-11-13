import { TestBed } from '@angular/core/testing';
import { findIndex } from 'rxjs';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });
  it('should store a value', () => {
    let key = "name";
    let value = "Daniel";

    service.setData(key, value);

    let result = service.storage.getItem(key);

    expect(result).toEqual(value);
  });

  it('should get value', () => {
    let key = "email";
    let value = "email@email.com";

    service.storage.setItem(key, value);

    let result = service.getData(key);

    expect(result).toEqual(value);
  });

});
