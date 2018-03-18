import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private http: AuthHttp) { }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    

    return this.http.get(this.categoriasUrl,)
      .toPromise()
      .then(response => response.json());
  }

}
