import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.productos = await this.productosService.getProducts();
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  }
}
