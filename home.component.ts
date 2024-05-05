import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{


            lstofHome : any =[{"title":"Welcome to Royal Riders",
            "Description":"This is a community of passionate riders who share a love for motorcycles. Join us for exciting events, connect with fellow riders, and explore new destinations together!",
            "images":["./assets/BikeCarousel2.jpg","./assets/BikeCarousel3.jpg","./assets/BikeCarousel6.jpg"]
          },
                              {"title":"Why to Choose Royal Riders",
                              "points":["Passionate community of riders",
                              "Regularly organized events and rides",
                              "Exclusive discounts on motorcycle gear and accessories",
                              "Access to expert advice and tips",
                              "Opportunities for networking and making new friends"]
                            },
                            
                              {
                                "title": 'Upcoming Events',
                                "events": [
                                  { name: 'Ride to the Mountains', location: 'Himalayas', date: 'March 15, 2024' },
                                  { name: 'Coastal Cruise', location: 'Goa', date: 'April 10, 2024' },
                                  { name: 'Track Day', location: 'Buddh International Circuit', date: 'May 5, 2024' }
                                ]
                              }
                            ]
}
                          
                            
                              



