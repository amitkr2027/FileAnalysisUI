import { Component, OnInit } from '@angular/core';

import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  loading: boolean = false; // Flag variable 
  isFileAvailable: boolean = false;
  file: File = null; // Variable to store file 
  success: boolean = false;
  result: object;
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.success = false;
    this.isFileAvailable = false;
  }

  // On file Select 
  onChange(event) {
    this.file = event.target.files[0];
    this.isFileAvailable = true;
  }

  // OnClick of button Upload 
  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService.upload(this.file).subscribe(
      (response: any) => {
        this.loading = false;
        this.success = true;
        this.result = response;
      }
    );
  }

  onNewRequest() {
    this.loading = false;
    this.success = false;
    this.result = null;
    this.file = null;
    this.isFileAvailable = false;
  }
} 