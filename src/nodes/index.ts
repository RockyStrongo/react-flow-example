import { Node, NodeTypes, Position } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

const right: Position = Position.Right
const left: Position = Position.Left

export const initialNodes = [
  { id: "a", position: { x: 0, y: 0 }, data: { label: "A" }, targetPosition: right, sourcePosition: left},
  {
    id: "b",
    position: { x: 340, y: 80 },
    data: { label: "B" },
    targetPosition: left, sourcePosition: right,
  },
  {
    id: "c",
    position: { x: 80, y: 160 },
    data: { label: "C" },
    targetPosition: left, sourcePosition: right
  },
  {
    id: "d",
    position: { x: 80, y: 240 },
    data: { label: "D" },
    targetPosition: left, sourcePosition: right
  },
  {
    id: "e",
    position: { x: 340, y: 240 },
    data: { label: "E" },
    targetPosition: left, sourcePosition: right
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
