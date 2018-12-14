import { VNode } from "../dom/node";
import * as Threejs from 'three';

export type ThreeObject = Threejs.Renderer | Threejs.Object3D | Threejs.Geometry | Threejs.Vector;

export interface I3VNode extends VNode<ThreeObject> {

}
