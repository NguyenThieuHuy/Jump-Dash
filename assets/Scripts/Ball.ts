import { _decorator, Component, Node, systemEvent, SystemEventType, EventKeyboard, macro, Vec3, Collider2D, Contact2DType, IPhysics2DContact, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Square')
export class Square extends Component {
    moveRight: boolean;
    moving: boolean;
    start() {
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        this.node.position = new Vec3(-350, -200, 0);

        this.moveRight = false;
        this.moving = true;
    }
  
    onKeyDown (event: EventKeyboard) {
       switch(event.keyCode) {
           case macro.KEY.a:
               console.log('Press a key');
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
        if (this.moving == true)
        {
    
            if (this.moveRight == true)
            {
                let viTriMoi = new Vec3(this.node.position.x + 5000 * deltaTime, this.node.position.y,this.node.position.z);
                if (viTriMoi.x >= 430)
                {
                    this.moving = false;
                }
                this.node.position = viTriMoi;
            }
            else
            {
                let viTriMoi = new Vec3(this.node.position.x - 5000 * deltaTime, this.node.position.y,this.node.position.z);
                if (viTriMoi.x <= -430)
                {
                    this.moving = false;
                }
                this.node.position = viTriMoi;
            }
        }
    }
   
}


