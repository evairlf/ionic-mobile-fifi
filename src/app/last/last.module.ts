import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPageRoutingModule } from './last-routing.module';

import { LastPage } from './last.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastPageRoutingModule
  ],
  declarations: [LastPage]
})
export class LastPageModule {}
