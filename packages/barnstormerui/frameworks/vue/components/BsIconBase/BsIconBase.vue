<script lang="ts">
import { type PropType, h, defineComponent, computed, toRefs } from 'vue';
import { BsIconSize } from '@barnstormer/vue';

export default defineComponent({
  name: 'BsIconBase',
  props: {
    content: {
      type: String,
      default: undefined,
    },
    size: {
      type: String as PropType<`${BsIconSize}`>,
      default: BsIconSize.base,
    },
  },
  setup(props, ctx) {
    const { size, content } = toRefs(props);
    const slotDefaultContent = computed(() => ctx.slots.default?.());

    const sizeClasses = computed(() => {
      switch (size.value) {
        case BsIconSize.xs:
          return 'w-4 h-4';
        case BsIconSize.sm:
          return 'w-5 h-5';
        case BsIconSize.lg:
          return 'w-8 h-8';
        case BsIconSize.xl:
          return 'w-10 h-10';
        case BsIconSize['2xl']:
          return 'w-14 h-14';
        case BsIconSize['3xl']:
          return 'w-24 h-24';
        case BsIconSize['4xl']:
          return 'w-48 h-48';
        default:
          return 'w-6 h-6';
      }
    });

    const svgAttrs = computed(() => {
      const attrs: Record<string, string> = {
        xmlns: 'http://www.w3.org/2000/svg',
        class: `inline-block fill-current ${sizeClasses.value}`,
      };
      if (!slotDefaultContent.value && content.value) attrs.innerHTML = content.value;
      return attrs;
    });

    return () => h('svg', svgAttrs.value, slotDefaultContent.value);
  },
});
</script>
