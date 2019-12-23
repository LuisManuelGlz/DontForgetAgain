import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RemindersPanelComponent } from "./components/reminders-panel/reminders-panel.component";
import { AuthGuard } from "./guards/auth.guard";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'reminders', component: RemindersPanelComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];