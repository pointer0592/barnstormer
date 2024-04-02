import { BsIconSize, BsIconPackage } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'BsIconSize.base',
        propType: 'BsIconSize',
        options: Object.keys(BsIconSize),
      },
      {
        type: 'select',
        modelName: 'color',
        description: '(not a prop) example showing possibility to change icons color',
        options: ['black', 'red', 'blue', 'green'],
      },
    ],
    {
      size: BsIconSize.base,
      color: 'black',
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      BsIconPackage imported from `@barnstormer/react`: <br />
      <div style={{ color: state.get.color }}>
        <BsIconPackage size={state.get.size} />
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
