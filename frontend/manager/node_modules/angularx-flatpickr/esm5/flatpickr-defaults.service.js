/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function FlatpickrDefaultsInterface() { }
function FlatpickrDefaultsInterface_tsickle_Closure_declarations() {
    /**
     * Exactly the same as date format, but for the altInput field.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.altFormat;
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.altInput;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.altInputClass;
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.allowInput;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.appendTo;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.ariaDateFormat;
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.clickOpens;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.dateFormat;
    /**
     * Initial value of the hour element.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.defaultHour;
    /**
     * Initial value of the minute element.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.defaultMinute;
    /**
     * Initial value of the seconds element.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.defaultSeconds;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.disable;
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.disableMobile;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.enable;
    /**
     * Enables time picker.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.enableTime;
    /**
     * Enables seconds in the time picker.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.enableSeconds;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.formatDate;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.hourIncrement;
    /**
     * Displays the calendar inline.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.inline;
    /**
     * The maximum date that a user can pick to (inclusive).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.maxDate;
    /**
     * The minimum date that a user can start picking from (inclusive).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.minDate;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.minuteIncrement;
    /**
     * Select a single date, multiple dates or a date range.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.mode;
    /**
     * HTML for the arrow icon, used to switch months.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.nextArrow;
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.noCalendar;
    /**
     * Provide a date for 'today', which will be used instead of "new Date()"
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.now;
    /**
     * Function that expects a date string and must return a Date object.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.parseDate;
    /**
     * HTML for the left arrow icon.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.prevArrow;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.shorthandCurrentMonth;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.static;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.time24hr;
    /**
     * When true, dates will parsed, formatted, and displayed in UTC.
     * It's recommended that date strings contain the timezone, but not necessary.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.utc;
    /**
     * Enables display of week numbers in calendar.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.weekNumbers;
    /**
     * You may override the function that extracts the week numbers from a Date by supplying a getWeek function.
     * It takes in a date as a parameter and should return a corresponding string that you want to appear left of every week.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.getWeek;
    /**
     * Custom elements and input groups.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.wrap;
    /**
     * Array of plugin instances to use.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.plugins;
    /**
     * The locale object or string to use for the locale.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.locale;
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.convertModelValue;
    /**
     * The number of months shown.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.showMonths;
    /**
     * How the month should be displayed in the header of the calendar.
     * @type {?|undefined}
     */
    FlatpickrDefaultsInterface.prototype.monthSelectorType;
}
var FlatpickrDefaults = /** @class */ (function () {
    function FlatpickrDefaults() {
        /**
         * Exactly the same as date format, but for the altInput field.
         */
        this.altFormat = 'F j, Y';
        /**
         * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
         */
        this.altInput = false;
        /**
         * This class will be added to the input element created by the altInput option.
         * Note that `altInput` already inherits classes from the original input.
         */
        this.altInputClass = '';
        /**
         * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
         */
        this.allowInput = false;
        /**
         * Instead of `body`, appends the calendar to the specified node instead.
         */
        this.appendTo = undefined;
        /**
         * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
         */
        this.ariaDateFormat = 'F j, Y';
        /**
         * Whether clicking on the input should open the picker.
         * You could disable this if you wish to open the calendar manually `with.open()`.
         */
        this.clickOpens = true;
        /**
         * A string of characters which are used to define how the date will be displayed in the input box.
         * The supported characters are defined in the table below.
         */
        this.dateFormat = 'Y-m-d';
        /**
         * Initial value of the hour element.
         */
        this.defaultHour = 12;
        /**
         * Initial value of the minute element.
         */
        this.defaultMinute = 0;
        /**
         * Initial value of the seconds element.
         */
        this.defaultSeconds = 0;
        /**
         * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
         */
        this.disable = [];
        /**
         * Set disableMobile to true to always use the non-native picker.
         * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
         */
        this.disableMobile = false;
        /**
         * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
         */
        this.enable = [];
        /**
         * Enables time picker.
         */
        this.enableTime = false;
        /**
         * Enables seconds in the time picker.
         */
        this.enableSeconds = false;
        /**
         * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
         */
        this.formatDate = undefined;
        /**
         * Adjusts the step for the hour input (incl. scrolling).
         */
        this.hourIncrement = 1;
        /**
         * Displays the calendar inline.
         */
        this.inline = false;
        /**
         * The maximum date that a user can pick to (inclusive).
         */
        this.maxDate = undefined;
        /**
         * The minimum date that a user can start picking from (inclusive).
         */
        this.minDate = undefined;
        /**
         * Adjusts the step for the minute input (incl. scrolling).
         */
        this.minuteIncrement = 5;
        /**
         * Select a single date, multiple dates or a date range.
         */
        this.mode = 'single';
        /**
         * HTML for the arrow icon, used to switch months.
         */
        this.nextArrow = '>';
        /**
         * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
         */
        this.noCalendar = false;
        /**
         * Default now to the current date
         */
        this.now = new Date();
        /**
         * HTML for the left arrow icon.
         */
        this.prevArrow = '<';
        /**
         * Show the month using the shorthand version (ie, Sep instead of September).
         */
        this.shorthandCurrentMonth = false;
        /**
         * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
         */
        this.static = false;
        /**
         * Displays time picker in 24 hour mode without AM/PM selection when enabled.
         */
        this.time24hr = false;
        /**
         * When true, dates will parsed, formatted, and displayed in UTC.
         * It's recommended that date strings contain the timezone, but not necessary.
         */
        this.utc = false;
        /**
         * Enables display of week numbers in calendar.
         */
        this.weekNumbers = false;
        /**
         * Custom elements and input groups.
         */
        this.wrap = false;
        /**
         * Array of plugin instances to use.
         */
        this.plugins = [];
        /**
         * The locale object or string to use for the locale.
         */
        this.locale = 'default';
        /**
         * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
         */
        this.convertModelValue = false;
        /**
         * The number of months shown.
         */
        this.showMonths = 1;
        /**
         * How the month should be displayed in the header of the calendar.
         */
        this.monthSelectorType = 'static';
    }
    FlatpickrDefaults.decorators = [
        { type: Injectable },
    ];
    return FlatpickrDefaults;
}());
export { FlatpickrDefaults };
function FlatpickrDefaults_tsickle_Closure_declarations() {
    /**
     * Exactly the same as date format, but for the altInput field.
     * @type {?}
     */
    FlatpickrDefaults.prototype.altFormat;
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     * @type {?}
     */
    FlatpickrDefaults.prototype.altInput;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     * @type {?}
     */
    FlatpickrDefaults.prototype.altInputClass;
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     * @type {?}
     */
    FlatpickrDefaults.prototype.allowInput;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     * @type {?}
     */
    FlatpickrDefaults.prototype.appendTo;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     * @type {?}
     */
    FlatpickrDefaults.prototype.ariaDateFormat;
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     * @type {?}
     */
    FlatpickrDefaults.prototype.clickOpens;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     * @type {?}
     */
    FlatpickrDefaults.prototype.dateFormat;
    /**
     * Initial value of the hour element.
     * @type {?}
     */
    FlatpickrDefaults.prototype.defaultHour;
    /**
     * Initial value of the minute element.
     * @type {?}
     */
    FlatpickrDefaults.prototype.defaultMinute;
    /**
     * Initial value of the seconds element.
     * @type {?}
     */
    FlatpickrDefaults.prototype.defaultSeconds;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     * @type {?}
     */
    FlatpickrDefaults.prototype.disable;
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     * @type {?}
     */
    FlatpickrDefaults.prototype.disableMobile;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
     * @type {?}
     */
    FlatpickrDefaults.prototype.enable;
    /**
     * Enables time picker.
     * @type {?}
     */
    FlatpickrDefaults.prototype.enableTime;
    /**
     * Enables seconds in the time picker.
     * @type {?}
     */
    FlatpickrDefaults.prototype.enableSeconds;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     * @type {?}
     */
    FlatpickrDefaults.prototype.formatDate;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     * @type {?}
     */
    FlatpickrDefaults.prototype.hourIncrement;
    /**
     * Displays the calendar inline.
     * @type {?}
     */
    FlatpickrDefaults.prototype.inline;
    /**
     * The maximum date that a user can pick to (inclusive).
     * @type {?}
     */
    FlatpickrDefaults.prototype.maxDate;
    /**
     * The minimum date that a user can start picking from (inclusive).
     * @type {?}
     */
    FlatpickrDefaults.prototype.minDate;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     * @type {?}
     */
    FlatpickrDefaults.prototype.minuteIncrement;
    /**
     * Select a single date, multiple dates or a date range.
     * @type {?}
     */
    FlatpickrDefaults.prototype.mode;
    /**
     * HTML for the arrow icon, used to switch months.
     * @type {?}
     */
    FlatpickrDefaults.prototype.nextArrow;
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     * @type {?}
     */
    FlatpickrDefaults.prototype.noCalendar;
    /**
     * Default now to the current date
     * @type {?}
     */
    FlatpickrDefaults.prototype.now;
    /**
     * Function that expects a date string and must return a Date object.
     * @type {?}
     */
    FlatpickrDefaults.prototype.parseDate;
    /**
     * HTML for the left arrow icon.
     * @type {?}
     */
    FlatpickrDefaults.prototype.prevArrow;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     * @type {?}
     */
    FlatpickrDefaults.prototype.shorthandCurrentMonth;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     * @type {?}
     */
    FlatpickrDefaults.prototype.static;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     * @type {?}
     */
    FlatpickrDefaults.prototype.time24hr;
    /**
     * When true, dates will parsed, formatted, and displayed in UTC.
     * It's recommended that date strings contain the timezone, but not necessary.
     * @type {?}
     */
    FlatpickrDefaults.prototype.utc;
    /**
     * Enables display of week numbers in calendar.
     * @type {?}
     */
    FlatpickrDefaults.prototype.weekNumbers;
    /**
     * You may override the function that extracts the week numbers from a Date by supplying a getWeek function.
     * It takes in a date as a parameter and should return a corresponding string that you want to appear left of every week.
     * @type {?}
     */
    FlatpickrDefaults.prototype.getWeek;
    /**
     * Custom elements and input groups.
     * @type {?}
     */
    FlatpickrDefaults.prototype.wrap;
    /**
     * Array of plugin instances to use.
     * @type {?}
     */
    FlatpickrDefaults.prototype.plugins;
    /**
     * The locale object or string to use for the locale.
     * @type {?}
     */
    FlatpickrDefaults.prototype.locale;
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     * @type {?}
     */
    FlatpickrDefaults.prototype.convertModelValue;
    /**
     * The number of months shown.
     * @type {?}
     */
    FlatpickrDefaults.prototype.showMonths;
    /**
     * How the month should be displayed in the header of the calendar.
     * @type {?}
     */
    FlatpickrDefaults.prototype.monthSelectorType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvIiwic291cmNlcyI6WyJmbGF0cGlja3ItZGVmYXVsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBME5yQixRQUFROzs7O3dCQUtSLEtBQUs7Ozs7OzZCQU1ELEVBQUU7Ozs7MEJBS0osS0FBSzs7Ozt3QkFLSCxTQUFTOzs7OzhCQUtQLFFBQVE7Ozs7OzBCQU1aLElBQUk7Ozs7OzBCQU1MLE9BQU87Ozs7MkJBS0wsRUFBRTs7Ozs2QkFLQSxDQUFDOzs7OzhCQUtBLENBQUM7Ozs7dUJBS0ksRUFBRTs7Ozs7NkJBTVIsS0FBSzs7OztzQkFLQSxFQUFFOzs7OzBCQUtWLEtBQUs7Ozs7NkJBS0YsS0FBSzs7OzswQkFLUSxTQUFTOzs7OzZCQUt2QixDQUFDOzs7O3NCQUtQLEtBQUs7Ozs7dUJBS0UsU0FBUzs7Ozt1QkFLVCxTQUFTOzs7OytCQUtSLENBQUM7Ozs7b0JBS2EsUUFBUTs7Ozt5QkFLNUIsR0FBRzs7OzswQkFLRCxLQUFLOzs7O21CQUtHLElBQUksSUFBSSxFQUFFOzs7O3lCQVVwQixHQUFHOzs7O3FDQUtVLEtBQUs7Ozs7c0JBS3BCLEtBQUs7Ozs7d0JBS0gsS0FBSzs7Ozs7bUJBTVYsS0FBSzs7OzsyQkFLRyxLQUFLOzs7O29CQVdaLEtBQUs7Ozs7dUJBS0osRUFBRTs7OztzQkFLTyxTQUFTOzs7O2lDQUtOLEtBQUs7Ozs7MEJBS2IsQ0FBQzs7OztpQ0FLcUIsUUFBUTs7O2dCQTlNcEQsVUFBVTs7NEJBck5YOztTQXNOYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIERpc2FibGVFbmFibGVEYXRlID1cbiAgfCBzdHJpbmdcbiAgfCBEYXRlXG4gIHwgeyBmcm9tOiBEYXRlIHwgc3RyaW5nOyB0bzogRGF0ZSB8IHN0cmluZyB9XG4gIHwgKChkYXRlOiBEYXRlKSA9PiBib29sZWFuKTtcblxuLy8gdHNsaW50OmRpc2FibGUgbm8taW5mZXJyYWJsZS10eXBlc1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgYWx0Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBcdFNob3cgdGhlIHVzZXIgYSByZWFkYWJsZSBkYXRlIChhcyBwZXIgYWx0Rm9ybWF0KSwgYnV0IHJldHVybiBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGFsdElucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgYWx0SW5wdXRDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGFsbG93SW5wdXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIGBib2R5YCwgYXBwZW5kcyB0aGUgY2FsZW5kYXIgdG8gdGhlIHNwZWNpZmllZCBub2RlIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmRUbz86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgY2xpY2tPcGVucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRIb3VyPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0TWludXRlPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgc2Vjb25kcyBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdFNlY29uZHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctc3BlY2lmaWMtZGF0ZXNcIj5kaXNhYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgZGlzYWJsZT86IERpc2FibGVFbmFibGVEYXRlW107XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlTW9iaWxlIHRvIHRydWUgdG8gYWx3YXlzIHVzZSB0aGUgbm9uLW5hdGl2ZSBwaWNrZXIuXG4gICAqIEJ5IGRlZmF1bHQsIEZsYXRwaWNrciB1dGlsaXplcyBuYXRpdmUgZGF0ZXRpbWUgd2lkZ2V0cyB1bmxlc3MgY2VydGFpbiBvcHRpb25zIChlLmcuIGRpc2FibGUpIGFyZSB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZU1vYmlsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctYWxsLWRhdGVzLWV4Y2VwdC1zZWxlY3QtZmV3XCI+ZW5hYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgZW5hYmxlPzogRGlzYWJsZUVuYWJsZURhdGVbXTtcblxuICAvKipcbiAgICogRW5hYmxlcyB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVRpbWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHNlY29uZHMgaW4gdGhlIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlU2Vjb25kcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbGxvd3MgdXNpbmcgYSBjdXN0b20gZGF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGJ1aWx0LWluIGhhbmRsaW5nIGZvciBkYXRlIGZvcm1hdHMgdXNpbmcgZGF0ZUZvcm1hdCwgYWx0Rm9ybWF0LCBldGMuXG4gICAqL1xuICBmb3JtYXREYXRlPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBob3VyIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgaG91ckluY3JlbWVudD86IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIGlubGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHBpY2sgdG8gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtYXhEYXRlPzogc3RyaW5nIHwgRGF0ZTtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gc3RhcnQgcGlja2luZyBmcm9tIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWluRGF0ZT86IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBtaW51dGUgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBtaW51dGVJbmNyZW1lbnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBkYXRlLCBtdWx0aXBsZSBkYXRlcyBvciBhIGRhdGUgcmFuZ2UuXG4gICAqL1xuICBtb2RlPzogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ3JhbmdlJztcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGFycm93IGljb24sIHVzZWQgdG8gc3dpdGNoIG1vbnRocy5cbiAgICovXG4gIG5leHRBcnJvdz86IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGRheSBzZWxlY3Rpb24gaW4gY2FsZW5kYXIuIFVzZSBpdCBhbG9uZyB3aXRoIGBlbmFibGVUaW1lYCB0byBjcmVhdGUgYSB0aW1lIHBpY2tlci5cbiAgICovXG4gIG5vQ2FsZW5kYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgZGF0ZSBmb3IgJ3RvZGF5Jywgd2hpY2ggd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgXCJuZXcgRGF0ZSgpXCJcbiAgICovXG4gIG5vdz86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIGRhdGUgc3RyaW5nIGFuZCBtdXN0IHJldHVybiBhIERhdGUgb2JqZWN0LlxuICAgKi9cbiAgcGFyc2VEYXRlPzogKHN0cjogc3RyaW5nKSA9PiBEYXRlO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgbGVmdCBhcnJvdyBpY29uLlxuICAgKi9cbiAgcHJldkFycm93Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtb250aCB1c2luZyB0aGUgc2hvcnRoYW5kIHZlcnNpb24gKGllLCBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXIpLlxuICAgKi9cbiAgc2hvcnRoYW5kQ3VycmVudE1vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIHN0YXRpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZSB3aXRob3V0IEFNL1BNIHNlbGVjdGlvbiB3aGVuIGVuYWJsZWQuXG4gICAqL1xuICB0aW1lMjRocj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZGF0ZXMgd2lsbCBwYXJzZWQsIGZvcm1hdHRlZCwgYW5kIGRpc3BsYXllZCBpbiBVVEMuXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCBkYXRlIHN0cmluZ3MgY29udGFpbiB0aGUgdGltZXpvbmUsIGJ1dCBub3QgbmVjZXNzYXJ5LlxuICAgKi9cbiAgdXRjPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBkaXNwbGF5IG9mIHdlZWsgbnVtYmVycyBpbiBjYWxlbmRhci5cbiAgICovXG4gIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWW91IG1heSBvdmVycmlkZSB0aGUgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgd2VlayBudW1iZXJzIGZyb20gYSBEYXRlIGJ5IHN1cHBseWluZyBhIGdldFdlZWsgZnVuY3Rpb24uXG4gICAqIEl0IHRha2VzIGluIGEgZGF0ZSBhcyBhIHBhcmFtZXRlciBhbmQgc2hvdWxkIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGxlZnQgb2YgZXZlcnkgd2Vlay5cbiAgICovXG4gIGdldFdlZWs/OiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIHdyYXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwbHVnaW4gaW5zdGFuY2VzIHRvIHVzZS5cbiAgICovXG4gIHBsdWdpbnM/OiBhbnlbXTtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSBvYmplY3Qgb3Igc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGxvY2FsZS5cbiAgICovXG4gIGxvY2FsZT86IG9iamVjdCB8IHN0cmluZztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIGNvbnZlcnRNb2RlbFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgc2hvd24uXG4gICAqL1xuICBzaG93TW9udGhzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgdGhlIG1vbnRoIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBtb250aFNlbGVjdG9yVHlwZT86ICdzdGF0aWMnIHwgJ2Ryb3Bkb3duJztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsYXRwaWNrckRlZmF1bHRzIGltcGxlbWVudHMgRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRXhhY3RseSB0aGUgc2FtZSBhcyBkYXRlIGZvcm1hdCwgYnV0IGZvciB0aGUgYWx0SW5wdXQgZmllbGQuXG4gICAqL1xuICBhbHRGb3JtYXQ6IHN0cmluZyA9ICdGIGosIFknO1xuXG4gIC8qKlxuICAgKiBcdFNob3cgdGhlIHVzZXIgYSByZWFkYWJsZSBkYXRlIChhcyBwZXIgYWx0Rm9ybWF0KSwgYnV0IHJldHVybiBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGFsdElucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBhbHRJbnB1dCBvcHRpb24uXG4gICAqIE5vdGUgdGhhdCBgYWx0SW5wdXRgIGFscmVhZHkgaW5oZXJpdHMgY2xhc3NlcyBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dC5cbiAgICovXG4gIGFsdElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYSBkYXRlIGRpcmVjdGx5IGlucHV0IHRoZSBpbnB1dCBmaWVsZC4gQnkgZGVmYXVsdCwgZGlyZWN0IGVudHJ5IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgYWxsb3dJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIGBib2R5YCwgYXBwZW5kcyB0aGUgY2FsZW5kYXIgdG8gdGhlIHNwZWNpZmllZCBub2RlIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmRUbzogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgaG93IHRoZSBkYXRlIHdpbGwgYmUgZm9ybWF0dGVkIGluIHRoZSBhcmlhLWxhYmVsIGZvciBjYWxlbmRhciBkYXlzLCB1c2luZyB0aGUgc2FtZSB0b2tlbnMgYXMgZGF0ZUZvcm1hdC4gSWYgeW91IGNoYW5nZSB0aGlzLCB5b3Ugc2hvdWxkIGNob29zZSBhIHZhbHVlIHRoYXQgd2lsbCBtYWtlIHNlbnNlIGlmIGEgc2NyZWVuIHJlYWRlciByZWFkcyBpdCBvdXQgbG91ZC5cbiAgICovXG4gIGFyaWFEYXRlRm9ybWF0Pzogc3RyaW5nID0gJ0YgaiwgWSc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgb24gdGhlIGlucHV0IHNob3VsZCBvcGVuIHRoZSBwaWNrZXIuXG4gICAqIFlvdSBjb3VsZCBkaXNhYmxlIHRoaXMgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgYHdpdGgub3BlbigpYC5cbiAgICovXG4gIGNsaWNrT3BlbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBob3cgdGhlIGRhdGUgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJveC5cbiAgICogVGhlIHN1cHBvcnRlZCBjaGFyYWN0ZXJzIGFyZSBkZWZpbmVkIGluIHRoZSB0YWJsZSBiZWxvdy5cbiAgICovXG4gIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdZLW0tZCc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRIb3VyPzogbnVtYmVyID0gMTI7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIG1pbnV0ZSBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdE1pbnV0ZT86IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIHNlY29uZHMgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRTZWNvbmRzPzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlTW9iaWxlIHRvIHRydWUgdG8gYWx3YXlzIHVzZSB0aGUgbm9uLW5hdGl2ZSBwaWNrZXIuXG4gICAqIEJ5IGRlZmF1bHQsIEZsYXRwaWNrciB1dGlsaXplcyBuYXRpdmUgZGF0ZXRpbWUgd2lkZ2V0cyB1bmxlc3MgY2VydGFpbiBvcHRpb25zIChlLmcuIGRpc2FibGUpIGFyZSB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZU1vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGVuYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHNlY29uZHMgaW4gdGhlIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlU2Vjb25kczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNpbmcgYSBjdXN0b20gZGF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGJ1aWx0LWluIGhhbmRsaW5nIGZvciBkYXRlIGZvcm1hdHMgdXNpbmcgZGF0ZUZvcm1hdCwgYWx0Rm9ybWF0LCBldGMuXG4gICAqL1xuICBmb3JtYXREYXRlPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc3RlcCBmb3IgdGhlIGhvdXIgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBob3VySW5jcmVtZW50OiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY2FsZW5kYXIgaW5saW5lLlxuICAgKi9cbiAgaW5saW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHBpY2sgdG8gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtYXhEYXRlOiBzdHJpbmcgfCBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBzdGFydCBwaWNraW5nIGZyb20gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtaW5EYXRlOiBzdHJpbmcgfCBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgbWludXRlIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgbWludXRlSW5jcmVtZW50OiBudW1iZXIgPSA1O1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgZGF0ZSwgbXVsdGlwbGUgZGF0ZXMgb3IgYSBkYXRlIHJhbmdlLlxuICAgKi9cbiAgbW9kZTogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ3JhbmdlJyA9ICdzaW5nbGUnO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgYXJyb3cgaWNvbiwgdXNlZCB0byBzd2l0Y2ggbW9udGhzLlxuICAgKi9cbiAgbmV4dEFycm93OiBzdHJpbmcgPSAnPic7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBkYXkgc2VsZWN0aW9uIGluIGNhbGVuZGFyLiBVc2UgaXQgYWxvbmcgd2l0aCBgZW5hYmxlVGltZWAgdG8gY3JlYXRlIGEgdGltZSBwaWNrZXIuXG4gICAqL1xuICBub0NhbGVuZGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbm93IHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICovXG4gIG5vdzogRGF0ZSB8IHN0cmluZyB8IG51bWJlciA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIGRhdGUgc3RyaW5nIGFuZCBtdXN0IHJldHVybiBhIERhdGUgb2JqZWN0LlxuICAgKi9cbiAgcGFyc2VEYXRlOiAoc3RyOiBzdHJpbmcpID0+IERhdGU7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBsZWZ0IGFycm93IGljb24uXG4gICAqL1xuICBwcmV2QXJyb3c6IHN0cmluZyA9ICc8JztcblxuICAvKipcbiAgICogU2hvdyB0aGUgbW9udGggdXNpbmcgdGhlIHNob3J0aGFuZCB2ZXJzaW9uIChpZSwgU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyKS5cbiAgICovXG4gIHNob3J0aGFuZEN1cnJlbnRNb250aDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiB0aGUgY2FsZW5kYXIgaW5zaWRlIHRoZSB3cmFwcGVyIGFuZCBuZXh0IHRvIHRoZSBpbnB1dCBlbGVtZW50LiAoTGVhdmUgYGZhbHNlYCB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmcpLlxuICAgKi9cbiAgc3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZSB3aXRob3V0IEFNL1BNIHNlbGVjdGlvbiB3aGVuIGVuYWJsZWQuXG4gICAqL1xuICB0aW1lMjRocjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGRhdGVzIHdpbGwgcGFyc2VkLCBmb3JtYXR0ZWQsIGFuZCBkaXNwbGF5ZWQgaW4gVVRDLlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgZGF0ZSBzdHJpbmdzIGNvbnRhaW4gdGhlIHRpbWV6b25lLCBidXQgbm90IG5lY2Vzc2FyeS5cbiAgICovXG4gIHV0YzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGRpc3BsYXkgb2Ygd2VlayBudW1iZXJzIGluIGNhbGVuZGFyLlxuICAgKi9cbiAgd2Vla051bWJlcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogWW91IG1heSBvdmVycmlkZSB0aGUgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgd2VlayBudW1iZXJzIGZyb20gYSBEYXRlIGJ5IHN1cHBseWluZyBhIGdldFdlZWsgZnVuY3Rpb24uXG4gICAqIEl0IHRha2VzIGluIGEgZGF0ZSBhcyBhIHBhcmFtZXRlciBhbmQgc2hvdWxkIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGxlZnQgb2YgZXZlcnkgd2Vlay5cbiAgICovXG4gIGdldFdlZWs6IChkYXRlOiBEYXRlKSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBlbGVtZW50cyBhbmQgaW5wdXQgZ3JvdXBzLlxuICAgKi9cbiAgd3JhcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwbHVnaW4gaW5zdGFuY2VzIHRvIHVzZS5cbiAgICovXG4gIHBsdWdpbnM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBsb2NhbGU6IG9iamVjdCB8IHN0cmluZyA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIGNvbnZlcnRNb2RlbFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbW9udGhzIHNob3duLlxuICAgKi9cbiAgc2hvd01vbnRoczogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogSG93IHRoZSBtb250aCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIGNhbGVuZGFyLlxuICAgKi9cbiAgbW9udGhTZWxlY3RvclR5cGU6ICdzdGF0aWMnIHwgJ2Ryb3Bkb3duJyA9ICdzdGF0aWMnO1xufVxuIl19