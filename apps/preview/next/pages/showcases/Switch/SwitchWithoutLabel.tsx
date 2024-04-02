/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { BsSwitch } from '@barnstormer/react';
import { useState } from 'react';

export default function SwitchWithoutLabel() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <BsSwitch
      checked={checkedState}
      value="value-1"
      onChange={(event) => {
        setCheckedState(event.target.checked);
      }}
    />
  );
}

// #endregion source
SwitchWithoutLabel.getLayout = ShowcasePageLayout;
