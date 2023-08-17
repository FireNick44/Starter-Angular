import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  postId: number = 1;
  post: any = null;

  constructor(public service: ApiService) { }
  getPost() {
    this.service.getPost(this.postId).subscribe((response) => {
      this.post = response;
    });
  }
}
