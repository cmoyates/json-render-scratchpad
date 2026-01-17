import './App.css'
import { DataProvider, Renderer, VisibilityProvider } from '@json-render/react';
import { catalog } from './lib/catalog'
import { componentRegistry } from './components/ui';


function App() {
  const tree = catalog.treeSchema.parse({
    "root": "card",
    "elements": {
      "card": {
        "key": "card",
        "type": "Card",
        "props": {
          "title": "Card Title",
          "description": "This is a card component"
        },
        "children": [
          "content"
        ]
      },
      "content": {
        "key": "content",
        "type": "Text",
        "props": {
          "content": "Add your content here"
        }
      }
    }
  })

  console.log(JSON.stringify(tree!, null, 2))



  return (
<div>
    <DataProvider>
      <VisibilityProvider>
        <Renderer tree={tree} registry={componentRegistry} />

    </VisibilityProvider>
    </DataProvider>
</div>
  )
}

export default App
