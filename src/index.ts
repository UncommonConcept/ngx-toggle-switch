import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchComponent } from './ui-switch.component';

@NgModule({
    imports: [CommonModule],
    declarations: [UiSwitchComponent],
    exports: [UiSwitchComponent]
})
export class UiSwitchModule {
}