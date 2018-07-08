// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33655 = (function (f,blockable,meta33656){
this.f = f;
this.blockable = blockable;
this.meta33656 = meta33656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33657,meta33656__$1){
var self__ = this;
var _33657__$1 = this;
return (new cljs.core.async.t_cljs$core$async33655(self__.f,self__.blockable,meta33656__$1));
});

cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33657){
var self__ = this;
var _33657__$1 = this;
return self__.meta33656;
});

cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33656","meta33656",-27304228,null)], null);
});

cljs.core.async.t_cljs$core$async33655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33655";

cljs.core.async.t_cljs$core$async33655.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33655");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33655.
 */
cljs.core.async.__GT_t_cljs$core$async33655 = (function cljs$core$async$__GT_t_cljs$core$async33655(f__$1,blockable__$1,meta33656){
return (new cljs.core.async.t_cljs$core$async33655(f__$1,blockable__$1,meta33656));
});

}

return (new cljs.core.async.t_cljs$core$async33655(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33664 = arguments.length;
switch (G__33664) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33667 = arguments.length;
switch (G__33667) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33669 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33669);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33669,ret){
return (function (){
return fn1.call(null,val_33669);
});})(val_33669,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33671 = arguments.length;
switch (G__33671) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___33673 = n;
var x_33674 = (0);
while(true){
if((x_33674 < n__4376__auto___33673)){
(a[x_33674] = (0));

var G__33675 = (x_33674 + (1));
x_33674 = G__33675;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33676 = (i + (1));
i = G__33676;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33677 = (function (flag,meta33678){
this.flag = flag;
this.meta33678 = meta33678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33679,meta33678__$1){
var self__ = this;
var _33679__$1 = this;
return (new cljs.core.async.t_cljs$core$async33677(self__.flag,meta33678__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33679){
var self__ = this;
var _33679__$1 = this;
return self__.meta33678;
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33678","meta33678",-439843791,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33677";

cljs.core.async.t_cljs$core$async33677.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33677");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33677.
 */
cljs.core.async.__GT_t_cljs$core$async33677 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33677(flag__$1,meta33678){
return (new cljs.core.async.t_cljs$core$async33677(flag__$1,meta33678));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33677(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33680 = (function (flag,cb,meta33681){
this.flag = flag;
this.cb = cb;
this.meta33681 = meta33681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33682,meta33681__$1){
var self__ = this;
var _33682__$1 = this;
return (new cljs.core.async.t_cljs$core$async33680(self__.flag,self__.cb,meta33681__$1));
});

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33682){
var self__ = this;
var _33682__$1 = this;
return self__.meta33681;
});

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33681","meta33681",532739338,null)], null);
});

cljs.core.async.t_cljs$core$async33680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33680";

cljs.core.async.t_cljs$core$async33680.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async33680");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33680.
 */
cljs.core.async.__GT_t_cljs$core$async33680 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33680(flag__$1,cb__$1,meta33681){
return (new cljs.core.async.t_cljs$core$async33680(flag__$1,cb__$1,meta33681));
});

}

return (new cljs.core.async.t_cljs$core$async33680(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33683_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33683_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33684_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33684_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33685 = (i + (1));
i = G__33685;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33691 = arguments.length;
var i__4500__auto___33692 = (0);
while(true){
if((i__4500__auto___33692 < len__4499__auto___33691)){
args__4502__auto__.push((arguments[i__4500__auto___33692]));

var G__33693 = (i__4500__auto___33692 + (1));
i__4500__auto___33692 = G__33693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33688){
var map__33689 = p__33688;
var map__33689__$1 = ((((!((map__33689 == null)))?(((((map__33689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33689):map__33689);
var opts = map__33689__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33686){
var G__33687 = cljs.core.first.call(null,seq33686);
var seq33686__$1 = cljs.core.next.call(null,seq33686);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33687,seq33686__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33695 = arguments.length;
switch (G__33695) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31730__auto___33741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___33741){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___33741){
return (function (state_33719){
var state_val_33720 = (state_33719[(1)]);
if((state_val_33720 === (7))){
var inst_33715 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33721_33742 = state_33719__$1;
(statearr_33721_33742[(2)] = inst_33715);

(statearr_33721_33742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (1))){
var state_33719__$1 = state_33719;
var statearr_33722_33743 = state_33719__$1;
(statearr_33722_33743[(2)] = null);

(statearr_33722_33743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (4))){
var inst_33698 = (state_33719[(7)]);
var inst_33698__$1 = (state_33719[(2)]);
var inst_33699 = (inst_33698__$1 == null);
var state_33719__$1 = (function (){var statearr_33723 = state_33719;
(statearr_33723[(7)] = inst_33698__$1);

return statearr_33723;
})();
if(cljs.core.truth_(inst_33699)){
var statearr_33724_33744 = state_33719__$1;
(statearr_33724_33744[(1)] = (5));

} else {
var statearr_33725_33745 = state_33719__$1;
(statearr_33725_33745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (13))){
var state_33719__$1 = state_33719;
var statearr_33726_33746 = state_33719__$1;
(statearr_33726_33746[(2)] = null);

(statearr_33726_33746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (6))){
var inst_33698 = (state_33719[(7)]);
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33719__$1,(11),to,inst_33698);
} else {
if((state_val_33720 === (3))){
var inst_33717 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33719__$1,inst_33717);
} else {
if((state_val_33720 === (12))){
var state_33719__$1 = state_33719;
var statearr_33727_33747 = state_33719__$1;
(statearr_33727_33747[(2)] = null);

(statearr_33727_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (2))){
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33719__$1,(4),from);
} else {
if((state_val_33720 === (11))){
var inst_33708 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
if(cljs.core.truth_(inst_33708)){
var statearr_33728_33748 = state_33719__$1;
(statearr_33728_33748[(1)] = (12));

} else {
var statearr_33729_33749 = state_33719__$1;
(statearr_33729_33749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (9))){
var state_33719__$1 = state_33719;
var statearr_33730_33750 = state_33719__$1;
(statearr_33730_33750[(2)] = null);

(statearr_33730_33750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (5))){
var state_33719__$1 = state_33719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33731_33751 = state_33719__$1;
(statearr_33731_33751[(1)] = (8));

} else {
var statearr_33732_33752 = state_33719__$1;
(statearr_33732_33752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (14))){
var inst_33713 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33733_33753 = state_33719__$1;
(statearr_33733_33753[(2)] = inst_33713);

(statearr_33733_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (10))){
var inst_33705 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33734_33754 = state_33719__$1;
(statearr_33734_33754[(2)] = inst_33705);

(statearr_33734_33754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (8))){
var inst_33702 = cljs.core.async.close_BANG_.call(null,to);
var state_33719__$1 = state_33719;
var statearr_33735_33755 = state_33719__$1;
(statearr_33735_33755[(2)] = inst_33702);

(statearr_33735_33755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___33741))
;
return ((function (switch__31573__auto__,c__31730__auto___33741){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_33736 = [null,null,null,null,null,null,null,null];
(statearr_33736[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_33736[(1)] = (1));

return statearr_33736;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_33719){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33737){if((e33737 instanceof Object)){
var ex__31577__auto__ = e33737;
var statearr_33738_33756 = state_33719;
(statearr_33738_33756[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_33719;
state_33719 = G__33757;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_33719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_33719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___33741))
})();
var state__31732__auto__ = (function (){var statearr_33739 = f__31731__auto__.call(null);
(statearr_33739[(6)] = c__31730__auto___33741);

return statearr_33739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___33741))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33758){
var vec__33759 = p__33758;
var v = cljs.core.nth.call(null,vec__33759,(0),null);
var p = cljs.core.nth.call(null,vec__33759,(1),null);
var job = vec__33759;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31730__auto___33930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results){
return (function (state_33766){
var state_val_33767 = (state_33766[(1)]);
if((state_val_33767 === (1))){
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33766__$1,(2),res,v);
} else {
if((state_val_33767 === (2))){
var inst_33763 = (state_33766[(2)]);
var inst_33764 = cljs.core.async.close_BANG_.call(null,res);
var state_33766__$1 = (function (){var statearr_33768 = state_33766;
(statearr_33768[(7)] = inst_33763);

return statearr_33768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33766__$1,inst_33764);
} else {
return null;
}
}
});})(c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results))
;
return ((function (switch__31573__auto__,c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_33769 = [null,null,null,null,null,null,null,null];
(statearr_33769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_33769[(1)] = (1));

return statearr_33769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_33766){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33770){if((e33770 instanceof Object)){
var ex__31577__auto__ = e33770;
var statearr_33771_33931 = state_33766;
(statearr_33771_33931[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33932 = state_33766;
state_33766 = G__33932;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_33766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_33766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results))
})();
var state__31732__auto__ = (function (){var statearr_33772 = f__31731__auto__.call(null);
(statearr_33772[(6)] = c__31730__auto___33930);

return statearr_33772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___33930,res,vec__33759,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33773){
var vec__33774 = p__33773;
var v = cljs.core.nth.call(null,vec__33774,(0),null);
var p = cljs.core.nth.call(null,vec__33774,(1),null);
var job = vec__33774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___33933 = n;
var __33934 = (0);
while(true){
if((__33934 < n__4376__auto___33933)){
var G__33777_33935 = type;
var G__33777_33936__$1 = (((G__33777_33935 instanceof cljs.core.Keyword))?G__33777_33935.fqn:null);
switch (G__33777_33936__$1) {
case "compute":
var c__31730__auto___33938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33934,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (__33934,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function (state_33790){
var state_val_33791 = (state_33790[(1)]);
if((state_val_33791 === (1))){
var state_33790__$1 = state_33790;
var statearr_33792_33939 = state_33790__$1;
(statearr_33792_33939[(2)] = null);

(statearr_33792_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (2))){
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33790__$1,(4),jobs);
} else {
if((state_val_33791 === (3))){
var inst_33788 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33790__$1,inst_33788);
} else {
if((state_val_33791 === (4))){
var inst_33780 = (state_33790[(2)]);
var inst_33781 = process.call(null,inst_33780);
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33781)){
var statearr_33793_33940 = state_33790__$1;
(statearr_33793_33940[(1)] = (5));

} else {
var statearr_33794_33941 = state_33790__$1;
(statearr_33794_33941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (5))){
var state_33790__$1 = state_33790;
var statearr_33795_33942 = state_33790__$1;
(statearr_33795_33942[(2)] = null);

(statearr_33795_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (6))){
var state_33790__$1 = state_33790;
var statearr_33796_33943 = state_33790__$1;
(statearr_33796_33943[(2)] = null);

(statearr_33796_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (7))){
var inst_33786 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33797_33944 = state_33790__$1;
(statearr_33797_33944[(2)] = inst_33786);

(statearr_33797_33944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33934,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
;
return ((function (__33934,switch__31573__auto__,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_33798 = [null,null,null,null,null,null,null];
(statearr_33798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_33798[(1)] = (1));

return statearr_33798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_33790){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33799){if((e33799 instanceof Object)){
var ex__31577__auto__ = e33799;
var statearr_33800_33945 = state_33790;
(statearr_33800_33945[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33946 = state_33790;
state_33790 = G__33946;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_33790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_33790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(__33934,switch__31573__auto__,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
})();
var state__31732__auto__ = (function (){var statearr_33801 = f__31731__auto__.call(null);
(statearr_33801[(6)] = c__31730__auto___33938);

return statearr_33801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(__33934,c__31730__auto___33938,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
);


break;
case "async":
var c__31730__auto___33947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33934,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (__33934,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function (state_33814){
var state_val_33815 = (state_33814[(1)]);
if((state_val_33815 === (1))){
var state_33814__$1 = state_33814;
var statearr_33816_33948 = state_33814__$1;
(statearr_33816_33948[(2)] = null);

(statearr_33816_33948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (2))){
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33814__$1,(4),jobs);
} else {
if((state_val_33815 === (3))){
var inst_33812 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33814__$1,inst_33812);
} else {
if((state_val_33815 === (4))){
var inst_33804 = (state_33814[(2)]);
var inst_33805 = async.call(null,inst_33804);
var state_33814__$1 = state_33814;
if(cljs.core.truth_(inst_33805)){
var statearr_33817_33949 = state_33814__$1;
(statearr_33817_33949[(1)] = (5));

} else {
var statearr_33818_33950 = state_33814__$1;
(statearr_33818_33950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (5))){
var state_33814__$1 = state_33814;
var statearr_33819_33951 = state_33814__$1;
(statearr_33819_33951[(2)] = null);

(statearr_33819_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (6))){
var state_33814__$1 = state_33814;
var statearr_33820_33952 = state_33814__$1;
(statearr_33820_33952[(2)] = null);

(statearr_33820_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33815 === (7))){
var inst_33810 = (state_33814[(2)]);
var state_33814__$1 = state_33814;
var statearr_33821_33953 = state_33814__$1;
(statearr_33821_33953[(2)] = inst_33810);

(statearr_33821_33953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33934,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
;
return ((function (__33934,switch__31573__auto__,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_33822 = [null,null,null,null,null,null,null];
(statearr_33822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_33822[(1)] = (1));

return statearr_33822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_33814){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33823){if((e33823 instanceof Object)){
var ex__31577__auto__ = e33823;
var statearr_33824_33954 = state_33814;
(statearr_33824_33954[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33955 = state_33814;
state_33814 = G__33955;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_33814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_33814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(__33934,switch__31573__auto__,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
})();
var state__31732__auto__ = (function (){var statearr_33825 = f__31731__auto__.call(null);
(statearr_33825[(6)] = c__31730__auto___33947);

return statearr_33825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(__33934,c__31730__auto___33947,G__33777_33935,G__33777_33936__$1,n__4376__auto___33933,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33777_33936__$1)].join('')));

}

var G__33956 = (__33934 + (1));
__33934 = G__33956;
continue;
} else {
}
break;
}

var c__31730__auto___33957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___33957,jobs,results,process,async){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___33957,jobs,results,process,async){
return (function (state_33847){
var state_val_33848 = (state_33847[(1)]);
if((state_val_33848 === (1))){
var state_33847__$1 = state_33847;
var statearr_33849_33958 = state_33847__$1;
(statearr_33849_33958[(2)] = null);

(statearr_33849_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (2))){
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33847__$1,(4),from);
} else {
if((state_val_33848 === (3))){
var inst_33845 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33847__$1,inst_33845);
} else {
if((state_val_33848 === (4))){
var inst_33828 = (state_33847[(7)]);
var inst_33828__$1 = (state_33847[(2)]);
var inst_33829 = (inst_33828__$1 == null);
var state_33847__$1 = (function (){var statearr_33850 = state_33847;
(statearr_33850[(7)] = inst_33828__$1);

return statearr_33850;
})();
if(cljs.core.truth_(inst_33829)){
var statearr_33851_33959 = state_33847__$1;
(statearr_33851_33959[(1)] = (5));

} else {
var statearr_33852_33960 = state_33847__$1;
(statearr_33852_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (5))){
var inst_33831 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33847__$1 = state_33847;
var statearr_33853_33961 = state_33847__$1;
(statearr_33853_33961[(2)] = inst_33831);

(statearr_33853_33961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (6))){
var inst_33833 = (state_33847[(8)]);
var inst_33828 = (state_33847[(7)]);
var inst_33833__$1 = cljs.core.async.chan.call(null,(1));
var inst_33834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33835 = [inst_33828,inst_33833__$1];
var inst_33836 = (new cljs.core.PersistentVector(null,2,(5),inst_33834,inst_33835,null));
var state_33847__$1 = (function (){var statearr_33854 = state_33847;
(statearr_33854[(8)] = inst_33833__$1);

return statearr_33854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33847__$1,(8),jobs,inst_33836);
} else {
if((state_val_33848 === (7))){
var inst_33843 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33855_33962 = state_33847__$1;
(statearr_33855_33962[(2)] = inst_33843);

(statearr_33855_33962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (8))){
var inst_33833 = (state_33847[(8)]);
var inst_33838 = (state_33847[(2)]);
var state_33847__$1 = (function (){var statearr_33856 = state_33847;
(statearr_33856[(9)] = inst_33838);

return statearr_33856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33847__$1,(9),results,inst_33833);
} else {
if((state_val_33848 === (9))){
var inst_33840 = (state_33847[(2)]);
var state_33847__$1 = (function (){var statearr_33857 = state_33847;
(statearr_33857[(10)] = inst_33840);

return statearr_33857;
})();
var statearr_33858_33963 = state_33847__$1;
(statearr_33858_33963[(2)] = null);

(statearr_33858_33963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___33957,jobs,results,process,async))
;
return ((function (switch__31573__auto__,c__31730__auto___33957,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_33859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_33859[(1)] = (1));

return statearr_33859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_33847){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33860){if((e33860 instanceof Object)){
var ex__31577__auto__ = e33860;
var statearr_33861_33964 = state_33847;
(statearr_33861_33964[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33847;
state_33847 = G__33965;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_33847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_33847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___33957,jobs,results,process,async))
})();
var state__31732__auto__ = (function (){var statearr_33862 = f__31731__auto__.call(null);
(statearr_33862[(6)] = c__31730__auto___33957);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___33957,jobs,results,process,async))
);


var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__,jobs,results,process,async){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__,jobs,results,process,async){
return (function (state_33900){
var state_val_33901 = (state_33900[(1)]);
if((state_val_33901 === (7))){
var inst_33896 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33902_33966 = state_33900__$1;
(statearr_33902_33966[(2)] = inst_33896);

(statearr_33902_33966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (20))){
var state_33900__$1 = state_33900;
var statearr_33903_33967 = state_33900__$1;
(statearr_33903_33967[(2)] = null);

(statearr_33903_33967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (1))){
var state_33900__$1 = state_33900;
var statearr_33904_33968 = state_33900__$1;
(statearr_33904_33968[(2)] = null);

(statearr_33904_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (4))){
var inst_33865 = (state_33900[(7)]);
var inst_33865__$1 = (state_33900[(2)]);
var inst_33866 = (inst_33865__$1 == null);
var state_33900__$1 = (function (){var statearr_33905 = state_33900;
(statearr_33905[(7)] = inst_33865__$1);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33866)){
var statearr_33906_33969 = state_33900__$1;
(statearr_33906_33969[(1)] = (5));

} else {
var statearr_33907_33970 = state_33900__$1;
(statearr_33907_33970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (15))){
var inst_33878 = (state_33900[(8)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33900__$1,(18),to,inst_33878);
} else {
if((state_val_33901 === (21))){
var inst_33891 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33908_33971 = state_33900__$1;
(statearr_33908_33971[(2)] = inst_33891);

(statearr_33908_33971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (13))){
var inst_33893 = (state_33900[(2)]);
var state_33900__$1 = (function (){var statearr_33909 = state_33900;
(statearr_33909[(9)] = inst_33893);

return statearr_33909;
})();
var statearr_33910_33972 = state_33900__$1;
(statearr_33910_33972[(2)] = null);

(statearr_33910_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (6))){
var inst_33865 = (state_33900[(7)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33900__$1,(11),inst_33865);
} else {
if((state_val_33901 === (17))){
var inst_33886 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
if(cljs.core.truth_(inst_33886)){
var statearr_33911_33973 = state_33900__$1;
(statearr_33911_33973[(1)] = (19));

} else {
var statearr_33912_33974 = state_33900__$1;
(statearr_33912_33974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (3))){
var inst_33898 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33900__$1,inst_33898);
} else {
if((state_val_33901 === (12))){
var inst_33875 = (state_33900[(10)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33900__$1,(14),inst_33875);
} else {
if((state_val_33901 === (2))){
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33900__$1,(4),results);
} else {
if((state_val_33901 === (19))){
var state_33900__$1 = state_33900;
var statearr_33913_33975 = state_33900__$1;
(statearr_33913_33975[(2)] = null);

(statearr_33913_33975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (11))){
var inst_33875 = (state_33900[(2)]);
var state_33900__$1 = (function (){var statearr_33914 = state_33900;
(statearr_33914[(10)] = inst_33875);

return statearr_33914;
})();
var statearr_33915_33976 = state_33900__$1;
(statearr_33915_33976[(2)] = null);

(statearr_33915_33976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (9))){
var state_33900__$1 = state_33900;
var statearr_33916_33977 = state_33900__$1;
(statearr_33916_33977[(2)] = null);

(statearr_33916_33977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (5))){
var state_33900__$1 = state_33900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33917_33978 = state_33900__$1;
(statearr_33917_33978[(1)] = (8));

} else {
var statearr_33918_33979 = state_33900__$1;
(statearr_33918_33979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (14))){
var inst_33878 = (state_33900[(8)]);
var inst_33880 = (state_33900[(11)]);
var inst_33878__$1 = (state_33900[(2)]);
var inst_33879 = (inst_33878__$1 == null);
var inst_33880__$1 = cljs.core.not.call(null,inst_33879);
var state_33900__$1 = (function (){var statearr_33919 = state_33900;
(statearr_33919[(8)] = inst_33878__$1);

(statearr_33919[(11)] = inst_33880__$1);

return statearr_33919;
})();
if(inst_33880__$1){
var statearr_33920_33980 = state_33900__$1;
(statearr_33920_33980[(1)] = (15));

} else {
var statearr_33921_33981 = state_33900__$1;
(statearr_33921_33981[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (16))){
var inst_33880 = (state_33900[(11)]);
var state_33900__$1 = state_33900;
var statearr_33922_33982 = state_33900__$1;
(statearr_33922_33982[(2)] = inst_33880);

(statearr_33922_33982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (10))){
var inst_33872 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33923_33983 = state_33900__$1;
(statearr_33923_33983[(2)] = inst_33872);

(statearr_33923_33983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (18))){
var inst_33883 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33924_33984 = state_33900__$1;
(statearr_33924_33984[(2)] = inst_33883);

(statearr_33924_33984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (8))){
var inst_33869 = cljs.core.async.close_BANG_.call(null,to);
var state_33900__$1 = state_33900;
var statearr_33925_33985 = state_33900__$1;
(statearr_33925_33985[(2)] = inst_33869);

(statearr_33925_33985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto__,jobs,results,process,async))
;
return ((function (switch__31573__auto__,c__31730__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_33926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__);

(statearr_33926[(1)] = (1));

return statearr_33926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1 = (function (state_33900){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_33900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e33927){if((e33927 instanceof Object)){
var ex__31577__auto__ = e33927;
var statearr_33928_33986 = state_33900;
(statearr_33928_33986[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33987 = state_33900;
state_33900 = G__33987;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__ = function(state_33900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1.call(this,state_33900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__,jobs,results,process,async))
})();
var state__31732__auto__ = (function (){var statearr_33929 = f__31731__auto__.call(null);
(statearr_33929[(6)] = c__31730__auto__);

return statearr_33929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__,jobs,results,process,async))
);

return c__31730__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33989 = arguments.length;
switch (G__33989) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33992 = arguments.length;
switch (G__33992) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33995 = arguments.length;
switch (G__33995) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31730__auto___34044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___34044,tc,fc){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___34044,tc,fc){
return (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (7))){
var inst_34017 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34023_34045 = state_34021__$1;
(statearr_34023_34045[(2)] = inst_34017);

(statearr_34023_34045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (1))){
var state_34021__$1 = state_34021;
var statearr_34024_34046 = state_34021__$1;
(statearr_34024_34046[(2)] = null);

(statearr_34024_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (4))){
var inst_33998 = (state_34021[(7)]);
var inst_33998__$1 = (state_34021[(2)]);
var inst_33999 = (inst_33998__$1 == null);
var state_34021__$1 = (function (){var statearr_34025 = state_34021;
(statearr_34025[(7)] = inst_33998__$1);

return statearr_34025;
})();
if(cljs.core.truth_(inst_33999)){
var statearr_34026_34047 = state_34021__$1;
(statearr_34026_34047[(1)] = (5));

} else {
var statearr_34027_34048 = state_34021__$1;
(statearr_34027_34048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (13))){
var state_34021__$1 = state_34021;
var statearr_34028_34049 = state_34021__$1;
(statearr_34028_34049[(2)] = null);

(statearr_34028_34049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (6))){
var inst_33998 = (state_34021[(7)]);
var inst_34004 = p.call(null,inst_33998);
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_34004)){
var statearr_34029_34050 = state_34021__$1;
(statearr_34029_34050[(1)] = (9));

} else {
var statearr_34030_34051 = state_34021__$1;
(statearr_34030_34051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (3))){
var inst_34019 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34021__$1,inst_34019);
} else {
if((state_val_34022 === (12))){
var state_34021__$1 = state_34021;
var statearr_34031_34052 = state_34021__$1;
(statearr_34031_34052[(2)] = null);

(statearr_34031_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (2))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34021__$1,(4),ch);
} else {
if((state_val_34022 === (11))){
var inst_33998 = (state_34021[(7)]);
var inst_34008 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34021__$1,(8),inst_34008,inst_33998);
} else {
if((state_val_34022 === (9))){
var state_34021__$1 = state_34021;
var statearr_34032_34053 = state_34021__$1;
(statearr_34032_34053[(2)] = tc);

(statearr_34032_34053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (5))){
var inst_34001 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34002 = cljs.core.async.close_BANG_.call(null,fc);
var state_34021__$1 = (function (){var statearr_34033 = state_34021;
(statearr_34033[(8)] = inst_34001);

return statearr_34033;
})();
var statearr_34034_34054 = state_34021__$1;
(statearr_34034_34054[(2)] = inst_34002);

(statearr_34034_34054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (14))){
var inst_34015 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34035_34055 = state_34021__$1;
(statearr_34035_34055[(2)] = inst_34015);

(statearr_34035_34055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (10))){
var state_34021__$1 = state_34021;
var statearr_34036_34056 = state_34021__$1;
(statearr_34036_34056[(2)] = fc);

(statearr_34036_34056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (8))){
var inst_34010 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_34010)){
var statearr_34037_34057 = state_34021__$1;
(statearr_34037_34057[(1)] = (12));

} else {
var statearr_34038_34058 = state_34021__$1;
(statearr_34038_34058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___34044,tc,fc))
;
return ((function (switch__31573__auto__,c__31730__auto___34044,tc,fc){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34039 = [null,null,null,null,null,null,null,null,null];
(statearr_34039[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34039[(1)] = (1));

return statearr_34039;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34021){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34040){if((e34040 instanceof Object)){
var ex__31577__auto__ = e34040;
var statearr_34041_34059 = state_34021;
(statearr_34041_34059[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34060 = state_34021;
state_34021 = G__34060;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___34044,tc,fc))
})();
var state__31732__auto__ = (function (){var statearr_34042 = f__31731__auto__.call(null);
(statearr_34042[(6)] = c__31730__auto___34044);

return statearr_34042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___34044,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (7))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34083_34101 = state_34081__$1;
(statearr_34083_34101[(2)] = inst_34077);

(statearr_34083_34101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (1))){
var inst_34061 = init;
var state_34081__$1 = (function (){var statearr_34084 = state_34081;
(statearr_34084[(7)] = inst_34061);

return statearr_34084;
})();
var statearr_34085_34102 = state_34081__$1;
(statearr_34085_34102[(2)] = null);

(statearr_34085_34102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (4))){
var inst_34064 = (state_34081[(8)]);
var inst_34064__$1 = (state_34081[(2)]);
var inst_34065 = (inst_34064__$1 == null);
var state_34081__$1 = (function (){var statearr_34086 = state_34081;
(statearr_34086[(8)] = inst_34064__$1);

return statearr_34086;
})();
if(cljs.core.truth_(inst_34065)){
var statearr_34087_34103 = state_34081__$1;
(statearr_34087_34103[(1)] = (5));

} else {
var statearr_34088_34104 = state_34081__$1;
(statearr_34088_34104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (6))){
var inst_34068 = (state_34081[(9)]);
var inst_34064 = (state_34081[(8)]);
var inst_34061 = (state_34081[(7)]);
var inst_34068__$1 = f.call(null,inst_34061,inst_34064);
var inst_34069 = cljs.core.reduced_QMARK_.call(null,inst_34068__$1);
var state_34081__$1 = (function (){var statearr_34089 = state_34081;
(statearr_34089[(9)] = inst_34068__$1);

return statearr_34089;
})();
if(inst_34069){
var statearr_34090_34105 = state_34081__$1;
(statearr_34090_34105[(1)] = (8));

} else {
var statearr_34091_34106 = state_34081__$1;
(statearr_34091_34106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34081__$1,(4),ch);
} else {
if((state_val_34082 === (9))){
var inst_34068 = (state_34081[(9)]);
var inst_34061 = inst_34068;
var state_34081__$1 = (function (){var statearr_34092 = state_34081;
(statearr_34092[(7)] = inst_34061);

return statearr_34092;
})();
var statearr_34093_34107 = state_34081__$1;
(statearr_34093_34107[(2)] = null);

(statearr_34093_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (5))){
var inst_34061 = (state_34081[(7)]);
var state_34081__$1 = state_34081;
var statearr_34094_34108 = state_34081__$1;
(statearr_34094_34108[(2)] = inst_34061);

(statearr_34094_34108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (10))){
var inst_34075 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34095_34109 = state_34081__$1;
(statearr_34095_34109[(2)] = inst_34075);

(statearr_34095_34109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (8))){
var inst_34068 = (state_34081[(9)]);
var inst_34071 = cljs.core.deref.call(null,inst_34068);
var state_34081__$1 = state_34081;
var statearr_34096_34110 = state_34081__$1;
(statearr_34096_34110[(2)] = inst_34071);

(statearr_34096_34110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31574__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31574__auto____0 = (function (){
var statearr_34097 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34097[(0)] = cljs$core$async$reduce_$_state_machine__31574__auto__);

(statearr_34097[(1)] = (1));

return statearr_34097;
});
var cljs$core$async$reduce_$_state_machine__31574__auto____1 = (function (state_34081){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34098){if((e34098 instanceof Object)){
var ex__31577__auto__ = e34098;
var statearr_34099_34111 = state_34081;
(statearr_34099_34111[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34112 = state_34081;
state_34081 = G__34112;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31574__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31574__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31574__auto____0;
cljs$core$async$reduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31574__auto____1;
return cljs$core$async$reduce_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__))
})();
var state__31732__auto__ = (function (){var statearr_34100 = f__31731__auto__.call(null);
(statearr_34100[(6)] = c__31730__auto__);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__))
);

return c__31730__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__,f__$1){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__,f__$1){
return (function (state_34118){
var state_val_34119 = (state_34118[(1)]);
if((state_val_34119 === (1))){
var inst_34113 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34118__$1,(2),inst_34113);
} else {
if((state_val_34119 === (2))){
var inst_34115 = (state_34118[(2)]);
var inst_34116 = f__$1.call(null,inst_34115);
var state_34118__$1 = state_34118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34118__$1,inst_34116);
} else {
return null;
}
}
});})(c__31730__auto__,f__$1))
;
return ((function (switch__31573__auto__,c__31730__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31574__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31574__auto____0 = (function (){
var statearr_34120 = [null,null,null,null,null,null,null];
(statearr_34120[(0)] = cljs$core$async$transduce_$_state_machine__31574__auto__);

(statearr_34120[(1)] = (1));

return statearr_34120;
});
var cljs$core$async$transduce_$_state_machine__31574__auto____1 = (function (state_34118){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34121){if((e34121 instanceof Object)){
var ex__31577__auto__ = e34121;
var statearr_34122_34124 = state_34118;
(statearr_34122_34124[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34125 = state_34118;
state_34118 = G__34125;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31574__auto__ = function(state_34118){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31574__auto____1.call(this,state_34118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31574__auto____0;
cljs$core$async$transduce_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31574__auto____1;
return cljs$core$async$transduce_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__,f__$1))
})();
var state__31732__auto__ = (function (){var statearr_34123 = f__31731__auto__.call(null);
(statearr_34123[(6)] = c__31730__auto__);

return statearr_34123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__,f__$1))
);

return c__31730__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34127 = arguments.length;
switch (G__34127) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__){
return (function (state_34152){
var state_val_34153 = (state_34152[(1)]);
if((state_val_34153 === (7))){
var inst_34134 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34154_34175 = state_34152__$1;
(statearr_34154_34175[(2)] = inst_34134);

(statearr_34154_34175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (1))){
var inst_34128 = cljs.core.seq.call(null,coll);
var inst_34129 = inst_34128;
var state_34152__$1 = (function (){var statearr_34155 = state_34152;
(statearr_34155[(7)] = inst_34129);

return statearr_34155;
})();
var statearr_34156_34176 = state_34152__$1;
(statearr_34156_34176[(2)] = null);

(statearr_34156_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (4))){
var inst_34129 = (state_34152[(7)]);
var inst_34132 = cljs.core.first.call(null,inst_34129);
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34152__$1,(7),ch,inst_34132);
} else {
if((state_val_34153 === (13))){
var inst_34146 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34157_34177 = state_34152__$1;
(statearr_34157_34177[(2)] = inst_34146);

(statearr_34157_34177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (6))){
var inst_34137 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
if(cljs.core.truth_(inst_34137)){
var statearr_34158_34178 = state_34152__$1;
(statearr_34158_34178[(1)] = (8));

} else {
var statearr_34159_34179 = state_34152__$1;
(statearr_34159_34179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (3))){
var inst_34150 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34152__$1,inst_34150);
} else {
if((state_val_34153 === (12))){
var state_34152__$1 = state_34152;
var statearr_34160_34180 = state_34152__$1;
(statearr_34160_34180[(2)] = null);

(statearr_34160_34180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (2))){
var inst_34129 = (state_34152[(7)]);
var state_34152__$1 = state_34152;
if(cljs.core.truth_(inst_34129)){
var statearr_34161_34181 = state_34152__$1;
(statearr_34161_34181[(1)] = (4));

} else {
var statearr_34162_34182 = state_34152__$1;
(statearr_34162_34182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (11))){
var inst_34143 = cljs.core.async.close_BANG_.call(null,ch);
var state_34152__$1 = state_34152;
var statearr_34163_34183 = state_34152__$1;
(statearr_34163_34183[(2)] = inst_34143);

(statearr_34163_34183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (9))){
var state_34152__$1 = state_34152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34164_34184 = state_34152__$1;
(statearr_34164_34184[(1)] = (11));

} else {
var statearr_34165_34185 = state_34152__$1;
(statearr_34165_34185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (5))){
var inst_34129 = (state_34152[(7)]);
var state_34152__$1 = state_34152;
var statearr_34166_34186 = state_34152__$1;
(statearr_34166_34186[(2)] = inst_34129);

(statearr_34166_34186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (10))){
var inst_34148 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34167_34187 = state_34152__$1;
(statearr_34167_34187[(2)] = inst_34148);

(statearr_34167_34187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (8))){
var inst_34129 = (state_34152[(7)]);
var inst_34139 = cljs.core.next.call(null,inst_34129);
var inst_34129__$1 = inst_34139;
var state_34152__$1 = (function (){var statearr_34168 = state_34152;
(statearr_34168[(7)] = inst_34129__$1);

return statearr_34168;
})();
var statearr_34169_34188 = state_34152__$1;
(statearr_34169_34188[(2)] = null);

(statearr_34169_34188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34170 = [null,null,null,null,null,null,null,null];
(statearr_34170[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34170[(1)] = (1));

return statearr_34170;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34152){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34171){if((e34171 instanceof Object)){
var ex__31577__auto__ = e34171;
var statearr_34172_34189 = state_34152;
(statearr_34172_34189[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34190 = state_34152;
state_34152 = G__34190;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__))
})();
var state__31732__auto__ = (function (){var statearr_34173 = f__31731__auto__.call(null);
(statearr_34173[(6)] = c__31730__auto__);

return statearr_34173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__))
);

return c__31730__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (ch,cs,meta34192){
this.ch = ch;
this.cs = cs;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.ch,self__.cs,meta34192__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191";

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34191");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34191.
 */
cljs.core.async.__GT_t_cljs$core$async34191 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34191(ch__$1,cs__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(ch__$1,cs__$1,meta34192));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31730__auto___34413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___34413,cs,m,dchan,dctr,done){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___34413,cs,m,dchan,dctr,done){
return (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34324 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34330_34414 = state_34328__$1;
(statearr_34330_34414[(2)] = inst_34324);

(statearr_34330_34414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (20))){
var inst_34227 = (state_34328[(7)]);
var inst_34239 = cljs.core.first.call(null,inst_34227);
var inst_34240 = cljs.core.nth.call(null,inst_34239,(0),null);
var inst_34241 = cljs.core.nth.call(null,inst_34239,(1),null);
var state_34328__$1 = (function (){var statearr_34331 = state_34328;
(statearr_34331[(8)] = inst_34240);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34241)){
var statearr_34332_34415 = state_34328__$1;
(statearr_34332_34415[(1)] = (22));

} else {
var statearr_34333_34416 = state_34328__$1;
(statearr_34333_34416[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (27))){
var inst_34196 = (state_34328[(9)]);
var inst_34269 = (state_34328[(10)]);
var inst_34271 = (state_34328[(11)]);
var inst_34276 = (state_34328[(12)]);
var inst_34276__$1 = cljs.core._nth.call(null,inst_34269,inst_34271);
var inst_34277 = cljs.core.async.put_BANG_.call(null,inst_34276__$1,inst_34196,done);
var state_34328__$1 = (function (){var statearr_34334 = state_34328;
(statearr_34334[(12)] = inst_34276__$1);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34277)){
var statearr_34335_34417 = state_34328__$1;
(statearr_34335_34417[(1)] = (30));

} else {
var statearr_34336_34418 = state_34328__$1;
(statearr_34336_34418[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var state_34328__$1 = state_34328;
var statearr_34337_34419 = state_34328__$1;
(statearr_34337_34419[(2)] = null);

(statearr_34337_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (24))){
var inst_34227 = (state_34328[(7)]);
var inst_34246 = (state_34328[(2)]);
var inst_34247 = cljs.core.next.call(null,inst_34227);
var inst_34205 = inst_34247;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34338 = state_34328;
(statearr_34338[(13)] = inst_34205);

(statearr_34338[(14)] = inst_34207);

(statearr_34338[(15)] = inst_34206);

(statearr_34338[(16)] = inst_34208);

(statearr_34338[(17)] = inst_34246);

return statearr_34338;
})();
var statearr_34339_34420 = state_34328__$1;
(statearr_34339_34420[(2)] = null);

(statearr_34339_34420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (39))){
var state_34328__$1 = state_34328;
var statearr_34343_34421 = state_34328__$1;
(statearr_34343_34421[(2)] = null);

(statearr_34343_34421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34196 = (state_34328[(9)]);
var inst_34196__$1 = (state_34328[(2)]);
var inst_34197 = (inst_34196__$1 == null);
var state_34328__$1 = (function (){var statearr_34344 = state_34328;
(statearr_34344[(9)] = inst_34196__$1);

return statearr_34344;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34345_34422 = state_34328__$1;
(statearr_34345_34422[(1)] = (5));

} else {
var statearr_34346_34423 = state_34328__$1;
(statearr_34346_34423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (15))){
var inst_34205 = (state_34328[(13)]);
var inst_34207 = (state_34328[(14)]);
var inst_34206 = (state_34328[(15)]);
var inst_34208 = (state_34328[(16)]);
var inst_34223 = (state_34328[(2)]);
var inst_34224 = (inst_34208 + (1));
var tmp34340 = inst_34205;
var tmp34341 = inst_34207;
var tmp34342 = inst_34206;
var inst_34205__$1 = tmp34340;
var inst_34206__$1 = tmp34342;
var inst_34207__$1 = tmp34341;
var inst_34208__$1 = inst_34224;
var state_34328__$1 = (function (){var statearr_34347 = state_34328;
(statearr_34347[(18)] = inst_34223);

(statearr_34347[(13)] = inst_34205__$1);

(statearr_34347[(14)] = inst_34207__$1);

(statearr_34347[(15)] = inst_34206__$1);

(statearr_34347[(16)] = inst_34208__$1);

return statearr_34347;
})();
var statearr_34348_34424 = state_34328__$1;
(statearr_34348_34424[(2)] = null);

(statearr_34348_34424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (21))){
var inst_34250 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34352_34425 = state_34328__$1;
(statearr_34352_34425[(2)] = inst_34250);

(statearr_34352_34425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (31))){
var inst_34276 = (state_34328[(12)]);
var inst_34280 = done.call(null,null);
var inst_34281 = cljs.core.async.untap_STAR_.call(null,m,inst_34276);
var state_34328__$1 = (function (){var statearr_34353 = state_34328;
(statearr_34353[(19)] = inst_34280);

return statearr_34353;
})();
var statearr_34354_34426 = state_34328__$1;
(statearr_34354_34426[(2)] = inst_34281);

(statearr_34354_34426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (32))){
var inst_34269 = (state_34328[(10)]);
var inst_34271 = (state_34328[(11)]);
var inst_34268 = (state_34328[(20)]);
var inst_34270 = (state_34328[(21)]);
var inst_34283 = (state_34328[(2)]);
var inst_34284 = (inst_34271 + (1));
var tmp34349 = inst_34269;
var tmp34350 = inst_34268;
var tmp34351 = inst_34270;
var inst_34268__$1 = tmp34350;
var inst_34269__$1 = tmp34349;
var inst_34270__$1 = tmp34351;
var inst_34271__$1 = inst_34284;
var state_34328__$1 = (function (){var statearr_34355 = state_34328;
(statearr_34355[(10)] = inst_34269__$1);

(statearr_34355[(11)] = inst_34271__$1);

(statearr_34355[(20)] = inst_34268__$1);

(statearr_34355[(21)] = inst_34270__$1);

(statearr_34355[(22)] = inst_34283);

return statearr_34355;
})();
var statearr_34356_34427 = state_34328__$1;
(statearr_34356_34427[(2)] = null);

(statearr_34356_34427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (40))){
var inst_34296 = (state_34328[(23)]);
var inst_34300 = done.call(null,null);
var inst_34301 = cljs.core.async.untap_STAR_.call(null,m,inst_34296);
var state_34328__$1 = (function (){var statearr_34357 = state_34328;
(statearr_34357[(24)] = inst_34300);

return statearr_34357;
})();
var statearr_34358_34428 = state_34328__$1;
(statearr_34358_34428[(2)] = inst_34301);

(statearr_34358_34428[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (33))){
var inst_34287 = (state_34328[(25)]);
var inst_34289 = cljs.core.chunked_seq_QMARK_.call(null,inst_34287);
var state_34328__$1 = state_34328;
if(inst_34289){
var statearr_34359_34429 = state_34328__$1;
(statearr_34359_34429[(1)] = (36));

} else {
var statearr_34360_34430 = state_34328__$1;
(statearr_34360_34430[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (13))){
var inst_34217 = (state_34328[(26)]);
var inst_34220 = cljs.core.async.close_BANG_.call(null,inst_34217);
var state_34328__$1 = state_34328;
var statearr_34361_34431 = state_34328__$1;
(statearr_34361_34431[(2)] = inst_34220);

(statearr_34361_34431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (22))){
var inst_34240 = (state_34328[(8)]);
var inst_34243 = cljs.core.async.close_BANG_.call(null,inst_34240);
var state_34328__$1 = state_34328;
var statearr_34362_34432 = state_34328__$1;
(statearr_34362_34432[(2)] = inst_34243);

(statearr_34362_34432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (36))){
var inst_34287 = (state_34328[(25)]);
var inst_34291 = cljs.core.chunk_first.call(null,inst_34287);
var inst_34292 = cljs.core.chunk_rest.call(null,inst_34287);
var inst_34293 = cljs.core.count.call(null,inst_34291);
var inst_34268 = inst_34292;
var inst_34269 = inst_34291;
var inst_34270 = inst_34293;
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34363 = state_34328;
(statearr_34363[(10)] = inst_34269);

(statearr_34363[(11)] = inst_34271);

(statearr_34363[(20)] = inst_34268);

(statearr_34363[(21)] = inst_34270);

return statearr_34363;
})();
var statearr_34364_34433 = state_34328__$1;
(statearr_34364_34433[(2)] = null);

(statearr_34364_34433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (41))){
var inst_34287 = (state_34328[(25)]);
var inst_34303 = (state_34328[(2)]);
var inst_34304 = cljs.core.next.call(null,inst_34287);
var inst_34268 = inst_34304;
var inst_34269 = null;
var inst_34270 = (0);
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34365 = state_34328;
(statearr_34365[(10)] = inst_34269);

(statearr_34365[(11)] = inst_34271);

(statearr_34365[(20)] = inst_34268);

(statearr_34365[(21)] = inst_34270);

(statearr_34365[(27)] = inst_34303);

return statearr_34365;
})();
var statearr_34366_34434 = state_34328__$1;
(statearr_34366_34434[(2)] = null);

(statearr_34366_34434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (43))){
var state_34328__$1 = state_34328;
var statearr_34367_34435 = state_34328__$1;
(statearr_34367_34435[(2)] = null);

(statearr_34367_34435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (29))){
var inst_34312 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34368_34436 = state_34328__$1;
(statearr_34368_34436[(2)] = inst_34312);

(statearr_34368_34436[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (44))){
var inst_34321 = (state_34328[(2)]);
var state_34328__$1 = (function (){var statearr_34369 = state_34328;
(statearr_34369[(28)] = inst_34321);

return statearr_34369;
})();
var statearr_34370_34437 = state_34328__$1;
(statearr_34370_34437[(2)] = null);

(statearr_34370_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34260 = (state_34328[(29)]);
var inst_34259 = cljs.core.deref.call(null,cs);
var inst_34260__$1 = cljs.core.keys.call(null,inst_34259);
var inst_34261 = cljs.core.count.call(null,inst_34260__$1);
var inst_34262 = cljs.core.reset_BANG_.call(null,dctr,inst_34261);
var inst_34267 = cljs.core.seq.call(null,inst_34260__$1);
var inst_34268 = inst_34267;
var inst_34269 = null;
var inst_34270 = (0);
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34371 = state_34328;
(statearr_34371[(10)] = inst_34269);

(statearr_34371[(11)] = inst_34271);

(statearr_34371[(20)] = inst_34268);

(statearr_34371[(21)] = inst_34270);

(statearr_34371[(30)] = inst_34262);

(statearr_34371[(29)] = inst_34260__$1);

return statearr_34371;
})();
var statearr_34372_34438 = state_34328__$1;
(statearr_34372_34438[(2)] = null);

(statearr_34372_34438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (28))){
var inst_34268 = (state_34328[(20)]);
var inst_34287 = (state_34328[(25)]);
var inst_34287__$1 = cljs.core.seq.call(null,inst_34268);
var state_34328__$1 = (function (){var statearr_34373 = state_34328;
(statearr_34373[(25)] = inst_34287__$1);

return statearr_34373;
})();
if(inst_34287__$1){
var statearr_34374_34439 = state_34328__$1;
(statearr_34374_34439[(1)] = (33));

} else {
var statearr_34375_34440 = state_34328__$1;
(statearr_34375_34440[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (25))){
var inst_34271 = (state_34328[(11)]);
var inst_34270 = (state_34328[(21)]);
var inst_34273 = (inst_34271 < inst_34270);
var inst_34274 = inst_34273;
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34274)){
var statearr_34376_34441 = state_34328__$1;
(statearr_34376_34441[(1)] = (27));

} else {
var statearr_34377_34442 = state_34328__$1;
(statearr_34377_34442[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (34))){
var state_34328__$1 = state_34328;
var statearr_34378_34443 = state_34328__$1;
(statearr_34378_34443[(2)] = null);

(statearr_34378_34443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (17))){
var state_34328__$1 = state_34328;
var statearr_34379_34444 = state_34328__$1;
(statearr_34379_34444[(2)] = null);

(statearr_34379_34444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34326 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34328__$1,inst_34326);
} else {
if((state_val_34329 === (12))){
var inst_34255 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34380_34445 = state_34328__$1;
(statearr_34380_34445[(2)] = inst_34255);

(statearr_34380_34445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34328__$1,(4),ch);
} else {
if((state_val_34329 === (23))){
var state_34328__$1 = state_34328;
var statearr_34381_34446 = state_34328__$1;
(statearr_34381_34446[(2)] = null);

(statearr_34381_34446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (35))){
var inst_34310 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34382_34447 = state_34328__$1;
(statearr_34382_34447[(2)] = inst_34310);

(statearr_34382_34447[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (19))){
var inst_34227 = (state_34328[(7)]);
var inst_34231 = cljs.core.chunk_first.call(null,inst_34227);
var inst_34232 = cljs.core.chunk_rest.call(null,inst_34227);
var inst_34233 = cljs.core.count.call(null,inst_34231);
var inst_34205 = inst_34232;
var inst_34206 = inst_34231;
var inst_34207 = inst_34233;
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34383 = state_34328;
(statearr_34383[(13)] = inst_34205);

(statearr_34383[(14)] = inst_34207);

(statearr_34383[(15)] = inst_34206);

(statearr_34383[(16)] = inst_34208);

return statearr_34383;
})();
var statearr_34384_34448 = state_34328__$1;
(statearr_34384_34448[(2)] = null);

(statearr_34384_34448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (11))){
var inst_34227 = (state_34328[(7)]);
var inst_34205 = (state_34328[(13)]);
var inst_34227__$1 = cljs.core.seq.call(null,inst_34205);
var state_34328__$1 = (function (){var statearr_34385 = state_34328;
(statearr_34385[(7)] = inst_34227__$1);

return statearr_34385;
})();
if(inst_34227__$1){
var statearr_34386_34449 = state_34328__$1;
(statearr_34386_34449[(1)] = (16));

} else {
var statearr_34387_34450 = state_34328__$1;
(statearr_34387_34450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (9))){
var inst_34257 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34388_34451 = state_34328__$1;
(statearr_34388_34451[(2)] = inst_34257);

(statearr_34388_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var inst_34203 = cljs.core.deref.call(null,cs);
var inst_34204 = cljs.core.seq.call(null,inst_34203);
var inst_34205 = inst_34204;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34389 = state_34328;
(statearr_34389[(13)] = inst_34205);

(statearr_34389[(14)] = inst_34207);

(statearr_34389[(15)] = inst_34206);

(statearr_34389[(16)] = inst_34208);

return statearr_34389;
})();
var statearr_34390_34452 = state_34328__$1;
(statearr_34390_34452[(2)] = null);

(statearr_34390_34452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (14))){
var state_34328__$1 = state_34328;
var statearr_34391_34453 = state_34328__$1;
(statearr_34391_34453[(2)] = null);

(statearr_34391_34453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (45))){
var inst_34318 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34392_34454 = state_34328__$1;
(statearr_34392_34454[(2)] = inst_34318);

(statearr_34392_34454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (26))){
var inst_34260 = (state_34328[(29)]);
var inst_34314 = (state_34328[(2)]);
var inst_34315 = cljs.core.seq.call(null,inst_34260);
var state_34328__$1 = (function (){var statearr_34393 = state_34328;
(statearr_34393[(31)] = inst_34314);

return statearr_34393;
})();
if(inst_34315){
var statearr_34394_34455 = state_34328__$1;
(statearr_34394_34455[(1)] = (42));

} else {
var statearr_34395_34456 = state_34328__$1;
(statearr_34395_34456[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (16))){
var inst_34227 = (state_34328[(7)]);
var inst_34229 = cljs.core.chunked_seq_QMARK_.call(null,inst_34227);
var state_34328__$1 = state_34328;
if(inst_34229){
var statearr_34396_34457 = state_34328__$1;
(statearr_34396_34457[(1)] = (19));

} else {
var statearr_34397_34458 = state_34328__$1;
(statearr_34397_34458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (38))){
var inst_34307 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34398_34459 = state_34328__$1;
(statearr_34398_34459[(2)] = inst_34307);

(statearr_34398_34459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (30))){
var state_34328__$1 = state_34328;
var statearr_34399_34460 = state_34328__$1;
(statearr_34399_34460[(2)] = null);

(statearr_34399_34460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34206 = (state_34328[(15)]);
var inst_34208 = (state_34328[(16)]);
var inst_34216 = cljs.core._nth.call(null,inst_34206,inst_34208);
var inst_34217 = cljs.core.nth.call(null,inst_34216,(0),null);
var inst_34218 = cljs.core.nth.call(null,inst_34216,(1),null);
var state_34328__$1 = (function (){var statearr_34400 = state_34328;
(statearr_34400[(26)] = inst_34217);

return statearr_34400;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34401_34461 = state_34328__$1;
(statearr_34401_34461[(1)] = (13));

} else {
var statearr_34402_34462 = state_34328__$1;
(statearr_34402_34462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (18))){
var inst_34253 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34403_34463 = state_34328__$1;
(statearr_34403_34463[(2)] = inst_34253);

(statearr_34403_34463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (42))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34328__$1,(45),dchan);
} else {
if((state_val_34329 === (37))){
var inst_34196 = (state_34328[(9)]);
var inst_34287 = (state_34328[(25)]);
var inst_34296 = (state_34328[(23)]);
var inst_34296__$1 = cljs.core.first.call(null,inst_34287);
var inst_34297 = cljs.core.async.put_BANG_.call(null,inst_34296__$1,inst_34196,done);
var state_34328__$1 = (function (){var statearr_34404 = state_34328;
(statearr_34404[(23)] = inst_34296__$1);

return statearr_34404;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34405_34464 = state_34328__$1;
(statearr_34405_34464[(1)] = (39));

} else {
var statearr_34406_34465 = state_34328__$1;
(statearr_34406_34465[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34207 = (state_34328[(14)]);
var inst_34208 = (state_34328[(16)]);
var inst_34210 = (inst_34208 < inst_34207);
var inst_34211 = inst_34210;
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34211)){
var statearr_34407_34466 = state_34328__$1;
(statearr_34407_34466[(1)] = (10));

} else {
var statearr_34408_34467 = state_34328__$1;
(statearr_34408_34467[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___34413,cs,m,dchan,dctr,done))
;
return ((function (switch__31573__auto__,c__31730__auto___34413,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31574__auto__ = null;
var cljs$core$async$mult_$_state_machine__31574__auto____0 = (function (){
var statearr_34409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34409[(0)] = cljs$core$async$mult_$_state_machine__31574__auto__);

(statearr_34409[(1)] = (1));

return statearr_34409;
});
var cljs$core$async$mult_$_state_machine__31574__auto____1 = (function (state_34328){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34410){if((e34410 instanceof Object)){
var ex__31577__auto__ = e34410;
var statearr_34411_34468 = state_34328;
(statearr_34411_34468[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_34328;
state_34328 = G__34469;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31574__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31574__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31574__auto____0;
cljs$core$async$mult_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31574__auto____1;
return cljs$core$async$mult_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___34413,cs,m,dchan,dctr,done))
})();
var state__31732__auto__ = (function (){var statearr_34412 = f__31731__auto__.call(null);
(statearr_34412[(6)] = c__31730__auto___34413);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___34413,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34471 = arguments.length;
switch (G__34471) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34483 = arguments.length;
var i__4500__auto___34484 = (0);
while(true){
if((i__4500__auto___34484 < len__4499__auto___34483)){
args__4502__auto__.push((arguments[i__4500__auto___34484]));

var G__34485 = (i__4500__auto___34484 + (1));
i__4500__auto___34484 = G__34485;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34477){
var map__34478 = p__34477;
var map__34478__$1 = ((((!((map__34478 == null)))?(((((map__34478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34478):map__34478);
var opts = map__34478__$1;
var statearr_34480_34486 = state;
(statearr_34480_34486[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34478,map__34478__$1,opts){
return (function (val){
var statearr_34481_34487 = state;
(statearr_34481_34487[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34478,map__34478__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34482_34488 = state;
(statearr_34482_34488[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34473){
var G__34474 = cljs.core.first.call(null,seq34473);
var seq34473__$1 = cljs.core.next.call(null,seq34473);
var G__34475 = cljs.core.first.call(null,seq34473__$1);
var seq34473__$2 = cljs.core.next.call(null,seq34473__$1);
var G__34476 = cljs.core.first.call(null,seq34473__$2);
var seq34473__$3 = cljs.core.next.call(null,seq34473__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34474,G__34475,G__34476,seq34473__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34489 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34490){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34490 = meta34490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34491,meta34490__$1){
var self__ = this;
var _34491__$1 = this;
return (new cljs.core.async.t_cljs$core$async34489(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34490__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34491){
var self__ = this;
var _34491__$1 = this;
return self__.meta34490;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34490","meta34490",837541776,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34489";

cljs.core.async.t_cljs$core$async34489.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34489");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34489.
 */
cljs.core.async.__GT_t_cljs$core$async34489 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34489(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34490){
return (new cljs.core.async.t_cljs$core$async34489(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34490));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34489(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31730__auto___34653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34593){
var state_val_34594 = (state_34593[(1)]);
if((state_val_34594 === (7))){
var inst_34508 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34595_34654 = state_34593__$1;
(statearr_34595_34654[(2)] = inst_34508);

(statearr_34595_34654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (20))){
var inst_34520 = (state_34593[(7)]);
var state_34593__$1 = state_34593;
var statearr_34596_34655 = state_34593__$1;
(statearr_34596_34655[(2)] = inst_34520);

(statearr_34596_34655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (27))){
var state_34593__$1 = state_34593;
var statearr_34597_34656 = state_34593__$1;
(statearr_34597_34656[(2)] = null);

(statearr_34597_34656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (1))){
var inst_34495 = (state_34593[(8)]);
var inst_34495__$1 = calc_state.call(null);
var inst_34497 = (inst_34495__$1 == null);
var inst_34498 = cljs.core.not.call(null,inst_34497);
var state_34593__$1 = (function (){var statearr_34598 = state_34593;
(statearr_34598[(8)] = inst_34495__$1);

return statearr_34598;
})();
if(inst_34498){
var statearr_34599_34657 = state_34593__$1;
(statearr_34599_34657[(1)] = (2));

} else {
var statearr_34600_34658 = state_34593__$1;
(statearr_34600_34658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (24))){
var inst_34567 = (state_34593[(9)]);
var inst_34544 = (state_34593[(10)]);
var inst_34553 = (state_34593[(11)]);
var inst_34567__$1 = inst_34544.call(null,inst_34553);
var state_34593__$1 = (function (){var statearr_34601 = state_34593;
(statearr_34601[(9)] = inst_34567__$1);

return statearr_34601;
})();
if(cljs.core.truth_(inst_34567__$1)){
var statearr_34602_34659 = state_34593__$1;
(statearr_34602_34659[(1)] = (29));

} else {
var statearr_34603_34660 = state_34593__$1;
(statearr_34603_34660[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (4))){
var inst_34511 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34511)){
var statearr_34604_34661 = state_34593__$1;
(statearr_34604_34661[(1)] = (8));

} else {
var statearr_34605_34662 = state_34593__$1;
(statearr_34605_34662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (15))){
var inst_34538 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34538)){
var statearr_34606_34663 = state_34593__$1;
(statearr_34606_34663[(1)] = (19));

} else {
var statearr_34607_34664 = state_34593__$1;
(statearr_34607_34664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (21))){
var inst_34543 = (state_34593[(12)]);
var inst_34543__$1 = (state_34593[(2)]);
var inst_34544 = cljs.core.get.call(null,inst_34543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34545 = cljs.core.get.call(null,inst_34543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34546 = cljs.core.get.call(null,inst_34543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34593__$1 = (function (){var statearr_34608 = state_34593;
(statearr_34608[(12)] = inst_34543__$1);

(statearr_34608[(10)] = inst_34544);

(statearr_34608[(13)] = inst_34545);

return statearr_34608;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34593__$1,(22),inst_34546);
} else {
if((state_val_34594 === (31))){
var inst_34575 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34575)){
var statearr_34609_34665 = state_34593__$1;
(statearr_34609_34665[(1)] = (32));

} else {
var statearr_34610_34666 = state_34593__$1;
(statearr_34610_34666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (32))){
var inst_34552 = (state_34593[(14)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34593__$1,(35),out,inst_34552);
} else {
if((state_val_34594 === (33))){
var inst_34543 = (state_34593[(12)]);
var inst_34520 = inst_34543;
var state_34593__$1 = (function (){var statearr_34611 = state_34593;
(statearr_34611[(7)] = inst_34520);

return statearr_34611;
})();
var statearr_34612_34667 = state_34593__$1;
(statearr_34612_34667[(2)] = null);

(statearr_34612_34667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (13))){
var inst_34520 = (state_34593[(7)]);
var inst_34527 = inst_34520.cljs$lang$protocol_mask$partition0$;
var inst_34528 = (inst_34527 & (64));
var inst_34529 = inst_34520.cljs$core$ISeq$;
var inst_34530 = (cljs.core.PROTOCOL_SENTINEL === inst_34529);
var inst_34531 = ((inst_34528) || (inst_34530));
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34531)){
var statearr_34613_34668 = state_34593__$1;
(statearr_34613_34668[(1)] = (16));

} else {
var statearr_34614_34669 = state_34593__$1;
(statearr_34614_34669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (22))){
var inst_34552 = (state_34593[(14)]);
var inst_34553 = (state_34593[(11)]);
var inst_34551 = (state_34593[(2)]);
var inst_34552__$1 = cljs.core.nth.call(null,inst_34551,(0),null);
var inst_34553__$1 = cljs.core.nth.call(null,inst_34551,(1),null);
var inst_34554 = (inst_34552__$1 == null);
var inst_34555 = cljs.core._EQ_.call(null,inst_34553__$1,change);
var inst_34556 = ((inst_34554) || (inst_34555));
var state_34593__$1 = (function (){var statearr_34615 = state_34593;
(statearr_34615[(14)] = inst_34552__$1);

(statearr_34615[(11)] = inst_34553__$1);

return statearr_34615;
})();
if(cljs.core.truth_(inst_34556)){
var statearr_34616_34670 = state_34593__$1;
(statearr_34616_34670[(1)] = (23));

} else {
var statearr_34617_34671 = state_34593__$1;
(statearr_34617_34671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (36))){
var inst_34543 = (state_34593[(12)]);
var inst_34520 = inst_34543;
var state_34593__$1 = (function (){var statearr_34618 = state_34593;
(statearr_34618[(7)] = inst_34520);

return statearr_34618;
})();
var statearr_34619_34672 = state_34593__$1;
(statearr_34619_34672[(2)] = null);

(statearr_34619_34672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (29))){
var inst_34567 = (state_34593[(9)]);
var state_34593__$1 = state_34593;
var statearr_34620_34673 = state_34593__$1;
(statearr_34620_34673[(2)] = inst_34567);

(statearr_34620_34673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (6))){
var state_34593__$1 = state_34593;
var statearr_34621_34674 = state_34593__$1;
(statearr_34621_34674[(2)] = false);

(statearr_34621_34674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (28))){
var inst_34563 = (state_34593[(2)]);
var inst_34564 = calc_state.call(null);
var inst_34520 = inst_34564;
var state_34593__$1 = (function (){var statearr_34622 = state_34593;
(statearr_34622[(7)] = inst_34520);

(statearr_34622[(15)] = inst_34563);

return statearr_34622;
})();
var statearr_34623_34675 = state_34593__$1;
(statearr_34623_34675[(2)] = null);

(statearr_34623_34675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (25))){
var inst_34589 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34624_34676 = state_34593__$1;
(statearr_34624_34676[(2)] = inst_34589);

(statearr_34624_34676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (34))){
var inst_34587 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34625_34677 = state_34593__$1;
(statearr_34625_34677[(2)] = inst_34587);

(statearr_34625_34677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (17))){
var state_34593__$1 = state_34593;
var statearr_34626_34678 = state_34593__$1;
(statearr_34626_34678[(2)] = false);

(statearr_34626_34678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (3))){
var state_34593__$1 = state_34593;
var statearr_34627_34679 = state_34593__$1;
(statearr_34627_34679[(2)] = false);

(statearr_34627_34679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (12))){
var inst_34591 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34593__$1,inst_34591);
} else {
if((state_val_34594 === (2))){
var inst_34495 = (state_34593[(8)]);
var inst_34500 = inst_34495.cljs$lang$protocol_mask$partition0$;
var inst_34501 = (inst_34500 & (64));
var inst_34502 = inst_34495.cljs$core$ISeq$;
var inst_34503 = (cljs.core.PROTOCOL_SENTINEL === inst_34502);
var inst_34504 = ((inst_34501) || (inst_34503));
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34504)){
var statearr_34628_34680 = state_34593__$1;
(statearr_34628_34680[(1)] = (5));

} else {
var statearr_34629_34681 = state_34593__$1;
(statearr_34629_34681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (23))){
var inst_34552 = (state_34593[(14)]);
var inst_34558 = (inst_34552 == null);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34558)){
var statearr_34630_34682 = state_34593__$1;
(statearr_34630_34682[(1)] = (26));

} else {
var statearr_34631_34683 = state_34593__$1;
(statearr_34631_34683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (35))){
var inst_34578 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34578)){
var statearr_34632_34684 = state_34593__$1;
(statearr_34632_34684[(1)] = (36));

} else {
var statearr_34633_34685 = state_34593__$1;
(statearr_34633_34685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (19))){
var inst_34520 = (state_34593[(7)]);
var inst_34540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34520);
var state_34593__$1 = state_34593;
var statearr_34634_34686 = state_34593__$1;
(statearr_34634_34686[(2)] = inst_34540);

(statearr_34634_34686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (11))){
var inst_34520 = (state_34593[(7)]);
var inst_34524 = (inst_34520 == null);
var inst_34525 = cljs.core.not.call(null,inst_34524);
var state_34593__$1 = state_34593;
if(inst_34525){
var statearr_34635_34687 = state_34593__$1;
(statearr_34635_34687[(1)] = (13));

} else {
var statearr_34636_34688 = state_34593__$1;
(statearr_34636_34688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (9))){
var inst_34495 = (state_34593[(8)]);
var state_34593__$1 = state_34593;
var statearr_34637_34689 = state_34593__$1;
(statearr_34637_34689[(2)] = inst_34495);

(statearr_34637_34689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (5))){
var state_34593__$1 = state_34593;
var statearr_34638_34690 = state_34593__$1;
(statearr_34638_34690[(2)] = true);

(statearr_34638_34690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (14))){
var state_34593__$1 = state_34593;
var statearr_34639_34691 = state_34593__$1;
(statearr_34639_34691[(2)] = false);

(statearr_34639_34691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (26))){
var inst_34553 = (state_34593[(11)]);
var inst_34560 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34553);
var state_34593__$1 = state_34593;
var statearr_34640_34692 = state_34593__$1;
(statearr_34640_34692[(2)] = inst_34560);

(statearr_34640_34692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (16))){
var state_34593__$1 = state_34593;
var statearr_34641_34693 = state_34593__$1;
(statearr_34641_34693[(2)] = true);

(statearr_34641_34693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (38))){
var inst_34583 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34642_34694 = state_34593__$1;
(statearr_34642_34694[(2)] = inst_34583);

(statearr_34642_34694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (30))){
var inst_34544 = (state_34593[(10)]);
var inst_34553 = (state_34593[(11)]);
var inst_34545 = (state_34593[(13)]);
var inst_34570 = cljs.core.empty_QMARK_.call(null,inst_34544);
var inst_34571 = inst_34545.call(null,inst_34553);
var inst_34572 = cljs.core.not.call(null,inst_34571);
var inst_34573 = ((inst_34570) && (inst_34572));
var state_34593__$1 = state_34593;
var statearr_34643_34695 = state_34593__$1;
(statearr_34643_34695[(2)] = inst_34573);

(statearr_34643_34695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (10))){
var inst_34495 = (state_34593[(8)]);
var inst_34516 = (state_34593[(2)]);
var inst_34517 = cljs.core.get.call(null,inst_34516,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34518 = cljs.core.get.call(null,inst_34516,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34519 = cljs.core.get.call(null,inst_34516,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34520 = inst_34495;
var state_34593__$1 = (function (){var statearr_34644 = state_34593;
(statearr_34644[(7)] = inst_34520);

(statearr_34644[(16)] = inst_34517);

(statearr_34644[(17)] = inst_34518);

(statearr_34644[(18)] = inst_34519);

return statearr_34644;
})();
var statearr_34645_34696 = state_34593__$1;
(statearr_34645_34696[(2)] = null);

(statearr_34645_34696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (18))){
var inst_34535 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34646_34697 = state_34593__$1;
(statearr_34646_34697[(2)] = inst_34535);

(statearr_34646_34697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (37))){
var state_34593__$1 = state_34593;
var statearr_34647_34698 = state_34593__$1;
(statearr_34647_34698[(2)] = null);

(statearr_34647_34698[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (8))){
var inst_34495 = (state_34593[(8)]);
var inst_34513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34495);
var state_34593__$1 = state_34593;
var statearr_34648_34699 = state_34593__$1;
(statearr_34648_34699[(2)] = inst_34513);

(statearr_34648_34699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31573__auto__,c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31574__auto__ = null;
var cljs$core$async$mix_$_state_machine__31574__auto____0 = (function (){
var statearr_34649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34649[(0)] = cljs$core$async$mix_$_state_machine__31574__auto__);

(statearr_34649[(1)] = (1));

return statearr_34649;
});
var cljs$core$async$mix_$_state_machine__31574__auto____1 = (function (state_34593){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34650){if((e34650 instanceof Object)){
var ex__31577__auto__ = e34650;
var statearr_34651_34700 = state_34593;
(statearr_34651_34700[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34701 = state_34593;
state_34593 = G__34701;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31574__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31574__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31574__auto____0;
cljs$core$async$mix_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31574__auto____1;
return cljs$core$async$mix_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31732__auto__ = (function (){var statearr_34652 = f__31731__auto__.call(null);
(statearr_34652[(6)] = c__31730__auto___34653);

return statearr_34652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___34653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34703 = arguments.length;
switch (G__34703) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34707 = arguments.length;
switch (G__34707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__34705_SHARP_){
if(cljs.core.truth_(p1__34705_SHARP_.call(null,topic))){
return p1__34705_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34705_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34709 = meta34709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34710,meta34709__$1){
var self__ = this;
var _34710__$1 = this;
return (new cljs.core.async.t_cljs$core$async34708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34709__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34710){
var self__ = this;
var _34710__$1 = this;
return self__.meta34709;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34709","meta34709",496048637,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34708";

cljs.core.async.t_cljs$core$async34708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34708");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34708.
 */
cljs.core.async.__GT_t_cljs$core$async34708 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34709){
return (new cljs.core.async.t_cljs$core$async34708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34709));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31730__auto___34828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___34828,mults,ensure_mult,p){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___34828,mults,ensure_mult,p){
return (function (state_34782){
var state_val_34783 = (state_34782[(1)]);
if((state_val_34783 === (7))){
var inst_34778 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34784_34829 = state_34782__$1;
(statearr_34784_34829[(2)] = inst_34778);

(statearr_34784_34829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (20))){
var state_34782__$1 = state_34782;
var statearr_34785_34830 = state_34782__$1;
(statearr_34785_34830[(2)] = null);

(statearr_34785_34830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (1))){
var state_34782__$1 = state_34782;
var statearr_34786_34831 = state_34782__$1;
(statearr_34786_34831[(2)] = null);

(statearr_34786_34831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (24))){
var inst_34761 = (state_34782[(7)]);
var inst_34770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34761);
var state_34782__$1 = state_34782;
var statearr_34787_34832 = state_34782__$1;
(statearr_34787_34832[(2)] = inst_34770);

(statearr_34787_34832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (4))){
var inst_34713 = (state_34782[(8)]);
var inst_34713__$1 = (state_34782[(2)]);
var inst_34714 = (inst_34713__$1 == null);
var state_34782__$1 = (function (){var statearr_34788 = state_34782;
(statearr_34788[(8)] = inst_34713__$1);

return statearr_34788;
})();
if(cljs.core.truth_(inst_34714)){
var statearr_34789_34833 = state_34782__$1;
(statearr_34789_34833[(1)] = (5));

} else {
var statearr_34790_34834 = state_34782__$1;
(statearr_34790_34834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (15))){
var inst_34755 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34791_34835 = state_34782__$1;
(statearr_34791_34835[(2)] = inst_34755);

(statearr_34791_34835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (21))){
var inst_34775 = (state_34782[(2)]);
var state_34782__$1 = (function (){var statearr_34792 = state_34782;
(statearr_34792[(9)] = inst_34775);

return statearr_34792;
})();
var statearr_34793_34836 = state_34782__$1;
(statearr_34793_34836[(2)] = null);

(statearr_34793_34836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (13))){
var inst_34737 = (state_34782[(10)]);
var inst_34739 = cljs.core.chunked_seq_QMARK_.call(null,inst_34737);
var state_34782__$1 = state_34782;
if(inst_34739){
var statearr_34794_34837 = state_34782__$1;
(statearr_34794_34837[(1)] = (16));

} else {
var statearr_34795_34838 = state_34782__$1;
(statearr_34795_34838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (22))){
var inst_34767 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34767)){
var statearr_34796_34839 = state_34782__$1;
(statearr_34796_34839[(1)] = (23));

} else {
var statearr_34797_34840 = state_34782__$1;
(statearr_34797_34840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (6))){
var inst_34713 = (state_34782[(8)]);
var inst_34761 = (state_34782[(7)]);
var inst_34763 = (state_34782[(11)]);
var inst_34761__$1 = topic_fn.call(null,inst_34713);
var inst_34762 = cljs.core.deref.call(null,mults);
var inst_34763__$1 = cljs.core.get.call(null,inst_34762,inst_34761__$1);
var state_34782__$1 = (function (){var statearr_34798 = state_34782;
(statearr_34798[(7)] = inst_34761__$1);

(statearr_34798[(11)] = inst_34763__$1);

return statearr_34798;
})();
if(cljs.core.truth_(inst_34763__$1)){
var statearr_34799_34841 = state_34782__$1;
(statearr_34799_34841[(1)] = (19));

} else {
var statearr_34800_34842 = state_34782__$1;
(statearr_34800_34842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (25))){
var inst_34772 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34801_34843 = state_34782__$1;
(statearr_34801_34843[(2)] = inst_34772);

(statearr_34801_34843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (17))){
var inst_34737 = (state_34782[(10)]);
var inst_34746 = cljs.core.first.call(null,inst_34737);
var inst_34747 = cljs.core.async.muxch_STAR_.call(null,inst_34746);
var inst_34748 = cljs.core.async.close_BANG_.call(null,inst_34747);
var inst_34749 = cljs.core.next.call(null,inst_34737);
var inst_34723 = inst_34749;
var inst_34724 = null;
var inst_34725 = (0);
var inst_34726 = (0);
var state_34782__$1 = (function (){var statearr_34802 = state_34782;
(statearr_34802[(12)] = inst_34725);

(statearr_34802[(13)] = inst_34724);

(statearr_34802[(14)] = inst_34726);

(statearr_34802[(15)] = inst_34748);

(statearr_34802[(16)] = inst_34723);

return statearr_34802;
})();
var statearr_34803_34844 = state_34782__$1;
(statearr_34803_34844[(2)] = null);

(statearr_34803_34844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (3))){
var inst_34780 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34782__$1,inst_34780);
} else {
if((state_val_34783 === (12))){
var inst_34757 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34804_34845 = state_34782__$1;
(statearr_34804_34845[(2)] = inst_34757);

(statearr_34804_34845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (2))){
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34782__$1,(4),ch);
} else {
if((state_val_34783 === (23))){
var state_34782__$1 = state_34782;
var statearr_34805_34846 = state_34782__$1;
(statearr_34805_34846[(2)] = null);

(statearr_34805_34846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (19))){
var inst_34713 = (state_34782[(8)]);
var inst_34763 = (state_34782[(11)]);
var inst_34765 = cljs.core.async.muxch_STAR_.call(null,inst_34763);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34782__$1,(22),inst_34765,inst_34713);
} else {
if((state_val_34783 === (11))){
var inst_34737 = (state_34782[(10)]);
var inst_34723 = (state_34782[(16)]);
var inst_34737__$1 = cljs.core.seq.call(null,inst_34723);
var state_34782__$1 = (function (){var statearr_34806 = state_34782;
(statearr_34806[(10)] = inst_34737__$1);

return statearr_34806;
})();
if(inst_34737__$1){
var statearr_34807_34847 = state_34782__$1;
(statearr_34807_34847[(1)] = (13));

} else {
var statearr_34808_34848 = state_34782__$1;
(statearr_34808_34848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (9))){
var inst_34759 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34809_34849 = state_34782__$1;
(statearr_34809_34849[(2)] = inst_34759);

(statearr_34809_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (5))){
var inst_34720 = cljs.core.deref.call(null,mults);
var inst_34721 = cljs.core.vals.call(null,inst_34720);
var inst_34722 = cljs.core.seq.call(null,inst_34721);
var inst_34723 = inst_34722;
var inst_34724 = null;
var inst_34725 = (0);
var inst_34726 = (0);
var state_34782__$1 = (function (){var statearr_34810 = state_34782;
(statearr_34810[(12)] = inst_34725);

(statearr_34810[(13)] = inst_34724);

(statearr_34810[(14)] = inst_34726);

(statearr_34810[(16)] = inst_34723);

return statearr_34810;
})();
var statearr_34811_34850 = state_34782__$1;
(statearr_34811_34850[(2)] = null);

(statearr_34811_34850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (14))){
var state_34782__$1 = state_34782;
var statearr_34815_34851 = state_34782__$1;
(statearr_34815_34851[(2)] = null);

(statearr_34815_34851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (16))){
var inst_34737 = (state_34782[(10)]);
var inst_34741 = cljs.core.chunk_first.call(null,inst_34737);
var inst_34742 = cljs.core.chunk_rest.call(null,inst_34737);
var inst_34743 = cljs.core.count.call(null,inst_34741);
var inst_34723 = inst_34742;
var inst_34724 = inst_34741;
var inst_34725 = inst_34743;
var inst_34726 = (0);
var state_34782__$1 = (function (){var statearr_34816 = state_34782;
(statearr_34816[(12)] = inst_34725);

(statearr_34816[(13)] = inst_34724);

(statearr_34816[(14)] = inst_34726);

(statearr_34816[(16)] = inst_34723);

return statearr_34816;
})();
var statearr_34817_34852 = state_34782__$1;
(statearr_34817_34852[(2)] = null);

(statearr_34817_34852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (10))){
var inst_34725 = (state_34782[(12)]);
var inst_34724 = (state_34782[(13)]);
var inst_34726 = (state_34782[(14)]);
var inst_34723 = (state_34782[(16)]);
var inst_34731 = cljs.core._nth.call(null,inst_34724,inst_34726);
var inst_34732 = cljs.core.async.muxch_STAR_.call(null,inst_34731);
var inst_34733 = cljs.core.async.close_BANG_.call(null,inst_34732);
var inst_34734 = (inst_34726 + (1));
var tmp34812 = inst_34725;
var tmp34813 = inst_34724;
var tmp34814 = inst_34723;
var inst_34723__$1 = tmp34814;
var inst_34724__$1 = tmp34813;
var inst_34725__$1 = tmp34812;
var inst_34726__$1 = inst_34734;
var state_34782__$1 = (function (){var statearr_34818 = state_34782;
(statearr_34818[(12)] = inst_34725__$1);

(statearr_34818[(13)] = inst_34724__$1);

(statearr_34818[(14)] = inst_34726__$1);

(statearr_34818[(17)] = inst_34733);

(statearr_34818[(16)] = inst_34723__$1);

return statearr_34818;
})();
var statearr_34819_34853 = state_34782__$1;
(statearr_34819_34853[(2)] = null);

(statearr_34819_34853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (18))){
var inst_34752 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34820_34854 = state_34782__$1;
(statearr_34820_34854[(2)] = inst_34752);

(statearr_34820_34854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (8))){
var inst_34725 = (state_34782[(12)]);
var inst_34726 = (state_34782[(14)]);
var inst_34728 = (inst_34726 < inst_34725);
var inst_34729 = inst_34728;
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34729)){
var statearr_34821_34855 = state_34782__$1;
(statearr_34821_34855[(1)] = (10));

} else {
var statearr_34822_34856 = state_34782__$1;
(statearr_34822_34856[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___34828,mults,ensure_mult,p))
;
return ((function (switch__31573__auto__,c__31730__auto___34828,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34823[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34823[(1)] = (1));

return statearr_34823;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34782){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34824){if((e34824 instanceof Object)){
var ex__31577__auto__ = e34824;
var statearr_34825_34857 = state_34782;
(statearr_34825_34857[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34858 = state_34782;
state_34782 = G__34858;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___34828,mults,ensure_mult,p))
})();
var state__31732__auto__ = (function (){var statearr_34826 = f__31731__auto__.call(null);
(statearr_34826[(6)] = c__31730__auto___34828);

return statearr_34826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___34828,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34860 = arguments.length;
switch (G__34860) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34863 = arguments.length;
switch (G__34863) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34866 = arguments.length;
switch (G__34866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31730__auto___34933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34905){
var state_val_34906 = (state_34905[(1)]);
if((state_val_34906 === (7))){
var state_34905__$1 = state_34905;
var statearr_34907_34934 = state_34905__$1;
(statearr_34907_34934[(2)] = null);

(statearr_34907_34934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (1))){
var state_34905__$1 = state_34905;
var statearr_34908_34935 = state_34905__$1;
(statearr_34908_34935[(2)] = null);

(statearr_34908_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (4))){
var inst_34869 = (state_34905[(7)]);
var inst_34871 = (inst_34869 < cnt);
var state_34905__$1 = state_34905;
if(cljs.core.truth_(inst_34871)){
var statearr_34909_34936 = state_34905__$1;
(statearr_34909_34936[(1)] = (6));

} else {
var statearr_34910_34937 = state_34905__$1;
(statearr_34910_34937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (15))){
var inst_34901 = (state_34905[(2)]);
var state_34905__$1 = state_34905;
var statearr_34911_34938 = state_34905__$1;
(statearr_34911_34938[(2)] = inst_34901);

(statearr_34911_34938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (13))){
var inst_34894 = cljs.core.async.close_BANG_.call(null,out);
var state_34905__$1 = state_34905;
var statearr_34912_34939 = state_34905__$1;
(statearr_34912_34939[(2)] = inst_34894);

(statearr_34912_34939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (6))){
var state_34905__$1 = state_34905;
var statearr_34913_34940 = state_34905__$1;
(statearr_34913_34940[(2)] = null);

(statearr_34913_34940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (3))){
var inst_34903 = (state_34905[(2)]);
var state_34905__$1 = state_34905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34905__$1,inst_34903);
} else {
if((state_val_34906 === (12))){
var inst_34891 = (state_34905[(8)]);
var inst_34891__$1 = (state_34905[(2)]);
var inst_34892 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34891__$1);
var state_34905__$1 = (function (){var statearr_34914 = state_34905;
(statearr_34914[(8)] = inst_34891__$1);

return statearr_34914;
})();
if(cljs.core.truth_(inst_34892)){
var statearr_34915_34941 = state_34905__$1;
(statearr_34915_34941[(1)] = (13));

} else {
var statearr_34916_34942 = state_34905__$1;
(statearr_34916_34942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (2))){
var inst_34868 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34869 = (0);
var state_34905__$1 = (function (){var statearr_34917 = state_34905;
(statearr_34917[(7)] = inst_34869);

(statearr_34917[(9)] = inst_34868);

return statearr_34917;
})();
var statearr_34918_34943 = state_34905__$1;
(statearr_34918_34943[(2)] = null);

(statearr_34918_34943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (11))){
var inst_34869 = (state_34905[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34905,(10),Object,null,(9));
var inst_34878 = chs__$1.call(null,inst_34869);
var inst_34879 = done.call(null,inst_34869);
var inst_34880 = cljs.core.async.take_BANG_.call(null,inst_34878,inst_34879);
var state_34905__$1 = state_34905;
var statearr_34919_34944 = state_34905__$1;
(statearr_34919_34944[(2)] = inst_34880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (9))){
var inst_34869 = (state_34905[(7)]);
var inst_34882 = (state_34905[(2)]);
var inst_34883 = (inst_34869 + (1));
var inst_34869__$1 = inst_34883;
var state_34905__$1 = (function (){var statearr_34920 = state_34905;
(statearr_34920[(7)] = inst_34869__$1);

(statearr_34920[(10)] = inst_34882);

return statearr_34920;
})();
var statearr_34921_34945 = state_34905__$1;
(statearr_34921_34945[(2)] = null);

(statearr_34921_34945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (5))){
var inst_34889 = (state_34905[(2)]);
var state_34905__$1 = (function (){var statearr_34922 = state_34905;
(statearr_34922[(11)] = inst_34889);

return statearr_34922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34905__$1,(12),dchan);
} else {
if((state_val_34906 === (14))){
var inst_34891 = (state_34905[(8)]);
var inst_34896 = cljs.core.apply.call(null,f,inst_34891);
var state_34905__$1 = state_34905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34905__$1,(16),out,inst_34896);
} else {
if((state_val_34906 === (16))){
var inst_34898 = (state_34905[(2)]);
var state_34905__$1 = (function (){var statearr_34923 = state_34905;
(statearr_34923[(12)] = inst_34898);

return statearr_34923;
})();
var statearr_34924_34946 = state_34905__$1;
(statearr_34924_34946[(2)] = null);

(statearr_34924_34946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (10))){
var inst_34873 = (state_34905[(2)]);
var inst_34874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34905__$1 = (function (){var statearr_34925 = state_34905;
(statearr_34925[(13)] = inst_34873);

return statearr_34925;
})();
var statearr_34926_34947 = state_34905__$1;
(statearr_34926_34947[(2)] = inst_34874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (8))){
var inst_34887 = (state_34905[(2)]);
var state_34905__$1 = state_34905;
var statearr_34927_34948 = state_34905__$1;
(statearr_34927_34948[(2)] = inst_34887);

(statearr_34927_34948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31573__auto__,c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_34928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34928[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_34928[(1)] = (1));

return statearr_34928;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34905){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e34929){if((e34929 instanceof Object)){
var ex__31577__auto__ = e34929;
var statearr_34930_34949 = state_34905;
(statearr_34930_34949[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_34905;
state_34905 = G__34950;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31732__auto__ = (function (){var statearr_34931 = f__31731__auto__.call(null);
(statearr_34931[(6)] = c__31730__auto___34933);

return statearr_34931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___34933,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34953 = arguments.length;
switch (G__34953) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35007,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35007,out){
return (function (state_34985){
var state_val_34986 = (state_34985[(1)]);
if((state_val_34986 === (7))){
var inst_34964 = (state_34985[(7)]);
var inst_34965 = (state_34985[(8)]);
var inst_34964__$1 = (state_34985[(2)]);
var inst_34965__$1 = cljs.core.nth.call(null,inst_34964__$1,(0),null);
var inst_34966 = cljs.core.nth.call(null,inst_34964__$1,(1),null);
var inst_34967 = (inst_34965__$1 == null);
var state_34985__$1 = (function (){var statearr_34987 = state_34985;
(statearr_34987[(7)] = inst_34964__$1);

(statearr_34987[(8)] = inst_34965__$1);

(statearr_34987[(9)] = inst_34966);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34967)){
var statearr_34988_35008 = state_34985__$1;
(statearr_34988_35008[(1)] = (8));

} else {
var statearr_34989_35009 = state_34985__$1;
(statearr_34989_35009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (1))){
var inst_34954 = cljs.core.vec.call(null,chs);
var inst_34955 = inst_34954;
var state_34985__$1 = (function (){var statearr_34990 = state_34985;
(statearr_34990[(10)] = inst_34955);

return statearr_34990;
})();
var statearr_34991_35010 = state_34985__$1;
(statearr_34991_35010[(2)] = null);

(statearr_34991_35010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (4))){
var inst_34955 = (state_34985[(10)]);
var state_34985__$1 = state_34985;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34985__$1,(7),inst_34955);
} else {
if((state_val_34986 === (6))){
var inst_34981 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_34992_35011 = state_34985__$1;
(statearr_34992_35011[(2)] = inst_34981);

(statearr_34992_35011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (3))){
var inst_34983 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34985__$1,inst_34983);
} else {
if((state_val_34986 === (2))){
var inst_34955 = (state_34985[(10)]);
var inst_34957 = cljs.core.count.call(null,inst_34955);
var inst_34958 = (inst_34957 > (0));
var state_34985__$1 = state_34985;
if(cljs.core.truth_(inst_34958)){
var statearr_34994_35012 = state_34985__$1;
(statearr_34994_35012[(1)] = (4));

} else {
var statearr_34995_35013 = state_34985__$1;
(statearr_34995_35013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (11))){
var inst_34955 = (state_34985[(10)]);
var inst_34974 = (state_34985[(2)]);
var tmp34993 = inst_34955;
var inst_34955__$1 = tmp34993;
var state_34985__$1 = (function (){var statearr_34996 = state_34985;
(statearr_34996[(10)] = inst_34955__$1);

(statearr_34996[(11)] = inst_34974);

return statearr_34996;
})();
var statearr_34997_35014 = state_34985__$1;
(statearr_34997_35014[(2)] = null);

(statearr_34997_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (9))){
var inst_34965 = (state_34985[(8)]);
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34985__$1,(11),out,inst_34965);
} else {
if((state_val_34986 === (5))){
var inst_34979 = cljs.core.async.close_BANG_.call(null,out);
var state_34985__$1 = state_34985;
var statearr_34998_35015 = state_34985__$1;
(statearr_34998_35015[(2)] = inst_34979);

(statearr_34998_35015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (10))){
var inst_34977 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_34999_35016 = state_34985__$1;
(statearr_34999_35016[(2)] = inst_34977);

(statearr_34999_35016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (8))){
var inst_34964 = (state_34985[(7)]);
var inst_34955 = (state_34985[(10)]);
var inst_34965 = (state_34985[(8)]);
var inst_34966 = (state_34985[(9)]);
var inst_34969 = (function (){var cs = inst_34955;
var vec__34960 = inst_34964;
var v = inst_34965;
var c = inst_34966;
return ((function (cs,vec__34960,v,c,inst_34964,inst_34955,inst_34965,inst_34966,state_val_34986,c__31730__auto___35007,out){
return (function (p1__34951_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34951_SHARP_);
});
;})(cs,vec__34960,v,c,inst_34964,inst_34955,inst_34965,inst_34966,state_val_34986,c__31730__auto___35007,out))
})();
var inst_34970 = cljs.core.filterv.call(null,inst_34969,inst_34955);
var inst_34955__$1 = inst_34970;
var state_34985__$1 = (function (){var statearr_35000 = state_34985;
(statearr_35000[(10)] = inst_34955__$1);

return statearr_35000;
})();
var statearr_35001_35017 = state_34985__$1;
(statearr_35001_35017[(2)] = null);

(statearr_35001_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35007,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35007,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35002[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35002[(1)] = (1));

return statearr_35002;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_34985){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_34985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35003){if((e35003 instanceof Object)){
var ex__31577__auto__ = e35003;
var statearr_35004_35018 = state_34985;
(statearr_35004_35018[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_34985;
state_34985 = G__35019;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_34985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_34985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35007,out))
})();
var state__31732__auto__ = (function (){var statearr_35005 = f__31731__auto__.call(null);
(statearr_35005[(6)] = c__31730__auto___35007);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35007,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35021 = arguments.length;
switch (G__35021) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35066,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35066,out){
return (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var inst_35027 = (state_35045[(7)]);
var inst_35027__$1 = (state_35045[(2)]);
var inst_35028 = (inst_35027__$1 == null);
var inst_35029 = cljs.core.not.call(null,inst_35028);
var state_35045__$1 = (function (){var statearr_35047 = state_35045;
(statearr_35047[(7)] = inst_35027__$1);

return statearr_35047;
})();
if(inst_35029){
var statearr_35048_35067 = state_35045__$1;
(statearr_35048_35067[(1)] = (8));

} else {
var statearr_35049_35068 = state_35045__$1;
(statearr_35049_35068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var inst_35022 = (0);
var state_35045__$1 = (function (){var statearr_35050 = state_35045;
(statearr_35050[(8)] = inst_35022);

return statearr_35050;
})();
var statearr_35051_35069 = state_35045__$1;
(statearr_35051_35069[(2)] = null);

(statearr_35051_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35045__$1,(7),ch);
} else {
if((state_val_35046 === (6))){
var inst_35040 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35052_35070 = state_35045__$1;
(statearr_35052_35070[(2)] = inst_35040);

(statearr_35052_35070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var inst_35042 = (state_35045[(2)]);
var inst_35043 = cljs.core.async.close_BANG_.call(null,out);
var state_35045__$1 = (function (){var statearr_35053 = state_35045;
(statearr_35053[(9)] = inst_35042);

return statearr_35053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (2))){
var inst_35022 = (state_35045[(8)]);
var inst_35024 = (inst_35022 < n);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35024)){
var statearr_35054_35071 = state_35045__$1;
(statearr_35054_35071[(1)] = (4));

} else {
var statearr_35055_35072 = state_35045__$1;
(statearr_35055_35072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (11))){
var inst_35022 = (state_35045[(8)]);
var inst_35032 = (state_35045[(2)]);
var inst_35033 = (inst_35022 + (1));
var inst_35022__$1 = inst_35033;
var state_35045__$1 = (function (){var statearr_35056 = state_35045;
(statearr_35056[(10)] = inst_35032);

(statearr_35056[(8)] = inst_35022__$1);

return statearr_35056;
})();
var statearr_35057_35073 = state_35045__$1;
(statearr_35057_35073[(2)] = null);

(statearr_35057_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var state_35045__$1 = state_35045;
var statearr_35058_35074 = state_35045__$1;
(statearr_35058_35074[(2)] = null);

(statearr_35058_35074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (5))){
var state_35045__$1 = state_35045;
var statearr_35059_35075 = state_35045__$1;
(statearr_35059_35075[(2)] = null);

(statearr_35059_35075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_35037 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35060_35076 = state_35045__$1;
(statearr_35060_35076[(2)] = inst_35037);

(statearr_35060_35076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_35027 = (state_35045[(7)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35045__$1,(11),out,inst_35027);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35066,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35066,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35061[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35061[(1)] = (1));

return statearr_35061;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_35045){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35062){if((e35062 instanceof Object)){
var ex__31577__auto__ = e35062;
var statearr_35063_35077 = state_35045;
(statearr_35063_35077[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35078 = state_35045;
state_35045 = G__35078;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35066,out))
})();
var state__31732__auto__ = (function (){var statearr_35064 = f__31731__auto__.call(null);
(statearr_35064[(6)] = c__31730__auto___35066);

return statearr_35064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35066,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35080 = (function (f,ch,meta35081){
this.f = f;
this.ch = ch;
this.meta35081 = meta35081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35082,meta35081__$1){
var self__ = this;
var _35082__$1 = this;
return (new cljs.core.async.t_cljs$core$async35080(self__.f,self__.ch,meta35081__$1));
});

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35082){
var self__ = this;
var _35082__$1 = this;
return self__.meta35081;
});

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35083 = (function (f,ch,meta35081,_,fn1,meta35084){
this.f = f;
this.ch = ch;
this.meta35081 = meta35081;
this._ = _;
this.fn1 = fn1;
this.meta35084 = meta35084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35085,meta35084__$1){
var self__ = this;
var _35085__$1 = this;
return (new cljs.core.async.t_cljs$core$async35083(self__.f,self__.ch,self__.meta35081,self__._,self__.fn1,meta35084__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35085){
var self__ = this;
var _35085__$1 = this;
return self__.meta35084;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35079_SHARP_){
return f1.call(null,(((p1__35079_SHARP_ == null))?null:self__.f.call(null,p1__35079_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35081","meta35081",-876696791,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35080","cljs.core.async/t_cljs$core$async35080",225222409,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35084","meta35084",763828155,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35083";

cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35083");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35083.
 */
cljs.core.async.__GT_t_cljs$core$async35083 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35083(f__$1,ch__$1,meta35081__$1,___$2,fn1__$1,meta35084){
return (new cljs.core.async.t_cljs$core$async35083(f__$1,ch__$1,meta35081__$1,___$2,fn1__$1,meta35084));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35083(self__.f,self__.ch,self__.meta35081,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35081","meta35081",-876696791,null)], null);
});

cljs.core.async.t_cljs$core$async35080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35080";

cljs.core.async.t_cljs$core$async35080.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35080");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35080.
 */
cljs.core.async.__GT_t_cljs$core$async35080 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35080(f__$1,ch__$1,meta35081){
return (new cljs.core.async.t_cljs$core$async35080(f__$1,ch__$1,meta35081));
});

}

return (new cljs.core.async.t_cljs$core$async35080(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35086 = (function (f,ch,meta35087){
this.f = f;
this.ch = ch;
this.meta35087 = meta35087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35088,meta35087__$1){
var self__ = this;
var _35088__$1 = this;
return (new cljs.core.async.t_cljs$core$async35086(self__.f,self__.ch,meta35087__$1));
});

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35088){
var self__ = this;
var _35088__$1 = this;
return self__.meta35087;
});

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35087","meta35087",44104734,null)], null);
});

cljs.core.async.t_cljs$core$async35086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35086";

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35086");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35086.
 */
cljs.core.async.__GT_t_cljs$core$async35086 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35086(f__$1,ch__$1,meta35087){
return (new cljs.core.async.t_cljs$core$async35086(f__$1,ch__$1,meta35087));
});

}

return (new cljs.core.async.t_cljs$core$async35086(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35089 = (function (p,ch,meta35090){
this.p = p;
this.ch = ch;
this.meta35090 = meta35090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35091,meta35090__$1){
var self__ = this;
var _35091__$1 = this;
return (new cljs.core.async.t_cljs$core$async35089(self__.p,self__.ch,meta35090__$1));
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35091){
var self__ = this;
var _35091__$1 = this;
return self__.meta35090;
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35090","meta35090",-455513880,null)], null);
});

cljs.core.async.t_cljs$core$async35089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35089";

cljs.core.async.t_cljs$core$async35089.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35089.
 */
cljs.core.async.__GT_t_cljs$core$async35089 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35089(p__$1,ch__$1,meta35090){
return (new cljs.core.async.t_cljs$core$async35089(p__$1,ch__$1,meta35090));
});

}

return (new cljs.core.async.t_cljs$core$async35089(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35093 = arguments.length;
switch (G__35093) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35133,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35133,out){
return (function (state_35114){
var state_val_35115 = (state_35114[(1)]);
if((state_val_35115 === (7))){
var inst_35110 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35116_35134 = state_35114__$1;
(statearr_35116_35134[(2)] = inst_35110);

(statearr_35116_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (1))){
var state_35114__$1 = state_35114;
var statearr_35117_35135 = state_35114__$1;
(statearr_35117_35135[(2)] = null);

(statearr_35117_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (4))){
var inst_35096 = (state_35114[(7)]);
var inst_35096__$1 = (state_35114[(2)]);
var inst_35097 = (inst_35096__$1 == null);
var state_35114__$1 = (function (){var statearr_35118 = state_35114;
(statearr_35118[(7)] = inst_35096__$1);

return statearr_35118;
})();
if(cljs.core.truth_(inst_35097)){
var statearr_35119_35136 = state_35114__$1;
(statearr_35119_35136[(1)] = (5));

} else {
var statearr_35120_35137 = state_35114__$1;
(statearr_35120_35137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (6))){
var inst_35096 = (state_35114[(7)]);
var inst_35101 = p.call(null,inst_35096);
var state_35114__$1 = state_35114;
if(cljs.core.truth_(inst_35101)){
var statearr_35121_35138 = state_35114__$1;
(statearr_35121_35138[(1)] = (8));

} else {
var statearr_35122_35139 = state_35114__$1;
(statearr_35122_35139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (3))){
var inst_35112 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35114__$1,inst_35112);
} else {
if((state_val_35115 === (2))){
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35114__$1,(4),ch);
} else {
if((state_val_35115 === (11))){
var inst_35104 = (state_35114[(2)]);
var state_35114__$1 = state_35114;
var statearr_35123_35140 = state_35114__$1;
(statearr_35123_35140[(2)] = inst_35104);

(statearr_35123_35140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (9))){
var state_35114__$1 = state_35114;
var statearr_35124_35141 = state_35114__$1;
(statearr_35124_35141[(2)] = null);

(statearr_35124_35141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (5))){
var inst_35099 = cljs.core.async.close_BANG_.call(null,out);
var state_35114__$1 = state_35114;
var statearr_35125_35142 = state_35114__$1;
(statearr_35125_35142[(2)] = inst_35099);

(statearr_35125_35142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (10))){
var inst_35107 = (state_35114[(2)]);
var state_35114__$1 = (function (){var statearr_35126 = state_35114;
(statearr_35126[(8)] = inst_35107);

return statearr_35126;
})();
var statearr_35127_35143 = state_35114__$1;
(statearr_35127_35143[(2)] = null);

(statearr_35127_35143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35115 === (8))){
var inst_35096 = (state_35114[(7)]);
var state_35114__$1 = state_35114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35114__$1,(11),out,inst_35096);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35133,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35133,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null,null,null];
(statearr_35128[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_35114){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__31577__auto__ = e35129;
var statearr_35130_35144 = state_35114;
(statearr_35130_35144[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_35114;
state_35114 = G__35145;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_35114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_35114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35133,out))
})();
var state__31732__auto__ = (function (){var statearr_35131 = f__31731__auto__.call(null);
(statearr_35131[(6)] = c__31730__auto___35133);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35133,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35147 = arguments.length;
switch (G__35147) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__){
return (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35212_35250 = state_35210__$1;
(statearr_35212_35250[(2)] = inst_35206);

(statearr_35212_35250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (20))){
var inst_35176 = (state_35210[(7)]);
var inst_35187 = (state_35210[(2)]);
var inst_35188 = cljs.core.next.call(null,inst_35176);
var inst_35162 = inst_35188;
var inst_35163 = null;
var inst_35164 = (0);
var inst_35165 = (0);
var state_35210__$1 = (function (){var statearr_35213 = state_35210;
(statearr_35213[(8)] = inst_35187);

(statearr_35213[(9)] = inst_35162);

(statearr_35213[(10)] = inst_35164);

(statearr_35213[(11)] = inst_35163);

(statearr_35213[(12)] = inst_35165);

return statearr_35213;
})();
var statearr_35214_35251 = state_35210__$1;
(statearr_35214_35251[(2)] = null);

(statearr_35214_35251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var state_35210__$1 = state_35210;
var statearr_35215_35252 = state_35210__$1;
(statearr_35215_35252[(2)] = null);

(statearr_35215_35252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35151 = (state_35210[(13)]);
var inst_35151__$1 = (state_35210[(2)]);
var inst_35152 = (inst_35151__$1 == null);
var state_35210__$1 = (function (){var statearr_35216 = state_35210;
(statearr_35216[(13)] = inst_35151__$1);

return statearr_35216;
})();
if(cljs.core.truth_(inst_35152)){
var statearr_35217_35253 = state_35210__$1;
(statearr_35217_35253[(1)] = (5));

} else {
var statearr_35218_35254 = state_35210__$1;
(statearr_35218_35254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (15))){
var state_35210__$1 = state_35210;
var statearr_35222_35255 = state_35210__$1;
(statearr_35222_35255[(2)] = null);

(statearr_35222_35255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (21))){
var state_35210__$1 = state_35210;
var statearr_35223_35256 = state_35210__$1;
(statearr_35223_35256[(2)] = null);

(statearr_35223_35256[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (13))){
var inst_35162 = (state_35210[(9)]);
var inst_35164 = (state_35210[(10)]);
var inst_35163 = (state_35210[(11)]);
var inst_35165 = (state_35210[(12)]);
var inst_35172 = (state_35210[(2)]);
var inst_35173 = (inst_35165 + (1));
var tmp35219 = inst_35162;
var tmp35220 = inst_35164;
var tmp35221 = inst_35163;
var inst_35162__$1 = tmp35219;
var inst_35163__$1 = tmp35221;
var inst_35164__$1 = tmp35220;
var inst_35165__$1 = inst_35173;
var state_35210__$1 = (function (){var statearr_35224 = state_35210;
(statearr_35224[(14)] = inst_35172);

(statearr_35224[(9)] = inst_35162__$1);

(statearr_35224[(10)] = inst_35164__$1);

(statearr_35224[(11)] = inst_35163__$1);

(statearr_35224[(12)] = inst_35165__$1);

return statearr_35224;
})();
var statearr_35225_35257 = state_35210__$1;
(statearr_35225_35257[(2)] = null);

(statearr_35225_35257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (22))){
var state_35210__$1 = state_35210;
var statearr_35226_35258 = state_35210__$1;
(statearr_35226_35258[(2)] = null);

(statearr_35226_35258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (6))){
var inst_35151 = (state_35210[(13)]);
var inst_35160 = f.call(null,inst_35151);
var inst_35161 = cljs.core.seq.call(null,inst_35160);
var inst_35162 = inst_35161;
var inst_35163 = null;
var inst_35164 = (0);
var inst_35165 = (0);
var state_35210__$1 = (function (){var statearr_35227 = state_35210;
(statearr_35227[(9)] = inst_35162);

(statearr_35227[(10)] = inst_35164);

(statearr_35227[(11)] = inst_35163);

(statearr_35227[(12)] = inst_35165);

return statearr_35227;
})();
var statearr_35228_35259 = state_35210__$1;
(statearr_35228_35259[(2)] = null);

(statearr_35228_35259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (17))){
var inst_35176 = (state_35210[(7)]);
var inst_35180 = cljs.core.chunk_first.call(null,inst_35176);
var inst_35181 = cljs.core.chunk_rest.call(null,inst_35176);
var inst_35182 = cljs.core.count.call(null,inst_35180);
var inst_35162 = inst_35181;
var inst_35163 = inst_35180;
var inst_35164 = inst_35182;
var inst_35165 = (0);
var state_35210__$1 = (function (){var statearr_35229 = state_35210;
(statearr_35229[(9)] = inst_35162);

(statearr_35229[(10)] = inst_35164);

(statearr_35229[(11)] = inst_35163);

(statearr_35229[(12)] = inst_35165);

return statearr_35229;
})();
var statearr_35230_35260 = state_35210__$1;
(statearr_35230_35260[(2)] = null);

(statearr_35230_35260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (12))){
var inst_35196 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35231_35261 = state_35210__$1;
(statearr_35231_35261[(2)] = inst_35196);

(statearr_35231_35261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (2))){
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35210__$1,(4),in$);
} else {
if((state_val_35211 === (23))){
var inst_35204 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35232_35262 = state_35210__$1;
(statearr_35232_35262[(2)] = inst_35204);

(statearr_35232_35262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (19))){
var inst_35191 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35233_35263 = state_35210__$1;
(statearr_35233_35263[(2)] = inst_35191);

(statearr_35233_35263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35162 = (state_35210[(9)]);
var inst_35176 = (state_35210[(7)]);
var inst_35176__$1 = cljs.core.seq.call(null,inst_35162);
var state_35210__$1 = (function (){var statearr_35234 = state_35210;
(statearr_35234[(7)] = inst_35176__$1);

return statearr_35234;
})();
if(inst_35176__$1){
var statearr_35235_35264 = state_35210__$1;
(statearr_35235_35264[(1)] = (14));

} else {
var statearr_35236_35265 = state_35210__$1;
(statearr_35236_35265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var inst_35198 = (state_35210[(2)]);
var inst_35199 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35210__$1 = (function (){var statearr_35237 = state_35210;
(statearr_35237[(15)] = inst_35198);

return statearr_35237;
})();
if(cljs.core.truth_(inst_35199)){
var statearr_35238_35266 = state_35210__$1;
(statearr_35238_35266[(1)] = (21));

} else {
var statearr_35239_35267 = state_35210__$1;
(statearr_35239_35267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (5))){
var inst_35154 = cljs.core.async.close_BANG_.call(null,out);
var state_35210__$1 = state_35210;
var statearr_35240_35268 = state_35210__$1;
(statearr_35240_35268[(2)] = inst_35154);

(statearr_35240_35268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (14))){
var inst_35176 = (state_35210[(7)]);
var inst_35178 = cljs.core.chunked_seq_QMARK_.call(null,inst_35176);
var state_35210__$1 = state_35210;
if(inst_35178){
var statearr_35241_35269 = state_35210__$1;
(statearr_35241_35269[(1)] = (17));

} else {
var statearr_35242_35270 = state_35210__$1;
(statearr_35242_35270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (16))){
var inst_35194 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35243_35271 = state_35210__$1;
(statearr_35243_35271[(2)] = inst_35194);

(statearr_35243_35271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35163 = (state_35210[(11)]);
var inst_35165 = (state_35210[(12)]);
var inst_35170 = cljs.core._nth.call(null,inst_35163,inst_35165);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35210__$1,(13),out,inst_35170);
} else {
if((state_val_35211 === (18))){
var inst_35176 = (state_35210[(7)]);
var inst_35185 = cljs.core.first.call(null,inst_35176);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35210__$1,(20),out,inst_35185);
} else {
if((state_val_35211 === (8))){
var inst_35164 = (state_35210[(10)]);
var inst_35165 = (state_35210[(12)]);
var inst_35167 = (inst_35165 < inst_35164);
var inst_35168 = inst_35167;
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35168)){
var statearr_35244_35272 = state_35210__$1;
(statearr_35244_35272[(1)] = (10));

} else {
var statearr_35245_35273 = state_35210__$1;
(statearr_35245_35273[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0 = (function (){
var statearr_35246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__);

(statearr_35246[(1)] = (1));

return statearr_35246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1 = (function (state_35210){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35247){if((e35247 instanceof Object)){
var ex__31577__auto__ = e35247;
var statearr_35248_35274 = state_35210;
(statearr_35248_35274[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35275 = state_35210;
state_35210 = G__35275;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31574__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__))
})();
var state__31732__auto__ = (function (){var statearr_35249 = f__31731__auto__.call(null);
(statearr_35249[(6)] = c__31730__auto__);

return statearr_35249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__))
);

return c__31730__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35277 = arguments.length;
switch (G__35277) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35283 = arguments.length;
switch (G__35283) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35330,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35330,out){
return (function (state_35307){
var state_val_35308 = (state_35307[(1)]);
if((state_val_35308 === (7))){
var inst_35302 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
var statearr_35309_35331 = state_35307__$1;
(statearr_35309_35331[(2)] = inst_35302);

(statearr_35309_35331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (1))){
var inst_35284 = null;
var state_35307__$1 = (function (){var statearr_35310 = state_35307;
(statearr_35310[(7)] = inst_35284);

return statearr_35310;
})();
var statearr_35311_35332 = state_35307__$1;
(statearr_35311_35332[(2)] = null);

(statearr_35311_35332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (4))){
var inst_35287 = (state_35307[(8)]);
var inst_35287__$1 = (state_35307[(2)]);
var inst_35288 = (inst_35287__$1 == null);
var inst_35289 = cljs.core.not.call(null,inst_35288);
var state_35307__$1 = (function (){var statearr_35312 = state_35307;
(statearr_35312[(8)] = inst_35287__$1);

return statearr_35312;
})();
if(inst_35289){
var statearr_35313_35333 = state_35307__$1;
(statearr_35313_35333[(1)] = (5));

} else {
var statearr_35314_35334 = state_35307__$1;
(statearr_35314_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (6))){
var state_35307__$1 = state_35307;
var statearr_35315_35335 = state_35307__$1;
(statearr_35315_35335[(2)] = null);

(statearr_35315_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (3))){
var inst_35304 = (state_35307[(2)]);
var inst_35305 = cljs.core.async.close_BANG_.call(null,out);
var state_35307__$1 = (function (){var statearr_35316 = state_35307;
(statearr_35316[(9)] = inst_35304);

return statearr_35316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35307__$1,inst_35305);
} else {
if((state_val_35308 === (2))){
var state_35307__$1 = state_35307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35307__$1,(4),ch);
} else {
if((state_val_35308 === (11))){
var inst_35287 = (state_35307[(8)]);
var inst_35296 = (state_35307[(2)]);
var inst_35284 = inst_35287;
var state_35307__$1 = (function (){var statearr_35317 = state_35307;
(statearr_35317[(10)] = inst_35296);

(statearr_35317[(7)] = inst_35284);

return statearr_35317;
})();
var statearr_35318_35336 = state_35307__$1;
(statearr_35318_35336[(2)] = null);

(statearr_35318_35336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (9))){
var inst_35287 = (state_35307[(8)]);
var state_35307__$1 = state_35307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35307__$1,(11),out,inst_35287);
} else {
if((state_val_35308 === (5))){
var inst_35284 = (state_35307[(7)]);
var inst_35287 = (state_35307[(8)]);
var inst_35291 = cljs.core._EQ_.call(null,inst_35287,inst_35284);
var state_35307__$1 = state_35307;
if(inst_35291){
var statearr_35320_35337 = state_35307__$1;
(statearr_35320_35337[(1)] = (8));

} else {
var statearr_35321_35338 = state_35307__$1;
(statearr_35321_35338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (10))){
var inst_35299 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
var statearr_35322_35339 = state_35307__$1;
(statearr_35322_35339[(2)] = inst_35299);

(statearr_35322_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (8))){
var inst_35284 = (state_35307[(7)]);
var tmp35319 = inst_35284;
var inst_35284__$1 = tmp35319;
var state_35307__$1 = (function (){var statearr_35323 = state_35307;
(statearr_35323[(7)] = inst_35284__$1);

return statearr_35323;
})();
var statearr_35324_35340 = state_35307__$1;
(statearr_35324_35340[(2)] = null);

(statearr_35324_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35330,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35330,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35325[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35325[(1)] = (1));

return statearr_35325;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_35307){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35326){if((e35326 instanceof Object)){
var ex__31577__auto__ = e35326;
var statearr_35327_35341 = state_35307;
(statearr_35327_35341[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35342 = state_35307;
state_35307 = G__35342;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_35307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_35307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35330,out))
})();
var state__31732__auto__ = (function (){var statearr_35328 = f__31731__auto__.call(null);
(statearr_35328[(6)] = c__31730__auto___35330);

return statearr_35328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35330,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35344 = arguments.length;
switch (G__35344) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35410,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35410,out){
return (function (state_35382){
var state_val_35383 = (state_35382[(1)]);
if((state_val_35383 === (7))){
var inst_35378 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
var statearr_35384_35411 = state_35382__$1;
(statearr_35384_35411[(2)] = inst_35378);

(statearr_35384_35411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (1))){
var inst_35345 = (new Array(n));
var inst_35346 = inst_35345;
var inst_35347 = (0);
var state_35382__$1 = (function (){var statearr_35385 = state_35382;
(statearr_35385[(7)] = inst_35346);

(statearr_35385[(8)] = inst_35347);

return statearr_35385;
})();
var statearr_35386_35412 = state_35382__$1;
(statearr_35386_35412[(2)] = null);

(statearr_35386_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (4))){
var inst_35350 = (state_35382[(9)]);
var inst_35350__$1 = (state_35382[(2)]);
var inst_35351 = (inst_35350__$1 == null);
var inst_35352 = cljs.core.not.call(null,inst_35351);
var state_35382__$1 = (function (){var statearr_35387 = state_35382;
(statearr_35387[(9)] = inst_35350__$1);

return statearr_35387;
})();
if(inst_35352){
var statearr_35388_35413 = state_35382__$1;
(statearr_35388_35413[(1)] = (5));

} else {
var statearr_35389_35414 = state_35382__$1;
(statearr_35389_35414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (15))){
var inst_35372 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
var statearr_35390_35415 = state_35382__$1;
(statearr_35390_35415[(2)] = inst_35372);

(statearr_35390_35415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (13))){
var state_35382__$1 = state_35382;
var statearr_35391_35416 = state_35382__$1;
(statearr_35391_35416[(2)] = null);

(statearr_35391_35416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (6))){
var inst_35347 = (state_35382[(8)]);
var inst_35368 = (inst_35347 > (0));
var state_35382__$1 = state_35382;
if(cljs.core.truth_(inst_35368)){
var statearr_35392_35417 = state_35382__$1;
(statearr_35392_35417[(1)] = (12));

} else {
var statearr_35393_35418 = state_35382__$1;
(statearr_35393_35418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (3))){
var inst_35380 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35382__$1,inst_35380);
} else {
if((state_val_35383 === (12))){
var inst_35346 = (state_35382[(7)]);
var inst_35370 = cljs.core.vec.call(null,inst_35346);
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35382__$1,(15),out,inst_35370);
} else {
if((state_val_35383 === (2))){
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,(4),ch);
} else {
if((state_val_35383 === (11))){
var inst_35362 = (state_35382[(2)]);
var inst_35363 = (new Array(n));
var inst_35346 = inst_35363;
var inst_35347 = (0);
var state_35382__$1 = (function (){var statearr_35394 = state_35382;
(statearr_35394[(7)] = inst_35346);

(statearr_35394[(8)] = inst_35347);

(statearr_35394[(10)] = inst_35362);

return statearr_35394;
})();
var statearr_35395_35419 = state_35382__$1;
(statearr_35395_35419[(2)] = null);

(statearr_35395_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (9))){
var inst_35346 = (state_35382[(7)]);
var inst_35360 = cljs.core.vec.call(null,inst_35346);
var state_35382__$1 = state_35382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35382__$1,(11),out,inst_35360);
} else {
if((state_val_35383 === (5))){
var inst_35346 = (state_35382[(7)]);
var inst_35347 = (state_35382[(8)]);
var inst_35355 = (state_35382[(11)]);
var inst_35350 = (state_35382[(9)]);
var inst_35354 = (inst_35346[inst_35347] = inst_35350);
var inst_35355__$1 = (inst_35347 + (1));
var inst_35356 = (inst_35355__$1 < n);
var state_35382__$1 = (function (){var statearr_35396 = state_35382;
(statearr_35396[(12)] = inst_35354);

(statearr_35396[(11)] = inst_35355__$1);

return statearr_35396;
})();
if(cljs.core.truth_(inst_35356)){
var statearr_35397_35420 = state_35382__$1;
(statearr_35397_35420[(1)] = (8));

} else {
var statearr_35398_35421 = state_35382__$1;
(statearr_35398_35421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (14))){
var inst_35375 = (state_35382[(2)]);
var inst_35376 = cljs.core.async.close_BANG_.call(null,out);
var state_35382__$1 = (function (){var statearr_35400 = state_35382;
(statearr_35400[(13)] = inst_35375);

return statearr_35400;
})();
var statearr_35401_35422 = state_35382__$1;
(statearr_35401_35422[(2)] = inst_35376);

(statearr_35401_35422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (10))){
var inst_35366 = (state_35382[(2)]);
var state_35382__$1 = state_35382;
var statearr_35402_35423 = state_35382__$1;
(statearr_35402_35423[(2)] = inst_35366);

(statearr_35402_35423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35383 === (8))){
var inst_35346 = (state_35382[(7)]);
var inst_35355 = (state_35382[(11)]);
var tmp35399 = inst_35346;
var inst_35346__$1 = tmp35399;
var inst_35347 = inst_35355;
var state_35382__$1 = (function (){var statearr_35403 = state_35382;
(statearr_35403[(7)] = inst_35346__$1);

(statearr_35403[(8)] = inst_35347);

return statearr_35403;
})();
var statearr_35404_35424 = state_35382__$1;
(statearr_35404_35424[(2)] = null);

(statearr_35404_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35410,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35410,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35405[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35405[(1)] = (1));

return statearr_35405;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_35382){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35406){if((e35406 instanceof Object)){
var ex__31577__auto__ = e35406;
var statearr_35407_35425 = state_35382;
(statearr_35407_35425[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35426 = state_35382;
state_35382 = G__35426;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_35382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_35382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35410,out))
})();
var state__31732__auto__ = (function (){var statearr_35408 = f__31731__auto__.call(null);
(statearr_35408[(6)] = c__31730__auto___35410);

return statearr_35408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35428 = arguments.length;
switch (G__35428) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31730__auto___35498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___35498,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___35498,out){
return (function (state_35470){
var state_val_35471 = (state_35470[(1)]);
if((state_val_35471 === (7))){
var inst_35466 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35472_35499 = state_35470__$1;
(statearr_35472_35499[(2)] = inst_35466);

(statearr_35472_35499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (1))){
var inst_35429 = [];
var inst_35430 = inst_35429;
var inst_35431 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35470__$1 = (function (){var statearr_35473 = state_35470;
(statearr_35473[(7)] = inst_35431);

(statearr_35473[(8)] = inst_35430);

return statearr_35473;
})();
var statearr_35474_35500 = state_35470__$1;
(statearr_35474_35500[(2)] = null);

(statearr_35474_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (4))){
var inst_35434 = (state_35470[(9)]);
var inst_35434__$1 = (state_35470[(2)]);
var inst_35435 = (inst_35434__$1 == null);
var inst_35436 = cljs.core.not.call(null,inst_35435);
var state_35470__$1 = (function (){var statearr_35475 = state_35470;
(statearr_35475[(9)] = inst_35434__$1);

return statearr_35475;
})();
if(inst_35436){
var statearr_35476_35501 = state_35470__$1;
(statearr_35476_35501[(1)] = (5));

} else {
var statearr_35477_35502 = state_35470__$1;
(statearr_35477_35502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (15))){
var inst_35460 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35478_35503 = state_35470__$1;
(statearr_35478_35503[(2)] = inst_35460);

(statearr_35478_35503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (13))){
var state_35470__$1 = state_35470;
var statearr_35479_35504 = state_35470__$1;
(statearr_35479_35504[(2)] = null);

(statearr_35479_35504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (6))){
var inst_35430 = (state_35470[(8)]);
var inst_35455 = inst_35430.length;
var inst_35456 = (inst_35455 > (0));
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35456)){
var statearr_35480_35505 = state_35470__$1;
(statearr_35480_35505[(1)] = (12));

} else {
var statearr_35481_35506 = state_35470__$1;
(statearr_35481_35506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (3))){
var inst_35468 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35470__$1,inst_35468);
} else {
if((state_val_35471 === (12))){
var inst_35430 = (state_35470[(8)]);
var inst_35458 = cljs.core.vec.call(null,inst_35430);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35470__$1,(15),out,inst_35458);
} else {
if((state_val_35471 === (2))){
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35470__$1,(4),ch);
} else {
if((state_val_35471 === (11))){
var inst_35434 = (state_35470[(9)]);
var inst_35438 = (state_35470[(10)]);
var inst_35448 = (state_35470[(2)]);
var inst_35449 = [];
var inst_35450 = inst_35449.push(inst_35434);
var inst_35430 = inst_35449;
var inst_35431 = inst_35438;
var state_35470__$1 = (function (){var statearr_35482 = state_35470;
(statearr_35482[(11)] = inst_35450);

(statearr_35482[(7)] = inst_35431);

(statearr_35482[(8)] = inst_35430);

(statearr_35482[(12)] = inst_35448);

return statearr_35482;
})();
var statearr_35483_35507 = state_35470__$1;
(statearr_35483_35507[(2)] = null);

(statearr_35483_35507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (9))){
var inst_35430 = (state_35470[(8)]);
var inst_35446 = cljs.core.vec.call(null,inst_35430);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35470__$1,(11),out,inst_35446);
} else {
if((state_val_35471 === (5))){
var inst_35434 = (state_35470[(9)]);
var inst_35431 = (state_35470[(7)]);
var inst_35438 = (state_35470[(10)]);
var inst_35438__$1 = f.call(null,inst_35434);
var inst_35439 = cljs.core._EQ_.call(null,inst_35438__$1,inst_35431);
var inst_35440 = cljs.core.keyword_identical_QMARK_.call(null,inst_35431,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35441 = ((inst_35439) || (inst_35440));
var state_35470__$1 = (function (){var statearr_35484 = state_35470;
(statearr_35484[(10)] = inst_35438__$1);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35441)){
var statearr_35485_35508 = state_35470__$1;
(statearr_35485_35508[(1)] = (8));

} else {
var statearr_35486_35509 = state_35470__$1;
(statearr_35486_35509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (14))){
var inst_35463 = (state_35470[(2)]);
var inst_35464 = cljs.core.async.close_BANG_.call(null,out);
var state_35470__$1 = (function (){var statearr_35488 = state_35470;
(statearr_35488[(13)] = inst_35463);

return statearr_35488;
})();
var statearr_35489_35510 = state_35470__$1;
(statearr_35489_35510[(2)] = inst_35464);

(statearr_35489_35510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (10))){
var inst_35453 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35490_35511 = state_35470__$1;
(statearr_35490_35511[(2)] = inst_35453);

(statearr_35490_35511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (8))){
var inst_35434 = (state_35470[(9)]);
var inst_35430 = (state_35470[(8)]);
var inst_35438 = (state_35470[(10)]);
var inst_35443 = inst_35430.push(inst_35434);
var tmp35487 = inst_35430;
var inst_35430__$1 = tmp35487;
var inst_35431 = inst_35438;
var state_35470__$1 = (function (){var statearr_35491 = state_35470;
(statearr_35491[(7)] = inst_35431);

(statearr_35491[(8)] = inst_35430__$1);

(statearr_35491[(14)] = inst_35443);

return statearr_35491;
})();
var statearr_35492_35512 = state_35470__$1;
(statearr_35492_35512[(2)] = null);

(statearr_35492_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31730__auto___35498,out))
;
return ((function (switch__31573__auto__,c__31730__auto___35498,out){
return (function() {
var cljs$core$async$state_machine__31574__auto__ = null;
var cljs$core$async$state_machine__31574__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35493[(0)] = cljs$core$async$state_machine__31574__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var cljs$core$async$state_machine__31574__auto____1 = (function (state_35470){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_35470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e35494){if((e35494 instanceof Object)){
var ex__31577__auto__ = e35494;
var statearr_35495_35513 = state_35470;
(statearr_35495_35513[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35514 = state_35470;
state_35470 = G__35514;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
cljs$core$async$state_machine__31574__auto__ = function(state_35470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31574__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31574__auto____1.call(this,state_35470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31574__auto____0;
cljs$core$async$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31574__auto____1;
return cljs$core$async$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___35498,out))
})();
var state__31732__auto__ = (function (){var statearr_35496 = f__31731__auto__.call(null);
(statearr_35496[(6)] = c__31730__auto___35498);

return statearr_35496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___35498,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530931634526
