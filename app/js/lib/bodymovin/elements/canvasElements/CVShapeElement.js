function CVShapeElement(t,e,s){this.shapes=[],this.stylesList=[],this.viewData=[],this.shapeModifiers=[],this.shapesData=t.shapes,this.firstFrame=!0,this._parent.constructor.call(this,t,e,s)}createElement(CVBaseElement,CVShapeElement),CVShapeElement.prototype.lcEnum={1:"butt",2:"round",3:"butt"},CVShapeElement.prototype.ljEnum={1:"miter",2:"round",3:"butt"},CVShapeElement.prototype.transformHelper={opacity:1,mat:new Matrix,matMdf:!1,opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.viewData,this.dynamicProperties)},CVShapeElement.prototype.searchShapes=function(t,e,s){var r,a,i,o,h=t.length-1,p=[],l=[];for(r=h;r>=0;r-=1)if("fl"==t[r].ty||"st"==t[r].ty){if(o={type:t[r].ty,elements:[]},e[r]={},"fl"!=t[r].ty&&"st"!=t[r].ty||(e[r].c=PropertyFactory.getProp(this,t[r].c,1,255,s),e[r].c.k||(o.co="rgb("+bm_floor(e[r].c.v[0])+","+bm_floor(e[r].c.v[1])+","+bm_floor(e[r].c.v[2])+")")),e[r].o=PropertyFactory.getProp(this,t[r].o,0,.01,s),"st"==t[r].ty&&(o.lc=this.lcEnum[t[r].lc]||"round",o.lj=this.ljEnum[t[r].lj]||"round",1==t[r].lj&&(o.ml=t[r].ml),e[r].w=PropertyFactory.getProp(this,t[r].w,0,null,s),e[r].w.k||(o.wi=e[r].w.v),t[r].d)){var n=PropertyFactory.getDashProp(this,t[r].d,"canvas",s);e[r].d=n,e[r].d.k||(o.da=e[r].d.dasharray,o.do=e[r].d.dashoffset)}this.stylesList.push(o),e[r].style=o,p.push(e[r].style)}else if("gr"==t[r].ty)e[r]={it:[]},this.searchShapes(t[r].it,e[r].it,s);else if("tr"==t[r].ty)e[r]={transform:{mat:new Matrix,opacity:1,matMdf:!1,opMdf:!1,op:PropertyFactory.getProp(this,t[r].o,0,.01,s),mProps:PropertyFactory.getProp(this,t[r],2,null,s)},elements:[]};else if("sh"==t[r].ty||"rc"==t[r].ty||"el"==t[r].ty||"sr"==t[r].ty){e[r]={nodes:[],trNodes:[],tr:[0,0,0,0,0,0]};var f=4;"rc"==t[r].ty?f=5:"el"==t[r].ty?f=6:"sr"==t[r].ty&&(f=7),e[r].sh=ShapePropertyFactory.getShapeProp(this,t[r],f,s),this.shapes.push(e[r].sh),this.addShapeToModifiers(e[r].sh),i=this.stylesList.length;var y=!1,m=!1;for(a=0;a<i;a+=1)this.stylesList[a].closed||(this.stylesList[a].elements.push(e[r]),"st"===this.stylesList[a].type?y=!0:m=!0);e[r].st=y,e[r].fl=m}else if("tm"==t[r].ty||"rd"==t[r].ty){var d=ShapeModifiers.getModifier(t[r].ty);d.init(this,t[r],s),this.shapeModifiers.push(d),l.push(d),e[r]=d}for(h=p.length,r=0;r<h;r+=1)p[r].closed=!0;for(h=l.length,r=0;r<h;r+=1)l[r].closed=!0},CVShapeElement.prototype.addShapeToModifiers=IShapeElement.prototype.addShapeToModifiers,CVShapeElement.prototype.renderModifiers=IShapeElement.prototype.renderModifiers,CVShapeElement.prototype.renderFrame=function(t){this._parent.renderFrame.call(this,t)!==!1&&(this.transformHelper.mat.reset(),this.transformHelper.opacity=this.finalTransform.opacity,this.transformHelper.matMdf=!1,this.transformHelper.opMdf=this.finalTransform.opMdf,this.renderModifiers(),this.renderShape(this.transformHelper,null,null,!0),this.data.hasMask&&this.globalData.renderer.restore(!0))},CVShapeElement.prototype.renderShape=function(t,e,s,r){var a,i;if(!e)for(e=this.shapesData,i=this.stylesList.length,a=0;a<i;a+=1)this.stylesList[a].d="",this.stylesList[a].mdf=!1;s||(s=this.viewData),i=e.length-1;var o,h;for(o=t,a=i;a>=0;a-=1)if("tr"==e[a].ty){o=s[a].transform;var p=s[a].transform.mProps.v.props;if(o.matMdf=o.mProps.mdf,o.opMdf=o.op.mdf,h=o.mat,h.cloneFromProps(p),t){var l=t.mat.props;o.opacity=t.opacity,o.opacity*=s[a].transform.op.v,o.matMdf=!!t.matMdf||o.matMdf,o.opMdf=!!t.opMdf||o.opMdf,h.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15])}else o.opacity=o.op.o}else"sh"==e[a].ty||"el"==e[a].ty||"rc"==e[a].ty||"sr"==e[a].ty?this.renderPath(e[a],s[a],o):"fl"==e[a].ty?this.renderFill(e[a],s[a],o):"st"==e[a].ty?this.renderStroke(e[a],s[a],o):"gr"==e[a].ty?this.renderShape(o,e[a].it,s[a].it):"tm"==e[a].ty;if(r){i=this.stylesList.length;var n,f,y,m,d,c,v,u=this.globalData.renderer,g=this.globalData.canvasContext;for(u.save(),u.ctxTransform(this.finalTransform.mat.props),a=0;a<i;a+=1)if(v=this.stylesList[a].type,"st"!==v||0!==this.stylesList[a].wi){for(u.save(),d=this.stylesList[a].elements,"st"===v?(g.strokeStyle=this.stylesList[a].co,g.lineWidth=this.stylesList[a].wi,g.lineCap=this.stylesList[a].lc,g.lineJoin=this.stylesList[a].lj,g.miterLimit=this.stylesList[a].ml||0):g.fillStyle=this.stylesList[a].co,u.ctxOpacity(this.stylesList[a].coOp),"st"!==v&&g.beginPath(),f=d.length,n=0;n<f;n+=1){for("st"===v&&(g.beginPath(),this.stylesList[a].da?(g.setLineDash(this.stylesList[a].da),g.lineDashOffset=this.stylesList[a].do,this.globalData.isDashed=!0):this.globalData.isDashed&&(g.setLineDash(this.dashResetter),this.globalData.isDashed=!1)),c=d[n].trNodes,m=c.length,y=0;y<m;y+=1)"m"==c[y].t?g.moveTo(c[y].p[0],c[y].p[1]):"c"==c[y].t?g.bezierCurveTo(c[y].p1[0],c[y].p1[1],c[y].p2[0],c[y].p2[1],c[y].p3[0],c[y].p3[1]):g.closePath();"st"===v&&g.stroke()}"st"!==v&&g.fill(),u.restore()}u.restore(),this.firstFrame&&(this.firstFrame=!1)}},CVShapeElement.prototype.renderPath=function(t,e,s){var r,a,i,o,h=s.matMdf||e.sh.mdf||this.firstFrame;if(h){var p=e.sh.paths;o=p.length;var l=e.trNodes;for(l.length=0,i=0;i<o;i+=1){var n=p[i];if(n&&n.v){for(r=n.v.length,a=1;a<r;a+=1)1==a&&l.push({t:"m",p:s.mat.applyToPointArray(n.v[0][0],n.v[0][1],0)}),l.push({t:"c",p1:s.mat.applyToPointArray(n.o[a-1][0],n.o[a-1][1],0),p2:s.mat.applyToPointArray(n.i[a][0],n.i[a][1],0),p3:s.mat.applyToPointArray(n.v[a][0],n.v[a][1],0)});1==r&&l.push({t:"m",p:s.mat.applyToPointArray(n.v[0][0],n.v[0][1],0)}),n.c&&r&&(l.push({t:"c",p1:s.mat.applyToPointArray(n.o[a-1][0],n.o[a-1][1],0),p2:s.mat.applyToPointArray(n.i[0][0],n.i[0][1],0),p3:s.mat.applyToPointArray(n.v[0][0],n.v[0][1],0)}),l.push({t:"z"})),e.lStr=l}}if(e.st)for(a=0;a<16;a+=1)e.tr[a]=s.mat.props[a];e.trNodes=l}},CVShapeElement.prototype.renderFill=function(t,e,s){var r=e.style;(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity)},CVShapeElement.prototype.renderStroke=function(t,e,s){var r=e.style,a=e.d;a&&(a.mdf||this.firstFrame)&&(r.da=a.dasharray,r.do=a.dashoffset),(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity),(e.w.mdf||this.firstFrame)&&(r.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.viewData.length=0,this._parent.destroy.call()};