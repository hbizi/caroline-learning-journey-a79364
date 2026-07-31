export function Codicon({ name, size }: { name:string; size?:string }) {
  return <span aria-hidden style={{display:'inline-block',fontSize:size,lineHeight:1}}>{name === 'debug-pause' ? 'Ⅱ' : '▶'}</span>
}
