import type { StarmapGraph } from '@/types/hermes'
export class ShareCodeError extends Error {}
export function encodeShareCode(_graph:StarmapGraph):string { return '' }
export function decodeShareCode(_code:string):StarmapGraph { throw new ShareCodeError('Import is disabled in this public view.') }
