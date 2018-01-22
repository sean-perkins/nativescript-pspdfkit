import * as common from '../common';
import { Observable } from 'tns-core-modules/data/observable';
export { PageMode, documentTitleProperty } from '../common';
export declare const PROGRESS_EVENT = "progress";
export declare class TNSPSPDFKit {
    _downloadTask: any;
    private _progress;
    private appDelegate;
    events: Observable;
    constructor(licenseKey: string);
    convert(src: string, outPut?: string): Promise<any>;
    display(documentName: string): void;
    private downloadDocument(src);
}
export declare class TNSPSPDFView extends common.TNSPSPDFView {
    _isSetup: boolean;
    progress: number;
    private _downloadTask;
    nativeView: any;
    controller: any;
    config: any;
    private _progress;
    private _file;
    constructor();
    static toggleMemoryMode(): void;
    initNativeView(): void;
    clearCache(): void;
    private setupView();
    disposeNativeView(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    backgroundColor: string;
    getAnnotationField(name: string): any;
    getFormField(name: string): any;
    getAllFormFields(): Object;
    setFormField(name: string, value: any): void;
    undoEnabled: boolean;
    setFormFields(obj: Object): void;
    backgroundSaving: boolean;
    formsEnabled: boolean;
    scrollDirection: string;
    spreadFitting: string;
    thumbnailBar: string;
    scrubberBar: string;
    thumbnailSize: string;
    maxZoom: number;
    minZoom: number;
    enableFormElementsZoom: boolean;
    searchResultZoom: number;
    pageMode: any;
    downloadDocument(src: string): void;
}
