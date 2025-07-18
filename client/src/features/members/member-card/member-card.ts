import { RouterLink } from '@angular/router';
import { Member } from './../../../types/member';
import { Component, input } from '@angular/core';
import { AgePipe } from "../../../core/pipes/age-pipe";

@Component({
  selector: 'app-member-card',
  imports: [RouterLink, AgePipe],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {

  member = input.required<Member>();
}
