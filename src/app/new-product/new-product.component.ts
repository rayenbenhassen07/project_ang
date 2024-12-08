import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  product: ProductRepresentation = {};
  imagePreview: string | ArrayBuffer | null = null;
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: ProductService, private router: Router) {}

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.product.image = file.name; // Assuming file name is used for product image
    }
  }

  // New onSubmit method
  onSubmit(): void {
    this.saveProduct();
  }

  saveProduct(): void {
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.service
      .createProduct(this.product)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Failed to create product. Please try again.';
          this.isLoading = false;
          return of(null);
        })
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.successMessage = 'Product created successfully!';
            this.resetForm();
            setTimeout(() => this.router.navigate(['products']), 2000);
          }
          this.isLoading = false;
        },
      });
  }

  resetForm(): void {
    this.product = {};
    this.imagePreview = null;
  }
}
