import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../project.service';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';
import { PROJECTS, USERS } from '../mock-projects';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: Project[];
  constructor(private router: Router, private projectService: ProjectService) { 
  }
  filterByObjective: boolean = false;

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  toggleFilter() {
    this.filterByObjective = !this.filterByObjective;
  }
  fundObjective(clickedProject: Project, donation: number){
    clickedProject.objective -= donation;
  }
}
