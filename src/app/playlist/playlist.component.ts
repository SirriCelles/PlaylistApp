import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';
import { Playlist } from './../service/song.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlists: Playlist[];

  constructor(private appService: AppServiceService) { }

  ngOnInit() {
    this.playlists = this.appService.getPlalist();
    console.log(this.playlists);
  }

}
