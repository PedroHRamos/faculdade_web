import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasJs/canvasjs.min.js'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: false,
		exportEnabled: false,
		title: {
			text: "Media entre Faculdades"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Una Barreiro" },
				{ y: 55, label: "Una Contagem" },
				{ y: 50, label: "Una Barro preto" },
				{ y: 65, label: "Una Aimores" },
				{ y: 95, label: "Una Betim" },
				{ y: 68, label: "Una Raja" },
				{ y: 28, label: "Una Linha verde" },
				{ y: 34, label: "Una Liberdade" },
				{ y: 14, label: "Una Guajajaras" }
			]
		}]
	});

	chart.render();
    }


}
