import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainPageAdvertisement } from '@app/dto/advertisement';
import { AdsComponent } from '@app/shared/advertisement/ads.component';

@Component({
  selector: 'app-advertisements',
  standalone: true,
  imports: [CommonModule, AdsComponent],
  templateUrl: './advertisements.component.html',
  styleUrl: './advertisements.component.scss'
})
export class AdvertisementsComponent {
  advertisements: MainPageAdvertisement[] =
  [
    {    id: 0, title: "Test 0", cover: "", price: 199, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 1, title: "Test 1", cover: "", price: 299, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 2, title: "Test 2", cover: "", price: 399, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 3, title: "Test 3", cover: "", price: 499, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 4, title: "Test 4", cover: "", price: 599, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 5, title: "Test 5", cover: "", price: 699, owner: "Admin", createdDate: new Date(Date.now())},
    {    id: 6, title: "Test 6", cover: "", price: 799, owner: "Admin", createdDate: new Date(Date.now())}    
  ];
}
