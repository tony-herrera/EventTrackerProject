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
    fn?: string,
    ln?: string,
    br?: string,
    em?: string,
    pn?: string,
    ci?: string,
    dod?: string,
    eaos?: string,
    ar?: string,
    ds?: string,
    types?: any[]
  ) {
    this.vetId = vetId;
    this.firstName = fn;
    this.lastName = ln;
    this.branch = br;
    this.email = em;
    this.phoneNumber = pn;
    this.careerInterest = ci;
    this.dodSkillBridge = dod;
    this.eaos = eaos;
    this.assignRecruiter = ar;
    this.dutyStation = ds;
    this.types = types ? types : [];
  }
}
