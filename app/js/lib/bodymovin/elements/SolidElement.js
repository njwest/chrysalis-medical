function ISolidElement(t,e,l,i,a){this._parent.constructor.call(this,t,e,l,i,a)}createElement(SVGBaseElement,ISolidElement),ISolidElement.prototype.createElements=function(){this._parent.createElements.call(this);var t=document.createElementNS(svgNS,"rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t),this.innerElem=t,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},ISolidElement.prototype.hide=IImageElement.prototype.hide,ISolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,ISolidElement.prototype.destroy=IImageElement.prototype.destroy;