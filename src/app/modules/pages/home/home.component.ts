import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import Swal from "sweetalert2";
import { TableModule } from "primeng/table";
import { ChartModule } from "primeng/chart";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule, TableModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  lineChartData: any;
  orders!: any[];
  barChartData: any;
  doughnutChartData: any;
  transactions!: any[];

  ngOnInit(): void {
    // Swal.fire({
    //   title: "Top demais!",
    //   text: "Em breve teremos mais coisas por aqui!",
    //   icon: "success",
    // });

    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [
        {
          label: 'Sales',
          data: [100, 200, 300, 400, 500, 600, 700, 800],
          borderColor: '#3498db',
          fill: false,
        },
      ],
    };
    
    this.barChartData = {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [
        {
          label: 'Performance',
          data: [75, 90, 65, 85],
          backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'],
        },
      ],
    };
    
    this.doughnutChartData = {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [
        {
          data: [50, 30, 20],
          backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
        },
      ],
    };
    
    this.transactions = [
      { id: 'T123', customer: 'Alice', date: '2024-10-10', amount: 120, status: 'Completed' },
      { id: 'T124', customer: 'Bob', date: '2024-10-11', amount: 80, status: 'Pending' },
      { id: 'T125', customer: 'Charlie', date: '2024-10-12', amount: 200, status: 'Failed' },
    ];
    
  }
}
