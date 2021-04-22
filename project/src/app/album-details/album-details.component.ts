import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../albums';
// import {albums} from '../database';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumsService
  ) { }

  album!: Album;
  loaded: boolean | undefined;
  newTitle: string | undefined;

  ngOnInit(): void {
    this.getAlbumDetails();
  }

  // tslint:disable-next-line:typedef
  getAlbumDetails(){
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.albumService.getAlbumDetails(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }
  goBack(): void{
    this.location.back();
  }

  updateAlbum(){
    const newTitle = {
      title: this.newTitle
    };
    this.loaded = false;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.newTitle = ' ';
      this.loaded = true;
    });
  }



  }

