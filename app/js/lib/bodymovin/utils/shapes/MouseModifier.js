function MouseModifier(){}extendPrototype(ShapeModifier,MouseModifier),MouseModifier.prototype.processKeys=function(t){(this.elem.globalData.frameId!==this.frameId||t)&&(this.mdf=!0)},MouseModifier.prototype.addShapeToModifier=function(){this.positions.push([])},MouseModifier.prototype.processPath=function(t,s,i){var a,o,e,h,d=t.v.length,r=[],p=[],M=[];for(a=0;a<d;a+=1){i.v[a]||(i.v[a]=[t.v[a][0],t.v[a][1]],i.o[a]=[t.o[a][0],t.o[a][1]],i.i[a]=[t.i[a][0],t.i[a][1]],i.distV[a]=0,i.distO[a]=0,i.distI[a]=0),o=Math.atan2(t.v[a][1]-s[1],t.v[a][0]-s[0]),e=s[0]-i.v[a][0],h=s[1]-i.v[a][1];var f=Math.sqrt(e*e+h*h);i.distV[a]+=(f-i.distV[a])*this.data.dc,i.v[a][0]=Math.cos(o)*Math.max(0,this.data.maxDist-i.distV[a])/2+t.v[a][0],i.v[a][1]=Math.sin(o)*Math.max(0,this.data.maxDist-i.distV[a])/2+t.v[a][1],o=Math.atan2(t.o[a][1]-s[1],t.o[a][0]-s[0]),e=s[0]-i.o[a][0],h=s[1]-i.o[a][1];var f=Math.sqrt(e*e+h*h);i.distO[a]+=(f-i.distO[a])*this.data.dc,i.o[a][0]=Math.cos(o)*Math.max(0,this.data.maxDist-i.distO[a])/2+t.o[a][0],i.o[a][1]=Math.sin(o)*Math.max(0,this.data.maxDist-i.distO[a])/2+t.o[a][1],o=Math.atan2(t.i[a][1]-s[1],t.i[a][0]-s[0]),e=s[0]-i.i[a][0],h=s[1]-i.i[a][1];var f=Math.sqrt(e*e+h*h);i.distI[a]+=(f-i.distI[a])*this.data.dc,i.i[a][0]=Math.cos(o)*Math.max(0,this.data.maxDist-i.distI[a])/2+t.i[a][0],i.i[a][1]=Math.sin(o)*Math.max(0,this.data.maxDist-i.distI[a])/2+t.i[a][1],r.push(i.v[a]),p.push(i.o[a]),M.push(i.i[a])}return{v:r,o:p,i:M,c:t.c}},MouseModifier.prototype.processShapes=function(){var t,s,i,a,o=this.elem.globalData.mouseX,e=this.elem.globalData.mouseY,h=this.shapes.length;if(o){var d,r=this.elem.globalToLocal([o,e,0]),p=[];for(s=0;s<h;s+=1)if(d=this.shapes[s],d.shape.mdf||this.mdf){for(d.shape.mdf=!0,t=d.shape.paths,a=t.length,i=0;i<a;i+=1)this.positions[s][i]||(this.positions[s][i]={v:[],o:[],i:[],distV:[],distO:[],distI:[]}),p.push(this.processPath(t[i],r,this.positions[s][i]));d.shape.paths=p,d.last=p}else d.shape.paths=d.last}},MouseModifier.prototype.initModifierProperties=function(t,s){this.getValue=this.processKeys,this.data=s,this.positions=[]},ShapeModifiers.registerModifier("ms",MouseModifier);