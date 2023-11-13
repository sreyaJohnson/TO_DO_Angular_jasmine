import { Injectable } from '@angular/core';
class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number = 0;
  clear(): void { }
  getItem(key: string): string | null { return ""; }
  key(index: number): string | null { return ""; }
  removeItem(key: string): void { }
  setItem(key: string, value: string): void { }
}

@Injectable({
  providedIn: 'root'
})
export class StorageService extends LocalStorage {
   storage: Storage;


  constructor() {
    super();
    this.storage = new LocalStorage();
  }
  getData(key: string): any {
    return this.storage.getItem(key);
  }
  setData(key: string, data: any): void {
    this.storage.setItem(key, data);
  }
}
