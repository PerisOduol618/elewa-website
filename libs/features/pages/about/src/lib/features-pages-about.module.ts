import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';

import { CardsModule } from '@elewa-website/elements/cards';
import { CarouselModule } from '@elewa-website/elements/layout/carousel';
import { MainPageModule } from '@elewa-website/elements/layout/pages/main-page';

import { AboutPageComponent } from './main/about-page/about-page.component';
import { TeamMembersSectionComponent } from './components/team-members-section/team-members-section.component';

import { AboutRoutingModule } from './about.routing';
import { SdgSectionComponent } from './components/sdg-section/sdg-section.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,
    TranslocoModule,
    MainPageModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutPageComponent,
    TeamMembersSectionComponent,
    SdgSectionComponent,
  ],
})
export class FeaturesPagesAboutModule {}
