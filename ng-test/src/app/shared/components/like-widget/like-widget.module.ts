import { NgModule } from '@angular/core';
import { LikeWidgetComponent } from './like-widget.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports:[CommonModule],
  exports: [LikeWidgetComponent]
})
export class LikeWidgetModule{}
