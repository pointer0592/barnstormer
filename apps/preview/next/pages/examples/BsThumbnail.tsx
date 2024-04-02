import { BsThumbnail, BsThumbnailSize } from '@barnstormer/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(BsThumbnailSize),
        propDefaultValue: BsThumbnailSize.base,
        description: 'Component size',
        propType: 'BsThumbnailSize',
      },
    ],
    {
      size: BsThumbnailSize.base,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <BsThumbnail {...state.get} className="bg-gradient-to-tr from-[#4ADE80] to-[#A78BFA]" />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
