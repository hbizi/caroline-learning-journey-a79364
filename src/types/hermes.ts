export interface StarmapNode { id:string; label:string; kind:'memory'|'skill'; memorySource?:'memory'|'profile'; timestamp?:null|number; category:string; useCount:number; state:string; createdBy:null|string; pinned:boolean }
export interface StarmapEdge { source:string; target:string }
export interface StarmapCluster { category:string; count:number }
export interface StarmapMemoryCard { source:'memory'|'profile'; timestamp?:null|number; title:string; body:string }
export interface StarmapGraph { nodes:StarmapNode[]; edges:StarmapEdge[]; clusters:StarmapCluster[]; memory:StarmapMemoryCard[]; stats:Record<string,unknown> }
