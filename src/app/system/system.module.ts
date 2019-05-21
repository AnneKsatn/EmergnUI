import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';


@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule
    ],
    exports: [CommonModule, SharedModule],
    declarations: [SystemComponent],
})

export class SystemModule {

}