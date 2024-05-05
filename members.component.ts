import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
        lstofMember : any=[{"Username":"john_doe","profilepicture":"./assets/Profile1.jpg","Bio":"Passionate rider with a love for adventure."},
                            {"Username":"jane_smith","profilepicture":"./assets/Profile2.jpg","Bio":"Exploring the world one ride at a time."},
                            {"Username":"john_drake","profilepicture":"./assets/Profile3.jpg","Bio":"Experienced rider with a passion for long-distance touring. Enthusiastic about sharing tips on maintenance and gear."}
      ];
}
