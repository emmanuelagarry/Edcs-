import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/models/model.store';

@Injectable({
  providedIn: 'root'
})
export class KeyvalueService {

  constructor(private http: HttpClient) { }

  addToMongodb(data) {
    return this.http.post('http://0.0.0.0:3000/courses/', data);
  }
  getAll2() {
    return this.http.get<Store[]>('http://192.168.43.246:8000/store/');
  }

  getAll() {
    return this.http.get<Store[]>('http://0.0.0.0:3000/courses');
  }

  updateCourseName(items: Store) {
    return this.http.put('http://0.0.0.0:3000/courses/', items);
  }
  deleteCourse(key) {
    const body = {
      objectId: key
    };
    return this.http.request('delete', `http://0.0.0.0:3000/courses/${key}`);
  }

  updateCourseName2(items: Store) {
    return this.http.put('http://192.168.43.246/courses/', items);
  }
  deleteCourse2(key) {
    const body = {
      objectId: key
    };
    return this.http.request('delete', `http://192.168.43.246:3000/store/`, { body });
  }

}

