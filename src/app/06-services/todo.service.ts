import { HttpClient } from '@angular/common/http';
export class TodoService {
    constructor(private http: HttpClient) {}

    add() {
        return this.http.post('...');
    }
    getTodos() {
        return this.http.get('...');
    }
    delete(id) {
        return this.http.delete('...');
    }
}