import { BsLoaderLinear, BsLoaderSize, BsLoaderLinearSize } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'BsLoaderLinearSize | BsLoaderSize',
        options: [...Object.keys(BsLoaderLinearSize), ...Object.keys(BsLoaderSize)],
        propDefaultValue: BsLoaderSize.base,
        description: 'sets sizes of components',
      },
      {
        type: 'text',
        modelName: 'ariaLabel',
        propType: 'string',
        propDefaultValue: 'loading',
        description: 'sets description text available for screen readers',
      },
    ],
    {
      size: BsLoaderSize.base,
      ariaLabel: 'loading',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsLoaderLinear className="w-10" {...state.get} />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
