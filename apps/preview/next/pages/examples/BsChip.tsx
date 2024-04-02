import { BsChip, BsChipSize, BsThumbnail, BsThumbnailSize } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'selected',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
        description: 'Sets value of the input checkbox element',
      },
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Text next to thumbnail',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(BsChipSize),
        propDefaultValue: BsChipSize.base,
        propType: 'BsChipSize',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'square',
        propType: 'boolean',
      },
    ],
    {
      size: BsChipSize.base,
      disabled: false,
      selected: false,
      square: false,
      label: 'Label',
      value: '',
    },
  );

  const selectHandler = () => {
    state.set((currentState) => ({
      ...currentState,
      selected: !currentState.selected,
    }));
    // eslint-disable-next-line no-console
    console.log('changed!');
  };
  return (
    <ComponentExample controls={{ state, controls }}>
      <BsChip
        size={state.get.size}
        square={state.get.square}
        inputProps={{
          checked: state.get.selected,
          disabled: state.get.disabled,
          value: state.get.value,
          onChange: selectHandler,
        }}
        slotPrefix={
          <BsThumbnail
            size={state.get.size === BsChipSize.sm ? BsThumbnailSize.sm : BsThumbnailSize.base}
            className="bg-gray-500"
          />
        }
      >
        {state.get.label}
      </BsChip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
