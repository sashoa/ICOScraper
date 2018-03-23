import { Component } from '@angular/core';
import {IcoDataService} from "./services/ico/ico-data.service";
import {Observable} from "rxjs/Observable";
import {Ico} from "../../../shared/Ico.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icos: Observable<Ico[]>;
  lazyMode = true;
  constructor(private icoDataService: IcoDataService) {
    this.icos = icoDataService.getIcos(this.lazyMode)
  }

  toggleAppMode() {
    this.lazyMode = !this.lazyMode;
    this.icos = this.icoDataService.getIcos(this.lazyMode)
  }
}
