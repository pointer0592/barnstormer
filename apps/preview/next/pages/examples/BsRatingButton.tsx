import { useEffect, useState } from 'react';
import { BsRatingButton, BsRatingButtonSize } from '@barnstormer/react';
import { ExamplePageLayout } from '../examples';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const [max, setMax] = useState(5);
  const { state, controls } = prepareControls(
    [
      {
        type: 'range',
        modelName: 'value',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              max,
              step: 1,
            },
          },
        ],
      },
      {
        type: 'range',
        modelName: 'max',
        propDefaultValue: 5,
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
              step: 1,
              max: 10,
            },
          },
        ],
      },
      {
        type: 'select',
        modelName: 'size',
        propType: 'BsRatingButtonSize',
        propDefaultValue: BsRatingButtonSize.base,
        options: Object.values(BsRatingButtonSize),
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
        propDefaultValue: false,
      },
    ],
    {
      value: 0,
      max,
      disabled: false,
      size: BsRatingButtonSize.base,
    },
  );

  useEffect(() => {
    setMax(state.get.max || 5);
  }, [state.get.max]);

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsRatingButton {...state.get} onChange={(value) => state.set({ value })} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
