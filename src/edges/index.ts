import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  { id: "a->b", source: "a", target: "b" , type: "step"},
  { id: "a->c", source: "a", target: "c" , type: "step"},
  { id: "a->d", source: "a", target: "d" , type: "step"},
  { id: "d->e", source: "d", target: "e" , type: "step"},
  { id: "d->b", source: "d", target: "b" , type: "step"},
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
