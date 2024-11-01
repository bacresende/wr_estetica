import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    Swal.fire({
      title: "Top demais!",
      text: "Em breve teremos mais coisas por aqui!",
      icon: "success"
    });
  }

}
