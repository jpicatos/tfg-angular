import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpUrl = "http://tfg.davidarroyo.es/api/asignaturas/importar/";

const httpOptions =
  new HttpHeaders({
    'Authorization': 'Token d0cddc40af7cb1bf04084d94cda4a4e0dc96c78e'
  });

@Component({
  selector: 'app-importar-asignaturas',
  templateUrl: './importar-asignaturas.component.html',
  styleUrls: ['./importar-asignaturas.component.css']
})
export class ImportarAsignaturasComponent implements OnInit {

  selectedFile: File;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('excel_file', this.selectedFile, this.selectedFile.name);
    uploadData.append('departamento_siglas', 'SIC');
    uploadData.append('departamento_nombre', 'Sistemas Informáticos y Computación');

    this.http.post(httpUrl, uploadData, {
      headers: httpOptions,
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

}
