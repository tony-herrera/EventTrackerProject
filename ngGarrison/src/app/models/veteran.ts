export class Veteran {
  vetId: number;
  firstName: string;
  lastName: string;
  branch: string;
  email: string;
  phoneNumber: string;
  careerInterest: string;
  dodSkillBridge: string;
  eaos: string;
  assignRecruiter: string;
  dutyStation: string;
  types: any[];

  constructor(
    vetId?: number,
    firstName?: string,
    lastName?: string,
    branch?: string,
    email?: string,
    phoneNumber?: string,
    careerInterest?: string,
    dodSkillBridge?: string,
    eaos?: string,
    assignRecruiter?: string,
    dutyStation?: string,
    types?: any[]
  ) {
    this.vetId = vetId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.branch = branch;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.careerInterest = careerInterest;
    this.dodSkillBridge = dodSkillBridge;
    this.eaos = eaos;
    this.assignRecruiter = assignRecruiter;
    this.dutyStation = dutyStation;
    this.types = types ? types : [];
  }
}
