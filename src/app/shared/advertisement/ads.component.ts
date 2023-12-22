import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ads.component.html',
  styleUrl: './../../../assets/scss/layout/__advertisement.scss'
})

export class AdsComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() cover: string = '';
  @Input() price: number = 0;
  @Input() owner: string = '';
  @Input() createdDate: Date = new Date(0);

  categoryId: number = 0;
}
