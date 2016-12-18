function EffectsManager(e,t,s){var f=e.ef;this.effectElements=[];var i,c,n=f.length;for(i=0;i<n;i++)c=new GroupEffect(f[i],t,s),this.effectElements.push(c)}function GroupEffect(e,t,s){this.dynamicProperties=[],this.init(e,t,this.dynamicProperties),this.dynamicProperties.length&&s.push(this)}GroupEffect.prototype.getValue=function(){this.mdf=!1;var e,t=this.dynamicProperties.length;for(e=0;e<t;e+=1)this.dynamicProperties[e].getValue(),this.mdf=!!this.dynamicProperties[e].mdf||this.mdf},GroupEffect.prototype.init=function(e,t,s){this.data=e,this.mdf=!1,this.effectElements=[];var f,i,c=this.data.ef.length,n=this.data.ef;for(f=0;f<c;f+=1)switch(n[f].ty){case 0:i=new SliderEffect(n[f],t,s),this.effectElements.push(i);break;case 1:i=new AngleEffect(n[f],t,s),this.effectElements.push(i);break;case 2:i=new ColorEffect(n[f],t,s),this.effectElements.push(i);break;case 3:i=new PointEffect(n[f],t,s),this.effectElements.push(i);break;case 4:case 7:i=new CheckboxEffect(n[f],t,s),this.effectElements.push(i);break;case 10:i=new LayerIndexEffect(n[f],t,s),this.effectElements.push(i);break;case 5:i=new EffectsManager(n[f],t,s),this.effectElements.push(i);break;case 6:i=new NoValueEffect(n[f],t,s),this.effectElements.push(i)}};