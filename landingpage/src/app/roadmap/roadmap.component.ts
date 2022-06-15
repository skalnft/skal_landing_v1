import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {BreakpointObserver} from '@angular/cdk/layout';
import { Tile } from '../interfaces/Tile';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class RoadmapComponent implements OnInit {

  ladoDoStepper: Observable<StepperOrientation>;
  texto1 = 'UI/UI';
  texto2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releas.";
  texto3 = 'RESEARCH AND DOCUMENTATION';
  tiles: Tile[] = [
    {titulo: 'blabla', texto1: 'sdajkfads', texto2: 'sdfafasd', cols: 2, rows: 1},
    {titulo: 'blabla', texto1: 'sdajkfads', texto2: 'sdfafasd',cols: 1, rows: 1},
    {titulo: 'blabla', texto1: 'sdajkfads', texto2: 'sdfafasd',cols: 2, rows: 2}
  ]

  constructor(private breakPointObserver: BreakpointObserver) {
    this.ladoDoStepper = breakPointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}: any) => (matches ? 'horizontal' : 'vertical')));
  }



  ngOnInit(): void {
  }




}
