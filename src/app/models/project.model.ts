import { User } from '../models/user.model';

export class Project {
  constructor(public name: string, public starter: User, public description: string, public objective: number, public plan: string, public rewards: string) {}

}