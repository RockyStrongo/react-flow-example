import type { MouseEvent as ReactMouseEvent } from 'react';
import type { Node, OnConnect } from "reactflow";

import { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState
} from "reactflow";

import "reactflow/dist/style.css";

import { edgeTypes, initialEdges } from "./edges";
import { initialNodes, nodeTypes } from "./nodes";

export default function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const onNodesChange = (event: ReactMouseEvent, node: Node) => {
    setNodes(nodes.filter((item) => item.id != node.id))
  }

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodeClick={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
      nodesConnectable={false}
    >
    </ReactFlow>
  );
}
