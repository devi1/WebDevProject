import { Component, OnInit } from '@angular/core';
import {Album} from '../albums';
import {AlbumsService} from '../albums.service';
import {albums} from '../database';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean | undefined;

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void{
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) =>
    {
      this.albums = albums;
      this.loaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  deleteAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log(`deleted`, id);
    });

}





}
