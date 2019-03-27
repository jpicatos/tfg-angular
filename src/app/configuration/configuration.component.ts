import { Component, OnInit, Input, Inject} from '@angular/core';
import { GlobalConfigService } from '../services/global-config.service';
import { Departamento } from '../models/departamento';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  departamento: Departamento;

  constructor(private configService: GlobalConfigService) {
    MenuToolbarComponent.updateTitle("Configuration");
    this.departamento = this.configService.getDepartamento()[0];
  }

  ngOnInit() {
  }

  save(){
    console.log(this.departamento)
    this.configService.setDepartamento(this.departamento);
  }

}
