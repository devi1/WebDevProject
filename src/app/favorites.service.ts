import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  items = [];

  addToFavorites(product) {
    this.items.push(product);
    window.alert("The product added to your Favorites!");
  }


  clearFavorites() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) {}
}
