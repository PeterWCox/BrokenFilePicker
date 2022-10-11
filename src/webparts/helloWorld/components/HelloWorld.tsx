import * as React from 'react';
import { FilePicker, IFilePickerResult } from '@pnp/spfx-controls-react/lib/FilePicker';

export interface IHelloWorldProps {
  context: any;
}

export const HelloWorld = (props: IHelloWorldProps) => {
  return (
    <div>

      <h1>FilePicker Testing</h1>

      <FilePicker
        context={props.context}
        buttonIcon="FileImage"
        buttonLabel="Select file"
        // hidden
        hideWebSearchTab
        hideStockImages
        hideOrganisationalAssetTab
        hideOneDriveTab
        hideLinkUploadTab
        hideLocalMultipleUploadTab
        hideLocalUploadTab
        hideRecentTab
        onSave={() => alert("hi")}
        // onSave={(fppr: IFilePickerResult[]) => {
        //   addCardLink(fppr);
        //   setIsLinkPickerVisible(false);
        //   props.onLinkPickerDismiss();
        // }}
        // context={context}
        // onChange={(fppr: IFilePickerResult[]) => {
        //   addCardLink(fppr);
        //   setIsLinkPickerVisible(false);
        //   props.onLinkPickerDismiss();
        // }}
        // isPanelOpen={isLinkPickerVisible}
        // onCancel={() => {
        //   setIsLinkPickerVisible(false);
        //   props.onLinkPickerDismiss();
        // }}
        includePageLibraries
  />

    </div>
   
  );

}
