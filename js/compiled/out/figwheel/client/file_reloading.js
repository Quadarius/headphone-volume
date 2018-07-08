// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36479_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36479_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36480 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36481 = null;
var count__36482 = (0);
var i__36483 = (0);
while(true){
if((i__36483 < count__36482)){
var n = cljs.core._nth.call(null,chunk__36481,i__36483);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36484 = seq__36480;
var G__36485 = chunk__36481;
var G__36486 = count__36482;
var G__36487 = (i__36483 + (1));
seq__36480 = G__36484;
chunk__36481 = G__36485;
count__36482 = G__36486;
i__36483 = G__36487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36480);
if(temp__5457__auto__){
var seq__36480__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36480__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36480__$1);
var G__36488 = cljs.core.chunk_rest.call(null,seq__36480__$1);
var G__36489 = c__4319__auto__;
var G__36490 = cljs.core.count.call(null,c__4319__auto__);
var G__36491 = (0);
seq__36480 = G__36488;
chunk__36481 = G__36489;
count__36482 = G__36490;
i__36483 = G__36491;
continue;
} else {
var n = cljs.core.first.call(null,seq__36480__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36492 = cljs.core.next.call(null,seq__36480__$1);
var G__36493 = null;
var G__36494 = (0);
var G__36495 = (0);
seq__36480 = G__36492;
chunk__36481 = G__36493;
count__36482 = G__36494;
i__36483 = G__36495;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__36496){
var vec__36497 = p__36496;
var _ = cljs.core.nth.call(null,vec__36497,(0),null);
var v = cljs.core.nth.call(null,vec__36497,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__36500){
var vec__36501 = p__36500;
var k = cljs.core.nth.call(null,vec__36501,(0),null);
var v = cljs.core.nth.call(null,vec__36501,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36513_36521 = cljs.core.seq.call(null,deps);
var chunk__36514_36522 = null;
var count__36515_36523 = (0);
var i__36516_36524 = (0);
while(true){
if((i__36516_36524 < count__36515_36523)){
var dep_36525 = cljs.core._nth.call(null,chunk__36514_36522,i__36516_36524);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36525;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36525));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36525,(depth + (1)),state);
} else {
}


var G__36526 = seq__36513_36521;
var G__36527 = chunk__36514_36522;
var G__36528 = count__36515_36523;
var G__36529 = (i__36516_36524 + (1));
seq__36513_36521 = G__36526;
chunk__36514_36522 = G__36527;
count__36515_36523 = G__36528;
i__36516_36524 = G__36529;
continue;
} else {
var temp__5457__auto___36530 = cljs.core.seq.call(null,seq__36513_36521);
if(temp__5457__auto___36530){
var seq__36513_36531__$1 = temp__5457__auto___36530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36513_36531__$1)){
var c__4319__auto___36532 = cljs.core.chunk_first.call(null,seq__36513_36531__$1);
var G__36533 = cljs.core.chunk_rest.call(null,seq__36513_36531__$1);
var G__36534 = c__4319__auto___36532;
var G__36535 = cljs.core.count.call(null,c__4319__auto___36532);
var G__36536 = (0);
seq__36513_36521 = G__36533;
chunk__36514_36522 = G__36534;
count__36515_36523 = G__36535;
i__36516_36524 = G__36536;
continue;
} else {
var dep_36537 = cljs.core.first.call(null,seq__36513_36531__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36537;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36537));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36537,(depth + (1)),state);
} else {
}


var G__36538 = cljs.core.next.call(null,seq__36513_36531__$1);
var G__36539 = null;
var G__36540 = (0);
var G__36541 = (0);
seq__36513_36521 = G__36538;
chunk__36514_36522 = G__36539;
count__36515_36523 = G__36540;
i__36516_36524 = G__36541;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36517){
var vec__36518 = p__36517;
var seq__36519 = cljs.core.seq.call(null,vec__36518);
var first__36520 = cljs.core.first.call(null,seq__36519);
var seq__36519__$1 = cljs.core.next.call(null,seq__36519);
var x = first__36520;
var xs = seq__36519__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36518,seq__36519,first__36520,seq__36519__$1,x,xs,get_deps__$1){
return (function (p1__36504_SHARP_){
return clojure.set.difference.call(null,p1__36504_SHARP_,x);
});})(vec__36518,seq__36519,first__36520,seq__36519__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36542 = cljs.core.seq.call(null,provides);
var chunk__36543 = null;
var count__36544 = (0);
var i__36545 = (0);
while(true){
if((i__36545 < count__36544)){
var prov = cljs.core._nth.call(null,chunk__36543,i__36545);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36546_36554 = cljs.core.seq.call(null,requires);
var chunk__36547_36555 = null;
var count__36548_36556 = (0);
var i__36549_36557 = (0);
while(true){
if((i__36549_36557 < count__36548_36556)){
var req_36558 = cljs.core._nth.call(null,chunk__36547_36555,i__36549_36557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36558,prov);


var G__36559 = seq__36546_36554;
var G__36560 = chunk__36547_36555;
var G__36561 = count__36548_36556;
var G__36562 = (i__36549_36557 + (1));
seq__36546_36554 = G__36559;
chunk__36547_36555 = G__36560;
count__36548_36556 = G__36561;
i__36549_36557 = G__36562;
continue;
} else {
var temp__5457__auto___36563 = cljs.core.seq.call(null,seq__36546_36554);
if(temp__5457__auto___36563){
var seq__36546_36564__$1 = temp__5457__auto___36563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36546_36564__$1)){
var c__4319__auto___36565 = cljs.core.chunk_first.call(null,seq__36546_36564__$1);
var G__36566 = cljs.core.chunk_rest.call(null,seq__36546_36564__$1);
var G__36567 = c__4319__auto___36565;
var G__36568 = cljs.core.count.call(null,c__4319__auto___36565);
var G__36569 = (0);
seq__36546_36554 = G__36566;
chunk__36547_36555 = G__36567;
count__36548_36556 = G__36568;
i__36549_36557 = G__36569;
continue;
} else {
var req_36570 = cljs.core.first.call(null,seq__36546_36564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36570,prov);


var G__36571 = cljs.core.next.call(null,seq__36546_36564__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36546_36554 = G__36571;
chunk__36547_36555 = G__36572;
count__36548_36556 = G__36573;
i__36549_36557 = G__36574;
continue;
}
} else {
}
}
break;
}


var G__36575 = seq__36542;
var G__36576 = chunk__36543;
var G__36577 = count__36544;
var G__36578 = (i__36545 + (1));
seq__36542 = G__36575;
chunk__36543 = G__36576;
count__36544 = G__36577;
i__36545 = G__36578;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36542);
if(temp__5457__auto__){
var seq__36542__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36542__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36542__$1);
var G__36579 = cljs.core.chunk_rest.call(null,seq__36542__$1);
var G__36580 = c__4319__auto__;
var G__36581 = cljs.core.count.call(null,c__4319__auto__);
var G__36582 = (0);
seq__36542 = G__36579;
chunk__36543 = G__36580;
count__36544 = G__36581;
i__36545 = G__36582;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36542__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36550_36583 = cljs.core.seq.call(null,requires);
var chunk__36551_36584 = null;
var count__36552_36585 = (0);
var i__36553_36586 = (0);
while(true){
if((i__36553_36586 < count__36552_36585)){
var req_36587 = cljs.core._nth.call(null,chunk__36551_36584,i__36553_36586);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36587,prov);


var G__36588 = seq__36550_36583;
var G__36589 = chunk__36551_36584;
var G__36590 = count__36552_36585;
var G__36591 = (i__36553_36586 + (1));
seq__36550_36583 = G__36588;
chunk__36551_36584 = G__36589;
count__36552_36585 = G__36590;
i__36553_36586 = G__36591;
continue;
} else {
var temp__5457__auto___36592__$1 = cljs.core.seq.call(null,seq__36550_36583);
if(temp__5457__auto___36592__$1){
var seq__36550_36593__$1 = temp__5457__auto___36592__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36550_36593__$1)){
var c__4319__auto___36594 = cljs.core.chunk_first.call(null,seq__36550_36593__$1);
var G__36595 = cljs.core.chunk_rest.call(null,seq__36550_36593__$1);
var G__36596 = c__4319__auto___36594;
var G__36597 = cljs.core.count.call(null,c__4319__auto___36594);
var G__36598 = (0);
seq__36550_36583 = G__36595;
chunk__36551_36584 = G__36596;
count__36552_36585 = G__36597;
i__36553_36586 = G__36598;
continue;
} else {
var req_36599 = cljs.core.first.call(null,seq__36550_36593__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36599,prov);


var G__36600 = cljs.core.next.call(null,seq__36550_36593__$1);
var G__36601 = null;
var G__36602 = (0);
var G__36603 = (0);
seq__36550_36583 = G__36600;
chunk__36551_36584 = G__36601;
count__36552_36585 = G__36602;
i__36553_36586 = G__36603;
continue;
}
} else {
}
}
break;
}


var G__36604 = cljs.core.next.call(null,seq__36542__$1);
var G__36605 = null;
var G__36606 = (0);
var G__36607 = (0);
seq__36542 = G__36604;
chunk__36543 = G__36605;
count__36544 = G__36606;
i__36545 = G__36607;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36608_36612 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36609_36613 = null;
var count__36610_36614 = (0);
var i__36611_36615 = (0);
while(true){
if((i__36611_36615 < count__36610_36614)){
var ns_36616 = cljs.core._nth.call(null,chunk__36609_36613,i__36611_36615);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36616);


var G__36617 = seq__36608_36612;
var G__36618 = chunk__36609_36613;
var G__36619 = count__36610_36614;
var G__36620 = (i__36611_36615 + (1));
seq__36608_36612 = G__36617;
chunk__36609_36613 = G__36618;
count__36610_36614 = G__36619;
i__36611_36615 = G__36620;
continue;
} else {
var temp__5457__auto___36621 = cljs.core.seq.call(null,seq__36608_36612);
if(temp__5457__auto___36621){
var seq__36608_36622__$1 = temp__5457__auto___36621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36608_36622__$1)){
var c__4319__auto___36623 = cljs.core.chunk_first.call(null,seq__36608_36622__$1);
var G__36624 = cljs.core.chunk_rest.call(null,seq__36608_36622__$1);
var G__36625 = c__4319__auto___36623;
var G__36626 = cljs.core.count.call(null,c__4319__auto___36623);
var G__36627 = (0);
seq__36608_36612 = G__36624;
chunk__36609_36613 = G__36625;
count__36610_36614 = G__36626;
i__36611_36615 = G__36627;
continue;
} else {
var ns_36628 = cljs.core.first.call(null,seq__36608_36622__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36628);


var G__36629 = cljs.core.next.call(null,seq__36608_36622__$1);
var G__36630 = null;
var G__36631 = (0);
var G__36632 = (0);
seq__36608_36612 = G__36629;
chunk__36609_36613 = G__36630;
count__36610_36614 = G__36631;
i__36611_36615 = G__36632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36633__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36634__i = 0, G__36634__a = new Array(arguments.length -  0);
while (G__36634__i < G__36634__a.length) {G__36634__a[G__36634__i] = arguments[G__36634__i + 0]; ++G__36634__i;}
  args = new cljs.core.IndexedSeq(G__36634__a,0,null);
} 
return G__36633__delegate.call(this,args);};
G__36633.cljs$lang$maxFixedArity = 0;
G__36633.cljs$lang$applyTo = (function (arglist__36635){
var args = cljs.core.seq(arglist__36635);
return G__36633__delegate(args);
});
G__36633.cljs$core$IFn$_invoke$arity$variadic = G__36633__delegate;
return G__36633;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36636_SHARP_,p2__36637_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36636_SHARP_)].join('')),p2__36637_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36638_SHARP_,p2__36639_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36638_SHARP_)].join(''),p2__36639_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36640 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36640.addCallback(((function (G__36640){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36640))
);

G__36640.addErrback(((function (G__36640){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36640))
);

return G__36640;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36641){if((e36641 instanceof Error)){
var e = e36641;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36641;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36642){if((e36642 instanceof Error)){
var e = e36642;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36642;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36643 = cljs.core._EQ_;
var expr__36644 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36643.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36644))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36643.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36644))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36643.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36644))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36643,expr__36644){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36643,expr__36644))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36646,callback){
var map__36647 = p__36646;
var map__36647__$1 = ((((!((map__36647 == null)))?(((((map__36647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36647):map__36647);
var file_msg = map__36647__$1;
var request_url = cljs.core.get.call(null,map__36647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36647,map__36647__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36647,map__36647__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__){
return (function (state_36685){
var state_val_36686 = (state_36685[(1)]);
if((state_val_36686 === (7))){
var inst_36681 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36687_36713 = state_36685__$1;
(statearr_36687_36713[(2)] = inst_36681);

(statearr_36687_36713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (1))){
var state_36685__$1 = state_36685;
var statearr_36688_36714 = state_36685__$1;
(statearr_36688_36714[(2)] = null);

(statearr_36688_36714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (4))){
var inst_36651 = (state_36685[(7)]);
var inst_36651__$1 = (state_36685[(2)]);
var state_36685__$1 = (function (){var statearr_36689 = state_36685;
(statearr_36689[(7)] = inst_36651__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36651__$1)){
var statearr_36690_36715 = state_36685__$1;
(statearr_36690_36715[(1)] = (5));

} else {
var statearr_36691_36716 = state_36685__$1;
(statearr_36691_36716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (15))){
var inst_36664 = (state_36685[(8)]);
var inst_36666 = (state_36685[(9)]);
var inst_36668 = inst_36666.call(null,inst_36664);
var state_36685__$1 = state_36685;
var statearr_36692_36717 = state_36685__$1;
(statearr_36692_36717[(2)] = inst_36668);

(statearr_36692_36717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (13))){
var inst_36675 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36693_36718 = state_36685__$1;
(statearr_36693_36718[(2)] = inst_36675);

(statearr_36693_36718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (6))){
var state_36685__$1 = state_36685;
var statearr_36694_36719 = state_36685__$1;
(statearr_36694_36719[(2)] = null);

(statearr_36694_36719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (17))){
var inst_36672 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
var statearr_36695_36720 = state_36685__$1;
(statearr_36695_36720[(2)] = inst_36672);

(statearr_36695_36720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (3))){
var inst_36683 = (state_36685[(2)]);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36685__$1,inst_36683);
} else {
if((state_val_36686 === (12))){
var state_36685__$1 = state_36685;
var statearr_36696_36721 = state_36685__$1;
(statearr_36696_36721[(2)] = null);

(statearr_36696_36721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (2))){
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36685__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36686 === (11))){
var inst_36656 = (state_36685[(10)]);
var inst_36662 = figwheel.client.file_reloading.blocking_load.call(null,inst_36656);
var state_36685__$1 = state_36685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36685__$1,(14),inst_36662);
} else {
if((state_val_36686 === (9))){
var inst_36656 = (state_36685[(10)]);
var state_36685__$1 = state_36685;
if(cljs.core.truth_(inst_36656)){
var statearr_36697_36722 = state_36685__$1;
(statearr_36697_36722[(1)] = (11));

} else {
var statearr_36698_36723 = state_36685__$1;
(statearr_36698_36723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (5))){
var inst_36657 = (state_36685[(11)]);
var inst_36651 = (state_36685[(7)]);
var inst_36656 = cljs.core.nth.call(null,inst_36651,(0),null);
var inst_36657__$1 = cljs.core.nth.call(null,inst_36651,(1),null);
var state_36685__$1 = (function (){var statearr_36699 = state_36685;
(statearr_36699[(10)] = inst_36656);

(statearr_36699[(11)] = inst_36657__$1);

return statearr_36699;
})();
if(cljs.core.truth_(inst_36657__$1)){
var statearr_36700_36724 = state_36685__$1;
(statearr_36700_36724[(1)] = (8));

} else {
var statearr_36701_36725 = state_36685__$1;
(statearr_36701_36725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (14))){
var inst_36656 = (state_36685[(10)]);
var inst_36666 = (state_36685[(9)]);
var inst_36664 = (state_36685[(2)]);
var inst_36665 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36666__$1 = cljs.core.get.call(null,inst_36665,inst_36656);
var state_36685__$1 = (function (){var statearr_36702 = state_36685;
(statearr_36702[(8)] = inst_36664);

(statearr_36702[(9)] = inst_36666__$1);

return statearr_36702;
})();
if(cljs.core.truth_(inst_36666__$1)){
var statearr_36703_36726 = state_36685__$1;
(statearr_36703_36726[(1)] = (15));

} else {
var statearr_36704_36727 = state_36685__$1;
(statearr_36704_36727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (16))){
var inst_36664 = (state_36685[(8)]);
var inst_36670 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36664);
var state_36685__$1 = state_36685;
var statearr_36705_36728 = state_36685__$1;
(statearr_36705_36728[(2)] = inst_36670);

(statearr_36705_36728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (10))){
var inst_36677 = (state_36685[(2)]);
var state_36685__$1 = (function (){var statearr_36706 = state_36685;
(statearr_36706[(12)] = inst_36677);

return statearr_36706;
})();
var statearr_36707_36729 = state_36685__$1;
(statearr_36707_36729[(2)] = null);

(statearr_36707_36729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36686 === (8))){
var inst_36657 = (state_36685[(11)]);
var inst_36659 = eval(inst_36657);
var state_36685__$1 = state_36685;
var statearr_36708_36730 = state_36685__$1;
(statearr_36708_36730[(2)] = inst_36659);

(statearr_36708_36730[(1)] = (10));


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
});})(c__31730__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31574__auto__ = null;
var figwheel$client$file_reloading$state_machine__31574__auto____0 = (function (){
var statearr_36709 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36709[(0)] = figwheel$client$file_reloading$state_machine__31574__auto__);

(statearr_36709[(1)] = (1));

return statearr_36709;
});
var figwheel$client$file_reloading$state_machine__31574__auto____1 = (function (state_36685){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_36685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e36710){if((e36710 instanceof Object)){
var ex__31577__auto__ = e36710;
var statearr_36711_36731 = state_36685;
(statearr_36711_36731[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36732 = state_36685;
state_36685 = G__36732;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31574__auto__ = function(state_36685){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31574__auto____1.call(this,state_36685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31574__auto____0;
figwheel$client$file_reloading$state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31574__auto____1;
return figwheel$client$file_reloading$state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__))
})();
var state__31732__auto__ = (function (){var statearr_36712 = f__31731__auto__.call(null);
(statearr_36712[(6)] = c__31730__auto__);

return statearr_36712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__))
);

return c__31730__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36734 = arguments.length;
switch (G__36734) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36736,callback){
var map__36737 = p__36736;
var map__36737__$1 = ((((!((map__36737 == null)))?(((((map__36737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36737):map__36737);
var file_msg = map__36737__$1;
var namespace = cljs.core.get.call(null,map__36737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36737,map__36737__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36737,map__36737__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36739){
var map__36740 = p__36739;
var map__36740__$1 = ((((!((map__36740 == null)))?(((((map__36740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36740):map__36740);
var file_msg = map__36740__$1;
var namespace = cljs.core.get.call(null,map__36740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36742){
var map__36743 = p__36742;
var map__36743__$1 = ((((!((map__36743 == null)))?(((((map__36743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36743):map__36743);
var file_msg = map__36743__$1;
var namespace = cljs.core.get.call(null,map__36743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36745,callback){
var map__36746 = p__36745;
var map__36746__$1 = ((((!((map__36746 == null)))?(((((map__36746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36746):map__36746);
var file_msg = map__36746__$1;
var request_url = cljs.core.get.call(null,map__36746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31730__auto___36796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___36796,out){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___36796,out){
return (function (state_36781){
var state_val_36782 = (state_36781[(1)]);
if((state_val_36782 === (1))){
var inst_36755 = cljs.core.seq.call(null,files);
var inst_36756 = cljs.core.first.call(null,inst_36755);
var inst_36757 = cljs.core.next.call(null,inst_36755);
var inst_36758 = files;
var state_36781__$1 = (function (){var statearr_36783 = state_36781;
(statearr_36783[(7)] = inst_36757);

(statearr_36783[(8)] = inst_36758);

(statearr_36783[(9)] = inst_36756);

return statearr_36783;
})();
var statearr_36784_36797 = state_36781__$1;
(statearr_36784_36797[(2)] = null);

(statearr_36784_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36782 === (2))){
var inst_36758 = (state_36781[(8)]);
var inst_36764 = (state_36781[(10)]);
var inst_36763 = cljs.core.seq.call(null,inst_36758);
var inst_36764__$1 = cljs.core.first.call(null,inst_36763);
var inst_36765 = cljs.core.next.call(null,inst_36763);
var inst_36766 = (inst_36764__$1 == null);
var inst_36767 = cljs.core.not.call(null,inst_36766);
var state_36781__$1 = (function (){var statearr_36785 = state_36781;
(statearr_36785[(11)] = inst_36765);

(statearr_36785[(10)] = inst_36764__$1);

return statearr_36785;
})();
if(inst_36767){
var statearr_36786_36798 = state_36781__$1;
(statearr_36786_36798[(1)] = (4));

} else {
var statearr_36787_36799 = state_36781__$1;
(statearr_36787_36799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36782 === (3))){
var inst_36779 = (state_36781[(2)]);
var state_36781__$1 = state_36781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36781__$1,inst_36779);
} else {
if((state_val_36782 === (4))){
var inst_36764 = (state_36781[(10)]);
var inst_36769 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36764);
var state_36781__$1 = state_36781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36781__$1,(7),inst_36769);
} else {
if((state_val_36782 === (5))){
var inst_36775 = cljs.core.async.close_BANG_.call(null,out);
var state_36781__$1 = state_36781;
var statearr_36788_36800 = state_36781__$1;
(statearr_36788_36800[(2)] = inst_36775);

(statearr_36788_36800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36782 === (6))){
var inst_36777 = (state_36781[(2)]);
var state_36781__$1 = state_36781;
var statearr_36789_36801 = state_36781__$1;
(statearr_36789_36801[(2)] = inst_36777);

(statearr_36789_36801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36782 === (7))){
var inst_36765 = (state_36781[(11)]);
var inst_36771 = (state_36781[(2)]);
var inst_36772 = cljs.core.async.put_BANG_.call(null,out,inst_36771);
var inst_36758 = inst_36765;
var state_36781__$1 = (function (){var statearr_36790 = state_36781;
(statearr_36790[(8)] = inst_36758);

(statearr_36790[(12)] = inst_36772);

return statearr_36790;
})();
var statearr_36791_36802 = state_36781__$1;
(statearr_36791_36802[(2)] = null);

(statearr_36791_36802[(1)] = (2));


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
});})(c__31730__auto___36796,out))
;
return ((function (switch__31573__auto__,c__31730__auto___36796,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____0 = (function (){
var statearr_36792 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36792[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__);

(statearr_36792[(1)] = (1));

return statearr_36792;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____1 = (function (state_36781){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_36781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e36793){if((e36793 instanceof Object)){
var ex__31577__auto__ = e36793;
var statearr_36794_36803 = state_36781;
(statearr_36794_36803[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36804 = state_36781;
state_36781 = G__36804;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__ = function(state_36781){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____1.call(this,state_36781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___36796,out))
})();
var state__31732__auto__ = (function (){var statearr_36795 = f__31731__auto__.call(null);
(statearr_36795[(6)] = c__31730__auto___36796);

return statearr_36795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___36796,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36805,opts){
var map__36806 = p__36805;
var map__36806__$1 = ((((!((map__36806 == null)))?(((((map__36806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36806):map__36806);
var eval_body = cljs.core.get.call(null,map__36806__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36808){var e = e36808;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36809_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36809_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36810){
var vec__36811 = p__36810;
var k = cljs.core.nth.call(null,vec__36811,(0),null);
var v = cljs.core.nth.call(null,vec__36811,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36814){
var vec__36815 = p__36814;
var k = cljs.core.nth.call(null,vec__36815,(0),null);
var v = cljs.core.nth.call(null,vec__36815,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36821,p__36822){
var map__36823 = p__36821;
var map__36823__$1 = ((((!((map__36823 == null)))?(((((map__36823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36823):map__36823);
var opts = map__36823__$1;
var before_jsload = cljs.core.get.call(null,map__36823__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36823__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36823__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36824 = p__36822;
var map__36824__$1 = ((((!((map__36824 == null)))?(((((map__36824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36824):map__36824);
var msg = map__36824__$1;
var files = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36824__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36978){
var state_val_36979 = (state_36978[(1)]);
if((state_val_36979 === (7))){
var inst_36840 = (state_36978[(7)]);
var inst_36839 = (state_36978[(8)]);
var inst_36841 = (state_36978[(9)]);
var inst_36838 = (state_36978[(10)]);
var inst_36846 = cljs.core._nth.call(null,inst_36839,inst_36841);
var inst_36847 = figwheel.client.file_reloading.eval_body.call(null,inst_36846,opts);
var inst_36848 = (inst_36841 + (1));
var tmp36980 = inst_36840;
var tmp36981 = inst_36839;
var tmp36982 = inst_36838;
var inst_36838__$1 = tmp36982;
var inst_36839__$1 = tmp36981;
var inst_36840__$1 = tmp36980;
var inst_36841__$1 = inst_36848;
var state_36978__$1 = (function (){var statearr_36983 = state_36978;
(statearr_36983[(7)] = inst_36840__$1);

(statearr_36983[(8)] = inst_36839__$1);

(statearr_36983[(11)] = inst_36847);

(statearr_36983[(9)] = inst_36841__$1);

(statearr_36983[(10)] = inst_36838__$1);

return statearr_36983;
})();
var statearr_36984_37067 = state_36978__$1;
(statearr_36984_37067[(2)] = null);

(statearr_36984_37067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (20))){
var inst_36881 = (state_36978[(12)]);
var inst_36889 = figwheel.client.file_reloading.sort_files.call(null,inst_36881);
var state_36978__$1 = state_36978;
var statearr_36985_37068 = state_36978__$1;
(statearr_36985_37068[(2)] = inst_36889);

(statearr_36985_37068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (27))){
var state_36978__$1 = state_36978;
var statearr_36986_37069 = state_36978__$1;
(statearr_36986_37069[(2)] = null);

(statearr_36986_37069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (1))){
var inst_36830 = (state_36978[(13)]);
var inst_36827 = before_jsload.call(null,files);
var inst_36828 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36829 = (function (){return ((function (inst_36830,inst_36827,inst_36828,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36818_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36818_SHARP_);
});
;})(inst_36830,inst_36827,inst_36828,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36830__$1 = cljs.core.filter.call(null,inst_36829,files);
var inst_36831 = cljs.core.not_empty.call(null,inst_36830__$1);
var state_36978__$1 = (function (){var statearr_36987 = state_36978;
(statearr_36987[(14)] = inst_36827);

(statearr_36987[(13)] = inst_36830__$1);

(statearr_36987[(15)] = inst_36828);

return statearr_36987;
})();
if(cljs.core.truth_(inst_36831)){
var statearr_36988_37070 = state_36978__$1;
(statearr_36988_37070[(1)] = (2));

} else {
var statearr_36989_37071 = state_36978__$1;
(statearr_36989_37071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (24))){
var state_36978__$1 = state_36978;
var statearr_36990_37072 = state_36978__$1;
(statearr_36990_37072[(2)] = null);

(statearr_36990_37072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (39))){
var inst_36931 = (state_36978[(16)]);
var state_36978__$1 = state_36978;
var statearr_36991_37073 = state_36978__$1;
(statearr_36991_37073[(2)] = inst_36931);

(statearr_36991_37073[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (46))){
var inst_36973 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_36992_37074 = state_36978__$1;
(statearr_36992_37074[(2)] = inst_36973);

(statearr_36992_37074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (4))){
var inst_36875 = (state_36978[(2)]);
var inst_36876 = cljs.core.List.EMPTY;
var inst_36877 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36876);
var inst_36878 = (function (){return ((function (inst_36875,inst_36876,inst_36877,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36819_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36819_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36819_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36819_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_36875,inst_36876,inst_36877,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36879 = cljs.core.filter.call(null,inst_36878,files);
var inst_36880 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36881 = cljs.core.concat.call(null,inst_36879,inst_36880);
var state_36978__$1 = (function (){var statearr_36993 = state_36978;
(statearr_36993[(17)] = inst_36875);

(statearr_36993[(18)] = inst_36877);

(statearr_36993[(12)] = inst_36881);

return statearr_36993;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36994_37075 = state_36978__$1;
(statearr_36994_37075[(1)] = (16));

} else {
var statearr_36995_37076 = state_36978__$1;
(statearr_36995_37076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (15))){
var inst_36865 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_36996_37077 = state_36978__$1;
(statearr_36996_37077[(2)] = inst_36865);

(statearr_36996_37077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (21))){
var inst_36891 = (state_36978[(19)]);
var inst_36891__$1 = (state_36978[(2)]);
var inst_36892 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36891__$1);
var state_36978__$1 = (function (){var statearr_36997 = state_36978;
(statearr_36997[(19)] = inst_36891__$1);

return statearr_36997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36978__$1,(22),inst_36892);
} else {
if((state_val_36979 === (31))){
var inst_36976 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36978__$1,inst_36976);
} else {
if((state_val_36979 === (32))){
var inst_36931 = (state_36978[(16)]);
var inst_36936 = inst_36931.cljs$lang$protocol_mask$partition0$;
var inst_36937 = (inst_36936 & (64));
var inst_36938 = inst_36931.cljs$core$ISeq$;
var inst_36939 = (cljs.core.PROTOCOL_SENTINEL === inst_36938);
var inst_36940 = ((inst_36937) || (inst_36939));
var state_36978__$1 = state_36978;
if(cljs.core.truth_(inst_36940)){
var statearr_36998_37078 = state_36978__$1;
(statearr_36998_37078[(1)] = (35));

} else {
var statearr_36999_37079 = state_36978__$1;
(statearr_36999_37079[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (40))){
var inst_36953 = (state_36978[(20)]);
var inst_36952 = (state_36978[(2)]);
var inst_36953__$1 = cljs.core.get.call(null,inst_36952,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36954 = cljs.core.get.call(null,inst_36952,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36955 = cljs.core.not_empty.call(null,inst_36953__$1);
var state_36978__$1 = (function (){var statearr_37000 = state_36978;
(statearr_37000[(21)] = inst_36954);

(statearr_37000[(20)] = inst_36953__$1);

return statearr_37000;
})();
if(cljs.core.truth_(inst_36955)){
var statearr_37001_37080 = state_36978__$1;
(statearr_37001_37080[(1)] = (41));

} else {
var statearr_37002_37081 = state_36978__$1;
(statearr_37002_37081[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (33))){
var state_36978__$1 = state_36978;
var statearr_37003_37082 = state_36978__$1;
(statearr_37003_37082[(2)] = false);

(statearr_37003_37082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (13))){
var inst_36851 = (state_36978[(22)]);
var inst_36855 = cljs.core.chunk_first.call(null,inst_36851);
var inst_36856 = cljs.core.chunk_rest.call(null,inst_36851);
var inst_36857 = cljs.core.count.call(null,inst_36855);
var inst_36838 = inst_36856;
var inst_36839 = inst_36855;
var inst_36840 = inst_36857;
var inst_36841 = (0);
var state_36978__$1 = (function (){var statearr_37004 = state_36978;
(statearr_37004[(7)] = inst_36840);

(statearr_37004[(8)] = inst_36839);

(statearr_37004[(9)] = inst_36841);

(statearr_37004[(10)] = inst_36838);

return statearr_37004;
})();
var statearr_37005_37083 = state_36978__$1;
(statearr_37005_37083[(2)] = null);

(statearr_37005_37083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (22))){
var inst_36894 = (state_36978[(23)]);
var inst_36895 = (state_36978[(24)]);
var inst_36899 = (state_36978[(25)]);
var inst_36891 = (state_36978[(19)]);
var inst_36894__$1 = (state_36978[(2)]);
var inst_36895__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36894__$1);
var inst_36896 = (function (){var all_files = inst_36891;
var res_SINGLEQUOTE_ = inst_36894__$1;
var res = inst_36895__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36894,inst_36895,inst_36899,inst_36891,inst_36894__$1,inst_36895__$1,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36820_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36820_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36894,inst_36895,inst_36899,inst_36891,inst_36894__$1,inst_36895__$1,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36897 = cljs.core.filter.call(null,inst_36896,inst_36894__$1);
var inst_36898 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36899__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36898);
var inst_36900 = cljs.core.not_empty.call(null,inst_36899__$1);
var state_36978__$1 = (function (){var statearr_37006 = state_36978;
(statearr_37006[(26)] = inst_36897);

(statearr_37006[(23)] = inst_36894__$1);

(statearr_37006[(24)] = inst_36895__$1);

(statearr_37006[(25)] = inst_36899__$1);

return statearr_37006;
})();
if(cljs.core.truth_(inst_36900)){
var statearr_37007_37084 = state_36978__$1;
(statearr_37007_37084[(1)] = (23));

} else {
var statearr_37008_37085 = state_36978__$1;
(statearr_37008_37085[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (36))){
var state_36978__$1 = state_36978;
var statearr_37009_37086 = state_36978__$1;
(statearr_37009_37086[(2)] = false);

(statearr_37009_37086[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (41))){
var inst_36953 = (state_36978[(20)]);
var inst_36957 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36958 = cljs.core.map.call(null,inst_36957,inst_36953);
var inst_36959 = cljs.core.pr_str.call(null,inst_36958);
var inst_36960 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36959)].join('');
var inst_36961 = figwheel.client.utils.log.call(null,inst_36960);
var state_36978__$1 = state_36978;
var statearr_37010_37087 = state_36978__$1;
(statearr_37010_37087[(2)] = inst_36961);

(statearr_37010_37087[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (43))){
var inst_36954 = (state_36978[(21)]);
var inst_36964 = (state_36978[(2)]);
var inst_36965 = cljs.core.not_empty.call(null,inst_36954);
var state_36978__$1 = (function (){var statearr_37011 = state_36978;
(statearr_37011[(27)] = inst_36964);

return statearr_37011;
})();
if(cljs.core.truth_(inst_36965)){
var statearr_37012_37088 = state_36978__$1;
(statearr_37012_37088[(1)] = (44));

} else {
var statearr_37013_37089 = state_36978__$1;
(statearr_37013_37089[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (29))){
var inst_36897 = (state_36978[(26)]);
var inst_36894 = (state_36978[(23)]);
var inst_36895 = (state_36978[(24)]);
var inst_36899 = (state_36978[(25)]);
var inst_36891 = (state_36978[(19)]);
var inst_36931 = (state_36978[(16)]);
var inst_36927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36930 = (function (){var all_files = inst_36891;
var res_SINGLEQUOTE_ = inst_36894;
var res = inst_36895;
var files_not_loaded = inst_36897;
var dependencies_that_loaded = inst_36899;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36931,inst_36927,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36929){
var map__37014 = p__36929;
var map__37014__$1 = ((((!((map__37014 == null)))?(((((map__37014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37014):map__37014);
var namespace = cljs.core.get.call(null,map__37014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36931,inst_36927,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36931__$1 = cljs.core.group_by.call(null,inst_36930,inst_36897);
var inst_36933 = (inst_36931__$1 == null);
var inst_36934 = cljs.core.not.call(null,inst_36933);
var state_36978__$1 = (function (){var statearr_37016 = state_36978;
(statearr_37016[(28)] = inst_36927);

(statearr_37016[(16)] = inst_36931__$1);

return statearr_37016;
})();
if(inst_36934){
var statearr_37017_37090 = state_36978__$1;
(statearr_37017_37090[(1)] = (32));

} else {
var statearr_37018_37091 = state_36978__$1;
(statearr_37018_37091[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (44))){
var inst_36954 = (state_36978[(21)]);
var inst_36967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36954);
var inst_36968 = cljs.core.pr_str.call(null,inst_36967);
var inst_36969 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36968)].join('');
var inst_36970 = figwheel.client.utils.log.call(null,inst_36969);
var state_36978__$1 = state_36978;
var statearr_37019_37092 = state_36978__$1;
(statearr_37019_37092[(2)] = inst_36970);

(statearr_37019_37092[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (6))){
var inst_36872 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_37020_37093 = state_36978__$1;
(statearr_37020_37093[(2)] = inst_36872);

(statearr_37020_37093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (28))){
var inst_36897 = (state_36978[(26)]);
var inst_36924 = (state_36978[(2)]);
var inst_36925 = cljs.core.not_empty.call(null,inst_36897);
var state_36978__$1 = (function (){var statearr_37021 = state_36978;
(statearr_37021[(29)] = inst_36924);

return statearr_37021;
})();
if(cljs.core.truth_(inst_36925)){
var statearr_37022_37094 = state_36978__$1;
(statearr_37022_37094[(1)] = (29));

} else {
var statearr_37023_37095 = state_36978__$1;
(statearr_37023_37095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (25))){
var inst_36895 = (state_36978[(24)]);
var inst_36911 = (state_36978[(2)]);
var inst_36912 = cljs.core.not_empty.call(null,inst_36895);
var state_36978__$1 = (function (){var statearr_37024 = state_36978;
(statearr_37024[(30)] = inst_36911);

return statearr_37024;
})();
if(cljs.core.truth_(inst_36912)){
var statearr_37025_37096 = state_36978__$1;
(statearr_37025_37096[(1)] = (26));

} else {
var statearr_37026_37097 = state_36978__$1;
(statearr_37026_37097[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (34))){
var inst_36947 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
if(cljs.core.truth_(inst_36947)){
var statearr_37027_37098 = state_36978__$1;
(statearr_37027_37098[(1)] = (38));

} else {
var statearr_37028_37099 = state_36978__$1;
(statearr_37028_37099[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (17))){
var state_36978__$1 = state_36978;
var statearr_37029_37100 = state_36978__$1;
(statearr_37029_37100[(2)] = recompile_dependents);

(statearr_37029_37100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (3))){
var state_36978__$1 = state_36978;
var statearr_37030_37101 = state_36978__$1;
(statearr_37030_37101[(2)] = null);

(statearr_37030_37101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (12))){
var inst_36868 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_37031_37102 = state_36978__$1;
(statearr_37031_37102[(2)] = inst_36868);

(statearr_37031_37102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (2))){
var inst_36830 = (state_36978[(13)]);
var inst_36837 = cljs.core.seq.call(null,inst_36830);
var inst_36838 = inst_36837;
var inst_36839 = null;
var inst_36840 = (0);
var inst_36841 = (0);
var state_36978__$1 = (function (){var statearr_37032 = state_36978;
(statearr_37032[(7)] = inst_36840);

(statearr_37032[(8)] = inst_36839);

(statearr_37032[(9)] = inst_36841);

(statearr_37032[(10)] = inst_36838);

return statearr_37032;
})();
var statearr_37033_37103 = state_36978__$1;
(statearr_37033_37103[(2)] = null);

(statearr_37033_37103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (23))){
var inst_36897 = (state_36978[(26)]);
var inst_36894 = (state_36978[(23)]);
var inst_36895 = (state_36978[(24)]);
var inst_36899 = (state_36978[(25)]);
var inst_36891 = (state_36978[(19)]);
var inst_36902 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36904 = (function (){var all_files = inst_36891;
var res_SINGLEQUOTE_ = inst_36894;
var res = inst_36895;
var files_not_loaded = inst_36897;
var dependencies_that_loaded = inst_36899;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36902,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36903){
var map__37034 = p__36903;
var map__37034__$1 = ((((!((map__37034 == null)))?(((((map__37034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37034):map__37034);
var request_url = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36902,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36905 = cljs.core.reverse.call(null,inst_36899);
var inst_36906 = cljs.core.map.call(null,inst_36904,inst_36905);
var inst_36907 = cljs.core.pr_str.call(null,inst_36906);
var inst_36908 = figwheel.client.utils.log.call(null,inst_36907);
var state_36978__$1 = (function (){var statearr_37036 = state_36978;
(statearr_37036[(31)] = inst_36902);

return statearr_37036;
})();
var statearr_37037_37104 = state_36978__$1;
(statearr_37037_37104[(2)] = inst_36908);

(statearr_37037_37104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (35))){
var state_36978__$1 = state_36978;
var statearr_37038_37105 = state_36978__$1;
(statearr_37038_37105[(2)] = true);

(statearr_37038_37105[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (19))){
var inst_36881 = (state_36978[(12)]);
var inst_36887 = figwheel.client.file_reloading.expand_files.call(null,inst_36881);
var state_36978__$1 = state_36978;
var statearr_37039_37106 = state_36978__$1;
(statearr_37039_37106[(2)] = inst_36887);

(statearr_37039_37106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (11))){
var state_36978__$1 = state_36978;
var statearr_37040_37107 = state_36978__$1;
(statearr_37040_37107[(2)] = null);

(statearr_37040_37107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (9))){
var inst_36870 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_37041_37108 = state_36978__$1;
(statearr_37041_37108[(2)] = inst_36870);

(statearr_37041_37108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (5))){
var inst_36840 = (state_36978[(7)]);
var inst_36841 = (state_36978[(9)]);
var inst_36843 = (inst_36841 < inst_36840);
var inst_36844 = inst_36843;
var state_36978__$1 = state_36978;
if(cljs.core.truth_(inst_36844)){
var statearr_37042_37109 = state_36978__$1;
(statearr_37042_37109[(1)] = (7));

} else {
var statearr_37043_37110 = state_36978__$1;
(statearr_37043_37110[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (14))){
var inst_36851 = (state_36978[(22)]);
var inst_36860 = cljs.core.first.call(null,inst_36851);
var inst_36861 = figwheel.client.file_reloading.eval_body.call(null,inst_36860,opts);
var inst_36862 = cljs.core.next.call(null,inst_36851);
var inst_36838 = inst_36862;
var inst_36839 = null;
var inst_36840 = (0);
var inst_36841 = (0);
var state_36978__$1 = (function (){var statearr_37044 = state_36978;
(statearr_37044[(7)] = inst_36840);

(statearr_37044[(32)] = inst_36861);

(statearr_37044[(8)] = inst_36839);

(statearr_37044[(9)] = inst_36841);

(statearr_37044[(10)] = inst_36838);

return statearr_37044;
})();
var statearr_37045_37111 = state_36978__$1;
(statearr_37045_37111[(2)] = null);

(statearr_37045_37111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (45))){
var state_36978__$1 = state_36978;
var statearr_37046_37112 = state_36978__$1;
(statearr_37046_37112[(2)] = null);

(statearr_37046_37112[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (26))){
var inst_36897 = (state_36978[(26)]);
var inst_36894 = (state_36978[(23)]);
var inst_36895 = (state_36978[(24)]);
var inst_36899 = (state_36978[(25)]);
var inst_36891 = (state_36978[(19)]);
var inst_36914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36916 = (function (){var all_files = inst_36891;
var res_SINGLEQUOTE_ = inst_36894;
var res = inst_36895;
var files_not_loaded = inst_36897;
var dependencies_that_loaded = inst_36899;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36914,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36915){
var map__37047 = p__36915;
var map__37047__$1 = ((((!((map__37047 == null)))?(((((map__37047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37047):map__37047);
var namespace = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36914,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36917 = cljs.core.map.call(null,inst_36916,inst_36895);
var inst_36918 = cljs.core.pr_str.call(null,inst_36917);
var inst_36919 = figwheel.client.utils.log.call(null,inst_36918);
var inst_36920 = (function (){var all_files = inst_36891;
var res_SINGLEQUOTE_ = inst_36894;
var res = inst_36895;
var files_not_loaded = inst_36897;
var dependencies_that_loaded = inst_36899;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36914,inst_36916,inst_36917,inst_36918,inst_36919,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36897,inst_36894,inst_36895,inst_36899,inst_36891,inst_36914,inst_36916,inst_36917,inst_36918,inst_36919,state_val_36979,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36921 = setTimeout(inst_36920,(10));
var state_36978__$1 = (function (){var statearr_37049 = state_36978;
(statearr_37049[(33)] = inst_36914);

(statearr_37049[(34)] = inst_36919);

return statearr_37049;
})();
var statearr_37050_37113 = state_36978__$1;
(statearr_37050_37113[(2)] = inst_36921);

(statearr_37050_37113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (16))){
var state_36978__$1 = state_36978;
var statearr_37051_37114 = state_36978__$1;
(statearr_37051_37114[(2)] = reload_dependents);

(statearr_37051_37114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (38))){
var inst_36931 = (state_36978[(16)]);
var inst_36949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36931);
var state_36978__$1 = state_36978;
var statearr_37052_37115 = state_36978__$1;
(statearr_37052_37115[(2)] = inst_36949);

(statearr_37052_37115[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (30))){
var state_36978__$1 = state_36978;
var statearr_37053_37116 = state_36978__$1;
(statearr_37053_37116[(2)] = null);

(statearr_37053_37116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (10))){
var inst_36851 = (state_36978[(22)]);
var inst_36853 = cljs.core.chunked_seq_QMARK_.call(null,inst_36851);
var state_36978__$1 = state_36978;
if(inst_36853){
var statearr_37054_37117 = state_36978__$1;
(statearr_37054_37117[(1)] = (13));

} else {
var statearr_37055_37118 = state_36978__$1;
(statearr_37055_37118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (18))){
var inst_36885 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
if(cljs.core.truth_(inst_36885)){
var statearr_37056_37119 = state_36978__$1;
(statearr_37056_37119[(1)] = (19));

} else {
var statearr_37057_37120 = state_36978__$1;
(statearr_37057_37120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (42))){
var state_36978__$1 = state_36978;
var statearr_37058_37121 = state_36978__$1;
(statearr_37058_37121[(2)] = null);

(statearr_37058_37121[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (37))){
var inst_36944 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_37059_37122 = state_36978__$1;
(statearr_37059_37122[(2)] = inst_36944);

(statearr_37059_37122[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (8))){
var inst_36851 = (state_36978[(22)]);
var inst_36838 = (state_36978[(10)]);
var inst_36851__$1 = cljs.core.seq.call(null,inst_36838);
var state_36978__$1 = (function (){var statearr_37060 = state_36978;
(statearr_37060[(22)] = inst_36851__$1);

return statearr_37060;
})();
if(inst_36851__$1){
var statearr_37061_37123 = state_36978__$1;
(statearr_37061_37123[(1)] = (10));

} else {
var statearr_37062_37124 = state_36978__$1;
(statearr_37062_37124[(1)] = (11));

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
}
});})(c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31573__auto__,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____0 = (function (){
var statearr_37063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37063[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__);

(statearr_37063[(1)] = (1));

return statearr_37063;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____1 = (function (state_36978){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_36978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e37064){if((e37064 instanceof Object)){
var ex__31577__auto__ = e37064;
var statearr_37065_37125 = state_36978;
(statearr_37065_37125[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37126 = state_36978;
state_36978 = G__37126;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__ = function(state_36978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____1.call(this,state_36978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31732__auto__ = (function (){var statearr_37066 = f__31731__auto__.call(null);
(statearr_37066[(6)] = c__31730__auto__);

return statearr_37066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__,map__36823,map__36823__$1,opts,before_jsload,on_jsload,reload_dependents,map__36824,map__36824__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31730__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37129,link){
var map__37130 = p__37129;
var map__37130__$1 = ((((!((map__37130 == null)))?(((((map__37130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37130):map__37130);
var file = cljs.core.get.call(null,map__37130__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37130,map__37130__$1,file){
return (function (p1__37127_SHARP_,p2__37128_SHARP_){
if(cljs.core._EQ_.call(null,p1__37127_SHARP_,p2__37128_SHARP_)){
return p1__37127_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37130,map__37130__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37133){
var map__37134 = p__37133;
var map__37134__$1 = ((((!((map__37134 == null)))?(((((map__37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37134):map__37134);
var match_length = cljs.core.get.call(null,map__37134__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37134__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37132_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37132_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37136_SHARP_,p2__37137_SHARP_){
return cljs.core.assoc.call(null,p1__37136_SHARP_,cljs.core.get.call(null,p2__37137_SHARP_,key),p2__37137_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37138 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37138);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37138);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37139,p__37140){
var map__37141 = p__37139;
var map__37141__$1 = ((((!((map__37141 == null)))?(((((map__37141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37141):map__37141);
var on_cssload = cljs.core.get.call(null,map__37141__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37142 = p__37140;
var map__37142__$1 = ((((!((map__37142 == null)))?(((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var files_msg = map__37142__$1;
var files = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530931636189
