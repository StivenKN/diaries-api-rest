import { newDiaryEntry } from './types';
import { visibility, weather } from './enums';

//! Parseamos todos los datos para revisar que todos los datos estésncorrectos, esto para evitar posibles errores
const parseComment = (commentFromRequest: any): string => {
	if (!isString(commentFromRequest)) {
		throw new Error('Incorrect or mising comment');
	}

	return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
	if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
		throw new Error('Incorrect or missing date');
	}
	return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): weather => {
	if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
		throw new Error('Incorrect or missing weather');
	}
	return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: any): visibility => {
	if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
		throw new Error('Incorrect or mising visibility');
	}
	return visibilityFromRequest;
};

//! Verificar si los datos son booleanos
const isWeather = (param: any): Boolean => {
	return Object.values(weather).includes(param);
};

const isString = (string: string): Boolean => {
	return typeof string === 'string';
};

const isDate = (date: string): Boolean => {
	return Boolean(Date.parse(date));
};

const isVisibility = (param: any): Boolean => {
	return Object.values(visibility).includes(param);
};

const toNewDiaryEntry = (object: any): newDiaryEntry => {
	const newEntry: newDiaryEntry = {
		comment: parseComment(object.comment),
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
	};

	return newEntry;
};

export default toNewDiaryEntry;
