import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../albums';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  loaded: boolean | undefined;
  photos: Photo[] = [];
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  // tslint:disable-next-line:typedef
  getPhotos(){
    this.loaded = false;
    this.albumService.getPhotos().subscribe((photos) =>
    {
      this.photos = photos;
      this.loaded = true;
    });

  }

  goBack(): void{
    this.location.back();
  }
}
