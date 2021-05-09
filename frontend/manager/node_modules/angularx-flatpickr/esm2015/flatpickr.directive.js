/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Output, EventEmitter, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { FlatpickrDefaults } from './flatpickr-defaults.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import flatpickr from 'flatpickr';
/**
 * @record
 */
export function FlatPickrOutputOptions() { }
function FlatPickrOutputOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlatPickrOutputOptions.prototype.selectedDates;
    /** @type {?} */
    FlatPickrOutputOptions.prototype.dateString;
    /** @type {?} */
    FlatPickrOutputOptions.prototype.instance;
}
/**
 * @record
 */
export function FlatPickrDayCreateOutputOptions() { }
function FlatPickrDayCreateOutputOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlatPickrDayCreateOutputOptions.prototype.dayElement;
}
export const /** @type {?} */ FLATPICKR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FlatpickrDirective),
    //tslint:disable-line
    multi: true
};
export class FlatpickrDirective {
    /**
     * @param {?} elm
     * @param {?} defaults
     * @param {?} renderer
     */
    constructor(elm, defaults, renderer) {
        this.elm = elm;
        this.defaults = defaults;
        this.renderer = renderer;
        /**
         * Object-options that can be user for multiple instances of Flatpickr.
         * Option from this object is applied only if specific option is not specified.
         * Example:
         * ```typescript
         * options: FlatpickrDefaultsInterface = {
         *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
         *      altInput: true        // will be used since specific attribute is not provided
         * };
         * ```
         * ```html
         * <input
         *   class="form-control"
         *   type="text"
         *   mwlFlatpickr
         *   [options]="options"
         *   altFormat="d/m/Y">
         * ```
         */
        this.options = {};
        /**
         * Gets triggered once the calendar is in a ready state
         */
        this.flatpickrReady = new EventEmitter();
        /**
         * Gets triggered when the user selects a date, or changes the time on a selected date.
         */
        this.flatpickrChange = new EventEmitter();
        /**
         * Gets triggered when the input value is updated with a new date string.
         */
        this.flatpickrValueUpdate = new EventEmitter();
        /**
         * Gets triggered when the calendar is opened.
         */
        this.flatpickrOpen = new EventEmitter();
        /**
         * Gets triggered when the calendar is closed.
         */
        this.flatpickrClose = new EventEmitter();
        /**
         * Gets triggered when the month is changed, either by the user or programmatically.
         */
        this.flatpickrMonthChange = new EventEmitter();
        /**
         * Gets triggered when the year is changed, either by the user or programmatically.
         */
        this.flatpickrYearChange = new EventEmitter();
        /**
         * Take full control of every date cell with this output
         */
        this.flatpickrDayCreate = new EventEmitter();
        this.isDisabled = false;
        this.onChangeFn = () => { };
        this.onTouchedFn = () => { };
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ options = {
            altFormat: this.altFormat,
            altInput: this.altInput,
            altInputClass: this.altInputClass,
            allowInput: this.allowInput,
            appendTo: this.appendTo,
            ariaDateFormat: this.ariaDateFormat,
            clickOpens: this.clickOpens,
            dateFormat: this.dateFormat,
            defaultHour: this.defaultHour,
            defaultMinute: this.defaultMinute,
            defaultSeconds: this.defaultSeconds,
            disable: this.disable,
            disableMobile: this.disableMobile,
            enable: this.enable,
            enableTime: this.enableTime,
            enableSeconds: this.enableSeconds,
            formatDate: this.formatDate,
            hourIncrement: this.hourIncrement,
            defaultDate: this.initialValue,
            inline: this.inline,
            maxDate: this.maxDate,
            minDate: this.minDate,
            minuteIncrement: this.minuteIncrement,
            mode: this.mode,
            nextArrow: this.nextArrow,
            noCalendar: this.noCalendar,
            now: this.now,
            parseDate: this.parseDate,
            prevArrow: this.prevArrow,
            shorthandCurrentMonth: this.shorthandCurrentMonth,
            showMonths: this.showMonths,
            monthSelectorType: this.monthSelectorType,
            static: this.static,
            time24hr: this.time24hr,
            weekNumbers: this.weekNumbers,
            getWeek: this.getWeek,
            wrap: this.wrap,
            plugins: this.plugins,
            locale: this.locale,
            onChange: (selectedDates, dateString, instance) => {
                this.flatpickrChange.emit({ selectedDates, dateString, instance });
            },
            onOpen: (selectedDates, dateString, instance) => {
                this.flatpickrOpen.emit({ selectedDates, dateString, instance });
            },
            onClose: (selectedDates, dateString, instance) => {
                this.flatpickrClose.emit({ selectedDates, dateString, instance });
            },
            onMonthChange: (selectedDates, dateString, instance) => {
                this.flatpickrMonthChange.emit({ selectedDates, dateString, instance });
            },
            onYearChange: (selectedDates, dateString, instance) => {
                this.flatpickrYearChange.emit({ selectedDates, dateString, instance });
            },
            onReady: (selectedDates, dateString, instance) => {
                this.flatpickrReady.emit({ selectedDates, dateString, instance });
            },
            onValueUpdate: (selectedDates, dateString, instance) => {
                this.flatpickrValueUpdate.emit({ selectedDates, dateString, instance });
            },
            onDayCreate: (selectedDates, dateString, instance, dayElement) => {
                this.flatpickrDayCreate.emit({
                    selectedDates,
                    dateString,
                    instance,
                    dayElement
                });
            }
        };
        Object.keys(options).forEach(key => {
            if (typeof options[key] === 'undefined') {
                if (typeof this.options[key] !== 'undefined') {
                    options[key] = (/** @type {?} */ (this.options))[key];
                }
                else {
                    options[key] = (/** @type {?} */ (this.defaults))[key];
                }
            }
        });
        options.time_24hr = options.time24hr;
        // workaround bug in flatpickr 4.6 where it doesn't copy the classes across
        // TODO - remove once fix in https://github.com/flatpickr/flatpickr/issues/1860 is released
        options.altInputClass =
            (options.altInputClass || '') + ' ' + this.elm.nativeElement.className;
        this.instance = /** @type {?} */ (flatpickr(this.elm.nativeElement, options));
        this.setDisabledState(this.isDisabled);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance) {
            Object.keys(changes).forEach(inputKey => {
                this.instance.set(/** @type {?} */ (inputKey), (/** @type {?} */ (this))[inputKey]);
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.instance.destroy();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        let /** @type {?} */ convertedValue = value;
        if (this.convertModelValue && this.mode === 'range' && value) {
            convertedValue = [value.from, value.to];
        }
        if (this.instance) {
            this.instance.setDate(convertedValue);
        }
        else {
            // flatpickr hasn't been initialised yet, store the value for later use
            this.initialValue = convertedValue;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.instance) {
            if (this.isDisabled) {
                this.renderer.setProperty(this.instance._input, 'disabled', 'disabled');
            }
            else {
                this.renderer.removeAttribute(this.instance._input, 'disabled');
            }
        }
    }
    /**
     * @return {?}
     */
    inputChanged() {
        const /** @type {?} */ value = this.elm.nativeElement.value;
        if (this.convertModelValue && typeof value === 'string') {
            switch (this.mode) {
                case 'multiple':
                    const /** @type {?} */ dates = value
                        .split('; ')
                        .map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
                    this.onChangeFn(dates);
                    break;
                case 'range':
                    const [from, to] = value
                        .split(this.instance.l10n.rangeSeparator)
                        .map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
                    this.onChangeFn({ from, to });
                    break;
                case 'single':
                default:
                    this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
            }
        }
        else {
            this.onChangeFn(value);
        }
    }
}
FlatpickrDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlFlatpickr]',
                providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
                host: {
                    // tslint:disable-line use-host-property-decorator
                    '(blur)': 'onTouchedFn()'
                }
            },] },
];
/** @nocollapse */
FlatpickrDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: FlatpickrDefaults },
    { type: Renderer2 }
];
FlatpickrDirective.propDecorators = {
    options: [{ type: Input }],
    altFormat: [{ type: Input }],
    altInput: [{ type: Input }],
    altInputClass: [{ type: Input }],
    allowInput: [{ type: Input }],
    appendTo: [{ type: Input }],
    ariaDateFormat: [{ type: Input }],
    clickOpens: [{ type: Input }],
    dateFormat: [{ type: Input }],
    defaultHour: [{ type: Input }],
    defaultMinute: [{ type: Input }],
    defaultSeconds: [{ type: Input }],
    disable: [{ type: Input }],
    disableMobile: [{ type: Input }],
    enable: [{ type: Input }],
    enableTime: [{ type: Input }],
    enableSeconds: [{ type: Input }],
    formatDate: [{ type: Input }],
    hourIncrement: [{ type: Input }],
    inline: [{ type: Input }],
    maxDate: [{ type: Input }],
    minDate: [{ type: Input }],
    minuteIncrement: [{ type: Input }],
    mode: [{ type: Input }],
    nextArrow: [{ type: Input }],
    noCalendar: [{ type: Input }],
    now: [{ type: Input }],
    parseDate: [{ type: Input }],
    prevArrow: [{ type: Input }],
    shorthandCurrentMonth: [{ type: Input }],
    showMonths: [{ type: Input }],
    static: [{ type: Input }],
    time24hr: [{ type: Input }],
    weekNumbers: [{ type: Input }],
    getWeek: [{ type: Input }],
    wrap: [{ type: Input }],
    plugins: [{ type: Input }],
    locale: [{ type: Input }],
    convertModelValue: [{ type: Input }],
    monthSelectorType: [{ type: Input }],
    flatpickrReady: [{ type: Output }],
    flatpickrChange: [{ type: Output }],
    flatpickrValueUpdate: [{ type: Output }],
    flatpickrOpen: [{ type: Output }],
    flatpickrClose: [{ type: Output }],
    flatpickrMonthChange: [{ type: Output }],
    flatpickrYearChange: [{ type: Output }],
    flatpickrDayCreate: [{ type: Output }],
    inputChanged: [{ type: HostListener, args: ['input',] }]
};
function FlatpickrDirective_tsickle_Closure_declarations() {
    /**
     * Object-options that can be user for multiple instances of Flatpickr.
     * Option from this object is applied only if specific option is not specified.
     * Example:
     * ```typescript
     * options: FlatpickrDefaultsInterface = {
     *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
     *      altInput: true        // will be used since specific attribute is not provided
     * };
     * ```
     * ```html
     * <input
     *   class="form-control"
     *   type="text"
     *   mwlFlatpickr
     *   [options]="options"
     *   altFormat="d/m/Y">
     * ```
     * @type {?}
     */
    FlatpickrDirective.prototype.options;
    /**
     * Exactly the same as date format, but for the altInput field.
     * @type {?}
     */
    FlatpickrDirective.prototype.altFormat;
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     * @type {?}
     */
    FlatpickrDirective.prototype.altInput;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     * @type {?}
     */
    FlatpickrDirective.prototype.altInputClass;
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     * @type {?}
     */
    FlatpickrDirective.prototype.allowInput;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     * @type {?}
     */
    FlatpickrDirective.prototype.appendTo;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     * @type {?}
     */
    FlatpickrDirective.prototype.ariaDateFormat;
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     * @type {?}
     */
    FlatpickrDirective.prototype.clickOpens;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     * @type {?}
     */
    FlatpickrDirective.prototype.dateFormat;
    /**
     * Initial value of the hour element.
     * @type {?}
     */
    FlatpickrDirective.prototype.defaultHour;
    /**
     * Initial value of the minute element.
     * @type {?}
     */
    FlatpickrDirective.prototype.defaultMinute;
    /**
     * Initial value of the seconds element.
     * @type {?}
     */
    FlatpickrDirective.prototype.defaultSeconds;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     * @type {?}
     */
    FlatpickrDirective.prototype.disable;
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     * @type {?}
     */
    FlatpickrDirective.prototype.disableMobile;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
     * @type {?}
     */
    FlatpickrDirective.prototype.enable;
    /**
     * Enables time picker.
     * @type {?}
     */
    FlatpickrDirective.prototype.enableTime;
    /**
     * Enables seconds in the time picker.
     * @type {?}
     */
    FlatpickrDirective.prototype.enableSeconds;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     * @type {?}
     */
    FlatpickrDirective.prototype.formatDate;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     * @type {?}
     */
    FlatpickrDirective.prototype.hourIncrement;
    /**
     * Displays the calendar inline.
     * @type {?}
     */
    FlatpickrDirective.prototype.inline;
    /**
     * The maximum date that a user can pick to (inclusive).
     * @type {?}
     */
    FlatpickrDirective.prototype.maxDate;
    /**
     * The minimum date that a user can start picking from (inclusive).
     * @type {?}
     */
    FlatpickrDirective.prototype.minDate;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     * @type {?}
     */
    FlatpickrDirective.prototype.minuteIncrement;
    /**
     * Select a single date, multiple dates or a date range.
     * @type {?}
     */
    FlatpickrDirective.prototype.mode;
    /**
     * HTML for the arrow icon, used to switch months.
     * @type {?}
     */
    FlatpickrDirective.prototype.nextArrow;
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     * @type {?}
     */
    FlatpickrDirective.prototype.noCalendar;
    /**
     * Provide a date for 'today', which will be used instead of "new Date()"
     * @type {?}
     */
    FlatpickrDirective.prototype.now;
    /**
     * Function that expects a date string and must return a Date object.
     * @type {?}
     */
    FlatpickrDirective.prototype.parseDate;
    /**
     * HTML for the left arrow icon.
     * @type {?}
     */
    FlatpickrDirective.prototype.prevArrow;
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     * @type {?}
     */
    FlatpickrDirective.prototype.shorthandCurrentMonth;
    /**
     * The number of months shown.
     * @type {?}
     */
    FlatpickrDirective.prototype.showMonths;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     * @type {?}
     */
    FlatpickrDirective.prototype.static;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     * @type {?}
     */
    FlatpickrDirective.prototype.time24hr;
    /**
     * Enables display of week numbers in calendar.
     * @type {?}
     */
    FlatpickrDirective.prototype.weekNumbers;
    /**
     * You may override the function that extracts the week numbers from a Date by supplying a getWeek function.
     * It takes in a date as a parameter and should return a corresponding string that you want to appear left of every week.
     * @type {?}
     */
    FlatpickrDirective.prototype.getWeek;
    /**
     * Custom elements and input groups.
     * @type {?}
     */
    FlatpickrDirective.prototype.wrap;
    /**
     * Array of plugin instances to use.
     * @type {?}
     */
    FlatpickrDirective.prototype.plugins;
    /**
     * The locale object or string to use for the locale.
     * @type {?}
     */
    FlatpickrDirective.prototype.locale;
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     * @type {?}
     */
    FlatpickrDirective.prototype.convertModelValue;
    /**
     * How the month should be displayed in the header of the calendar.
     * @type {?}
     */
    FlatpickrDirective.prototype.monthSelectorType;
    /**
     * Gets triggered once the calendar is in a ready state
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrReady;
    /**
     * Gets triggered when the user selects a date, or changes the time on a selected date.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrChange;
    /**
     * Gets triggered when the input value is updated with a new date string.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrValueUpdate;
    /**
     * Gets triggered when the calendar is opened.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrOpen;
    /**
     * Gets triggered when the calendar is closed.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrClose;
    /**
     * Gets triggered when the month is changed, either by the user or programmatically.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrMonthChange;
    /**
     * Gets triggered when the year is changed, either by the user or programmatically.
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrYearChange;
    /**
     * Take full control of every date cell with this output
     * @type {?}
     */
    FlatpickrDirective.prototype.flatpickrDayCreate;
    /** @type {?} */
    FlatpickrDirective.prototype.instance;
    /** @type {?} */
    FlatpickrDirective.prototype.isDisabled;
    /** @type {?} */
    FlatpickrDirective.prototype.initialValue;
    /** @type {?} */
    FlatpickrDirective.prototype.onChangeFn;
    /** @type {?} */
    FlatpickrDirective.prototype.onTouchedFn;
    /** @type {?} */
    FlatpickrDirective.prototype.elm;
    /** @type {?} */
    FlatpickrDirective.prototype.defaults;
    /** @type {?} */
    FlatpickrDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHBpY2tyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ4LWZsYXRwaWNrci8iLCJzb3VyY2VzIjpbImZsYXRwaWNrci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUlaLFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxpQkFBaUIsRUFHbEIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEMsTUFBTSxDQUFDLHVCQUFNLGdDQUFnQyxHQUFRO0lBQ25ELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBVUYsTUFBTTs7Ozs7O0lBOFJKLFlBQ1UsS0FDQSxVQUNBO1FBRkEsUUFBRyxHQUFILEdBQUc7UUFDSCxhQUFRLEdBQVIsUUFBUTtRQUNSLGFBQVEsR0FBUixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE1UTZCLEVBQUU7Ozs7OEJBNk1NLElBQUksWUFBWSxFQUFFOzs7OytCQU1qQixJQUFJLFlBQVksRUFBRTs7OztvQ0FRdEUsSUFBSSxZQUFZLEVBQUU7Ozs7NkJBTWdDLElBQUksWUFBWSxFQUFFOzs7OzhCQU1qQixJQUFJLFlBQVksRUFBRTs7OztvQ0FRckUsSUFBSSxZQUFZLEVBQUU7Ozs7bUNBUWxCLElBQUksWUFBWSxFQUFFOzs7O2tDQVFsQixJQUFJLFlBQVksRUFBRTswQkFHRCxLQUFLOzBCQUdTLEdBQUcsRUFBRSxJ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TTs0QkFRTixNQUFNOzZCQU1OLE1BQU07bUNBTU4sTUFBTTtrQ0FRTixNQUFNO2lDQVFOLE1BQU07MkJBa0xOLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZsYXRwaWNrckRlZmF1bHRzLFxuICBEaXNhYmxlRW5hYmxlRGF0ZSxcbiAgRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Vcbn0gZnJvbSAnLi9mbGF0cGlja3ItZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdFBpY2tyT3V0cHV0T3B0aW9ucyB7XG4gIHNlbGVjdGVkRGF0ZXM6IERhdGVbXTtcbiAgZGF0ZVN0cmluZzogc3RyaW5nO1xuICBpbnN0YW5jZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRQaWNrckRheUNyZWF0ZU91dHB1dE9wdGlvbnNcbiAgZXh0ZW5kcyBGbGF0UGlja3JPdXRwdXRPcHRpb25zIHtcbiAgZGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBGTEFUUElDS1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRmxhdHBpY2tyRGlyZWN0aXZlKSwgLy90c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRmxhdHBpY2tyXScsXG4gIHByb3ZpZGVyczogW0ZMQVRQSUNLUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmUgdXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWRGbigpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZsYXRwaWNrckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiBPYmplY3Qtb3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VyIGZvciBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgRmxhdHBpY2tyLlxuICAgKiBPcHRpb24gZnJvbSB0aGlzIG9iamVjdCBpcyBhcHBsaWVkIG9ubHkgaWYgc3BlY2lmaWMgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQuXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogb3B0aW9uczogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2UgPSB7XG4gICAqICAgICAgYWx0Rm9ybWF0OiAnZC9tL1knLCAgIC8vIHdpbGwgYmUgaWdub3JlZCBzaW5jZSBhbHRGb3JtYXQgaXMgcHJvdmlkZWQgdmlhIHNwZWNpZmljIGF0dHJpYnV0ZVxuICAgKiAgICAgIGFsdElucHV0OiB0cnVlICAgICAgICAvLyB3aWxsIGJlIHVzZWQgc2luY2Ugc3BlY2lmaWMgYXR0cmlidXRlIGlzIG5vdCBwcm92aWRlZFxuICAgKiB9O1xuICAgKiBgYGBcbiAgICogYGBgaHRtbFxuICAgKiA8aW5wdXRcbiAgICogICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAqICAgdHlwZT1cInRleHRcIlxuICAgKiAgIG13bEZsYXRwaWNrclxuICAgKiAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgKiAgIGFsdEZvcm1hdD1cImQvbS9ZXCI+XG4gICAqIGBgYFxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uczogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2UgPSB7fTtcblxuICAvKipcbiAgICogRXhhY3RseSB0aGUgc2FtZSBhcyBkYXRlIGZvcm1hdCwgYnV0IGZvciB0aGUgYWx0SW5wdXQgZmllbGQuXG4gICAqL1xuICBASW5wdXQoKSBhbHRGb3JtYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogXHRTaG93IHRoZSB1c2VyIGEgcmVhZGFibGUgZGF0ZSAoYXMgcGVyIGFsdEZvcm1hdCksIGJ1dCByZXR1cm4gc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBASW5wdXQoKSBhbHRJbnB1dDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgYWx0SW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYSBkYXRlIGRpcmVjdGx5IGlucHV0IHRoZSBpbnB1dCBmaWVsZC4gQnkgZGVmYXVsdCwgZGlyZWN0IGVudHJ5IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgYWxsb3dJbnB1dDogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5zdGVhZCBvZiBgYm9keWAsIGFwcGVuZHMgdGhlIGNhbGVuZGFyIHRvIHRoZSBzcGVjaWZpZWQgbm9kZSBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KCkgYXBwZW5kVG86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBASW5wdXQoKSBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2tPcGVuczogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBzdHJpbmcgb2YgY2hhcmFjdGVycyB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBkYXRlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBib3guXG4gICAqIFRoZSBzdXBwb3J0ZWQgY2hhcmFjdGVycyBhcmUgZGVmaW5lZCBpbiB0aGUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgpIGRlZmF1bHRIb3VyPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0TWludXRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBzZWNvbmRzIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0U2Vjb25kcz86IG51bWJlcjtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVNb2JpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctYWxsLWRhdGVzLWV4Y2VwdC1zZWxlY3QtZmV3XCI+ZW5hYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlVGltZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZVNlY29uZHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyB1c2luZyBhIGN1c3RvbSBkYXRlIGZvcm1hdHRpbmcgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGUgYnVpbHQtaW4gaGFuZGxpbmcgZm9yIGRhdGUgZm9ybWF0cyB1c2luZyBkYXRlRm9ybWF0LCBhbHRGb3JtYXQsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdERhdGU/OiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgaG91ciBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIGhvdXJJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gcGljayB0byAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHN0YXJ0IHBpY2tpbmcgZnJvbSAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBtaW51dGUgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBASW5wdXQoKSBtaW51dGVJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIGRhdGUsIG11bHRpcGxlIGRhdGVzIG9yIGEgZGF0ZSByYW5nZS5cbiAgICovXG4gIEBJbnB1dCgpIG1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZSc7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBhcnJvdyBpY29uLCB1c2VkIHRvIHN3aXRjaCBtb250aHMuXG4gICAqL1xuICBASW5wdXQoKSBuZXh0QXJyb3c6IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGRheSBzZWxlY3Rpb24gaW4gY2FsZW5kYXIuIFVzZSBpdCBhbG9uZyB3aXRoIGBlbmFibGVUaW1lYCB0byBjcmVhdGUgYSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vQ2FsZW5kYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgYSBkYXRlIGZvciAndG9kYXknLCB3aGljaCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiBcIm5ldyBEYXRlKClcIlxuICAgKi9cbiAgQElucHV0KCkgbm93PzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBleHBlY3RzIGEgZGF0ZSBzdHJpbmcgYW5kIG11c3QgcmV0dXJuIGEgRGF0ZSBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoKSBwYXJzZURhdGU6IChzdHI6IHN0cmluZykgPT4gRGF0ZTtcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGxlZnQgYXJyb3cgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIHByZXZBcnJvdzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtb250aCB1c2luZyB0aGUgc2hvcnRoYW5kIHZlcnNpb24gKGllLCBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXIpLlxuICAgKi9cbiAgQElucHV0KCkgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dNb250aHM6IG51bWJlcjtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXRpYzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGltZSBwaWNrZXIgaW4gMjQgaG91ciBtb2RlIHdpdGhvdXQgQU0vUE0gc2VsZWN0aW9uIHdoZW4gZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHRpbWUyNGhyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGRpc3BsYXkgb2Ygd2VlayBudW1iZXJzIGluIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgd2Vla051bWJlcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBASW5wdXQoKSBnZXRXZWVrOiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIEBJbnB1dCgpIHdyYXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHBsdWdpbiBpbnN0YW5jZXMgdG8gdXNlLlxuICAgKi9cbiAgQElucHV0KCkgcGx1Z2luczogYW55W107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBASW5wdXQoKSBsb2NhbGU6IG9iamVjdCB8IHN0cmluZztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIEBJbnB1dCgpIGNvbnZlcnRNb2RlbFZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgdGhlIG1vbnRoIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBASW5wdXQoKSBtb250aFNlbGVjdG9yVHlwZTogJ3N0YXRpYycgfCAnZHJvcGRvd24nO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCBvbmNlIHRoZSBjYWxlbmRhciBpcyBpbiBhIHJlYWR5IHN0YXRlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyUmVhZHk6IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgZGF0ZSwgb3IgY2hhbmdlcyB0aGUgdGltZSBvbiBhIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIHVwZGF0ZWQgd2l0aCBhIG5ldyBkYXRlIHN0cmluZy5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JWYWx1ZVVwZGF0ZTogRXZlbnRFbWl0dGVyPFxuICAgIEZsYXRQaWNrck91dHB1dE9wdGlvbnNcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck9wZW46IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgY2xvc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrckNsb3NlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vbnRoIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSB5ZWFyIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrclllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxcbiAgICBGbGF0UGlja3JPdXRwdXRPcHRpb25zXG4gID4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRha2UgZnVsbCBjb250cm9sIG9mIGV2ZXJ5IGRhdGUgY2VsbCB3aXRoIHRoaXMgb3V0cHV0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyRGF5Q3JlYXRlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyRGF5Q3JlYXRlT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgaW5zdGFuY2U6IGZsYXRwaWNrci5JbnN0YW5jZTtcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW5pdGlhbFZhbHVlOiBhbnk7XG5cbiAgb25DaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIG9uVG91Y2hlZEZuID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHMsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgYWx0Rm9ybWF0OiB0aGlzLmFsdEZvcm1hdCxcbiAgICAgIGFsdElucHV0OiB0aGlzLmFsdElucHV0LFxuICAgICAgYWx0SW5wdXRDbGFzczogdGhpcy5hbHRJbnB1dENsYXNzLFxuICAgICAgYWxsb3dJbnB1dDogdGhpcy5hbGxvd0lucHV0LFxuICAgICAgYXBwZW5kVG86IHRoaXMuYXBwZW5kVG8sXG4gICAgICBhcmlhRGF0ZUZvcm1hdDogdGhpcy5hcmlhRGF0ZUZvcm1hdCxcbiAgICAgIGNsaWNrT3BlbnM6IHRoaXMuY2xpY2tPcGVucyxcbiAgICAgIGRhdGVGb3JtYXQ6IHRoaXMuZGF0ZUZvcm1hdCxcbiAgICAgIGRlZmF1bHRIb3VyOiB0aGlzLmRlZmF1bHRIb3VyLFxuICAgICAgZGVmYXVsdE1pbnV0ZTogdGhpcy5kZWZhdWx0TWludXRlLFxuICAgICAgZGVmYXVsdFNlY29uZHM6IHRoaXMuZGVmYXVsdFNlY29uZHMsXG4gICAgICBkaXNhYmxlOiB0aGlzLmRpc2FibGUsXG4gICAgICBkaXNhYmxlTW9iaWxlOiB0aGlzLmRpc2FibGVNb2JpbGUsXG4gICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgZW5hYmxlVGltZTogdGhpcy5lbmFibGVUaW1lLFxuICAgICAgZW5hYmxlU2Vjb25kczogdGhpcy5lbmFibGVTZWNvbmRzLFxuICAgICAgZm9ybWF0RGF0ZTogdGhpcy5mb3JtYXREYXRlLFxuICAgICAgaG91ckluY3JlbWVudDogdGhpcy5ob3VySW5jcmVtZW50LFxuICAgICAgZGVmYXVsdERhdGU6IHRoaXMuaW5pdGlhbFZhbHVlLFxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSxcbiAgICAgIG1pbnV0ZUluY3JlbWVudDogdGhpcy5taW51dGVJbmNyZW1lbnQsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBuZXh0QXJyb3c6IHRoaXMubmV4dEFycm93LFxuICAgICAgbm9DYWxlbmRhcjogdGhpcy5ub0NhbGVuZGFyLFxuICAgICAgbm93OiB0aGlzLm5vdyxcbiAgICAgIHBhcnNlRGF0ZTogdGhpcy5wYXJzZURhdGUsXG4gICAgICBwcmV2QXJyb3c6IHRoaXMucHJldkFycm93LFxuICAgICAgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiB0aGlzLnNob3J0aGFuZEN1cnJlbnRNb250aCxcbiAgICAgIHNob3dNb250aHM6IHRoaXMuc2hvd01vbnRocyxcbiAgICAgIG1vbnRoU2VsZWN0b3JUeXBlOiB0aGlzLm1vbnRoU2VsZWN0b3JUeXBlLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpYyxcbiAgICAgIHRpbWUyNGhyOiB0aGlzLnRpbWUyNGhyLFxuICAgICAgd2Vla051bWJlcnM6IHRoaXMud2Vla051bWJlcnMsXG4gICAgICBnZXRXZWVrOiB0aGlzLmdldFdlZWssXG4gICAgICB3cmFwOiB0aGlzLndyYXAsXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMsXG4gICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzOiBEYXRlW10sIGRhdGVTdHJpbmc6IHN0cmluZywgaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrckNoYW5nZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25PcGVuOiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JPcGVuLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlOiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JDbG9zZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25Nb250aENoYW5nZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyTW9udGhDaGFuZ2UuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uWWVhckNoYW5nZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyWWVhckNoYW5nZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25SZWFkeTogKHNlbGVjdGVkRGF0ZXM6IERhdGVbXSwgZGF0ZVN0cmluZzogc3RyaW5nLCBpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyUmVhZHkuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uVmFsdWVVcGRhdGU6IChcbiAgICAgICAgc2VsZWN0ZWREYXRlczogRGF0ZVtdLFxuICAgICAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGluc3RhbmNlOiBhbnlcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrclZhbHVlVXBkYXRlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbkRheUNyZWF0ZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueSxcbiAgICAgICAgZGF5RWxlbWVudDogSFRNTEVsZW1lbnRcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrckRheUNyZWF0ZS5lbWl0KHtcbiAgICAgICAgICBzZWxlY3RlZERhdGVzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgZGF5RWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgb3B0aW9uc1trZXldID0gKHRoaXMub3B0aW9ucyBhcyBhbnkpW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uc1trZXldID0gKHRoaXMuZGVmYXVsdHMgYXMgYW55KVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgb3B0aW9ucy50aW1lXzI0aHIgPSBvcHRpb25zLnRpbWUyNGhyO1xuXG4gICAgLy8gd29ya2Fyb3VuZCBidWcgaW4gZmxhdHBpY2tyIDQuNiB3aGVyZSBpdCBkb2Vzbid0IGNvcHkgdGhlIGNsYXNzZXMgYWNyb3NzXG4gICAgLy8gVE9ETyAtIHJlbW92ZSBvbmNlIGZpeCBpbiBodHRwczovL2dpdGh1Yi5jb20vZmxhdHBpY2tyL2ZsYXRwaWNrci9pc3N1ZXMvMTg2MCBpcyByZWxlYXNlZFxuICAgIG9wdGlvbnMuYWx0SW5wdXRDbGFzcyA9XG4gICAgICAob3B0aW9ucy5hbHRJbnB1dENsYXNzIHx8ICcnKSArICcgJyArIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IGZsYXRwaWNrcihcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBmbGF0cGlja3IuSW5zdGFuY2U7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHRoaXMuaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goaW5wdXRLZXkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNldChpbnB1dEtleSBhcyBhbnksICh0aGlzIGFzIGFueSlbaW5wdXRLZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG5cdFx0dGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG5cdH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBjb252ZXJ0ZWRWYWx1ZTogYW55ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuY29udmVydE1vZGVsVmFsdWUgJiYgdGhpcy5tb2RlID09PSAncmFuZ2UnICYmIHZhbHVlKSB7XG4gICAgICBjb252ZXJ0ZWRWYWx1ZSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0ZShjb252ZXJ0ZWRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZsYXRwaWNrciBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCB5ZXQsIHN0b3JlIHRoZSB2YWx1ZSBmb3IgbGF0ZXIgdXNlXG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGNvbnZlcnRlZFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnN0YW5jZS5faW5wdXQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnN0YW5jZS5faW5wdXQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JylcbiAgaW5wdXRDaGFuZ2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnZlcnRNb2RlbFZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgJ211bHRpcGxlJzpcbiAgICAgICAgICBjb25zdCBkYXRlczogRGF0ZVtdID0gdmFsdWVcbiAgICAgICAgICAgIC5zcGxpdCgnOyAnKVxuICAgICAgICAgICAgLm1hcChzdHIgPT5cbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgc3RyLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuY29uZmlnLmRhdGVGb3JtYXQsXG4gICAgICAgICAgICAgICAgIXRoaXMuaW5zdGFuY2UuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZXMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gdmFsdWVcbiAgICAgICAgICAgIC5zcGxpdCh0aGlzLmluc3RhbmNlLmwxMG4ucmFuZ2VTZXBhcmF0b3IpXG4gICAgICAgICAgICAubWFwKHN0ciA9PlxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnBhcnNlRGF0ZShcbiAgICAgICAgICAgICAgICBzdHIsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgICAgICAhdGhpcy5pbnN0YW5jZS5jb25maWcuZW5hYmxlVGltZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbih7IGZyb20sIHRvIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NpbmdsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wYXJzZURhdGUoXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNvbmZpZy5kYXRlRm9ybWF0LFxuICAgICAgICAgICAgICAhdGhpcy5pbnN0YW5jZS5jb25maWcuZW5hYmxlVGltZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DaGFuZ2VGbih2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=