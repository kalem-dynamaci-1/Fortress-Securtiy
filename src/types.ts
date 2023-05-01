export interface DisplayServiceType {
  title: string;
  description: string;
  img_url: string;
}

export interface ResumeData {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phoneNumber: string;
  address: string;
  idType: string;
  idNumber: string;
  gender: string;
  resume: null | File;
}
