/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
const /** @type {?} */ UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => UiSwitchComponent),
    multi: true
};
export class UiSwitchComponent {
    constructor() {
        this.size = 'medium';
        this.change = new EventEmitter();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
        this.labelOn = '';
        this.labelOff = '';
        this.onTouchedCallback = (v) => { };
        this.onChangeCallback = (v) => { };
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set checked(v) {
        this._checked = v !== false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disabled(v) {
        this._disabled = v !== false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set reverse(v) {
        this._reverse = v !== false;
    }
    /**
     * @return {?}
     */
    get reverse() {
        return this._reverse;
    }
    /**
     * @param {?=} flag
     * @return {?}
     */
    getColor(flag = '') {
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    }
    /**
     * @return {?}
     */
    onToggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
UiSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-switch',
                template: `
    <span class="switch"
    [class.checked]="checked"
    [class.disabled]="disabled"
    [class.switch-large]="size === 'large'"
    [class.switch-medium]="size === 'medium'"
    [class.switch-small]="size === 'small'"
    [class.switch-x-small]="size === 'x-small'"
    [class.switch-labeled]="!!labelOn || !!labelOff"
    [style.background-color]="getColor()"
    [style.border-color]="getColor('borderColor')"
    >
    <input type="checkbox" id="enabled" name="enabled" [checked]="checked" style="display: none;" aria-invalid="false">
    <small [style.background]="getColor('switchColor')">
    </small>
    <span class="switch-text" *ngIf="!!labelOn || !!labelOff">
      <span class="on" [innerHtml]="labelOn"></span>
      <span class="off" [innerHtml]="labelOff"></span>
    </span>
    </span>
  `,
                styles: [`
    .switch {
    background: #f00;
    border: 1px solid #dfdfdf;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    overflow: visible;
    padding: 0;
    margin: 0;
    cursor: pointer;
    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }

    small {
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }

    .switch-large {
    width: 66px;
    height: 40px;
    border-radius: 40px;
    }

    .switch-large small {
    width: 40px;
    height: 40px;
    }
    
    .switch-large small {
    width: 40px;
    height: 40px;
    }

    .switch-medium {
    width: 50px;
    height: 30px;
    border-radius: 30px;
    }

    .switch-medium.switch-labeled {
      width: 60px;
    }

    .switch-medium small {
    width: 30px;
    height: 30px;
    }

    .switch-small {
    width: 33px;
    height: 20px;
    border-radius: 20px;
    }
    
    .switch-x-small {
    width: 25px;
    height: 10px;
    border-radius: 10px;
    }

    .switch-small small {
    width: 20px;
    height: 20px;
    }
    
    .switch-x-small x-small {
      width: 10px;
      height: 10px; 
    }
    
    
    .switch-labeled {
      cursor: pointer;
    }

    .checked {
    background: rgb(100, 189, 99);
    border-color: rgb(100, 189, 99);
    }

    .switch-large.checked small {
    left: 26px;
    }

    .switch-medium.checked small {
    left: 20px;
    }

    .switch-medium.switch-labeled.checked small {
      left: 30px;
    }

    .switch-small.checked small {
    left: 13px;
    }
    
    .switch-x-small.checked x-small {
    left: 15px;
    }

    .disabled {
    opacity: .50;
    cursor: not-allowed;
    }

    .switch .switch-text {
      font-size: 13px;
    }

    .switch .off {
      opacity: 1;
      position: absolute;
      right: 10%;
      top: 25%;
      z-index: 0;
      color:#A9A9A9;
      transition: 0.4s ease-out all;
    }

    .switch .on {
      opacity:0;
      z-index: 0;
      color:#fff;
      position: absolute;
      top: 25%;
      left: 9%;
      transition: 0.4s ease-out all;
    }

    .switch.checked .off {
      opacity:0;
    }

    .switch.checked .on {
      opacity:1;
    }

    `],
                providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
UiSwitchComponent.ctorParameters = () => [];
UiSwitchComponent.propDecorators = {
    "size": [{ type: Input },],
    "change": [{ type: Output },],
    "color": [{ type: Input },],
    "switchOffColor": [{ type: Input },],
    "switchColor": [{ type: Input },],
    "defaultBgColor": [{ type: Input },],
    "defaultBoColor": [{ type: Input },],
    "labelOn": [{ type: Input },],
    "labelOff": [{ type: Input },],
    "checked": [{ type: Input },],
    "disabled": [{ type: Input },],
    "reverse": [{ type: Input },],
    "onToggle": [{ type: HostListener, args: ['click',] },],
};
function UiSwitchComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    UiSwitchComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    UiSwitchComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    UiSwitchComponent.propDecorators;
    /** @type {?} */
    UiSwitchComponent.prototype._checked;
    /** @type {?} */
    UiSwitchComponent.prototype._disabled;
    /** @type {?} */
    UiSwitchComponent.prototype._reverse;
    /** @type {?} */
    UiSwitchComponent.prototype.size;
    /** @type {?} */
    UiSwitchComponent.prototype.change;
    /** @type {?} */
    UiSwitchComponent.prototype.color;
    /** @type {?} */
    UiSwitchComponent.prototype.switchOffColor;
    /** @type {?} */
    UiSwitchComponent.prototype.switchColor;
    /** @type {?} */
    UiSwitchComponent.prototype.defaultBgColor;
    /** @type {?} */
    UiSwitchComponent.prototype.defaultBoColor;
    /** @type {?} */
    UiSwitchComponent.prototype.labelOn;
    /** @type {?} */
    UiSwitchComponent.prototype.labelOff;
    /** @type {?} */
    UiSwitchComponent.prototype.onTouchedCallback;
    /** @type {?} */
    UiSwitchComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=ui-switch.component.js.map