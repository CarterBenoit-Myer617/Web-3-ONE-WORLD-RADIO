import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-svg.")





export const burgerTL = new gsap.timeline({paused:true});


burgerTL.to("#outline",{duration:1, alpha:0});