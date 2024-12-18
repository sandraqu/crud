import { Opaque } from "type-fest";

export type PersonId = Opaque<number, "PersonId">;
export enum PersonType {
  oaAdmin = 1,
  orgAdmin = 2,
  UnitAdmin = 3,
  Advisor = 4,
  Client = 5,
  TrustedContact = 6,
  Beneficiary = 7,
}

export interface PersonDto {
  id: PersonId;
  typeId: PersonType;
  maritalStatusId?: number;
  employment?: EmploymentDto;
  suffixId?: number;
  firstName: string;
  lastName: string;
  legalName: string;
  ssn?: string;
  lastFourSSN?: string;
  dob?: string;
  citizenshipCountryId?: number;
  emails?: EmailDto[];
  phones?: PhoneDto[];
  addresses?: AddressDto[];
  finProfile?: FinProfileDto;
  disclosures?: Partial<PersonDisclosureDto>;
  trustedContacts?: PersonDto[];
}
export interface PersonDisclosureDto {
  isAffiliatedExchangeOrFinra: boolean;
  firmName?: string;
  isPoliticallyExposed: boolean;
  politicalOrgName?: string;
  immediateFamilyLegalNames?: string[];
  isControlPerson: boolean;
  companySymbols?: string[];
  isCorrespondentEmployee?: boolean;
  isCustodianEmployee?: boolean;
  isMaintainedForForeignFinancialInstitution?: boolean;
  isForeignBank?: boolean;
}
export interface FinProfileDto {
  doesBackupWithholdingApply?: boolean;
  federalTaxBracketPercent?: number;
  annualIncomeId: number;
  liquidNetWorthId?: number;
  totalNetWorthId: number;
  riskLevelId?: number;
  investmentObjectiveId?: number;
}
export interface AddressDto {
  id: number;
  typeId: number;
  street1: string;
  street2?: string;
  street3?: string;
  city: string;
  stateId?: number;
  postalCode: string;
  countryId?: number;
}
export interface PhoneDto {
  id: number;
  typeId: number;
  countryCodeId?: number;
  number: string;
}
export interface EmailDto {
  id: number;
  typeId: number;
  email: string;
}
export interface EmploymentDto {
  statusId?: number;
  employer?: string;
  position?: string;
  yearsEmployedId?: number;
  street1?: string;
  street2?: string;
  street3?: string;
  city?: string;
  stateId?: number;
  postalCode?: string;
  countryId?: number;
}
