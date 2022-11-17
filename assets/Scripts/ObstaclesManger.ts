import { _decorator, Component, Node, Prefab, Canvas, instantiate, Vec3, UITransform, randomRangeInt, random, Acceleration } from 'cc';
import { Block } from './Block';
import { ScoreManager } from './ScoreManager';
const { ccclass, property } = _decorator;

@ccclass('ObstaclesManger')
export class ObstaclesManger extends Component {

    @property({type: Prefab})
    public block: Prefab|null = null;

    @property({type: Prefab})
    public Square: Prefab|null = null;

    @property({type: Canvas})
    public canvas: Canvas|null = null;

    @property({type: ScoreManager})
    public score: ScoreManager|null = null;
    
    start() {
        let canWidth = this.canvas.getComponent(UITransform).width;
        this.schedule(function() {
            let ran = randomRangeInt(1,4);
            
            if(ran < 3){
                // Here this refers to component
                let obs = instantiate(this.block);
                let obswidth = obs.getComponent(UITransform).width;
                obs.parent = this.node.parent;
                obs.getComponent(Block).acceleration = (this.score.score / 10) + 1;
                let arr = [(canWidth-obswidth)/2,-(canWidth-obswidth)/2];
                obs.position = new Vec3(arr[Math.floor(Math.random()*arr.length)], this.node.position.y, 0);
            }else{
            // Here this refers to component
                let obs = instantiate(this.Square);
                let obswidth = obs.getComponent(UITransform).width;
                obs.parent = this.node.parent;
                obs.getComponent(Block).acceleration = (this.score.score / 5) + 1;
                obs.position = new Vec3(randomRangeInt((canWidth-obswidth)/2,-(canWidth-obswidth)/2), this.node.position.y, 0);
            }

        }, 1.2);
    }

    update(deltaTime: number) {
    }
}


