(function(){var t;t=function(){function t(t,e){this.HB=t,this.parser=e,this.unprocessed_ops=[]}return t.prototype.parseOperation=function(t){var e;if(e=this.parser[t.type],null!=e)return e(t);throw new Error("You forgot to specify a parser for type "+t.type+". The message is "+JSON.stringify(t)+".")},t.prototype.applyOpsBundle=function(t){var e,r,p,s,o,n,i,u;for(r=[],p=0,n=t.length;n>p;p++)e=t[p],r.push(this.parseOperation(e));for(s=0,i=r.length;i>s;s++)e=r[s],this.HB.addOperation(e);for(o=0,u=r.length;u>o;o++)e=r[o],e.execute()||this.unprocessed_ops.push(e);return this.tryUnprocessed()},t.prototype.applyOpsCheckDouble=function(t){var e,r,p,s;for(s=[],r=0,p=t.length;p>r;r++)e=t[r],s.push(null==this.HB.getOperation(e.uid)?this.applyOp(e):void 0);return s},t.prototype.applyOps=function(t){var e,r,p,s;for(s=[],r=0,p=t.length;p>r;r++)e=t[r],s.push(this.applyOp(e));return s},t.prototype.applyOp=function(t){var e;return e=this.parseOperation(t),this.HB.addToCounter(e),e.execute()?this.HB.addOperation(e):this.unprocessed_ops.push(e),this.tryUnprocessed()},t.prototype.tryUnprocessed=function(){var t,e,r,p,s,o,n;for(n=[];;){for(t=this.unprocessed_ops.length,r=[],o=this.unprocessed_ops,p=0,s=o.length;s>p;p++)e=o[p],e.execute()?this.HB.addOperation(e):r.push(e);if(this.unprocessed_ops=r,this.unprocessed_ops.length===t)break;n.push(void 0)}return n},t}(),module.exports=t}).call(this);
//# sourceMappingURL=Engine.js.map