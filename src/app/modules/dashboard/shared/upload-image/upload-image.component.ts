import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: string = '';
  imageValue: any;
  @Input() ratio:number;
  @Output() image = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    
  }
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64!;
}
removeImage(){
  this.imageValue = null;
  this.croppedImage = ''
  this.imageChangedEvent = '';
}
imageLoaded(image: LoadedImage) {
  console.log("loaded");
  
}
cropperReady() {
  // cropper ready
}
loadImageFailed() {
    // show message
}
acceptImage(){
  this.image.emit(this.croppedImage);
  this.imageValue = null;
  this.croppedImage = ''
  this.imageChangedEvent = '';
}
}

