import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  EDITOR_STORE,
  EMITTER_STORE,
  EmitterStoreProp,
  EditorStoreProp,
} from '../../stores';
import ExportSaveProjectModal from '../ExportSaveProjectModal';
import { ARCHIVE_EXTENSION } from '../../constants';
import { saveProject } from '../../utils';

@inject(EDITOR_STORE, EMITTER_STORE)
@observer
class SaevProjectModal extends React.Component<
  EditorStoreProp & EmitterStoreProp
> {
  render() {
    const { editorStore, emitterStore } = this.props;
    const {
      openSaveDialog,
      name,
      width,
      height,
      setOpenSaveDialog,
    } = editorStore!;
    const { emitters } = emitterStore!;

    return (
      <ExportSaveProjectModal
        open={openSaveDialog}
        actionType="Save"
        extension={ARCHIVE_EXTENSION}
        projectName={name.value}
        onClose={() => setOpenSaveDialog(false)}
        onTrueClick={() => {
          setOpenSaveDialog(false);
          saveProject(name.value, emitters, {
            width: width.value,
            height: height.value,
          });
        }}
      />
    );
  }
}

export default SaevProjectModal;
