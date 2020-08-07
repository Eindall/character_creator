import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
    ],
    providers: []
})
export class AngularMaterialModule {}
