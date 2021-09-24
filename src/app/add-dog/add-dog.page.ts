import { Component, OnInit } from '@angular/core';
import { Camera, DestinationType, PictureSourceType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage implements OnInit {

  constructor(private camera: Camera) { }
  imgURL;
  ngOnInit() {
  }

  getCamera(){
    this.camera.getPicture({
      sourceType:  this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res)=>{
      this.imgURL = res;
    }).catch(e=> {
      console.log(e);
    })
  }

  getGallery(){
    this.camera.getPicture({
      sourceType:  this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res)=>{
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e=> {
      console.log(e);
    })
  }
}
