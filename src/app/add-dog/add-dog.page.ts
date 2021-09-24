import { Component, OnInit, Input } from '@angular/core';
import { Camera, DestinationType, PictureSourceType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage implements OnInit {

  constructor(private camera: Camera) { }
  pessoa: any = {
    nome: "",
    raca: "",
    sexo: "",
    telefone:"",
    imagem: ""
}

  imgURL;
  @Input('nome') nome: string;
  raca: string;
  sexo: string;
  telefone: string;

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

  saveTudo(){
    this.pessoa.nome = this.nome;
    this.pessoa.raca = this.raca;
    this.pessoa.sexo = this.sexo;
    this.pessoa.telefone = this.telefone;
    this.pessoa.imagem = this.imgURL;
  }

  
}
