import "./App.css";
import {
  ActionProvider,
  DataProvider,
  Renderer,
  VisibilityProvider,
} from "@json-render/react";
import { componentRegistry } from "./components/ui";
import { catalog } from "./lib/catalog";

function App() {
  const tree = catalog.treeSchema.parse({
    root: "card",
    elements: {
      card: {
        key: "card",
        type: "Card",
        props: {
          title: "Card Title",
          description: "This is a card component",
        },
        children: ["content"],
      },
      content: {
        key: "content",
        type: "Text",
        props: {
          content: "Add your content here",
        },
      },
    },
  });

  return (
    <div>
      <DataProvider>
        <VisibilityProvider>
          <ActionProvider>
            <Renderer registry={componentRegistry} tree={tree} />
          </ActionProvider>
        </VisibilityProvider>
      </DataProvider>
    </div>
  );
}

export default App;
