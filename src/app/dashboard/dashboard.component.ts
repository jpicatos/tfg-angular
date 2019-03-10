import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from '../services/global-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  admin: boolean;
  tuTurno: boolean;
  constructor(private configService: GlobalConfigService) {
    this.admin = this.configService.isAdmin();
    this.tuTurno = this.configService.getTurno();
  }

  ngOnInit() {
  }

}
