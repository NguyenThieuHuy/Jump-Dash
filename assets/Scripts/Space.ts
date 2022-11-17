import { _decorator, Component, Node, Vec3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Space')
export class Space extends Component {
    UI: UITransform;

    start() {
        //
    }

    update(deltaTime: number) {
        let viTri = new Vec3(this.node.position.x, this.node.position.y - (200 * deltaTime), 0);
        this.node.position = viTri;
        this.UI = this.getComponent(UITransform);
        if(this.node.position.y <= - this.UI.height){
            this.node.position = new Vec3(this.node.position.x,this.UI.height,0);
        }
    }
}
