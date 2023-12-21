import { Routes } from '@angular/router';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { WebhelpComponent } from './layout/webhelp/webhelp.component';
import { AdvertisementsComponent } from './layout/advertisements/advertisements.component';

export const routes: Routes = [
    {path: '', component: AdvertisementsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'help', component: WebhelpComponent}
];
