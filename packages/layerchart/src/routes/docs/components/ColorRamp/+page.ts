import api from '$lib/components/ColorRamp.svelte?raw&sveld';
import source from '$lib/components/ColorRamp.svelte?raw';
import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      api,
      source,
      pageSource,
      supportedContexts: ['svg'],
    },
  };
}
