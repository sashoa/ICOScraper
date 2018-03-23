import {Component, Input, OnInit} from '@angular/core';
import {Ico} from "../../../../shared/Ico.model";
import {IcoDataService} from "../services/ico/ico-data.service";

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.css']
})
export class IcoComponent implements OnInit {

  @Input() ico: Ico;
  @Input() lazyMode: boolean;
  fullDescriptionVisible = false;
  constructor(private icoDataService: IcoDataService) { }

  ngOnInit() {
  }

  toggleFullDescriptionVisible() {
    if (this.lazyMode) {
      this.icoDataService.getIcoDetails(this.ico.detailsToken).subscribe(icoDetails => {
        this.ico = <Ico>{...this.ico, ...icoDetails}
      })
    }
    this.fullDescriptionVisible = !this.fullDescriptionVisible;
  }

}
