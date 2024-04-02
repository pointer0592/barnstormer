import { BsButton, BsDropdown, BsPopoverPlacement, BsPopoverStrategy } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propType: 'boolean',
        isRequired: true,
        description: 'Controls floating content visibility',
      },
      {
        type: 'select',
        modelName: 'placement',
        propType: 'BsPopoverPlacement',
        propDefaultValue: BsPopoverPlacement.bottom,
        options: Object.values(BsPopoverPlacement),
        description:
          'Dropdown default placement - may be automatically shifted or flipped based on screen size and dropdown position',
      },
      {
        type: 'select',
        modelName: 'strategy',
        propType: 'BsPopoverStrategy',
        propDefaultValue: BsPopoverStrategy.absolute,
        options: Object.values(BsPopoverStrategy),
        description: 'Dropdown positioning strategy',
      },
    ],
    {
      open: false,
      placement: BsPopoverPlacement.bottom,
      strategy: BsPopoverStrategy.absolute,
    },
  );

  const close = () => state.set({ open: false });
  const toggle = () => state.set((currentState) => ({ ...currentState, open: !currentState.open }));

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsDropdown
        trigger={<BsButton onClick={toggle}>Toggle</BsButton>}
        open={state.get.open}
        strategy={state.get.strategy}
        placement={state.get.placement}
        onClose={close}
      >
        <ul className="p-2 rounded bg-gray-100">
          <li>More</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      </BsDropdown>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
