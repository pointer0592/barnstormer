<template>
  <client-only>
    <div class="e-page-controls" :class="{ 'e-page-controls--collapsed': !previewBottomOpen }" v-bind="$attrs">
      <div class="heading-wrapper">
        <h1 class="heading">Controls</h1>

        <BsButton
          :variant="BsButtonVariant.tertiary"
          :size="BsButtonSize.sm"
          @click="previewBottomOpen = !previewBottomOpen"
        >
          {{ previewBottomOpen ? 'Close' : 'Open' }}
          <template #suffix>
            <component :is="previewBottomOpen ? 'BsIconExpandMore' : 'BsIconExpandLess'" />
          </template>
        </BsButton>
      </div>
      <div class="table-wrapper">
        <table aria-label="Controls table">
          <thead class="table-heading">
            <tr>
              <th class="whitespace-nowrap">Prop Name</th>
              <th class="whitespace-nowrap">Value</th>
              <th class="whitespace-nowrap">Type</th>
              <th class="whitespace-nowrap">Default Value</th>
              <th class="whitespace-nowrap">Required</th>
              <th class="whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(control, index) in controls" :key="index" class="props">
              <td :class="[control.type === 'text' && 'align-middle']">
                <span :id="control.modelName">{{ control.modelName }}</span>
              </td>
              <td class="value">
                <template v-if="control.type === 'select'">
                  <select v-model="proxyModels[control.modelName]" :aria-labelledby="control.modelName">
                    <option
                      v-for="(options, optionIndex) in control.options || [{}]"
                      :key="`${control.modelName}-${index}-${optionIndex}`"
                      :value="(options as ControlOptionBind).value || (options as ControlOptionBind).label || options"
                    >
                      {{ (options as ControlOptionBind).label || options }}
                    </option>
                  </select>
                </template>
                <template v-else-if="control.type === 'boolean'">
                  <div class="switch-wrapper">
                    <label class="switch">
                      <input
                        v-model="proxyModels[control.modelName]"
                        type="checkbox"
                        :aria-labelledby="control.modelName"
                      />
                      <span class="slider" />
                    </label>
                    <span class="ml-2">{{ proxyModels[control.modelName] }}</span>
                  </div>
                </template>
                <template v-else>
                  <div
                    v-for="(options, optionIndex) in control.options || [{}]"
                    :key="`${control.modelName}-${index}-${optionIndex}`"
                    class="flex items-center"
                  >
                    <label class="flex items-center">
                      <textarea
                        v-if="control.type === 'json'"
                        rows="10"
                        v-bind="(options as ControlOptionBind).bind"
                        :value="JSON.stringify(proxyModels[control.modelName], undefined, 2)"
                        :name="`${control.modelName}-${index}`"
                        :aria-labelledby="control.modelName"
                        @input="proxyModels[control.modelName] = JSON.parse($event.target?.value)"
                      >
                      </textarea>
                      <input
                        v-else-if="control.type === 'range'"
                        v-bind="(options as ControlOptionBind).bind"
                        v-model="proxyModels[control.modelName]"
                        :type="control.type"
                        :name="`${control.modelName}-${index}`"
                        :aria-labelledby="control.modelName"
                      />
                      <input
                        v-else-if="control.type === 'text'"
                        v-bind="(options as ControlOptionBind).bind"
                        v-model="proxyModels[control.modelName]"
                        class="border rounded-md"
                        :type="control.type"
                        :name="`${control.modelName}-${index}`"
                        :aria-labelledby="control.modelName"
                      />
                      <input
                        v-else
                        v-bind="(options as ControlOptionBind).bind"
                        v-model="proxyModels[control.modelName]"
                        :type="control.type"
                        :name="`${control.modelName}-${index}`"
                        :aria-labelledby="control.modelName"
                      />
                      <span v-if="options.hasOwnProperty('label')" class="pl-2">{{
                        (options as ControlOptionBind).label
                      }}</span>
                      <span v-else-if="typeof options === 'string'" class="pl-2">{{ options }}</span>
                    </label>
                  </div>
                </template>
              </td>
              <td class="propType">
                <span>{{ control.propType }}</span>
              </td>
              <td class="propDefaultValue">{{ control.propDefaultValue }}</td>
              <td class="required">{{ control?.isRequired?.toString() }}</td>
              <td class="description">{{ control.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { toRefs, computed, reactive, Ref, defineComponent, PropType } from 'vue';
import { BsButton, BsButtonVariant, BsButtonSize, BsIconExpandMore, BsIconExpandLess } from '@barnstormer/vue';
import { useControlsSearchParams } from '../../composables/utils/useControlsSearchParams';

type RefValueUnknown = Ref<unknown>;
type ControlOptionBind = {
  bind?: Record<string, unknown>;
  label?: string;
  value?: string | number;
};
export type Controls = {
  type?: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  model?: RefValueUnknown;
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: (ControlOptionBind | string)[] | readonly (ControlOptionBind | string)[];
}[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prepareControls<T extends { [k: string]: any }>(controlsObject: Controls, models: T) {
  const on: Record<string, (e: string | number | boolean | []) => void> = {};
  const controls = controlsObject.map((control) => {
    if (!('isRequired' in control)) control.isRequired = false;
    on[`onUpdate:${control.modelName}`] = (e: string | number | boolean | []) => {
      models[control.modelName].value = e;
    };
    return { ...control, model: models[control.modelName] };
  });

  return {
    controlsAttrs: {
      controls,
      ...on,
    },
    state: reactive(models),
    // this won't work for every prop name because of a nuxt 3 bug
    // see: https://github.com/nuxt/framework/issues/9851
    // FIXME: after nuxt bug is fixed
    ...models,
  };
}

export default defineComponent({
  name: 'Controls',
  components: {
    BsButton,
    BsIconExpandLess,
    BsIconExpandMore,
  },
  inheritAttrs: false,
  props: {
    controls: {
      type: Array as PropType<Controls>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const { controls } = toRefs(props);
    const proxyModels = reactive<Record<string, unknown>>({});
    controls.value.forEach((control) => {
      proxyModels[control.modelName] = computed({
        get: () => control?.model?.value,
        set: (value) => emit(`update:${control.modelName}`, value),
      });
    });

    return {
      BsButtonVariant,
      BsButtonSize,
      ...useControlsSearchParams(proxyModels),
      proxyModels: reactive(proxyModels),
    };
  },
});
</script>
