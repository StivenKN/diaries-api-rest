import { diaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: diaryEntry[] = diaryData as diaryEntry[];

export const getEntries = (): diaryEntry[] => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
	const entry = diaries.find((d) => d.id === id);
	if (entry != null) {
		const { comment, ...restOfDiary } = entry;
		return restOfDiary;
	}
	return undefined;
};

export const getEntriesWithoutSensityInfo = (): NonSensitiveInfoDiaryEntry[] => {
	return diaries.map(({ id, date, weather, visibility }) => {
		return {
			id,
			date,
			weather,
			visibility,
		};
	});
};

export const addDiary = (newDiaryEntry: newDiaryEntry): diaryEntry => {
	const newDiary = {
		id: Math.max(...diaries.map(d => d.id)) + 1,
		...newDiaryEntry
	};
	diaries.push(newDiary);
	return newDiary;
};
