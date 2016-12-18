function HTextElement(t,e,s,i,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this._parent.constructor.call(this,t,e,s,i,r)}createElement(HBaseElement,HTextElement),HTextElement.prototype.init=ITextElement.prototype.init,HTextElement.prototype.getMeasures=ITextElement.prototype.getMeasures,HTextElement.prototype.createPathShape=ITextElement.prototype.createPathShape,HTextElement.prototype.prepareFrame=ITextElement.prototype.prepareFrame,HTextElement.prototype.createElements=function(){this.isMasked=this.checkMasks();var t=document.createElement("div");if(styleDiv(t),this.layerElement=t,this.isMasked){this.renderType="svg";var e=document.createElementNS(svgNS,"svg");this.cont=e,this.compW=this.comp.data?this.comp.data.w:this.globalData.compSize.w,this.compH=this.comp.data?this.comp.data.h:this.globalData.compSize.h,e.setAttribute("width",this.compW),e.setAttribute("height",this.compH);var s=document.createElementNS(svgNS,"g");e.appendChild(s),t.appendChild(e),this.maskedElement=s,this.innerElem=s}else this.renderType="html",this.innerElem=t;this.baseElement=t},HTextElement.prototype.buildNewText=function(){var t=this.currentTextDocumentData;this.renderedLetters=Array.apply(null,{length:this.currentTextDocumentData.l?this.currentTextDocumentData.l.length:0}),t.fc?this.innerElem.style.color=this.innerElem.style.fill="rgb("+Math.round(255*t.fc[0])+","+Math.round(255*t.fc[1])+","+Math.round(255*t.fc[2])+")":this.innerElem.style.color=this.innerElem.style.fill="rgba(0,0,0,0)",t.sc&&(this.innerElem.style.stroke="rgb("+Math.round(255*t.sc[0])+","+Math.round(255*t.sc[1])+","+Math.round(255*t.sc[2])+")",this.innerElem.style.strokeWidth=t.sw+"px");var e=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(this.innerElem.style.fontSize=t.s+"px",this.innerElem.style.lineHeight=t.s+"px",e.fClass)this.innerElem.className=e.fClass;else{this.innerElem.style.fontFamily=e.fFamily;var s=t.fWeight,i=t.fStyle;this.innerElem.style.fontStyle=i,this.innerElem.style.fontWeight=s}var r,h,n=t.l;h=n.length;var a,l,o,m,p=this.mHelper,c="",d=0;for(r=0;r<h;r+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?a=this.textPaths[d]:(a=document.createElementNS(svgNS,"path"),a.setAttribute("stroke-linecap","butt"),a.setAttribute("stroke-linejoin","round"),a.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?(l=this.textSpans[d],o=l.children()[0]):(l=document.createElement("div"),o=document.createElementNS(svgNS,"svg"),o.appendChild(a),styleDiv(l)))):this.isMasked?a=this.textPaths[d]?this.textPaths[d]:document.createElementNS(svgNS,"text"):this.textSpans[d]?(l=this.textSpans[d],a=this.textPaths[d]):(l=document.createElement("span"),styleDiv(l),a=document.createElement("span"),styleDiv(a),l.appendChild(a)),this.globalData.fontManager.chars){var x,u=this.globalData.fontManager.getCharData(t.t.charAt(r),e.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(x=u?u.data:null,p.reset(),x&&x.shapes&&(m=x.shapes[0].it,p.scale(t.s/100,t.s/100),c=this.createPathShape(p,m),a.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(a);else if(this.innerElem.appendChild(l),x&&x.shapes){document.body.appendChild(o);var y=o.getBBox();o.setAttribute("width",y.width),o.setAttribute("height",y.height),o.setAttribute("viewBox",y.x+" "+y.y+" "+y.width+" "+y.height),o.style.transform=o.style.webkitTransform="translate("+y.x+"px,"+y.y+"px)",n[r].yOffset=y.y,l.appendChild(o)}else o.setAttribute("width",1),o.setAttribute("height",1)}else a.textContent=n[r].val,a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(a):(this.innerElem.appendChild(l),a.style.transform=a.style.webkitTransform="translate3d(0,"+-t.s/1.2+"px,0)");this.isMasked?this.textSpans[d]=a:this.textSpans[d]=l,this.textPaths[d]=a,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.hide=SVGTextElement.prototype.hide,HTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.hidden=!1,this.innerElem.style.display="block",this.layerElement.style.display="block"),this.data.singleShape){if(!this.firstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform.matMdf&&(this.cont.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.cont.style.transform=this.cont.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.getMeasures(),this.lettersChangedFlag){var s,i,r=this.renderedLetters,h=this.currentTextDocumentData.l;i=h.length;var n;for(s=0;s<i;s+=1)h[s].n||(n=r[s],this.isMasked?this.textSpans[s].setAttribute("transform",n.m):this.textSpans[s].style.transform=this.textSpans[s].style.webkitTransform=n.m,this.textSpans[s].style.opacity=n.o,n.sw&&this.textPaths[s].setAttribute("stroke-width",n.sw),n.sc&&this.textPaths[s].setAttribute("stroke",n.sc),n.fc&&(this.textPaths[s].setAttribute("fill",n.fc),this.textPaths[s].style.color=n.fc));if(this.isVisible&&(this.elemMdf||this.firstFrame)&&this.innerElem.getBBox){var a=this.innerElem.getBBox();this.currentBBox.w!==a.width&&(this.currentBBox.w=a.width,this.cont.setAttribute("width",a.width)),this.currentBBox.h!==a.height&&(this.currentBBox.h=a.height,this.cont.setAttribute("height",a.height)),this.currentBBox.w===a.width&&this.currentBBox.h===a.height&&this.currentBBox.x===a.x&&this.currentBBox.y===a.y||(this.currentBBox.w=a.width,this.currentBBox.h=a.height,this.currentBBox.x=a.x,this.currentBBox.y=a.y,this.cont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.cont.style.transform=this.cont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}this.firstFrame&&(this.firstFrame=!1)}},HTextElement.prototype.destroy=SVGTextElement.prototype.destroy;