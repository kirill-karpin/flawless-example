export type TUrl = string;
export type TDate = string;
export type TDateTime = string;
export type TTime = string;
export type THtml = string;
export type TText = string;
export type TJson = Record<string, any>;

export interface IDateRange {
  since: TDate;
  until: TDate;
}

export type Lang = 'ru' | 'en';
