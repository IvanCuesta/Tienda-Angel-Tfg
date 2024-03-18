import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos'; // Asegúrate de que la URL coincida con tu backend

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<any> {
    return await lastValueFrom(this.http.get(this.apiUrl));
  }
}
