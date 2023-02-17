import {Component, OnInit} from '@angular/core'

interface StackedChart{
	Less30: number,
	Gt30Le60: number,
	Gt60le90: number,
	Gt90: number,
	date: string
}

const stackedChart: StackedChart[] = [
  {
    "Less30":2175,
    "Gt30Le60":1329,
    "Gt60le90":605,
    "Gt90":866,
    "date":"2010"
  },
  {
    "Less30":1804,
    "Gt30Le60":1332,
    "Gt60le90":859,
    "Gt90":855,
    "date":"2011"
  },
  {
    "Less30":2148,
    "Gt30Le60":993,
    "Gt60le90":614,
    "Gt90":848,
    "date":"2012"
  }
];

const stackedChart2: StackedChart[] = [
  {
    "Less30":217,
    "Gt30Le60":132,
    "Gt60le90":60,
    "Gt90":86,
    "date":"2010"
  },
  {
    "Less30":180,
    "Gt30Le60":133,
    "Gt60le90":85,
    "Gt90":85,
    "date":"2011"
  },
  {
    "Less30":214,
    "Gt30Le60":99,
    "Gt60le90":61,
    "Gt90":84,
    "date":"2012"
  },
  {
    "Less30":196,
    "Gt30Le60":143,
    "Gt60le90":56,
    "Gt90":96,
    "date":"2013"
  }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  Data = stackedChart

  constructor() {}

}
