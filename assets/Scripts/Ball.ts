import { _decorator, Component, systemEvent, SystemEventType, EventKeyboard, macro, Vec3, UITransform, Canvas} from 'cc';
const { ccclass , property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {

    @property({type: Canvas})
    public canvas: Canvas|null = null;

    moveRight: boolean;
    moving: boolean;
    UI: UITransform;
    
    start() {
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        this.node.position = new Vec3(0, -200, 0);
        this.moveRight = false;
        this.moving = false;        
    }

    onKeyDown (event: EventKeyboard) {
       switch(event.keyCode) {
           case macro.KEY.a:
               if (this.moving == false)
               {
                   if (this.moveRight == true)
                   {
                       this.moveRight = false;
                       this.moving = true;
                   }
                   else
                   {
                       this.moveRight = true;
                       this.moving = true;
                   }
                }
                break;
        }
    }

    update(deltaTime: number) {
        this.UI = this.getComponent(UITransform);
        let canWidth = this.canvas.getComponent(UITransform).width;
        if (this.moving == true)
        {
            if (this.moveRight == true)
            {
                let viTriMoi = new Vec3(this.node.position.x + 3500 * deltaTime, this.node.position.y,0);
                this.node.position = viTriMoi;
                if (this.node.position.x > (canWidth-this.UI.width)/2) {
                    this.node.position = new Vec3((canWidth-this.UI.width)/2, this.node.position.y,0);
                    this.moving = false;
                }
            }
            else
            {
                let viTriMoi = new Vec3(this.node.position.x - 3500 * deltaTime, this.node.position.y,0);
                this.node.position = viTriMoi;
                if (this.node.position.x < -((canWidth-this.UI.width)/2)) {
                    this.node.position = new Vec3(-((canWidth-this.UI.width)/2), this.node.position.y,0);
                    this.moving = false;
                }
            }
        }
    }
}


