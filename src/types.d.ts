import enums from './enums'

export interface diaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<diaryEntry, 'comment'>;

export type newDiaryEntry = Omit<diaryEntry, 'id'>;
