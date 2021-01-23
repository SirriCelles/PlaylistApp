import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AppServiceService } from './service/app-service.service';
import { Playlist, Song } from './service/song.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalRef: BsModalRef;
  @ViewChild('f', {static: true})  pform: NgForm;

  addSong = false;
  addSongArr = [];
  title = ''
  duration = ''
  artist = ''
  Songs: Song[] = [];


  constructor(private appService: AppServiceService, public toastr: ToastrService) {  }

 
  onaddSong(value) {
    if(value === true) {
      this.addSongArr.push(1);
    } else if (value === false) {
      if (this.addSongArr.length === 0) {
        return 0;
      } else {
        this.addSongArr.pop();
      }
    }
  }

  onSubmit() {
    let val = this.pform.value;
    let initSong: Song = {
      title: val.intialInput.song_title,
      artist: val.intialInput.artist,
      duration: val.intialInput.duration
    }
    this.Songs.push(initSong);
    const data: Playlist = {
      name: val.intialInput.name,
      description: val.intialInput.description,
      totalDuration: val.intialInput.duration,
      totalSongs: this.Songs.length,
      songs: this.Songs
    }

    this.appService.addPlaylist(data);
    this.toastr.success('Playlist added Successfully');    
  }


}


