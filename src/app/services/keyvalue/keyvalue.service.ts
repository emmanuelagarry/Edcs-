import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/models/model.store';

@Injectable({
  providedIn: 'root'
})
export class KeyvalueService {

  constructor(private http: HttpClient) { }

  addToMongodb(data) {
    return this.http.post('http://0.0.0.0:8000/store/', data);
  }

  getAll() {
    return this.http.get<Store[]>('http://0.0.0.0:8000/store');
  }

  updateCourseName(key: string, name: string) {
    return this.http.put('http://0.0.0.0:8000/store/', { objectId: key, courseName: name});
  }

  deleteCourse(key) {
    const body = {
      objectId: key
    };
    console.log('this is the key ' + key );
    return this.http.request('delete', 'http://0.0.0.0:8000/store', { body });  }
}
