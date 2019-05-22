import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';


@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule
    ],
    exports: [CommonModule, SharedModule],
    declarations: [SystemComponent, 
        EditPageComponent, 
        MainPageComponent,
        FilterPipe
    ],
})

export class SystemModule {

}