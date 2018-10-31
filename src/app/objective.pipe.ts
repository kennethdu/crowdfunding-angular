import {Pipe, PipeTransform } from "@angular/core";
import { Project } from './models/project.model';

@Pipe({
  name: "ObjectivePipe",
  pure: false
})
export class ObjectivePipe implements PipeTransform {
  transform(input: Project[]) {
    let outputProject = [];
    input.forEach(function(project) {
      if (project.objective > 10000) {
        outputProject.push(project);
      }
    });
    return outputProject;
  }
}