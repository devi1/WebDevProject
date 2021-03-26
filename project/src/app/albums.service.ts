import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Album, Photo} from './albums';
import {albums} from './database';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }


  // tslint:disable-next-line:typedef
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbumDetails(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  deleteAlbum(id: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  getPhoto(id: number): Observable<Photo>{
    return this.client.get<Photo>(`${this.BASE_URL}/albums/${id}/photos`);
  }

  getPhotos(): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/1/photos`);
  }

  }

