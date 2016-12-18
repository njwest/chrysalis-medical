function CanvasRenderer(t,a){this.animationItem=t,this.renderConfig={clearCanvas:!a||void 0===a.clearCanvas||a.clearCanvas,context:a&&a.context||null,progressiveLoad:a&&a.progressiveLoad||!1,preserveAspectRatio:a&&a.preserveAspectRatio||"xMidYMid meet"},this.renderConfig.dpr=a&&a.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=a&&a.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1};var e,s=15;for(e=0;e<s;e+=1)this.contextData.saved[e]=Array.apply(null,{length:16});this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1}extendPrototype(BaseRenderer,CanvasRenderer),CanvasRenderer.prototype.createBase=function(t){return new CVBaseElement(t,this,this.globalData)},CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this,this.globalData)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this,this.globalData)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this,this.globalData)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this,this.globalData)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this,this.globalData)},CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13]){if(!this.renderConfig.clearCanvas)return void this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13]);this.transformMat.cloneFromProps(t),this.transformMat.transform(this.contextData.cTr.props[0],this.contextData.cTr.props[1],this.contextData.cTr.props[2],this.contextData.cTr.props[3],this.contextData.cTr.props[4],this.contextData.cTr.props[5],this.contextData.cTr.props[6],this.contextData.cTr.props[7],this.contextData.cTr.props[8],this.contextData.cTr.props[9],this.contextData.cTr.props[10],this.contextData.cTr.props[11],this.contextData.cTr.props[12],this.contextData.cTr.props[13],this.contextData.cTr.props[14],this.contextData.cTr.props[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var a=this.contextData.cTr.props;this.canvasContext.setTransform(a[0],a[1],a[4],a[5],a[12],a[13])}},CanvasRenderer.prototype.ctxOpacity=function(t){if(1!==t){if(!this.renderConfig.clearCanvas)return void(this.canvasContext.globalAlpha*=t<0?0:t);this.contextData.cO*=t<0?0:t,this.canvasContext.globalAlpha=this.contextData.cO}},CanvasRenderer.prototype.reset=function(){return this.renderConfig.clearCanvas?(this.contextData.cArrPos=0,this.contextData.cTr.reset(),void(this.contextData.cO=1)):void this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.save();t&&this.canvasContext.save();var a=this.contextData.cTr.props;null!==this.contextData.saved[this.contextData.cArrPos]&&void 0!==this.contextData.saved[this.contextData.cArrPos]||(this.contextData.saved[this.contextData.cArrPos]=new Array(16));var e,s=this.contextData.saved[this.contextData.cArrPos];for(e=0;e<16;e+=1)s[e]=a[e];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1},CanvasRenderer.prototype.restore=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.restore();t&&this.canvasContext.restore(),this.contextData.cArrPos-=1;var a,e=this.contextData.saved[this.contextData.cArrPos],s=this.contextData.cTr.props;for(a=0;a<16;a+=1)s[a]=e[a];this.canvasContext.setTransform(e[0],e[1],e[4],e[5],e[12],e[13]),e=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=e,this.canvasContext.globalAlpha=e},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=document.createElement("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d")):this.canvasContext=this.renderConfig.context,this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.totalFrames=Math.floor(t.tf),this.globalData.compWidth=t.w,this.globalData.compHeight=t.h,this.globalData.frameRate=t.fr,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.layers=t.layers,this.transformCanvas={},this.transformCanvas.w=t.w,this.transformCanvas.h=t.h,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,document.body),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.addPendingElement=this.animationItem.addPendingElement.bind(this.animationItem),this.globalData.transformCanvas=this.transformCanvas,this.elements=Array.apply(null,{length:t.layers.length}),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,a;this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",a*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,a=this.canvasContext.canvas.height*this.renderConfig.dpr);var e,s;if(this.renderConfig.preserveAspectRatio.indexOf("meet")!==-1||this.renderConfig.preserveAspectRatio.indexOf("slice")!==-1){var n=this.renderConfig.preserveAspectRatio.split(" "),r=n[1]||"meet",i=n[0]||"xMidYMid",o=i.substr(0,4),h=i.substr(4);e=t/a,s=this.transformCanvas.w/this.transformCanvas.h,s>e&&"meet"===r||s<e&&"slice"===r?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=a/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=a/(this.transformCanvas.h/this.renderConfig.dpr)),"xMid"===o&&(s<e&&"meet"===r||s>e&&"slice"===r)?this.transformCanvas.tx=(t-this.transformCanvas.w*(a/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(s<e&&"meet"===r||s>e&&"slice"===r)?this.transformCanvas.tx=(t-this.transformCanvas.w*(a/this.transformCanvas.h))*this.renderConfig.dpr:this.transformCanvas.tx=0,"YMid"===h&&(s>e&&"meet"===r||s<e&&"slice"===r)?this.transformCanvas.ty=(a-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(s>e&&"meet"===r||s<e&&"slice"===r)?this.transformCanvas.ty=(a-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:this.transformCanvas.ty=0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=a/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];var c,m=this.elements.length;for(c=0;c<m;c+=1)this.elements[c]&&0===this.elements[c].data.ty&&this.elements[c].resize(this.globalData.transformCanvas)},CanvasRenderer.prototype.destroy=function(){this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML="");var t,a=this.layers?this.layers.length:0;for(t=a-1;t>=0;t-=1)this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t){if(!(this.renderedFrame==t&&this.renderConfig.clearCanvas===!0||this.destroyed||null===t)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem.firstFrame,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.renderConfig.clearCanvas===!0?(this.reset(),this.canvasContext.save(),this.canvasContext.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)):this.save(),this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip();var a,e=this.layers.length;for(this.completeLayers||this.checkLayers(t),a=0;a<e;a++)(this.completeLayers||this.elements[a])&&this.elements[a].prepareFrame(t-this.layers[a].st);for(a=e-1;a>=0;a-=1)(this.completeLayers||this.elements[a])&&this.elements[a].renderFrame();this.renderConfig.clearCanvas!==!0?this.restore():this.canvasContext.restore()}},CanvasRenderer.prototype.buildItem=function(t){var a=this.elements;if(!a[t]&&99!=this.layers[t].ty){var e=this.createItem(this.layers[t],this,this.globalData);a[t]=e,e.initExpressions(),0===this.layers[t].ty&&e.resize(this.globalData.transformCanvas)}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},CanvasRenderer.prototype.searchExtraCompositions=function(t){var a,e=t.length;document.createElementNS(svgNS,"g");for(a=0;a<e;a+=1)if(t[a].xt){var s=this.createComp(t[a],this.globalData.comp,this.globalData);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}};