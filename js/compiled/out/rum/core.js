// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__24579 = cljs.core.seq.call(null,props);
var chunk__24581 = null;
var count__24582 = (0);
var i__24583 = (0);
while(true){
if((i__24583 < count__24582)){
var vec__24585 = cljs.core._nth.call(null,chunk__24581,i__24583);
var k = cljs.core.nth.call(null,vec__24585,(0),null);
var v = cljs.core.nth.call(null,vec__24585,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24591 = seq__24579;
var G__24592 = chunk__24581;
var G__24593 = count__24582;
var G__24594 = (i__24583 + (1));
seq__24579 = G__24591;
chunk__24581 = G__24592;
count__24582 = G__24593;
i__24583 = G__24594;
continue;
} else {
var G__24595 = seq__24579;
var G__24596 = chunk__24581;
var G__24597 = count__24582;
var G__24598 = (i__24583 + (1));
seq__24579 = G__24595;
chunk__24581 = G__24596;
count__24582 = G__24597;
i__24583 = G__24598;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24579);
if(temp__5457__auto__){
var seq__24579__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24579__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24579__$1);
var G__24599 = cljs.core.chunk_rest.call(null,seq__24579__$1);
var G__24600 = c__4319__auto__;
var G__24601 = cljs.core.count.call(null,c__4319__auto__);
var G__24602 = (0);
seq__24579 = G__24599;
chunk__24581 = G__24600;
count__24582 = G__24601;
i__24583 = G__24602;
continue;
} else {
var vec__24588 = cljs.core.first.call(null,seq__24579__$1);
var k = cljs.core.nth.call(null,vec__24588,(0),null);
var v = cljs.core.nth.call(null,vec__24588,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__24603 = cljs.core.next.call(null,seq__24579__$1);
var G__24604 = null;
var G__24605 = (0);
var G__24606 = (0);
seq__24579 = G__24603;
chunk__24581 = G__24604;
count__24582 = G__24605;
i__24583 = G__24606;
continue;
} else {
var G__24607 = cljs.core.next.call(null,seq__24579__$1);
var G__24608 = null;
var G__24609 = (0);
var G__24610 = (0);
seq__24579 = G__24607;
chunk__24581 = G__24608;
count__24582 = G__24609;
i__24583 = G__24610;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24612_SHARP_,p2__24611_SHARP_){
return p2__24611_SHARP_.call(null,p1__24612_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24614_SHARP_,p2__24613_SHARP_){
return p2__24613_SHARP_.call(null,old_state,p1__24614_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3922__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24615_SHARP_){
return p1__24615_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24617 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24617,(0),null);
var next_state = cljs.core.nth.call(null,vec__24617,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__24616_SHARP_){
return p1__24616_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__24620__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__24620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24621__i = 0, G__24621__a = new Array(arguments.length -  0);
while (G__24621__i < G__24621__a.length) {G__24621__a[G__24621__i] = arguments[G__24621__i + 0]; ++G__24621__i;}
  args = new cljs.core.IndexedSeq(G__24621__a,0,null);
} 
return G__24620__delegate.call(this,args);};
G__24620.cljs$lang$maxFixedArity = 0;
G__24620.cljs$lang$applyTo = (function (arglist__24622){
var args = cljs.core.seq(arglist__24622);
return G__24620__delegate(args);
});
G__24620.cljs$core$IFn$_invoke$arity$variadic = G__24620__delegate;
return G__24620;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24623__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__24623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24624__i = 0, G__24624__a = new Array(arguments.length -  0);
while (G__24624__i < G__24624__a.length) {G__24624__a[G__24624__i] = arguments[G__24624__i + 0]; ++G__24624__i;}
  args = new cljs.core.IndexedSeq(G__24624__a,0,null);
} 
return G__24623__delegate.call(this,args);};
G__24623.cljs$lang$maxFixedArity = 0;
G__24623.cljs$lang$applyTo = (function (arglist__24625){
var args = cljs.core.seq(arglist__24625);
return G__24623__delegate(args);
});
G__24623.cljs$core$IFn$_invoke$arity$variadic = G__24623__delegate;
return G__24623;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24626__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__24626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24627__i = 0, G__24627__a = new Array(arguments.length -  0);
while (G__24627__i < G__24627__a.length) {G__24627__a[G__24627__i] = arguments[G__24627__i + 0]; ++G__24627__i;}
  args = new cljs.core.IndexedSeq(G__24627__a,0,null);
} 
return G__24626__delegate.call(this,args);};
G__24626.cljs$lang$maxFixedArity = 0;
G__24626.cljs$lang$applyTo = (function (arglist__24628){
var args = cljs.core.seq(arglist__24628);
return G__24626__delegate(args);
});
G__24626.cljs$core$IFn$_invoke$arity$variadic = G__24626__delegate;
return G__24626;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3922__auto__ = (function (){var and__3911__auto__ = typeof window !== 'undefined';
if(and__3911__auto__){
var or__3922__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__){
return (function (p1__24629_SHARP_){
return setTimeout(p1__24629_SHARP_,(16));
});
;})(or__3922__auto__))
}
})();
rum.core.batch = (function (){var or__3922__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return ((function (or__3922__auto____$1,or__3922__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3922__auto____$1,or__3922__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24630 = cljs.core.seq.call(null,queue);
var chunk__24632 = null;
var count__24633 = (0);
var i__24634 = (0);
while(true){
if((i__24634 < count__24633)){
var comp = cljs.core._nth.call(null,chunk__24632,i__24634);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24636 = seq__24630;
var G__24637 = chunk__24632;
var G__24638 = count__24633;
var G__24639 = (i__24634 + (1));
seq__24630 = G__24636;
chunk__24632 = G__24637;
count__24633 = G__24638;
i__24634 = G__24639;
continue;
} else {
var G__24640 = seq__24630;
var G__24641 = chunk__24632;
var G__24642 = count__24633;
var G__24643 = (i__24634 + (1));
seq__24630 = G__24640;
chunk__24632 = G__24641;
count__24633 = G__24642;
i__24634 = G__24643;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24630);
if(temp__5457__auto__){
var seq__24630__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24630__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24630__$1);
var G__24644 = cljs.core.chunk_rest.call(null,seq__24630__$1);
var G__24645 = c__4319__auto__;
var G__24646 = cljs.core.count.call(null,c__4319__auto__);
var G__24647 = (0);
seq__24630 = G__24644;
chunk__24632 = G__24645;
count__24633 = G__24646;
i__24634 = G__24647;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24630__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__24648 = cljs.core.next.call(null,seq__24630__$1);
var G__24649 = null;
var G__24650 = (0);
var G__24651 = (0);
seq__24630 = G__24648;
chunk__24632 = G__24649;
count__24633 = G__24650;
i__24634 = G__24651;
continue;
} else {
var G__24652 = cljs.core.next.call(null,seq__24630__$1);
var G__24653 = null;
var G__24654 = (0);
var G__24655 = (0);
seq__24630 = G__24652;
chunk__24632 = G__24653;
count__24633 = G__24654;
i__24634 = G__24655;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__24657 = arguments.length;
switch (G__24657) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24659 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24660 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24660,(0),null);
var next_state = cljs.core.nth.call(null,vec__24660,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24663_24675 = cljs.core.seq.call(null,old_reactions);
var chunk__24664_24676 = null;
var count__24665_24677 = (0);
var i__24666_24678 = (0);
while(true){
if((i__24666_24678 < count__24665_24677)){
var ref_24679 = cljs.core._nth.call(null,chunk__24664_24676,i__24666_24678);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24679)){
} else {
cljs.core.remove_watch.call(null,ref_24679,key);
}


var G__24680 = seq__24663_24675;
var G__24681 = chunk__24664_24676;
var G__24682 = count__24665_24677;
var G__24683 = (i__24666_24678 + (1));
seq__24663_24675 = G__24680;
chunk__24664_24676 = G__24681;
count__24665_24677 = G__24682;
i__24666_24678 = G__24683;
continue;
} else {
var temp__5457__auto___24684 = cljs.core.seq.call(null,seq__24663_24675);
if(temp__5457__auto___24684){
var seq__24663_24685__$1 = temp__5457__auto___24684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24663_24685__$1)){
var c__4319__auto___24686 = cljs.core.chunk_first.call(null,seq__24663_24685__$1);
var G__24687 = cljs.core.chunk_rest.call(null,seq__24663_24685__$1);
var G__24688 = c__4319__auto___24686;
var G__24689 = cljs.core.count.call(null,c__4319__auto___24686);
var G__24690 = (0);
seq__24663_24675 = G__24687;
chunk__24664_24676 = G__24688;
count__24665_24677 = G__24689;
i__24666_24678 = G__24690;
continue;
} else {
var ref_24691 = cljs.core.first.call(null,seq__24663_24685__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24691)){
} else {
cljs.core.remove_watch.call(null,ref_24691,key);
}


var G__24692 = cljs.core.next.call(null,seq__24663_24685__$1);
var G__24693 = null;
var G__24694 = (0);
var G__24695 = (0);
seq__24663_24675 = G__24692;
chunk__24664_24676 = G__24693;
count__24665_24677 = G__24694;
i__24666_24678 = G__24695;
continue;
}
} else {
}
}
break;
}

var seq__24667_24696 = cljs.core.seq.call(null,new_reactions);
var chunk__24668_24697 = null;
var count__24669_24698 = (0);
var i__24670_24699 = (0);
while(true){
if((i__24670_24699 < count__24669_24698)){
var ref_24700 = cljs.core._nth.call(null,chunk__24668_24697,i__24670_24699);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24700)){
} else {
cljs.core.add_watch.call(null,ref_24700,key,((function (seq__24667_24696,chunk__24668_24697,count__24669_24698,i__24670_24699,ref_24700,comp,old_reactions,vec__24660,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24659){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24667_24696,chunk__24668_24697,count__24669_24698,i__24670_24699,ref_24700,comp,old_reactions,vec__24660,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24659))
);
}


var G__24701 = seq__24667_24696;
var G__24702 = chunk__24668_24697;
var G__24703 = count__24669_24698;
var G__24704 = (i__24670_24699 + (1));
seq__24667_24696 = G__24701;
chunk__24668_24697 = G__24702;
count__24669_24698 = G__24703;
i__24670_24699 = G__24704;
continue;
} else {
var temp__5457__auto___24705 = cljs.core.seq.call(null,seq__24667_24696);
if(temp__5457__auto___24705){
var seq__24667_24706__$1 = temp__5457__auto___24705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24667_24706__$1)){
var c__4319__auto___24707 = cljs.core.chunk_first.call(null,seq__24667_24706__$1);
var G__24708 = cljs.core.chunk_rest.call(null,seq__24667_24706__$1);
var G__24709 = c__4319__auto___24707;
var G__24710 = cljs.core.count.call(null,c__4319__auto___24707);
var G__24711 = (0);
seq__24667_24696 = G__24708;
chunk__24668_24697 = G__24709;
count__24669_24698 = G__24710;
i__24670_24699 = G__24711;
continue;
} else {
var ref_24712 = cljs.core.first.call(null,seq__24667_24706__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24712)){
} else {
cljs.core.add_watch.call(null,ref_24712,key,((function (seq__24667_24696,chunk__24668_24697,count__24669_24698,i__24670_24699,ref_24712,seq__24667_24706__$1,temp__5457__auto___24705,comp,old_reactions,vec__24660,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24659){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24667_24696,chunk__24668_24697,count__24669_24698,i__24670_24699,ref_24712,seq__24667_24706__$1,temp__5457__auto___24705,comp,old_reactions,vec__24660,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24659))
);
}


var G__24713 = cljs.core.next.call(null,seq__24667_24706__$1);
var G__24714 = null;
var G__24715 = (0);
var G__24716 = (0);
seq__24667_24696 = G__24713;
chunk__24668_24697 = G__24714;
count__24669_24698 = G__24715;
i__24670_24699 = G__24716;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24659;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24717 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24671_24718 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24672_24719 = null;
var count__24673_24720 = (0);
var i__24674_24721 = (0);
while(true){
if((i__24674_24721 < count__24673_24720)){
var ref_24722 = cljs.core._nth.call(null,chunk__24672_24719,i__24674_24721);
cljs.core.remove_watch.call(null,ref_24722,key_24717);


var G__24723 = seq__24671_24718;
var G__24724 = chunk__24672_24719;
var G__24725 = count__24673_24720;
var G__24726 = (i__24674_24721 + (1));
seq__24671_24718 = G__24723;
chunk__24672_24719 = G__24724;
count__24673_24720 = G__24725;
i__24674_24721 = G__24726;
continue;
} else {
var temp__5457__auto___24727 = cljs.core.seq.call(null,seq__24671_24718);
if(temp__5457__auto___24727){
var seq__24671_24728__$1 = temp__5457__auto___24727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24671_24728__$1)){
var c__4319__auto___24729 = cljs.core.chunk_first.call(null,seq__24671_24728__$1);
var G__24730 = cljs.core.chunk_rest.call(null,seq__24671_24728__$1);
var G__24731 = c__4319__auto___24729;
var G__24732 = cljs.core.count.call(null,c__4319__auto___24729);
var G__24733 = (0);
seq__24671_24718 = G__24730;
chunk__24672_24719 = G__24731;
count__24673_24720 = G__24732;
i__24674_24721 = G__24733;
continue;
} else {
var ref_24734 = cljs.core.first.call(null,seq__24671_24728__$1);
cljs.core.remove_watch.call(null,ref_24734,key_24717);


var G__24735 = cljs.core.next.call(null,seq__24671_24728__$1);
var G__24736 = null;
var G__24737 = (0);
var G__24738 = (0);
seq__24671_24718 = G__24735;
chunk__24672_24719 = G__24736;
count__24673_24720 = G__24737;
i__24674_24721 = G__24738;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24745 = arguments.length;
var i__4500__auto___24746 = (0);
while(true){
if((i__4500__auto___24746 < len__4499__auto___24745)){
args__4502__auto__.push((arguments[i__4500__auto___24746]));

var G__24747 = (i__4500__auto___24746 + (1));
i__4500__auto___24746 = G__24747;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24742){
var map__24743 = p__24742;
var map__24743__$1 = ((((!((map__24743 == null)))?(((((map__24743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24743):map__24743);
var options = map__24743__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq24739){
var G__24740 = cljs.core.first.call(null,seq24739);
var seq24739__$1 = cljs.core.next.call(null,seq24739);
var G__24741 = cljs.core.first.call(null,seq24739__$1);
var seq24739__$2 = cljs.core.next.call(null,seq24739__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24740,G__24741,seq24739__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24751 = arguments.length;
var i__4500__auto___24752 = (0);
while(true){
if((i__4500__auto___24752 < len__4499__auto___24751)){
args__4502__auto__.push((arguments[i__4500__auto___24752]));

var G__24753 = (i__4500__auto___24752 + (1));
i__4500__auto___24752 = G__24753;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq24748){
var G__24749 = cljs.core.first.call(null,seq24748);
var seq24748__$1 = cljs.core.next.call(null,seq24748);
var G__24750 = cljs.core.first.call(null,seq24748__$1);
var seq24748__$2 = cljs.core.next.call(null,seq24748__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24749,G__24750,seq24748__$2);
});


//# sourceMappingURL=core.js.map?rel=1530931618642
