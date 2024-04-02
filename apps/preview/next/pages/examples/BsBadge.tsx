import { BsBadge, BsButton, BsIconShoppingCart, BsBadgePlacement, BsBadgeVariant } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'content',
        description: 'Content to display in the badge.',
        propType: 'string | number',
      },
      {
        type: 'text',
        modelName: 'max',
        description: 'Maximum number of counter to show.',
        propType: 'number',
        propDefaultValue: '99',
      },
      {
        type: 'select',
        modelName: 'variant',
        description: 'Badge can have content or be a simple dot.',
        options: Object.values(BsBadgeVariant),
        propType: 'BsBadgeVariant',
        propDefaultValue: 'standard',
      },
      {
        type: 'select',
        modelName: 'placement',
        description: 'Position of the badge relatively to a container.',
        options: Object.values(BsBadgePlacement),
        propType: 'BsBadgePlacement',
        propDefaultValue: 'top-right',
      },
    ],
    {
      content: '1',
      max: 99,
      variant: BsBadgeVariant.standard,
      placement: BsBadgePlacement['top-right'],
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsButton className="relative" square variant="tertiary">
        <BsIconShoppingCart />
        <BsBadge {...state.get} max={Number(state.get.max)} />
      </BsButton>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
