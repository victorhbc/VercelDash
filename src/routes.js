/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import CreateIcon from '@material-ui/icons/Create';
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Favorite from "@material-ui/icons/Favorite";
import Event from "@material-ui/icons/Event";
import LocationOn from "@material-ui/icons/LocationOn";
import BallotIcon from '@material-ui/icons/Ballot';
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import EditarPerfil from "views/UserProfile/EditarPerfil.js";
import Favoritos from "views/TableList/Favoritos.js";
import GerenciarEvento from "views/Gerenciar/GerenciarEvento.js";
import EventoForm from "views/EventoForm/EventoForm.js";
import Maps from "views/Maps/Maps.js";
import PerfilUsuario from "views/UserProfile/PerfilUsuario.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Calendário",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: Person,
    component: PerfilUsuario,
    layout: "/admin"
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    icon: Favorite,
    component: Favoritos,
    layout: "/admin"
  },
  {
    path: "/evento_form",
    name: "Divulgar Eventos",
    icon: Event,
    component: EventoForm,
    layout: "/admin"
  },
  {
    path: "/gerenciar_eventos",
    name: "Gerenciar Eventos",
    icon: BallotIcon,
    component: GerenciarEvento,
    layout: "/admin"
  },
  {
    path: "/editar_perfil",
    name: "Editar Perfil",
    icon: CreateIcon,
    component: EditarPerfil,
    layout: "/admin"
  }
   /*
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
    */

];

export default dashboardRoutes;
