import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorModule } from './richtexteditor.module';
import { Toolbar, Link, Image, ImportExport, Audio, Video, Count, QuickToolbar, HtmlEditor, MarkdownEditor, Table, PasteCleanup, Resize, FileManager, FormatPainter, EmojiPicker, SlashMenu } from '@syncfusion/ej2-richtexteditor';
import * as i0 from "@angular/core";
export const ToolbarService = { provide: 'RichTextEditorToolbar', useValue: Toolbar };
export const LinkService = { provide: 'RichTextEditorLink', useValue: Link };
export const ImageService = { provide: 'RichTextEditorImage', useValue: Image };
export const ImportExportService = { provide: 'RichTextEditorImportExport', useValue: ImportExport };
export const AudioService = { provide: 'RichTextEditorAudio', useValue: Audio };
export const VideoService = { provide: 'RichTextEditorVideo', useValue: Video };
export const CountService = { provide: 'RichTextEditorCount', useValue: Count };
export const QuickToolbarService = { provide: 'RichTextEditorQuickToolbar', useValue: QuickToolbar };
export const HtmlEditorService = { provide: 'RichTextEditorHtmlEditor', useValue: HtmlEditor };
export const MarkdownEditorService = { provide: 'RichTextEditorMarkdownEditor', useValue: MarkdownEditor };
export const TableService = { provide: 'RichTextEditorTable', useValue: Table };
export const PasteCleanupService = { provide: 'RichTextEditorPasteCleanup', useValue: PasteCleanup };
export const ResizeService = { provide: 'RichTextEditorResize', useValue: Resize };
export const FileManagerService = { provide: 'RichTextEditorFileManager', useValue: FileManager };
export const FormatPainterService = { provide: 'RichTextEditorFormatPainter', useValue: FormatPainter };
export const EmojiPickerService = { provide: 'RichTextEditorEmojiPicker', useValue: EmojiPicker };
export const SlashMenuService = { provide: 'RichTextEditorSlashMenu', useValue: SlashMenu };
/**
 * NgModule definition for the RichTextEditor component with providers.
 */
export class RichTextEditorAllModule {
}
RichTextEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RichTextEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, imports: [CommonModule, RichTextEditorModule], exports: [RichTextEditorModule] });
RichTextEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, providers: [
        ToolbarService,
        LinkService,
        ImageService,
        ImportExportService,
        AudioService,
        VideoService,
        CountService,
        QuickToolbarService,
        HtmlEditorService,
        MarkdownEditorService,
        TableService,
        PasteCleanupService,
        ResizeService,
        FileManagerService,
        FormatPainterService,
        EmojiPickerService,
        SlashMenuService
    ], imports: [[CommonModule, RichTextEditorModule], RichTextEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RichTextEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RichTextEditorModule],
                    exports: [
                        RichTextEditorModule
                    ],
                    providers: [
                        ToolbarService,
                        LinkService,
                        ImageService,
                        ImportExportService,
                        AudioService,
                        VideoService,
                        CountService,
                        QuickToolbarService,
                        HtmlEditorService,
                        MarkdownEditorService,
                        TableService,
                        PasteCleanupService,
                        ResizeService,
                        FileManagerService,
                        FormatPainterService,
                        EmojiPickerService,
                        SlashMenuService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaHRleHRlZGl0b3ItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yaWNoLXRleHQtZWRpdG9yL3JpY2h0ZXh0ZWRpdG9yLWFsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0NBQWdDLENBQUE7O0FBR2pPLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQ3BHLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzlGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDbkgsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFR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Z01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJpY2hUZXh0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9yaWNodGV4dGVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmljaFRleHRFZGl0b3JNb2R1bGUgfSBmcm9tICcuL3JpY2h0ZXh0ZWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQge1Rvb2xiYXIsIExpbmssIEltYWdlLCBJbXBvcnRFeHBvcnQsIEF1ZGlvLCBWaWRlbywgQ291bnQsIFF1aWNrVG9vbGJhciwgSHRtbEVkaXRvciwgTWFya2Rvd25FZGl0b3IsIFRhYmxlLCBQYXN0ZUNsZWFudXAsIFJlc2l6ZSwgRmlsZU1hbmFnZXIsIEZvcm1hdFBhaW50ZXIsIEVtb2ppUGlja2VyLCBTbGFzaE1lbnV9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1yaWNodGV4dGVkaXRvcidcblxuXG5leHBvcnQgY29uc3QgVG9vbGJhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvclRvb2xiYXInLCB1c2VWYWx1ZTogVG9vbGJhcn07XG5leHBvcnQgY29uc3QgTGlua1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckxpbmsnLCB1c2VWYWx1ZTogTGlua307XG5leHBvcnQgY29uc3QgSW1hZ2VTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JJbWFnZScsIHVzZVZhbHVlOiBJbWFnZX07XG5leHBvcnQgY29uc3QgSW1wb3J0RXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9ySW1wb3J0RXhwb3J0JywgdXNlVmFsdWU6IEltcG9ydEV4cG9ydH07XG5leHBvcnQgY29uc3QgQXVkaW9TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JBdWRpbycsIHVzZVZhbHVlOiBBdWRpb307XG5leHBvcnQgY29uc3QgVmlkZW9TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JWaWRlbycsIHVzZVZhbHVlOiBWaWRlb307XG5leHBvcnQgY29uc3QgQ291bnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JDb3VudCcsIHVzZVZhbHVlOiBDb3VudH07XG5leHBvcnQgY29uc3QgUXVpY2tUb29sYmFyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yUXVpY2tUb29sYmFyJywgdXNlVmFsdWU6IFF1aWNrVG9vbGJhcn07XG5leHBvcnQgY29uc3QgSHRtbEVkaXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckh0bWxFZGl0b3InLCB1c2VWYWx1ZTogSHRtbEVkaXRvcn07XG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JNYXJrZG93bkVkaXRvcicsIHVzZVZhbHVlOiBNYXJrZG93bkVkaXRvcn07XG5leHBvcnQgY29uc3QgVGFibGVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JUYWJsZScsIHVzZVZhbHVlOiBUYWJsZX07XG5leHBvcnQgY29uc3QgUGFzdGVDbGVhbnVwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yUGFzdGVDbGVhbnVwJywgdXNlVmFsdWU6IFBhc3RlQ2xlYW51cH07XG5leHBvcnQgY29uc3QgUmVzaXplU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yUmVzaXplJywgdXNlVmFsdWU6IFJlc2l6ZX07XG5leHBvcnQgY29uc3QgRmlsZU1hbmFnZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JGaWxlTWFuYWdlcicsIHVzZVZhbHVlOiBGaWxlTWFuYWdlcn07XG5leHBvcnQgY29uc3QgRm9ybWF0UGFpbnRlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdSaWNoVGV4dEVkaXRvckZvcm1hdFBhaW50ZXInLCB1c2VWYWx1ZTogRm9ybWF0UGFpbnRlcn07XG5leHBvcnQgY29uc3QgRW1vamlQaWNrZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnUmljaFRleHRFZGl0b3JFbW9qaVBpY2tlcicsIHVzZVZhbHVlOiBFbW9qaVBpY2tlcn07XG5leHBvcnQgY29uc3QgU2xhc2hNZW51U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1JpY2hUZXh0RWRpdG9yU2xhc2hNZW51JywgdXNlVmFsdWU6IFNsYXNoTWVudX07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFJpY2hUZXh0RWRpdG9yIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSaWNoVGV4dEVkaXRvck1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBSaWNoVGV4dEVkaXRvck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgVG9vbGJhclNlcnZpY2UsXG4gICAgICAgIExpbmtTZXJ2aWNlLFxuICAgICAgICBJbWFnZVNlcnZpY2UsXG4gICAgICAgIEltcG9ydEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIEF1ZGlvU2VydmljZSxcbiAgICAgICAgVmlkZW9TZXJ2aWNlLFxuICAgICAgICBDb3VudFNlcnZpY2UsXG4gICAgICAgIFF1aWNrVG9vbGJhclNlcnZpY2UsXG4gICAgICAgIEh0bWxFZGl0b3JTZXJ2aWNlLFxuICAgICAgICBNYXJrZG93bkVkaXRvclNlcnZpY2UsXG4gICAgICAgIFRhYmxlU2VydmljZSxcbiAgICAgICAgUGFzdGVDbGVhbnVwU2VydmljZSxcbiAgICAgICAgUmVzaXplU2VydmljZSxcbiAgICAgICAgRmlsZU1hbmFnZXJTZXJ2aWNlLFxuICAgICAgICBGb3JtYXRQYWludGVyU2VydmljZSxcbiAgICAgICAgRW1vamlQaWNrZXJTZXJ2aWNlLFxuICAgICAgICBTbGFzaE1lbnVTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBSaWNoVGV4dEVkaXRvckFsbE1vZHVsZSB7IH0iXX0=