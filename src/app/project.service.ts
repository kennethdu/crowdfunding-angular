import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(){
    return PROJECTS;
  }

}
