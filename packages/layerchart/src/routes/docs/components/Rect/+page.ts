import api from '$lib/components/Rect.svelte?raw&sveld';
import source from '$lib/components/Rect.svelte?raw';
import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      api,
      source,
      pageSource,
      description: '`<rect>` element with tweened properties using `motionStore`',
      supportedContexts: ['svg', 'canvas'],
      related: [
        'components/Bars',
        'components/Highlight',
        'components/RectClipPath',
        'examples/Partition',
        'examples/Sankey',
        'examples/Tree',
        'examples/Treemap',
      ],
    },
  };
}
