import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class UiSwitchComponent implements ControlValueAccessor {
    private _checked;
    private _disabled;
    private _reverse;
    size: string;
    change: EventEmitter<boolean>;
    color: string;
    switchOffColor: string;
    switchColor: string;
    defaultBgColor: string;
    defaultBoColor: string;
    labelOn: string;
    labelOff: string;
    checked: boolean;
    disabled: boolean;
    reverse: boolean;
    getColor(flag?: string): string;
    onToggle(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
}
