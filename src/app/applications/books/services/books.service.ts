import { BASE_API_BOOKS } from './../../base-contants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private BOOKS_URL_API = BASE_API_BOOKS.BASE;

constructor(
  private httpService: HttpClient
) { }

/**
 * @author Reja
 * @method GET
 * @returns Observable Value
 * @memberof BooksService
 */
public getAllDataBooks(): Observable<any> {
  return this.httpService.get(this.BOOKS_URL_API);
}

}
