import api from '$lib/components/CircleClipPath.svelte?raw&sveld';
import source from '$lib/components/CircleClipPath.svelte?raw';
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
