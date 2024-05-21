import React from 'react';
import tree from './tree.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Campaign Evaluation Tree</h2>
      </header>
      <main className="App-main">
        <h1>Campaign Evaluation Tree Assignment</h1>
        <p>
          The objective of this task is to render a tree's nodes in a
          hierarchical structure using the provided JSON data.
        </p>
        <h2>Requirements</h2>
        <ul>
          <li>Render nodes of the tree in a hierarchical structure.</li>
          <li>
            Implement a custom hook `useLoadData` which imitates the loading of data from tree.json.
            Show the loading indicator while the data is loading. The style of loading indicator is of your choice.
          </li>
          <li>
            Each node has a type - `SET` or `CAMPAIGN`, make sure to visually
            distinguish between different node types.
          </li>
          <li>
            The user should be able to search through the nodes of the tree by
            name. Upon searching, a node that matches should be displayed
            together with parent nodes (so that the tree hierarchy is still
            visible).
          </li>
        </ul>
        <h3>Bonus tasks</h3>
        <ul>
          <li>
            Add some tests where you think the code could benefit from having
            tests.
          </li>
          <li>
            The solution does not need to be visually styled in any special way.
            But you can beautify the interface as you want. You can wisely choose any CSS/JS library(s) for this purpose.
          </li>
        </ul>

        <h2>Get Started</h2>
        <p>
          You can find the required tree structure in the <code>tree.json</code> file:
        </p>
        <pre className="nodes">
          <code>{JSON.stringify(tree, null, 2)}</code>
        </pre>

        <p>
          Good luck and please don't hesitate to ask if anything is unclear!
        </p>
      </main>
    </div>
  );
};

export default App;
