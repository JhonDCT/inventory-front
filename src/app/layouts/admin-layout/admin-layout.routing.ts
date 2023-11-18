import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { ProductCreateComponent } from 'src/app/pages/product-create/product-create.component';
import { ProductUpdateComponent } from 'src/app/pages/product-update/product-update.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/create', component: ProductCreateComponent },
    { path: 'products/update/:id', component: ProductUpdateComponent }
];
