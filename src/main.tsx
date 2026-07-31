import React from 'react'
import { createRoot } from 'react-dom/client'
import publicRaw from './caroline-public.json'
import { StarMap } from './starmap/star-map'
import type { StarmapGraph, StarmapMemoryCard } from './types/hermes'
import './styles.css'

function publicGraph(): StarmapGraph {
  const data = publicRaw as Omit<StarmapGraph, 'memory'>
  const memory: StarmapMemoryCard[] = data.nodes.filter(node => node.kind === 'memory').map(node => ({
    source: node.memorySource ?? 'memory', timestamp: node.timestamp, title: node.label,
    body: 'Private content hidden in this public view.'
  }))
  return { ...data, memory }
}

function App({ graph, memoriesVisible }: { graph:StarmapGraph; memoriesVisible:boolean }) {
  return <main className="app-shell">
    <header><div><span className="mark">✦</span> Caroline <b>Journey</b></div><nav><span className="privacy">{memoriesVisible ? 'MEMORY CONTENT VISIBLE' : 'PUBLIC-SAFE · CONTENT HIDDEN'}</span><a href={memoriesVisible ? './' : './?memories=visible'}>{memoriesVisible ? 'Hide memories' : 'Show memories'}</a></nav></header>
    <section className="map"><StarMap graph={graph} /></section>
    <footer><span>Drag to pan · scroll to zoom · double-click to reset · space to play</span><span>Hermes Desktop Star Map</span></footer>
  </main>
}

const memoriesVisible = new URLSearchParams(location.search).get('memories') === 'visible'
const graph = memoriesVisible
  ? ((await import('./caroline-visible.json')).default as StarmapGraph)
  : publicGraph()
createRoot(document.getElementById('root')!).render(<React.StrictMode><App graph={graph} memoriesVisible={memoriesVisible} /></React.StrictMode>)
