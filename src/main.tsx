import React from 'react'
import { createRoot } from 'react-dom/client'
import raw from './caroline-public.json'
import { StarMap } from './starmap/star-map'
import type { StarmapGraph, StarmapMemoryCard } from './types/hermes'
import './styles.css'

const publicData = raw as Omit<StarmapGraph, 'memory'>
const memory: StarmapMemoryCard[] = publicData.nodes
  .filter(node => node.kind === 'memory')
  .map(node => ({
    source: node.memorySource ?? 'memory',
    timestamp: node.timestamp,
    title: node.label,
    body: 'Private content hidden in this public view.'
  }))
const graph: StarmapGraph = { ...publicData, memory }

function App() {
  return <main className="app-shell">
    <header><div><span className="mark">✦</span> Caroline <b>Journey</b></div><span className="privacy">PUBLIC-SAFE SNAPSHOT · CONTENT HIDDEN</span></header>
    <section className="map"><StarMap graph={graph} /></section>
    <footer><span>Drag to pan · scroll to zoom · double-click to reset · space to play</span><span>Hermes Desktop Star Map</span></footer>
  </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
