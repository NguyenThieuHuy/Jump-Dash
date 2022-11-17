import { _decorator, Component, Vec3, Collider2D, Contact2DType, IPhysics2DContact, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Block')
export class Block extends Component {

    acceleration: number;

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
        if(this.acceleration > 5){
            this.acceleration = 5;
        }
        
        let viTri = new Vec3(this.node.position.x, this.node.position.y - 330 * this.acceleration * deltaTime , 0);
        this.node.position = viTri;
        if(this.node.position.y <= -1025){
            this.node.destroy();
        }
    }
}


