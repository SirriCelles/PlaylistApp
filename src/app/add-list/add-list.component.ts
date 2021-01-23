import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Song } from '../service/song.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  song: Song;

  constructor() { }

  ngOnInit() {

  }

  onTitleChanges(event){
    this.song.title = event;
  }

  onArtistChanges(event){
    this.song.artist = event
  }

  onDurChanges(event){
    this.song.duration = event
  }

}
