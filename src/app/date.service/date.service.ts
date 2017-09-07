import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
    getTodaysDate(): string {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}
