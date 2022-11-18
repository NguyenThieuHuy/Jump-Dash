import { _decorator, Component, Node, RichText, Collider2D, Contact2DType, IPhysics2DContact, Vec3, Canvas, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreManager')
export class ScoreManager extends Component {

    @property({type: RichText})
    public richText: RichText|null = null;

    @property({type: Canvas})
    public canvas: Canvas|null = null;

    public static HighestScore:number = 0;

    UI: UITransform;
    score: number;

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        if (otherCollider.tag == 3)
        {
            this.score++;
        }
    }
    
    start() {
        this.score = 0;
        let canWidth = this.canvas.getComponent(UITransform).width;
        let canHeight = this.canvas.getComponent(UITransform).height;
        // let textWidthtextWidth = this.richText.getComponent(UITransform).width;
        let textHeight = this.richText.getComponent(UITransform).height;
        this.richText.node.position = new Vec3((canWidth - 450)/2,(canHeight - textHeight - 100)/2,0);
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        if(this.score > ScoreManager.HighestScore ){
            ScoreManager.HighestScore = this.score;
        }
        this.richText.string = "<b><color=#b3b3b3>Score: " + this.score + "</color><br/><color=#b3b3b3>Highest Score: " + ScoreManager.HighestScore + "</color></b>";
    }
}


