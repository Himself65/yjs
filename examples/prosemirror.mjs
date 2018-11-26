import * as Y from '../index.mjs'
import { WebsocketProvider } from '../provider/websocket.mjs'
import { prosemirrorPlugin, cursorPlugin } from '../bindings/prosemirror'

import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { exampleSetup } from 'prosemirror-example-setup'

const provider = new WebsocketProvider('wss://api.yjs.website')
const ydocument = provider.get('prosemirror')
const type = ydocument.define('prosemirror', Y.XmlFragment)

const prosemirrorView = new EditorView(document.querySelector('#editor'), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(document.querySelector('#content')),
    plugins: exampleSetup({schema}).concat([prosemirrorPlugin(type), cursorPlugin])
  })
})

window.example = { provider, ydocument, type, prosemirrorView }