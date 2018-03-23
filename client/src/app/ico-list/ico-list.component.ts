import {Component, Input, OnInit} from '@angular/core';

import {Ico} from "../../../../shared/Ico.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ico-list',
  templateUrl: './ico-list.component.html',
  styleUrls: ['./ico-list.component.css']
})
export class IcoListComponent implements OnInit {

  @Input() icos: Observable<Ico[]>;
  @Input() lazyMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
