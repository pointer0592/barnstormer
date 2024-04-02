import { BsTooltip, type BsTooltipProps, BsPopoverPlacement, BsPopoverStrategy } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<BsTooltipProps>(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
        description: 'Set label value',
      },
      {
        type: 'select',
        options: Object.keys(BsPopoverPlacement),
        modelName: 'placement',
        propType: 'BsPopoverPlacement',
        propDefaultValue: BsPopoverPlacement.top,
        description: 'Initial position of tooltip in reference to trigger',
      },
      {
        type: 'select',
        modelName: 'strategy',
        propType: 'BsPopoverStrategy',
        propDefaultValue: BsPopoverStrategy.absolute,
        options: Object.values(BsPopoverStrategy),
        description: 'Tooltip positioning strategy',
      },
      {
        type: 'boolean',
        modelName: 'showArrow',
        propType: 'boolean',
        description: 'Show pointer arrow',
        propDefaultValue: false,
      },
    ],
    {
      label: 'Tooltip text',
      placement: BsPopoverPlacement.top,
      strategy: BsPopoverStrategy.absolute,
      showArrow: false,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <BsTooltip {...state.get}>
        <span>Hover me!</span>
      </BsTooltip>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
