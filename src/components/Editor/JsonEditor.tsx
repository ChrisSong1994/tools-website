import { CloseOutlined } from '@fett/icons';

import { isEmpty } from '@/utils';
// import Events from '@/utils/events';
import { memo, useMemo } from 'react';
import BaseEditor from './BaseEditor';
import { EEditorLanguage } from './index';
interface IProps {
  value: string;
  onChange: (v: any) => void;
  style?: Record<string, any>;
  error?: string | null;
  onErrorClose?: () => void;
}

const JsonEditor = (props: IProps) => {
  const { value, onChange, style, error, onErrorClose } = props;
  const errorShow = useMemo(() => !isEmpty(error), [error]);

  const handleImport = async () => {
    // const { fileValue } = await Events.getFileFromLocalPath({
    //   filters: [{ name: 'json文件', extensions: ['*.json'] }],
    // });
    // return fileValue;
  };

  return (
    <div style={{ position: 'relative' }}>
      <BaseEditor
        style={style}
        language={EEditorLanguage.JSON}
        value={value}
        tipShow={true}
        // onImport={handleImport}
        onChange={onChange}
      />
      {errorShow ? (
        <div className={'tools-editor-error-panel'}>
          <div className={'text'}> {error}</div>
          <CloseOutlined className={'close'} onClick={onErrorClose} />
        </div>
      ) : null}
    </div>
  );
};

export default memo(JsonEditor);
