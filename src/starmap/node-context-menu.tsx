export interface NodeMenuTarget { id:string; kind:'memory'|'skill'; label:string; x:number; y:number }
export function NodeContextMenu(_props: { onClose:()=>void; onNodeRemoved:()=>void; target:NodeMenuTarget|null }) { return null }
