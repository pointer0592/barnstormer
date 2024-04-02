import { BsLoaderCircular, BsLoaderSize } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'BsLoaderSize',
        options: [...Object.keys(BsLoaderSize)],
        description: 'sets sizes of components',
      },
      {
        type: 'text',
        modelName: 'ariaLabel',
        propType: 'string',
        propDefaultValue: 'loading',
        description: 'sets text available for screen readers',
      },
    ],
    {
      size: BsLoaderSize.lg,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsLoaderCircular className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
