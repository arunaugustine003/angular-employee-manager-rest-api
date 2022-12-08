import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    return this.http.post<any>('https://employee-manager-db-by-arun.glitch.me/employees/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getEmployee() {
    return this.http.get<any>('https://employee-manager-db-by-arun.glitch.me/employees/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>('https://employee-manager-db-by-arun.glitch.me/employees/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>('https://employee-manager-db-by-arun.glitch.me/employees/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
