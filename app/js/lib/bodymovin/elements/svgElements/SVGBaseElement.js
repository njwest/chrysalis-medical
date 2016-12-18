function SVGBaseElement(t,e,a,s,i){this.globalData=a,this.comp=s,this.data=t,this.matteElement=null,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this.init()}createElement(BaseElement,SVGBaseElement),SVGBaseElement.prototype.createElements=function(){if(this.data.td){if(3==this.data.td||1==this.data.td){this.layerElement=document.createElementNS(svgNS,"g");var t=document.createElementNS(svgNS,"mask");if(t.setAttribute("id",this.layerId),t.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),t.appendChild(this.layerElement),this.globalData.defs.appendChild(t),!featureSupport.maskType&&1==this.data.td){t.setAttribute("mask-type","luminance");var e=randomString(10),a=filtersFactory.createFilter(e);this.globalData.defs.appendChild(a),a.appendChild(filtersFactory.createAlphaToLuminanceFilter());var s=document.createElementNS(svgNS,"g");s.appendChild(this.layerElement),t.appendChild(s),s.setAttribute("filter","url(#"+e+")")}}else if(2==this.data.td){var i=document.createElementNS(svgNS,"mask");i.setAttribute("id",this.layerId),i.setAttribute("mask-type","alpha");var r=document.createElementNS(svgNS,"g");i.appendChild(r),this.layerElement=document.createElementNS(svgNS,"g");var e=randomString(10),a=filtersFactory.createFilter(e),n=document.createElementNS(svgNS,"feColorMatrix");n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),a.appendChild(n),this.globalData.defs.appendChild(a);var l=document.createElementNS(svgNS,"rect");if(l.setAttribute("width",this.comp.data?this.comp.data.w:this.globalData.compSize.w),l.setAttribute("height",this.comp.data?this.comp.data.h:this.globalData.compSize.h),l.setAttribute("x","0"),l.setAttribute("y","0"),l.setAttribute("fill","#ffffff"),l.setAttribute("opacity","0"),r.setAttribute("filter","url(#"+e+")"),r.appendChild(l),r.appendChild(this.layerElement),!featureSupport.maskType){i.setAttribute("mask-type","luminance"),a.appendChild(filtersFactory.createAlphaToLuminanceFilter());var s=document.createElementNS(svgNS,"g");r.appendChild(l),s.appendChild(this.layerElement),r.appendChild(s)}this.globalData.defs.appendChild(i)}else this.layerElement=document.createElementNS(svgNS,"g");this.data.hasMask&&(this.maskedElement=this.layerElement)}else this.data.hasMask||this.data.tt?(this.layerElement=document.createElementNS(svgNS,"g"),this.data.tt?(this.matteElement=document.createElementNS(svgNS,"g"),this.matteElement.appendChild(this.layerElement),this.baseElement=this.matteElement):this.baseElement=this.layerElement,this.data.hasMask&&(this.maskedElement=this.layerElement)):(this.layerElement=document.createElementNS(svgNS,"g"),this.baseElement=this.layerElement);if(!this.data.ln&&!this.data.cl||4!==this.data.ty&&0!==this.data.ty||(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)),0===this.data.ty&&!this.checkMasks()){var h=document.createElementNS(svgNS,"clipPath"),m=document.createElementNS(svgNS,"path");m.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var d="cp_"+randomString(8);h.setAttribute("id",d),this.layerElement.setAttribute("clip-path","url(#"+d+")"),h.appendChild(m),this.globalData.defs.appendChild(h)}0!==this.data.bm&&this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.data.ef&&(this.effectsManager=new SVGEffects(this)),this.checkParenting()},SVGBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,SVGBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty||this.data.hd)return!1;if(!this.isVisible)return this.isVisible;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v,this.firstFrame&&(this.finalTransform.opMdf=!0,this.finalTransform.matMdf=!0);var e,a=this.finalTransform.mat;if(this.hierarchy){var s,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,a.cloneFromProps(e),s=0;s<i;s+=1)this.finalTransform.matMdf=!!this.hierarchy[s].finalTransform.mProp.mdf||this.finalTransform.matMdf,e=this.hierarchy[s].finalTransform.mProp.v.props,a.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&a.cloneFromProps(this.finalTransform.mProp.v.props);return t&&(e=t.mat.props,a.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=!!t.opMdf||this.finalTransform.opMdf,this.finalTransform.matMdf=!!t.matMdf||this.finalTransform.matMdf),this.finalTransform.matMdf&&this.layerElement&&this.layerElement.setAttribute("transform",a.to2dCSS()),this.finalTransform.opMdf&&this.layerElement&&this.layerElement.setAttribute("opacity",this.finalTransform.opacity),this.data.hasMask&&this.maskManager.renderFrame(a),this.effectsManager&&this.effectsManager.renderFrame(this.firstFrame),this.isVisible},SVGBaseElement.prototype.destroy=function(){this.layerElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&this.maskManager.destroy()},SVGBaseElement.prototype.getBaseElement=function(){return this.baseElement},SVGBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url(#"+t+")")},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url(#"+t+")")},SVGBaseElement.prototype.hide=function(){};