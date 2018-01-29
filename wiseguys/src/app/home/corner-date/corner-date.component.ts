import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corner-date',
  templateUrl: './corner-date.component.html',
  styleUrls: ['./corner-date.component.css']
})
export class CornerDateComponent implements OnInit {
  @Input() date;
  constructor() { }

  ngOnInit() {
  }

  getMonth() {
    const month = this.date.substring(5, 7);
    switch (parseInt(month, 0)) {
      case 1: return 'Jan'; // January
      case 2: return 'Feb'; // February
      case 3: return 'Mar'; // March
      case 4: return 'Apr'; // April
      case 5: return 'May'; // May
      case 6: return 'Jun'; // June
      case 7: return 'Jul'; // July
      case 8: return 'Aug'; // August
      case 9: return 'Sep'; // September
      case 10: return 'Oct'; // October
      case 11: return 'Nov'; // November
      case 12: return 'Dec'; // December
    }
  }
}
