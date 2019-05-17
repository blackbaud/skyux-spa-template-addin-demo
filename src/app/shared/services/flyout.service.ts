import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlyoutService {
  private records: any[] = [
    { id: '1', name: 'Troy Barnes', constituentCode: 'Alumnus', status: 'Paid' },
    { id: '2', name: 'Britta Perry', constituentCode: 'Friend', status: 'Past due' },
    { id: '3', name: 'Pierce Hawthorne', constituentCode: 'Board Member', status: 'Paid' },
    { id: '4', name: 'Annie Edison', constituentCode: 'Alumnus', status: 'Paid' },
    { id: '5', name: 'Shirley Bennett', constituentCode: 'Board Member', status: 'Paid' },
    { id: '6', name: 'Jeff Winger', constituentCode: 'Friend', status: 'Paid' },
    { id: '7', name: 'Abed Nadir', constituentCode: 'Major Donor', status: 'Paid' }
  ];

  public getRecords(): any[] {
    return this.records;
  }

  public getRecordById(id: string): any {
    return this.records.filter(record => record.id === id)[0];
  }
}
