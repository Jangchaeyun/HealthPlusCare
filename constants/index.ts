export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr1.png",
    name: "이승협",
  },
  {
    image: "/assets/images/dr2.png",
    name: "차훈",
  },
  {
    image: "/assets/images/dr3.png",
    name: "김재현",
  },
  {
    image: "/assets/images/dr4.png",
    name: "유회승",
  },
  {
    image: "/assets/images/dr5.png",
    name: "서동성",
  },
  {
    image: "/assets/images/dr6.png",
    name: "박성진",
  },
  {
    image: "/assets/images/dr7.png",
    name: "영케이",
  },
  {
    image: "/assets/images/dr8.png",
    name: "김원필",
  },
  {
    image: "/assets/images/dr9.png",
    name: "윤도운",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
