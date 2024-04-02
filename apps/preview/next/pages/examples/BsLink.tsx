import { BsLink, BsLinkVariant } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'href',
        propType: 'string',
        description: 'Only for demonstration purposes. Component href attribute',
      },
      {
        type: 'select',
        modelName: 'variant',
        propType: 'BsLinkVariant',
        propDefaultValue: 'primary',
        options: Object.keys(BsLinkVariant),
      },
      {
        type: 'text',
        modelName: 'children',
        propType: 'ReactNode',
        description: 'Only for demonstration purposes. Children nodes.',
      },
    ],
    {
      href: '#',
      variant: BsLinkVariant.primary,
      children: 'Link',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsLink {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
