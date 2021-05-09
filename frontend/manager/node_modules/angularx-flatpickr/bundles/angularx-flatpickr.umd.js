(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('flatpickr')) :
    typeof define === 'function' && define.amd ? define('angularx-flatpickr', ['exports', '@angular/core', '@angular/forms', 'flatpickr'], factory) :
    (factory((global['angularx-flatpickr'] = {}),global.ng.core,global.ng.forms,null));
}(this, (function (exports,core,forms,flatpickr) { 'use strict';

    flatpickr = flatpickr && flatpickr.hasOwnProperty('default') ? flatpickr['default'] : flatpickr;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FlatpickrDefaults = (function () {
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
            { type: core.Injectable },
        ];
        return FlatpickrDefaults;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ FLATPICKR_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return FlatpickrDirective; }),
        //tslint:disable-line
        multi: true
    };
    var FlatpickrDirective = (function () {
        function FlatpickrDirective(elm, defaults, renderer) {
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
            this.flatpickrReady = new core.EventEmitter();
            /**
             * Gets triggered when the user selects a date, or changes the time on a selected date.
             */
            this.flatpickrChange = new core.EventEmitter();
            /**
             * Gets triggered when the input value is updated with a new date string.
             */
            this.flatpickrValueUpdate = new core.EventEmitter();
            /**
             * Gets triggered when the calendar is opened.
             */
            this.flatpickrOpen = new core.EventEmitter();
            /**
             * Gets triggered when the calendar is closed.
             */
            this.flatpickrClose = new core.EventEmitter();
            /**
             * Gets triggered when the month is changed, either by the user or programmatically.
             */
            this.flatpickrMonthChange = new core.EventEmitter();
            /**
             * Gets triggered when the year is changed, either by the user or programmatically.
             */
            this.flatpickrYearChange = new core.EventEmitter();
            /**
             * Take full control of every date cell with this output
             */
            this.flatpickrDayCreate = new core.EventEmitter();
            this.isDisabled = false;
            this.onChangeFn = function () { };
            this.onTouchedFn = function () { };
        }
        /**
         * @return {?}
         */
        FlatpickrDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ options = {
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
                    onChange: function (selectedDates, dateString, instance) {
                        _this.flatpickrChange.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onOpen: function (selectedDates, dateString, instance) {
                        _this.flatpickrOpen.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onClose: function (selectedDates, dateString, instance) {
                        _this.flatpickrClose.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onMonthChange: function (selectedDates, dateString, instance) {
                        _this.flatpickrMonthChange.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onYearChange: function (selectedDates, dateString, instance) {
                        _this.flatpickrYearChange.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onReady: function (selectedDates, dateString, instance) {
                        _this.flatpickrReady.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onValueUpdate: function (selectedDates, dateString, instance) {
                        _this.flatpickrValueUpdate.emit({ selectedDates: selectedDates, dateString: dateString, instance: instance });
                    },
                    onDayCreate: function (selectedDates, dateString, instance, dayElement) {
                        _this.flatpickrDayCreate.emit({
                            selectedDates: selectedDates,
                            dateString: dateString,
                            instance: instance,
                            dayElement: dayElement
                        });
                    }
                };
                Object.keys(options).forEach(function (key) {
                    if (typeof options[key] === 'undefined') {
                        if (typeof _this.options[key] !== 'undefined') {
                            options[key] = ((_this.options))[key];
                        }
                        else {
                            options[key] = ((_this.defaults))[key];
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
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        FlatpickrDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (this.instance) {
                    Object.keys(changes).forEach(function (inputKey) {
                        _this.instance.set(/** @type {?} */ (inputKey), ((_this))[inputKey]);
                    });
                }
            };
        /**
         * @return {?}
         */
        FlatpickrDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.instance) {
                    this.instance.destroy();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        FlatpickrDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ convertedValue = value;
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
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        FlatpickrDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChangeFn = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        FlatpickrDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouchedFn = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        FlatpickrDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.isDisabled = isDisabled;
                if (this.instance) {
                    if (this.isDisabled) {
                        this.renderer.setProperty(this.instance._input, 'disabled', 'disabled');
                    }
                    else {
                        this.renderer.removeAttribute(this.instance._input, 'disabled');
                    }
                }
            };
        /**
         * @return {?}
         */
        FlatpickrDirective.prototype.inputChanged = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ value = this.elm.nativeElement.value;
                if (this.convertModelValue && typeof value === 'string') {
                    switch (this.mode) {
                        case 'multiple':
                            var /** @type {?} */ dates = value
                                .split('; ')
                                .map(function (str) {
                                return _this.instance.parseDate(str, _this.instance.config.dateFormat, !_this.instance.config.enableTime);
                            });
                            this.onChangeFn(dates);
                            break;
                        case 'range':
                            var _a = __read(value
                                .split(this.instance.l10n.rangeSeparator)
                                .map(function (str) {
                                return _this.instance.parseDate(str, _this.instance.config.dateFormat, !_this.instance.config.enableTime);
                            }), 2), from = _a[0], to = _a[1];
                            this.onChangeFn({ from: from, to: to });
                            break;
                        case 'single':
                        default:
                            this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
                    }
                }
                else {
                    this.onChangeFn(value);
                }
            };
        FlatpickrDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mwlFlatpickr]',
                        providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
                        host: {
                            // tslint:disable-line use-host-property-decorator
                            '(blur)': 'onTouchedFn()'
                        }
                    },] },
        ];
        /** @nocollapse */
        FlatpickrDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: FlatpickrDefaults },
                { type: core.Renderer2 }
            ];
        };
        FlatpickrDirective.propDecorators = {
            options: [{ type: core.Input }],
            altFormat: [{ type: core.Input }],
            altInput: [{ type: core.Input }],
            altInputClass: [{ type: core.Input }],
            allowInput: [{ type: core.Input }],
            appendTo: [{ type: core.Input }],
            ariaDateFormat: [{ type: core.Input }],
            clickOpens: [{ type: core.Input }],
            dateFormat: [{ type: core.Input }],
            defaultHour: [{ type: core.Input }],
            defaultMinute: [{ type: core.Input }],
            defaultSeconds: [{ type: core.Input }],
            disable: [{ type: core.Input }],
            disableMobile: [{ type: core.Input }],
            enable: [{ type: core.Input }],
            enableTime: [{ type: core.Input }],
            enableSeconds: [{ type: core.Input }],
            formatDate: [{ type: core.Input }],
            hourIncrement: [{ type: core.Input }],
            inline: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            minuteIncrement: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            nextArrow: [{ type: core.Input }],
            noCalendar: [{ type: core.Input }],
            now: [{ type: core.Input }],
            parseDate: [{ type: core.Input }],
            prevArrow: [{ type: core.Input }],
            shorthandCurrentMonth: [{ type: core.Input }],
            showMonths: [{ type: core.Input }],
            static: [{ type: core.Input }],
            time24hr: [{ type: core.Input }],
            weekNumbers: [{ type: core.Input }],
            getWeek: [{ type: core.Input }],
            wrap: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            convertModelValue: [{ type: core.Input }],
            monthSelectorType: [{ type: core.Input }],
            flatpickrReady: [{ type: core.Output }],
            flatpickrChange: [{ type: core.Output }],
            flatpickrValueUpdate: [{ type: core.Output }],
            flatpickrOpen: [{ type: core.Output }],
            flatpickrClose: [{ type: core.Output }],
            flatpickrMonthChange: [{ type: core.Output }],
            flatpickrYearChange: [{ type: core.Output }],
            flatpickrDayCreate: [{ type: core.Output }],
            inputChanged: [{ type: core.HostListener, args: ['input',] }]
        };
        return FlatpickrDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ USER_DEFAULTS = new core.InjectionToken('flatpickr defaults');
    /**
     * @param {?} userDefaults
     * @return {?}
     */
    function defaultsFactory(userDefaults) {
        var /** @type {?} */ defaults = new FlatpickrDefaults();
        Object.assign(defaults, userDefaults);
        return defaults;
    }
    var FlatpickrModule = (function () {
        function FlatpickrModule() {
        }
        /**
         * @param {?=} userDefaults
         * @return {?}
         */
        FlatpickrModule.forRoot = /**
         * @param {?=} userDefaults
         * @return {?}
         */
            function (userDefaults) {
                if (userDefaults === void 0) {
                    userDefaults = {};
                }
                return {
                    ngModule: FlatpickrModule,
                    providers: [
                        {
                            provide: USER_DEFAULTS,
                            useValue: userDefaults
                        },
                        {
                            provide: FlatpickrDefaults,
                            useFactory: defaultsFactory,
                            deps: [USER_DEFAULTS]
                        }
                    ]
                };
            };
        FlatpickrModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FlatpickrDirective],
                        exports: [FlatpickrDirective]
                    },] },
        ];
        return FlatpickrModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FlatpickrDefaults = FlatpickrDefaults;
    exports.FlatpickrDirective = FlatpickrDirective;
    exports.USER_DEFAULTS = USER_DEFAULTS;
    exports.defaultsFactory = defaultsFactory;
    exports.FlatpickrModule = FlatpickrModule;
    exports.ɵa = FLATPICKR_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcngtZmxhdHBpY2tyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXJ4LWZsYXRwaWNrci9mbGF0cGlja3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyAgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKG9bbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH07IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl07XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBEaXNhYmxlRW5hYmxlRGF0ZSA9XG4gIHwgc3RyaW5nXG4gIHwgRGF0ZVxuICB8IHsgZnJvbTogRGF0ZSB8IHN0cmluZzsgdG86IERhdGUgfCBzdHJpbmcgfVxuICB8ICgoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbik7XG5cbi8vIHRzbGludDpkaXNhYmxlIG5vLWluZmVycmFibGUtdHlwZXNcblxuZXhwb3J0IGludGVyZmFjZSBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBFeGFjdGx5IHRoZSBzYW1lIGFzIGRhdGUgZm9ybWF0LCBidXQgZm9yIHRoZSBhbHRJbnB1dCBmaWVsZC5cbiAgICovXG4gIGFsdEZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogXHRTaG93IHRoZSB1c2VyIGEgcmVhZGFibGUgZGF0ZSAoYXMgcGVyIGFsdEZvcm1hdCksIGJ1dCByZXR1cm4gc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBhbHRJbnB1dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBhbHRJbnB1dCBvcHRpb24uXG4gICAqIE5vdGUgdGhhdCBgYWx0SW5wdXRgIGFscmVhZHkgaW5oZXJpdHMgY2xhc3NlcyBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dC5cbiAgICovXG4gIGFsdElucHV0Q2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhIGRhdGUgZGlyZWN0bHkgaW5wdXQgdGhlIGlucHV0IGZpZWxkLiBCeSBkZWZhdWx0LCBkaXJlY3QgZW50cnkgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBhbGxvd0lucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5zdGVhZCBvZiBgYm9keWAsIGFwcGVuZHMgdGhlIGNhbGVuZGFyIHRvIHRoZSBzcGVjaWZpZWQgbm9kZSBpbnN0ZWFkLlxuICAgKi9cbiAgYXBwZW5kVG8/OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogRGVmaW5lcyBob3cgdGhlIGRhdGUgd2lsbCBiZSBmb3JtYXR0ZWQgaW4gdGhlIGFyaWEtbGFiZWwgZm9yIGNhbGVuZGFyIGRheXMsIHVzaW5nIHRoZSBzYW1lIHRva2VucyBhcyBkYXRlRm9ybWF0LiBJZiB5b3UgY2hhbmdlIHRoaXMsIHlvdSBzaG91bGQgY2hvb3NlIGEgdmFsdWUgdGhhdCB3aWxsIG1ha2Ugc2Vuc2UgaWYgYSBzY3JlZW4gcmVhZGVyIHJlYWRzIGl0IG91dCBsb3VkLlxuICAgKi9cbiAgYXJpYURhdGVGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgb24gdGhlIGlucHV0IHNob3VsZCBvcGVuIHRoZSBwaWNrZXIuXG4gICAqIFlvdSBjb3VsZCBkaXNhYmxlIHRoaXMgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgYHdpdGgub3BlbigpYC5cbiAgICovXG4gIGNsaWNrT3BlbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBob3cgdGhlIGRhdGUgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJveC5cbiAgICogVGhlIHN1cHBvcnRlZCBjaGFyYWN0ZXJzIGFyZSBkZWZpbmVkIGluIHRoZSB0YWJsZSBiZWxvdy5cbiAgICovXG4gIGRhdGVGb3JtYXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBob3VyIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0SG91cj86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIG1pbnV0ZSBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdE1pbnV0ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIHNlY29uZHMgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRTZWNvbmRzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLXNwZWNpZmljLWRhdGVzXCI+ZGlzYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGRpc2FibGU/OiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIGRpc2FibGVNb2JpbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGVuYWJsZT86IERpc2FibGVFbmFibGVEYXRlW107XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGltZSBwaWNrZXIuXG4gICAqL1xuICBlbmFibGVUaW1lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVNlY29uZHM/OiBib29sZWFuO1xuICAvKipcbiAgICogQWxsb3dzIHVzaW5nIGEgY3VzdG9tIGRhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBidWlsdC1pbiBoYW5kbGluZyBmb3IgZGF0ZSBmb3JtYXRzIHVzaW5nIGRhdGVGb3JtYXQsIGFsdEZvcm1hdCwgZXRjLlxuICAgKi9cbiAgZm9ybWF0RGF0ZT86ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgaG91ciBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIGhvdXJJbmNyZW1lbnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBjYWxlbmRhciBpbmxpbmUuXG4gICAqL1xuICBpbmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBwaWNrIHRvIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWF4RGF0ZT86IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHN0YXJ0IHBpY2tpbmcgZnJvbSAoaW5jbHVzaXZlKS5cbiAgICovXG4gIG1pbkRhdGU/OiBzdHJpbmcgfCBEYXRlO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgbWludXRlIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgbWludXRlSW5jcmVtZW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgZGF0ZSwgbXVsdGlwbGUgZGF0ZXMgb3IgYSBkYXRlIHJhbmdlLlxuICAgKi9cbiAgbW9kZT86ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZSc7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBhcnJvdyBpY29uLCB1c2VkIHRvIHN3aXRjaCBtb250aHMuXG4gICAqL1xuICBuZXh0QXJyb3c/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBkYXkgc2VsZWN0aW9uIGluIGNhbGVuZGFyLiBVc2UgaXQgYWxvbmcgd2l0aCBgZW5hYmxlVGltZWAgdG8gY3JlYXRlIGEgdGltZSBwaWNrZXIuXG4gICAqL1xuICBub0NhbGVuZGFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvdmlkZSBhIGRhdGUgZm9yICd0b2RheScsIHdoaWNoIHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIFwibmV3IERhdGUoKVwiXG4gICAqL1xuICBub3c/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGV4cGVjdHMgYSBkYXRlIHN0cmluZyBhbmQgbXVzdCByZXR1cm4gYSBEYXRlIG9iamVjdC5cbiAgICovXG4gIHBhcnNlRGF0ZT86IChzdHI6IHN0cmluZykgPT4gRGF0ZTtcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGxlZnQgYXJyb3cgaWNvbi5cbiAgICovXG4gIHByZXZBcnJvdz86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyB0aGUgbW9udGggdXNpbmcgdGhlIHNob3J0aGFuZCB2ZXJzaW9uIChpZSwgU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyKS5cbiAgICovXG4gIHNob3J0aGFuZEN1cnJlbnRNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHRoZSBjYWxlbmRhciBpbnNpZGUgdGhlIHdyYXBwZXIgYW5kIG5leHQgdG8gdGhlIGlucHV0IGVsZW1lbnQuIChMZWF2ZSBgZmFsc2VgIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZykuXG4gICAqL1xuICBzdGF0aWM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aW1lIHBpY2tlciBpbiAyNCBob3VyIG1vZGUgd2l0aG91dCBBTS9QTSBzZWxlY3Rpb24gd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgdGltZTI0aHI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGRhdGVzIHdpbGwgcGFyc2VkLCBmb3JtYXR0ZWQsIGFuZCBkaXNwbGF5ZWQgaW4gVVRDLlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgZGF0ZSBzdHJpbmdzIGNvbnRhaW4gdGhlIHRpbWV6b25lLCBidXQgbm90IG5lY2Vzc2FyeS5cbiAgICovXG4gIHV0Yz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgZGlzcGxheSBvZiB3ZWVrIG51bWJlcnMgaW4gY2FsZW5kYXIuXG4gICAqL1xuICB3ZWVrTnVtYmVycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBnZXRXZWVrPzogKGRhdGU6IERhdGUpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIGVsZW1lbnRzIGFuZCBpbnB1dCBncm91cHMuXG4gICAqL1xuICB3cmFwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcGx1Z2luIGluc3RhbmNlcyB0byB1c2UuXG4gICAqL1xuICBwbHVnaW5zPzogYW55W107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBsb2NhbGU/OiBvYmplY3QgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEF1dG8gY29udmVydCB0aGUgbmdNb2RlbCB2YWx1ZSBmcm9tIGEgc3RyaW5nIHRvIGEgZGF0ZSAvIGFycmF5IG9mIGRhdGVzIC8gZnJvbSAtIHRvIGRhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgYG1vZGVgXG4gICAqL1xuICBjb252ZXJ0TW9kZWxWYWx1ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbW9udGhzIHNob3duLlxuICAgKi9cbiAgc2hvd01vbnRocz86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHRoZSBtb250aCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIGNhbGVuZGFyLlxuICAgKi9cbiAgbW9udGhTZWxlY3RvclR5cGU/OiAnc3RhdGljJyB8ICdkcm9wZG93bic7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbGF0cGlja3JEZWZhdWx0cyBpbXBsZW1lbnRzIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgYWx0Rm9ybWF0OiBzdHJpbmcgPSAnRiBqLCBZJztcblxuICAvKipcbiAgICogXHRTaG93IHRoZSB1c2VyIGEgcmVhZGFibGUgZGF0ZSAoYXMgcGVyIGFsdEZvcm1hdCksIGJ1dCByZXR1cm4gc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBhbHRJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgYWx0SW5wdXQgb3B0aW9uLlxuICAgKiBOb3RlIHRoYXQgYGFsdElucHV0YCBhbHJlYWR5IGluaGVyaXRzIGNsYXNzZXMgZnJvbSB0aGUgb3JpZ2luYWwgaW5wdXQuXG4gICAqL1xuICBhbHRJbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGFsbG93SW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5zdGVhZCBvZiBgYm9keWAsIGFwcGVuZHMgdGhlIGNhbGVuZGFyIHRvIHRoZSBzcGVjaWZpZWQgbm9kZSBpbnN0ZWFkLlxuICAgKi9cbiAgYXBwZW5kVG86IEhUTUxFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZyA9ICdGIGosIFknO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGNsaWNraW5nIG9uIHRoZSBpbnB1dCBzaG91bGQgb3BlbiB0aGUgcGlja2VyLlxuICAgKiBZb3UgY291bGQgZGlzYWJsZSB0aGlzIGlmIHlvdSB3aXNoIHRvIG9wZW4gdGhlIGNhbGVuZGFyIG1hbnVhbGx5IGB3aXRoLm9wZW4oKWAuXG4gICAqL1xuICBjbGlja09wZW5zOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBzdHJpbmcgb2YgY2hhcmFjdGVycyB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBkYXRlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBib3guXG4gICAqIFRoZSBzdXBwb3J0ZWQgY2hhcmFjdGVycyBhcmUgZGVmaW5lZCBpbiB0aGUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnWS1tLWQnO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBob3VyIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0SG91cj86IG51bWJlciA9IDEyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBtaW51dGUgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRNaW51dGU/OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBzZWNvbmRzIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0U2Vjb25kcz86IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctc3BlY2lmaWMtZGF0ZXNcIj5kaXNhYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgZGlzYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIGRpc2FibGVNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1hbGwtZGF0ZXMtZXhjZXB0LXNlbGVjdC1mZXdcIj5lbmFibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBlbmFibGU6IERpc2FibGVFbmFibGVEYXRlW10gPSBbXTtcblxuICAvKipcbiAgICogRW5hYmxlcyB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVNlY29uZHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQWxsb3dzIHVzaW5nIGEgY3VzdG9tIGRhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBidWlsdC1pbiBoYW5kbGluZyBmb3IgZGF0ZSBmb3JtYXRzIHVzaW5nIGRhdGVGb3JtYXQsIGFsdEZvcm1hdCwgZXRjLlxuICAgKi9cbiAgZm9ybWF0RGF0ZT86ICh2YWx1ZTogYW55KSA9PiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBob3VyIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgaG91ckluY3JlbWVudDogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBwaWNrIHRvIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWF4RGF0ZTogc3RyaW5nIHwgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gc3RhcnQgcGlja2luZyBmcm9tIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWluRGF0ZTogc3RyaW5nIHwgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc3RlcCBmb3IgdGhlIG1pbnV0ZSBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIG1pbnV0ZUluY3JlbWVudDogbnVtYmVyID0gNTtcblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIGRhdGUsIG11bHRpcGxlIGRhdGVzIG9yIGEgZGF0ZSByYW5nZS5cbiAgICovXG4gIG1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZScgPSAnc2luZ2xlJztcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGFycm93IGljb24sIHVzZWQgdG8gc3dpdGNoIG1vbnRocy5cbiAgICovXG4gIG5leHRBcnJvdzogc3RyaW5nID0gJz4nO1xuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgZGF5IHNlbGVjdGlvbiBpbiBjYWxlbmRhci4gVXNlIGl0IGFsb25nIHdpdGggYGVuYWJsZVRpbWVgIHRvIGNyZWF0ZSBhIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgbm9DYWxlbmRhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG5vdyB0byB0aGUgY3VycmVudCBkYXRlXG4gICAqL1xuICBub3c6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgPSBuZXcgRGF0ZSgpO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGV4cGVjdHMgYSBkYXRlIHN0cmluZyBhbmQgbXVzdCByZXR1cm4gYSBEYXRlIG9iamVjdC5cbiAgICovXG4gIHBhcnNlRGF0ZTogKHN0cjogc3RyaW5nKSA9PiBEYXRlO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgbGVmdCBhcnJvdyBpY29uLlxuICAgKi9cbiAgcHJldkFycm93OiBzdHJpbmcgPSAnPCc7XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG1vbnRoIHVzaW5nIHRoZSBzaG9ydGhhbmQgdmVyc2lvbiAoaWUsIFNlcCBpbnN0ZWFkIG9mIFNlcHRlbWJlcikuXG4gICAqL1xuICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aW1lIHBpY2tlciBpbiAyNCBob3VyIG1vZGUgd2l0aG91dCBBTS9QTSBzZWxlY3Rpb24gd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgdGltZTI0aHI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBkYXRlcyB3aWxsIHBhcnNlZCwgZm9ybWF0dGVkLCBhbmQgZGlzcGxheWVkIGluIFVUQy5cbiAgICogSXQncyByZWNvbW1lbmRlZCB0aGF0IGRhdGUgc3RyaW5ncyBjb250YWluIHRoZSB0aW1lem9uZSwgYnV0IG5vdCBuZWNlc3NhcnkuXG4gICAqL1xuICB1dGM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcyBkaXNwbGF5IG9mIHdlZWsgbnVtYmVycyBpbiBjYWxlbmRhci5cbiAgICovXG4gIHdlZWtOdW1iZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBnZXRXZWVrOiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIHdyYXA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcGx1Z2luIGluc3RhbmNlcyB0byB1c2UuXG4gICAqL1xuICBwbHVnaW5zOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIG9iamVjdCBvciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgbG9jYWxlLlxuICAgKi9cbiAgbG9jYWxlOiBvYmplY3QgfCBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIEF1dG8gY29udmVydCB0aGUgbmdNb2RlbCB2YWx1ZSBmcm9tIGEgc3RyaW5nIHRvIGEgZGF0ZSAvIGFycmF5IG9mIGRhdGVzIC8gZnJvbSAtIHRvIGRhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgYG1vZGVgXG4gICAqL1xuICBjb252ZXJ0TW9kZWxWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyBzaG93bi5cbiAgICovXG4gIHNob3dNb250aHM6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEhvdyB0aGUgbW9udGggc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyIG9mIHRoZSBjYWxlbmRhci5cbiAgICovXG4gIG1vbnRoU2VsZWN0b3JUeXBlOiAnc3RhdGljJyB8ICdkcm9wZG93bicgPSAnc3RhdGljJztcbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGbGF0cGlja3JEZWZhdWx0cyxcbiAgRGlzYWJsZUVuYWJsZURhdGUsXG4gIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlXG59IGZyb20gJy4vZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRQaWNrck91dHB1dE9wdGlvbnMge1xuICBzZWxlY3RlZERhdGVzOiBEYXRlW107XG4gIGRhdGVTdHJpbmc6IHN0cmluZztcbiAgaW5zdGFuY2U6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGF0UGlja3JEYXlDcmVhdGVPdXRwdXRPcHRpb25zXG4gIGV4dGVuZHMgRmxhdFBpY2tyT3V0cHV0T3B0aW9ucyB7XG4gIGRheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgRkxBVFBJQ0tSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZsYXRwaWNrckRpcmVjdGl2ZSksIC8vdHNsaW50OmRpc2FibGUtbGluZVxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bEZsYXRwaWNrcl0nLFxuICBwcm92aWRlcnM6IFtGTEFUUElDS1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkRm4oKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGbGF0cGlja3JEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKipcbiAgICogT2JqZWN0LW9wdGlvbnMgdGhhdCBjYW4gYmUgdXNlciBmb3IgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIEZsYXRwaWNrci5cbiAgICogT3B0aW9uIGZyb20gdGhpcyBvYmplY3QgaXMgYXBwbGllZCBvbmx5IGlmIHNwZWNpZmljIG9wdGlvbiBpcyBub3Qgc3BlY2lmaWVkLlxuICAgKiBFeGFtcGxlOlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqIG9wdGlvbnM6IEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlID0ge1xuICAgKiAgICAgIGFsdEZvcm1hdDogJ2QvbS9ZJywgICAvLyB3aWxsIGJlIGlnbm9yZWQgc2luY2UgYWx0Rm9ybWF0IGlzIHByb3ZpZGVkIHZpYSBzcGVjaWZpYyBhdHRyaWJ1dGVcbiAgICogICAgICBhbHRJbnB1dDogdHJ1ZSAgICAgICAgLy8gd2lsbCBiZSB1c2VkIHNpbmNlIHNwZWNpZmljIGF0dHJpYnV0ZSBpcyBub3QgcHJvdmlkZWRcbiAgICogfTtcbiAgICogYGBgXG4gICAqIGBgYGh0bWxcbiAgICogPGlucHV0XG4gICAqICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgKiAgIHR5cGU9XCJ0ZXh0XCJcbiAgICogICBtd2xGbGF0cGlja3JcbiAgICogICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICogICBhbHRGb3JtYXQ9XCJkL20vWVwiPlxuICAgKiBgYGBcbiAgICovXG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlID0ge307XG5cbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgQElucHV0KCkgYWx0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFx0U2hvdyB0aGUgdXNlciBhIHJlYWRhYmxlIGRhdGUgKGFzIHBlciBhbHRGb3JtYXQpLCBidXQgcmV0dXJuIHNvbWV0aGluZyB0b3RhbGx5IGRpZmZlcmVudCB0byB0aGUgc2VydmVyLlxuICAgKi9cbiAgQElucHV0KCkgYWx0SW5wdXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBhbHRJbnB1dCBvcHRpb24uXG4gICAqIE5vdGUgdGhhdCBgYWx0SW5wdXRgIGFscmVhZHkgaW5oZXJpdHMgY2xhc3NlcyBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIGFsdElucHV0Q2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGFsbG93SW5wdXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluc3RlYWQgb2YgYGJvZHlgLCBhcHBlbmRzIHRoZSBjYWxlbmRhciB0byB0aGUgc3BlY2lmaWVkIG5vZGUgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpIGFwcGVuZFRvOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogRGVmaW5lcyBob3cgdGhlIGRhdGUgd2lsbCBiZSBmb3JtYXR0ZWQgaW4gdGhlIGFyaWEtbGFiZWwgZm9yIGNhbGVuZGFyIGRheXMsIHVzaW5nIHRoZSBzYW1lIHRva2VucyBhcyBkYXRlRm9ybWF0LiBJZiB5b3UgY2hhbmdlIHRoaXMsIHlvdSBzaG91bGQgY2hvb3NlIGEgdmFsdWUgdGhhdCB3aWxsIG1ha2Ugc2Vuc2UgaWYgYSBzY3JlZW4gcmVhZGVyIHJlYWRzIGl0IG91dCBsb3VkLlxuICAgKi9cbiAgQElucHV0KCkgYXJpYURhdGVGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgb24gdGhlIGlucHV0IHNob3VsZCBvcGVuIHRoZSBwaWNrZXIuXG4gICAqIFlvdSBjb3VsZCBkaXNhYmxlIHRoaXMgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgYHdpdGgub3BlbigpYC5cbiAgICovXG4gIEBJbnB1dCgpIGNsaWNrT3BlbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBob3VyIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0SG91cj86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIG1pbnV0ZSBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdE1pbnV0ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgc2Vjb25kcyBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdFNlY29uZHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctc3BlY2lmaWMtZGF0ZXNcIj5kaXNhYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXTtcblxuICAvKipcbiAgICogU2V0IGRpc2FibGVNb2JpbGUgdG8gdHJ1ZSB0byBhbHdheXMgdXNlIHRoZSBub24tbmF0aXZlIHBpY2tlci5cbiAgICogQnkgZGVmYXVsdCwgRmxhdHBpY2tyIHV0aWxpemVzIG5hdGl2ZSBkYXRldGltZSB3aWRnZXRzIHVubGVzcyBjZXJ0YWluIG9wdGlvbnMgKGUuZy4gZGlzYWJsZSkgYXJlIHVzZWQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlTW9iaWxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXTtcblxuICAvKipcbiAgICogRW5hYmxlcyB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZVRpbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgc2Vjb25kcyBpbiB0aGUgdGltZSBwaWNrZXIuXG4gICAqL1xuICBASW5wdXQoKSBlbmFibGVTZWNvbmRzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNpbmcgYSBjdXN0b20gZGF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGJ1aWx0LWluIGhhbmRsaW5nIGZvciBkYXRlIGZvcm1hdHMgdXNpbmcgZGF0ZUZvcm1hdCwgYWx0Rm9ybWF0LCBldGMuXG4gICAqL1xuICBASW5wdXQoKSBmb3JtYXREYXRlPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc3RlcCBmb3IgdGhlIGhvdXIgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBASW5wdXQoKSBob3VySW5jcmVtZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBjYWxlbmRhciBpbmxpbmUuXG4gICAqL1xuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHBpY2sgdG8gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBASW5wdXQoKSBtYXhEYXRlOiBzdHJpbmcgfCBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBzdGFydCBwaWNraW5nIGZyb20gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBASW5wdXQoKSBtaW5EYXRlOiBzdHJpbmcgfCBEYXRlO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgbWludXRlIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgQElucHV0KCkgbWludXRlSW5jcmVtZW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBkYXRlLCBtdWx0aXBsZSBkYXRlcyBvciBhIGRhdGUgcmFuZ2UuXG4gICAqL1xuICBASW5wdXQoKSBtb2RlOiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgfCAncmFuZ2UnO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgYXJyb3cgaWNvbiwgdXNlZCB0byBzd2l0Y2ggbW9udGhzLlxuICAgKi9cbiAgQElucHV0KCkgbmV4dEFycm93OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBkYXkgc2VsZWN0aW9uIGluIGNhbGVuZGFyLiBVc2UgaXQgYWxvbmcgd2l0aCBgZW5hYmxlVGltZWAgdG8gY3JlYXRlIGEgdGltZSBwaWNrZXIuXG4gICAqL1xuICBASW5wdXQoKSBub0NhbGVuZGFyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgZGF0ZSBmb3IgJ3RvZGF5Jywgd2hpY2ggd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgXCJuZXcgRGF0ZSgpXCJcbiAgICovXG4gIEBJbnB1dCgpIG5vdz86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIGRhdGUgc3RyaW5nIGFuZCBtdXN0IHJldHVybiBhIERhdGUgb2JqZWN0LlxuICAgKi9cbiAgQElucHV0KCkgcGFyc2VEYXRlOiAoc3RyOiBzdHJpbmcpID0+IERhdGU7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBsZWZ0IGFycm93IGljb24uXG4gICAqL1xuICBASW5wdXQoKSBwcmV2QXJyb3c6IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyB0aGUgbW9udGggdXNpbmcgdGhlIHNob3J0aGFuZCB2ZXJzaW9uIChpZSwgU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyKS5cbiAgICovXG4gIEBJbnB1dCgpIHNob3J0aGFuZEN1cnJlbnRNb250aDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKSBzaG93TW9udGhzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHRoZSBjYWxlbmRhciBpbnNpZGUgdGhlIHdyYXBwZXIgYW5kIG5leHQgdG8gdGhlIGlucHV0IGVsZW1lbnQuIChMZWF2ZSBgZmFsc2VgIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZykuXG4gICAqL1xuICBASW5wdXQoKSBzdGF0aWM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZSB3aXRob3V0IEFNL1BNIHNlbGVjdGlvbiB3aGVuIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSB0aW1lMjRocjogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBkaXNwbGF5IG9mIHdlZWsgbnVtYmVycyBpbiBjYWxlbmRhci5cbiAgICovXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG92ZXJyaWRlIHRoZSBmdW5jdGlvbiB0aGF0IGV4dHJhY3RzIHRoZSB3ZWVrIG51bWJlcnMgZnJvbSBhIERhdGUgYnkgc3VwcGx5aW5nIGEgZ2V0V2VlayBmdW5jdGlvbi5cbiAgICogSXQgdGFrZXMgaW4gYSBkYXRlIGFzIGEgcGFyYW1ldGVyIGFuZCBzaG91bGQgcmV0dXJuIGEgY29ycmVzcG9uZGluZyBzdHJpbmcgdGhhdCB5b3Ugd2FudCB0byBhcHBlYXIgbGVmdCBvZiBldmVyeSB3ZWVrLlxuICAgKi9cbiAgQElucHV0KCkgZ2V0V2VlazogKGRhdGU6IERhdGUpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIGVsZW1lbnRzIGFuZCBpbnB1dCBncm91cHMuXG4gICAqL1xuICBASW5wdXQoKSB3cmFwOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwbHVnaW4gaW5zdGFuY2VzIHRvIHVzZS5cbiAgICovXG4gIEBJbnB1dCgpIHBsdWdpbnM6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIG9iamVjdCBvciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgbG9jYWxlLlxuICAgKi9cbiAgQElucHV0KCkgbG9jYWxlOiBvYmplY3QgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEF1dG8gY29udmVydCB0aGUgbmdNb2RlbCB2YWx1ZSBmcm9tIGEgc3RyaW5nIHRvIGEgZGF0ZSAvIGFycmF5IG9mIGRhdGVzIC8gZnJvbSAtIHRvIGRhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgYG1vZGVgXG4gICAqL1xuICBASW5wdXQoKSBjb252ZXJ0TW9kZWxWYWx1ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogSG93IHRoZSBtb250aCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgb2YgdGhlIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgbW9udGhTZWxlY3RvclR5cGU6ICdzdGF0aWMnIHwgJ2Ryb3Bkb3duJztcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgb25jZSB0aGUgY2FsZW5kYXIgaXMgaW4gYSByZWFkeSBzdGF0ZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrclJlYWR5OiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGRhdGUsIG9yIGNoYW5nZXMgdGhlIHRpbWUgb24gYSBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrckNoYW5nZTogRXZlbnRFbWl0dGVyPEZsYXRQaWNrck91dHB1dE9wdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBpcyB1cGRhdGVkIHdpdGggYSBuZXcgZGF0ZSBzdHJpbmcuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyVmFsdWVVcGRhdGU6IEV2ZW50RW1pdHRlcjxcbiAgICBGbGF0UGlja3JPdXRwdXRPcHRpb25zXG4gID4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JPcGVuOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNhbGVuZGFyIGlzIGNsb3NlZC5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JDbG9zZTogRXZlbnRFbWl0dGVyPEZsYXRQaWNrck91dHB1dE9wdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSBtb250aCBpcyBjaGFuZ2VkLCBlaXRoZXIgYnkgdGhlIHVzZXIgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JNb250aENoYW5nZTogRXZlbnRFbWl0dGVyPFxuICAgIEZsYXRQaWNrck91dHB1dE9wdGlvbnNcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgeWVhciBpcyBjaGFuZ2VkLCBlaXRoZXIgYnkgdGhlIHVzZXIgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JZZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUYWtlIGZ1bGwgY29udHJvbCBvZiBldmVyeSBkYXRlIGNlbGwgd2l0aCB0aGlzIG91dHB1dFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrckRheUNyZWF0ZTogRXZlbnRFbWl0dGVyPFxuICAgIEZsYXRQaWNrckRheUNyZWF0ZU91dHB1dE9wdGlvbnNcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGluc3RhbmNlOiBmbGF0cGlja3IuSW5zdGFuY2U7XG4gIHByaXZhdGUgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGluaXRpYWxWYWx1ZTogYW55O1xuXG4gIG9uQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBvblRvdWNoZWRGbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGVmYXVsdHM6IEZsYXRwaWNrckRlZmF1bHRzLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgIGFsdEZvcm1hdDogdGhpcy5hbHRGb3JtYXQsXG4gICAgICBhbHRJbnB1dDogdGhpcy5hbHRJbnB1dCxcbiAgICAgIGFsdElucHV0Q2xhc3M6IHRoaXMuYWx0SW5wdXRDbGFzcyxcbiAgICAgIGFsbG93SW5wdXQ6IHRoaXMuYWxsb3dJbnB1dCxcbiAgICAgIGFwcGVuZFRvOiB0aGlzLmFwcGVuZFRvLFxuICAgICAgYXJpYURhdGVGb3JtYXQ6IHRoaXMuYXJpYURhdGVGb3JtYXQsXG4gICAgICBjbGlja09wZW5zOiB0aGlzLmNsaWNrT3BlbnMsXG4gICAgICBkYXRlRm9ybWF0OiB0aGlzLmRhdGVGb3JtYXQsXG4gICAgICBkZWZhdWx0SG91cjogdGhpcy5kZWZhdWx0SG91cixcbiAgICAgIGRlZmF1bHRNaW51dGU6IHRoaXMuZGVmYXVsdE1pbnV0ZSxcbiAgICAgIGRlZmF1bHRTZWNvbmRzOiB0aGlzLmRlZmF1bHRTZWNvbmRzLFxuICAgICAgZGlzYWJsZTogdGhpcy5kaXNhYmxlLFxuICAgICAgZGlzYWJsZU1vYmlsZTogdGhpcy5kaXNhYmxlTW9iaWxlLFxuICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgIGVuYWJsZVRpbWU6IHRoaXMuZW5hYmxlVGltZSxcbiAgICAgIGVuYWJsZVNlY29uZHM6IHRoaXMuZW5hYmxlU2Vjb25kcyxcbiAgICAgIGZvcm1hdERhdGU6IHRoaXMuZm9ybWF0RGF0ZSxcbiAgICAgIGhvdXJJbmNyZW1lbnQ6IHRoaXMuaG91ckluY3JlbWVudCxcbiAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGlubGluZTogdGhpcy5pbmxpbmUsXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUsXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUsXG4gICAgICBtaW51dGVJbmNyZW1lbnQ6IHRoaXMubWludXRlSW5jcmVtZW50LFxuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgbmV4dEFycm93OiB0aGlzLm5leHRBcnJvdyxcbiAgICAgIG5vQ2FsZW5kYXI6IHRoaXMubm9DYWxlbmRhcixcbiAgICAgIG5vdzogdGhpcy5ub3csXG4gICAgICBwYXJzZURhdGU6IHRoaXMucGFyc2VEYXRlLFxuICAgICAgcHJldkFycm93OiB0aGlzLnByZXZBcnJvdyxcbiAgICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogdGhpcy5zaG9ydGhhbmRDdXJyZW50TW9udGgsXG4gICAgICBzaG93TW9udGhzOiB0aGlzLnNob3dNb250aHMsXG4gICAgICBtb250aFNlbGVjdG9yVHlwZTogdGhpcy5tb250aFNlbGVjdG9yVHlwZSxcbiAgICAgIHN0YXRpYzogdGhpcy5zdGF0aWMsXG4gICAgICB0aW1lMjRocjogdGhpcy50aW1lMjRocixcbiAgICAgIHdlZWtOdW1iZXJzOiB0aGlzLndlZWtOdW1iZXJzLFxuICAgICAgZ2V0V2VlazogdGhpcy5nZXRXZWVrLFxuICAgICAgd3JhcDogdGhpcy53cmFwLFxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zLFxuICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JDaGFuZ2UuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uT3BlbjogKHNlbGVjdGVkRGF0ZXM6IERhdGVbXSwgZGF0ZVN0cmluZzogc3RyaW5nLCBpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyT3Blbi5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25DbG9zZTogKHNlbGVjdGVkRGF0ZXM6IERhdGVbXSwgZGF0ZVN0cmluZzogc3RyaW5nLCBpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyQ2xvc2UuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uTW9udGhDaGFuZ2U6IChcbiAgICAgICAgc2VsZWN0ZWREYXRlczogRGF0ZVtdLFxuICAgICAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGluc3RhbmNlOiBhbnlcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrck1vbnRoQ2hhbmdlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvblllYXJDaGFuZ2U6IChcbiAgICAgICAgc2VsZWN0ZWREYXRlczogRGF0ZVtdLFxuICAgICAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGluc3RhbmNlOiBhbnlcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrclllYXJDaGFuZ2UuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uUmVhZHk6IChzZWxlY3RlZERhdGVzOiBEYXRlW10sIGRhdGVTdHJpbmc6IHN0cmluZywgaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrclJlYWR5LmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvblZhbHVlVXBkYXRlOiAoXG4gICAgICAgIHNlbGVjdGVkRGF0ZXM6IERhdGVbXSxcbiAgICAgICAgZGF0ZVN0cmluZzogc3RyaW5nLFxuICAgICAgICBpbnN0YW5jZTogYW55XG4gICAgICApID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JWYWx1ZVVwZGF0ZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25EYXlDcmVhdGU6IChcbiAgICAgICAgc2VsZWN0ZWREYXRlczogRGF0ZVtdLFxuICAgICAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGluc3RhbmNlOiBhbnksXG4gICAgICAgIGRheUVsZW1lbnQ6IEhUTUxFbGVtZW50XG4gICAgICApID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JEYXlDcmVhdGUuZW1pdCh7XG4gICAgICAgICAgc2VsZWN0ZWREYXRlcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIGRheUVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG9wdGlvbnNba2V5XSA9ICh0aGlzLm9wdGlvbnMgYXMgYW55KVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnNba2V5XSA9ICh0aGlzLmRlZmF1bHRzIGFzIGFueSlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIG9wdGlvbnMudGltZV8yNGhyID0gb3B0aW9ucy50aW1lMjRocjtcblxuICAgIC8vIHdvcmthcm91bmQgYnVnIGluIGZsYXRwaWNrciA0LjYgd2hlcmUgaXQgZG9lc24ndCBjb3B5IHRoZSBjbGFzc2VzIGFjcm9zc1xuICAgIC8vIFRPRE8gLSByZW1vdmUgb25jZSBmaXggaW4gaHR0cHM6Ly9naXRodWIuY29tL2ZsYXRwaWNrci9mbGF0cGlja3IvaXNzdWVzLzE4NjAgaXMgcmVsZWFzZWRcbiAgICBvcHRpb25zLmFsdElucHV0Q2xhc3MgPVxuICAgICAgKG9wdGlvbnMuYWx0SW5wdXRDbGFzcyB8fCAnJykgKyAnICcgKyB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBmbGF0cGlja3IoXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgZmxhdHBpY2tyLkluc3RhbmNlO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZSh0aGlzLmlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGlucHV0S2V5ID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQoaW5wdXRLZXkgYXMgYW55LCAodGhpcyBhcyBhbnkpW2lucHV0S2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuXHRcdHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuXHR9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY29udmVydGVkVmFsdWU6IGFueSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnZlcnRNb2RlbFZhbHVlICYmIHRoaXMubW9kZSA9PT0gJ3JhbmdlJyAmJiB2YWx1ZSkge1xuICAgICAgY29udmVydGVkVmFsdWUgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGUoY29udmVydGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmbGF0cGlja3IgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgeWV0LCBzdG9yZSB0aGUgdmFsdWUgZm9yIGxhdGVyIHVzZVxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5zdGFuY2UuX2lucHV0LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UuX2lucHV0LCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIGlucHV0Q2hhbmdlZCgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAodGhpcy5jb252ZXJ0TW9kZWxWYWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4gICAgICAgICAgY29uc3QgZGF0ZXM6IERhdGVbXSA9IHZhbHVlXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgICAgIC5tYXAoc3RyID0+XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgIHN0cixcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNvbmZpZy5kYXRlRm9ybWF0LFxuICAgICAgICAgICAgICAgICF0aGlzLmluc3RhbmNlLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGVzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IHZhbHVlXG4gICAgICAgICAgICAuc3BsaXQodGhpcy5pbnN0YW5jZS5sMTBuLnJhbmdlU2VwYXJhdG9yKVxuICAgICAgICAgICAgLm1hcChzdHIgPT5cbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgc3RyLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuY29uZmlnLmRhdGVGb3JtYXQsXG4gICAgICAgICAgICAgICAgIXRoaXMuaW5zdGFuY2UuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oeyBmcm9tLCB0byB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaW5nbGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucGFyc2VEYXRlKFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgICAgIXRoaXMuaW5zdGFuY2UuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4odmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEluamVjdGlvblRva2VuLFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsYXRwaWNrckRpcmVjdGl2ZSB9IGZyb20gJy4vZmxhdHBpY2tyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBGbGF0cGlja3JEZWZhdWx0cyxcbiAgRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Vcbn0gZnJvbSAnLi9mbGF0cGlja3ItZGVmYXVsdHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0RFRkFVTFRTID0gbmV3IEluamVjdGlvblRva2VuKCdmbGF0cGlja3IgZGVmYXVsdHMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzRmFjdG9yeShcbiAgdXNlckRlZmF1bHRzOiBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZVxuKTogRmxhdHBpY2tyRGVmYXVsdHMge1xuICBjb25zdCBkZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHMgPSBuZXcgRmxhdHBpY2tyRGVmYXVsdHMoKTtcbiAgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgdXNlckRlZmF1bHRzKTtcbiAgcmV0dXJuIGRlZmF1bHRzO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGbGF0cGlja3JEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRmxhdHBpY2tyRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBGbGF0cGlja3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICB1c2VyRGVmYXVsdHM6IEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlID0ge31cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGbGF0cGlja3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfREVGQVVMVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJEZWZhdWx0c1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRmxhdHBpY2tyRGVmYXVsdHMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogZGVmYXVsdHNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX0RFRkFVTFRTXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJJbmplY3Rpb25Ub2tlbiIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQWlHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0FDOUhEOzs7Ozs2QkEwTnNCLFFBQVE7Ozs7NEJBS1IsS0FBSzs7Ozs7aUNBTUQsRUFBRTs7Ozs4QkFLSixLQUFLOzs7OzRCQUtILFNBQVM7Ozs7a0NBS1AsUUFBUTs7Ozs7OEJBTVosSUFBSTs7Ozs7OEJBTUwsT0FBTzs7OzsrQkFLTCxFQUFFOzs7O2lDQUtBLENBQUM7Ozs7a0NBS0EsQ0FBQzs7OzsyQkFLSSxFQUFFOzs7OztpQ0FNUixLQUFLOzs7OzBCQUtBLEVBQUU7Ozs7OEJBS1YsS0FBSzs7OztpQ0FLRixLQUFLOzs7OzhCQUtRLFNBQVM7Ozs7aUNBS3ZCLENBQUM7Ozs7MEJBS1AsS0FBSzs7OzsyQkFLRSxTQUFTOzs7OzJCQUtULFNBQVM7Ozs7bUNBS1IsQ0FBQzs7Ozt3QkFLYSxRQUFROzs7OzZCQUs1QixHQUFHOzs7OzhCQUtELEtBQUs7Ozs7dUJBS0csSUFBSSxJQUFJLEVBQUU7Ozs7NkJBVXBCLEdBQUc7Ozs7eUNBS1UsS0FBSzs7OzswQkFLcEIsS0FBSzs7Ozs0QkFLSCxLQUFLOzs7Ozt1QkFNVixLQUFLOzs7OytCQUtHLEtBQUs7Ozs7d0JBV1osS0FBSzs7OzsyQkFLSixFQUFFOzs7OzBCQUtPLFNBQVM7Ozs7cUNBS04sS0FBSzs7Ozs4QkFLYixDQUFDOzs7O3FDQUtxQixRQUFROzs7b0JBOU1wREEsZUFBVTs7Z0NBck5YOzs7Ozs7O3lCQ2lDYSxnQ0FBZ0MsR0FBUTtRQUNuRCxPQUFPLEVBQUVDLHVCQUFpQjtRQUMxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEdBQUEsQ0FBQzs7UUFDakQsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOztRQXdTQSw0QkFDVSxLQUNBLFVBQ0E7WUFGQSxRQUFHLEdBQUgsR0FBRztZQUNILGFBQVEsR0FBUixRQUFRO1lBQ1IsYUFBUSxHQUFSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQTVRNkIsRUFBRTs7OztrQ0E2TU0sSUFBSUMsaUJBQVksRUFBRTs7OzttQ0FNakIsSUFBSUEsaUJBQVksRUFBRTs7Ozt3Q0FRdEUsSUFBSUEsaUJBQVksRUFBRTs7OztpQ0FNZ0MsSUFBSUEsaUJBQVksRUFBRTs7OztrQ0FNakIsSUFBSUEsaUJBQVksRUFBRTs7Ozt3Q0FRckUsSUFBSUEsaUJBQVksRUFBRTs7Ozt1Q0FRbEIsSUFBSUEsaUJBQVksRUFBRTs7OztzQ0FRbEIsSUFBSUEsaUJBQVksRUFBRTs4QkFHRCxLQUFLOzhCQUdTLGVBQVE7K0JBRTdCLGVBQVE7U0FNbEI7Ozs7UUFFSiw0Q0FBZTs7O1lBQWY7Z0JBQUEsaUJBOEdDO2dCQTdHQyxxQkFBTSxPQUFPLEdBQVE7b0JBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN2QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO29CQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDckIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtvQkFDakQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO29CQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtvQkFDbkIsUUFBUSxFQUFFLFVBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLFFBQWE7d0JBQ2pFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO3FCQUNwRTtvQkFDRCxNQUFNLEVBQUUsVUFBQyxhQUFxQixFQUFFLFVBQWtCLEVBQUUsUUFBYTt3QkFDL0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7cUJBQ2xFO29CQUNELE9BQU8sRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0IsRUFBRSxRQUFhO3dCQUNoRSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztxQkFDbkU7b0JBQ0QsYUFBYSxFQUFFLFVBQ2IsYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYTt3QkFFYixLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUUsVUFDWixhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhO3dCQUViLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7cUJBQ3hFO29CQUNELE9BQU8sRUFBRSxVQUFDLGFBQXFCLEVBQUUsVUFBa0IsRUFBRSxRQUFhO3dCQUNoRSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztxQkFDbkU7b0JBQ0QsYUFBYSxFQUFFLFVBQ2IsYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYTt3QkFFYixLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO3FCQUN6RTtvQkFDRCxXQUFXLEVBQUUsVUFDWCxhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhLEVBQ2IsVUFBdUI7d0JBRXZCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7NEJBQzNCLGFBQWEsZUFBQTs0QkFDYixVQUFVLFlBQUE7NEJBQ1YsUUFBUSxVQUFBOzRCQUNSLFVBQVUsWUFBQTt5QkFDWCxDQUFDLENBQUM7cUJBQ0o7aUJBQ0YsQ0FBQztnQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQzlCLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO3dCQUN2QyxJQUFJLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7NEJBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUksQ0FBQyxPQUFjLEdBQUUsR0FBRyxDQUFDLENBQUM7eUJBQzNDOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUksQ0FBQyxRQUFlLEdBQUUsR0FBRyxDQUFDLENBQUM7eUJBQzVDO3FCQUNGO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7OztnQkFJckMsT0FBTyxDQUFDLGFBQWE7b0JBQ25CLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFFekUsSUFBSSxDQUFDLFFBQVEscUJBQUcsU0FBUyxDQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsT0FBTyxDQUNjLENBQUEsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4Qzs7Ozs7UUFFRCx3Q0FBVzs7OztZQUFYLFVBQVksT0FBc0I7Z0JBQWxDLGlCQU1DO2dCQUxDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO3dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsbUJBQUMsUUFBZSxHQUFFLEVBQUMsS0FBVyxHQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7cUJBQzdELENBQUMsQ0FBQztpQkFDSjthQUNGOzs7O1FBRUQsd0NBQVc7OztZQUFYO2dCQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDeEI7YUFDQzs7Ozs7UUFFRCx1Q0FBVTs7OztZQUFWLFVBQVcsS0FBVTtnQkFDbkIscUJBQUksY0FBYyxHQUFRLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxFQUFFO29CQUM1RCxjQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07O29CQUVMLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO2lCQUNwQzthQUNGOzs7OztRQUVELDZDQUFnQjs7OztZQUFoQixVQUFpQixFQUFPO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUN0Qjs7Ozs7UUFFRCw4Q0FBaUI7Ozs7WUFBakIsVUFBa0IsRUFBYztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDdkI7Ozs7O1FBRUQsNkNBQWdCOzs7O1lBQWhCLFVBQWlCLFVBQW1CO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztxQkFDekU7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7cUJBQ2pFO2lCQUNGO2FBQ0Y7Ozs7UUFHRCx5Q0FBWTs7O1lBRFo7Z0JBQUEsaUJBNENDO2dCQTFDQyxxQkFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQ3ZELFFBQVEsSUFBSSxDQUFDLElBQUk7d0JBQ2YsS0FBSyxVQUFVOzRCQUNiLHFCQUFNLEtBQUssR0FBVyxLQUFLO2lDQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDO2lDQUNYLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0NBQ04sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsR0FBRyxFQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFDL0IsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2pDOzZCQUFBLENBQ0YsQ0FBQzs0QkFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN2QixNQUFNO3dCQUVSLEtBQUssT0FBTzs0QkFDVjs7OztvQ0FBTyxZQUFJLEVBQUUsVUFBRSxDQVFYOzRCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLENBQUM7NEJBQzlCLE1BQU07d0JBRVIsS0FBSyxRQUFRLENBQUM7d0JBQ2Q7NEJBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FDYixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsS0FBSyxFQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2pDLENBQ0YsQ0FBQztxQkFDTDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjthQUNGOztvQkF2ZkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzt3QkFDN0MsSUFBSSxFQUFFOzs0QkFFSixRQUFRLEVBQUUsZUFBZTt5QkFDMUI7cUJBQ0Y7Ozs7O3dCQTVDQ0MsZUFBVTt3QkFhVixpQkFBaUI7d0JBSGpCQyxjQUFTOzs7OzhCQXdEUkMsVUFBSztnQ0FLTEEsVUFBSzsrQkFLTEEsVUFBSztvQ0FNTEEsVUFBSztpQ0FLTEEsVUFBSzsrQkFLTEEsVUFBSztxQ0FLTEEsVUFBSztpQ0FNTEEsVUFBSztpQ0FNTEEsVUFBSztrQ0FLTEEsVUFBSztvQ0FJTEEsVUFBSztxQ0FLTEEsVUFBSzs4QkFLTEEsVUFBSztvQ0FNTEEsVUFBSzs2QkFLTEEsVUFBSztpQ0FLTEEsVUFBSztvQ0FLTEEsVUFBSztpQ0FLTEEsVUFBSztvQ0FLTEEsVUFBSzs2QkFLTEEsVUFBSzs4QkFLTEEsVUFBSzs4QkFLTEEsVUFBSztzQ0FLTEEsVUFBSzsyQkFLTEEsVUFBSztnQ0FLTEEsVUFBSztpQ0FLTEEsVUFBSzswQkFLTEEsVUFBSztnQ0FLTEEsVUFBSztnQ0FLTEEsVUFBSzs0Q0FLTEEsVUFBSztpQ0FLTEEsVUFBSzs2QkFLTEEsVUFBSzsrQkFLTEEsVUFBSztrQ0FLTEEsVUFBSzs4QkFNTEEsVUFBSzsyQkFLTEEsVUFBSzs4QkFLTEEsVUFBSzs2QkFLTEEsVUFBSzt3Q0FLTEEsVUFBSzt3Q0FLTEEsVUFBSztxQ0FLTEMsV0FBTTtzQ0FNTkEsV0FBTTsyQ0FNTkEsV0FBTTtvQ0FRTkEsV0FBTTtxQ0FNTkEsV0FBTTsyQ0FNTkEsV0FBTTswQ0FRTkEsV0FBTTt5Q0FRTkEsV0FBTTttQ0FrTE5DLGlCQUFZLFNBQUMsT0FBTzs7aUNBbGZ2Qjs7Ozs7OztBQ0FBLHlCQVlhLGFBQWEsR0FBRyxJQUFJQyxtQkFBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7O0FBRXRFLDZCQUNFLFlBQXdDO1FBRXhDLHFCQUFNLFFBQVEsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7Ozs7OztRQU9RLHVCQUFPOzs7O1lBQWQsVUFDRSxZQUE2QztnQkFBN0MsNkJBQUE7b0JBQUEsaUJBQTZDOztnQkFFN0MsT0FBTztvQkFDTCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLEVBQUUsWUFBWTt5QkFDdkI7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLGVBQWU7NEJBQzNCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQzt5QkFDdEI7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIOztvQkF0QkZDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQzlCOzs4QkF6QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=