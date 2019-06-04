/**
 * Copyright @ 2019 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["esri/core/declare","esri/views/3d/support/PromiseLightweight"],function(e,r){var t=e(r["default"]||r.PromiseLightweight,{constructor:function(){this.symbol=symbol;for(var e=0,r=!1,t=function(t,i){i&&(this.childGraphics3DSymbols[t]=i,validSymbols++),e--,!this.isRejected()&&r&&e<1&&(validSymbols>0?this.resolve():this.reject())},i=0;i<numSymbolLayers;i++){var s=symbolLayers.getItemAt(i);if(s.enable!==!1){context.layerOrder=layerOrder+(1-(1+i)/numSymbolLayers),context.layerOrderDelta=1/numSymbolLayers;var l=Graphics3DSymbolLayerFactory.make(s,context,s._ignoreDrivers);l&&(e++,this.childGraphics3DSymbolPromises[i]=l,l.then(t.bind(this,i,l),t.bind(this,i,null)))}}context.layerOrder=layerOrder,r=!0,!this.isRejected()&&e<1&&(validSymbols>0?this.resolve():this.reject())},destroy:function(){this.isFulfilled()||this.reject()}});return t});