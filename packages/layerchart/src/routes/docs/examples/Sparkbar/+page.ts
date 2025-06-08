import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      pageSource,
      supportedContexts: ['svg', 'canvas'],
      related: [
        'components/BarChart',
        'components/Bars',
        'examples/Columns',
        'examples/Histogram',
        'examples/Sparkline',
      ],
    },
  };
}
