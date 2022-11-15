import { _decorator, Component, Node, Vec3, Collider2D, Contact2DType, IPhysics2DContact, director, random, randomRangeInt } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Square')
export class Square extends Component {
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        if(otherCollider.tag == 1){
            console.log('---------Game Over---------');
            director.loadScene("main");
        }


    }

    start() {
        // console.log("alo");
        // this.node.position = new Vec3(0, 0, 0);
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

    }
 
    update(deltaTime: number) {
        // console.log(this.node.position);
        let viTri = new Vec3(this.node.position.x, this.node.position.y - 200 * deltaTime, 0);
        this.node.position = viTri;


        if(this.node.position.y <= -380){
            this.node.position = new Vec3(this.node.position.x, randomRangeInt(2000,2500) ,0);
        }
    }
}


