import { Component } from '@angular/core';
import { ServiciosSection } from './servicios-section/servicios-section'; // 👈 importa tu componente
import { QuienesomosSection } from './quienesomos-section/quienesomos-section'; // 👈 importa tu componente

@Component({
  selector: 'app-home',
  standalone: true, // 👈 agrega esto
  imports: [ServiciosSection, QuienesomosSection], // 👈 agrega el componente aquí
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
