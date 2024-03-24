import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  productos: any[] = [];
  public tipoPrenda : string | undefined;

  constructor(private productosService: ProductosService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.productos = await this.productosService.getProducts();
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  }

  onShowCategory(tipoPrenda: string): void {
    this.tipoPrenda = tipoPrenda;
    // this.getProducts();
  }
}
