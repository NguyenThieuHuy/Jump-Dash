import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Space')
export class Space extends Component {
    start() {

    }

    update(deltaTime: number) {
        let viTri = new Vec3(this.node.position.x, this.node.position.y - (150 * deltaTime), 0);
        this.node.position = viTri;
        if(this.node.position.y <= -825){
            this.node.position = new Vec3(this.node.position.x,1218,0);
        }
    }
}
