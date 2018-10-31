import { Project } from './models/project.model';
import { User } from './models/user.model';

export const USERS: User[] = [
  new User("Kenneth"),
  new User("AJ"),
  new User("Chan"),
  new User("Hyewon"),
  new User("Ryan")
];
export const PROJECTS: Project[] = [
  new Project("Project1", USERS[0], "Description1", 10000, "Save the whales.", "Kenneth's love"),
  new Project("Project2", USERS[0], "Description", 15000, "Kenneth's Korean Dream", "Kenneth's Pride"),
  new Project("Project3", USERS[3], "Description", 5000, "Hyewon's driving classes", "Hyewon's License to Kill"),
  new Project("Project4", USERS[1], "Description", 10000, "AJ's dog walking", "AJ's Jagiya and Yeobo"),
  new Project("Project5", USERS[2], "Description", 1000, "Chan's smoking budget", "Chan's curse word"),
  new Project("Project6", USERS[4], "Description", 30000, "Ryan's plastic surgery?", "Ryan's nuna")
];
