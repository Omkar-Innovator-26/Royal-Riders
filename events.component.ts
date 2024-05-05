import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
        lstofEvents : any = [{"NameofLocation":"Pune","EventId":101,"DateoftheEvent":new Date(),"StatusFrom":"9AM","EndOn":"5PM"},
                             {"NameofLocation":"Mumbai","EventId":201,"DateoftheEvent":new Date(2023,3,25),"StatusFrom":"10AM","EndOn":"7:30PM"},
                             {"NameofLocation":"Nashik","EventId":301,"DateoftheEvent":new Date(2022,4,10),"StatusFrom":"11AM","EndOn":"6PM"}
      ];
}
