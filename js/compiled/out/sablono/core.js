// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23834__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23831 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23832 = cljs.core.seq.call(null,vec__23831);
var first__23833 = cljs.core.first.call(null,seq__23832);
var seq__23832__$1 = cljs.core.next.call(null,seq__23832);
var tag = first__23833;
var body = seq__23832__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23835__i = 0, G__23835__a = new Array(arguments.length -  0);
while (G__23835__i < G__23835__a.length) {G__23835__a[G__23835__i] = arguments[G__23835__i + 0]; ++G__23835__i;}
  args = new cljs.core.IndexedSeq(G__23835__a,0,null);
} 
return G__23834__delegate.call(this,args);};
G__23834.cljs$lang$maxFixedArity = 0;
G__23834.cljs$lang$applyTo = (function (arglist__23836){
var args = cljs.core.seq(arglist__23836);
return G__23834__delegate(args);
});
G__23834.cljs$core$IFn$_invoke$arity$variadic = G__23834__delegate;
return G__23834;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__23837(s__23838){
return (new cljs.core.LazySeq(null,(function (){
var s__23838__$1 = s__23838;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23838__$1);
if(temp__5457__auto__){
var s__23838__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23838__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23838__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23840 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23839 = (0);
while(true){
if((i__23839 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__23839);
cljs.core.chunk_append.call(null,b__23840,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23841 = (i__23839 + (1));
i__23839 = G__23841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23840),sablono$core$update_arglists_$_iter__23837.call(null,cljs.core.chunk_rest.call(null,s__23838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23840),null);
}
} else {
var args = cljs.core.first.call(null,s__23838__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23837.call(null,cljs.core.rest.call(null,s__23838__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23847 = arguments.length;
var i__4500__auto___23848 = (0);
while(true){
if((i__4500__auto___23848 < len__4499__auto___23847)){
args__4502__auto__.push((arguments[i__4500__auto___23848]));

var G__23849 = (i__4500__auto___23848 + (1));
i__4500__auto___23848 = G__23849;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__23843(s__23844){
return (new cljs.core.LazySeq(null,(function (){
var s__23844__$1 = s__23844;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23844__$1);
if(temp__5457__auto__){
var s__23844__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23844__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23844__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23846 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23845 = (0);
while(true){
if((i__23845 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__23845);
cljs.core.chunk_append.call(null,b__23846,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23850 = (i__23845 + (1));
i__23845 = G__23850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23846),sablono$core$iter__23843.call(null,cljs.core.chunk_rest.call(null,s__23844__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23846),null);
}
} else {
var style = cljs.core.first.call(null,s__23844__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23843.call(null,cljs.core.rest.call(null,s__23844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23842){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23842));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23851 = (function sablono$core$link_to23851(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23854 = arguments.length;
var i__4500__auto___23855 = (0);
while(true){
if((i__4500__auto___23855 < len__4499__auto___23854)){
args__4502__auto__.push((arguments[i__4500__auto___23855]));

var G__23856 = (i__4500__auto___23855 + (1));
i__4500__auto___23855 = G__23856;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23851.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to23851.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23851.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23851.cljs$lang$applyTo = (function (seq23852){
var G__23853 = cljs.core.first.call(null,seq23852);
var seq23852__$1 = cljs.core.next.call(null,seq23852);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23853,seq23852__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23851);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23857 = (function sablono$core$mail_to23857(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23864 = arguments.length;
var i__4500__auto___23865 = (0);
while(true){
if((i__4500__auto___23865 < len__4499__auto___23864)){
args__4502__auto__.push((arguments[i__4500__auto___23865]));

var G__23866 = (i__4500__auto___23865 + (1));
i__4500__auto___23865 = G__23866;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23857.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to23857.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23860){
var vec__23861 = p__23860;
var content = cljs.core.nth.call(null,vec__23861,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23857.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23857.cljs$lang$applyTo = (function (seq23858){
var G__23859 = cljs.core.first.call(null,seq23858);
var seq23858__$1 = cljs.core.next.call(null,seq23858);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23859,seq23858__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23857);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23867 = (function sablono$core$unordered_list23867(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list23867_$_iter__23868(s__23869){
return (new cljs.core.LazySeq(null,(function (){
var s__23869__$1 = s__23869;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23869__$1);
if(temp__5457__auto__){
var s__23869__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23869__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23869__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23871 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23870 = (0);
while(true){
if((i__23870 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23870);
cljs.core.chunk_append.call(null,b__23871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23872 = (i__23870 + (1));
i__23870 = G__23872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23871),sablono$core$unordered_list23867_$_iter__23868.call(null,cljs.core.chunk_rest.call(null,s__23869__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23871),null);
}
} else {
var x = cljs.core.first.call(null,s__23869__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23867_$_iter__23868.call(null,cljs.core.rest.call(null,s__23869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23867);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23873 = (function sablono$core$ordered_list23873(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list23873_$_iter__23874(s__23875){
return (new cljs.core.LazySeq(null,(function (){
var s__23875__$1 = s__23875;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23875__$1);
if(temp__5457__auto__){
var s__23875__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23875__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23875__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23877 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23876 = (0);
while(true){
if((i__23876 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23876);
cljs.core.chunk_append.call(null,b__23877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23878 = (i__23876 + (1));
i__23876 = G__23878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23877),sablono$core$ordered_list23873_$_iter__23874.call(null,cljs.core.chunk_rest.call(null,s__23875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23877),null);
}
} else {
var x = cljs.core.first.call(null,s__23875__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23873_$_iter__23874.call(null,cljs.core.rest.call(null,s__23875__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23873);
/**
 * Create an image element.
 */
sablono.core.image23879 = (function sablono$core$image23879(var_args){
var G__23881 = arguments.length;
switch (G__23881) {
case 1:
return sablono.core.image23879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23879.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23879.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23879.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23879);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23883_SHARP_,p2__23884_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23883_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23884_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23885_SHARP_,p2__23886_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23885_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23886_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23888 = arguments.length;
switch (G__23888) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23890 = (function sablono$core$color_field23890(var_args){
var G__23892 = arguments.length;
switch (G__23892) {
case 1:
return sablono.core.color_field23890.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23890.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23890.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23651__auto__);
});

sablono.core.color_field23890.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.color_field23890.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23890);

/**
 * Creates a date input field.
 */
sablono.core.date_field23893 = (function sablono$core$date_field23893(var_args){
var G__23895 = arguments.length;
switch (G__23895) {
case 1:
return sablono.core.date_field23893.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23893.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23893.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23651__auto__);
});

sablono.core.date_field23893.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.date_field23893.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23893);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23896 = (function sablono$core$datetime_field23896(var_args){
var G__23898 = arguments.length;
switch (G__23898) {
case 1:
return sablono.core.datetime_field23896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23896.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23651__auto__);
});

sablono.core.datetime_field23896.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.datetime_field23896.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23896);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23899 = (function sablono$core$datetime_local_field23899(var_args){
var G__23901 = arguments.length;
switch (G__23901) {
case 1:
return sablono.core.datetime_local_field23899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23899.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23651__auto__);
});

sablono.core.datetime_local_field23899.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.datetime_local_field23899.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23899);

/**
 * Creates a email input field.
 */
sablono.core.email_field23902 = (function sablono$core$email_field23902(var_args){
var G__23904 = arguments.length;
switch (G__23904) {
case 1:
return sablono.core.email_field23902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23902.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23651__auto__);
});

sablono.core.email_field23902.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.email_field23902.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23902);

/**
 * Creates a file input field.
 */
sablono.core.file_field23905 = (function sablono$core$file_field23905(var_args){
var G__23907 = arguments.length;
switch (G__23907) {
case 1:
return sablono.core.file_field23905.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23905.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23905.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23651__auto__);
});

sablono.core.file_field23905.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.file_field23905.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23905);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23908 = (function sablono$core$hidden_field23908(var_args){
var G__23910 = arguments.length;
switch (G__23910) {
case 1:
return sablono.core.hidden_field23908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23908.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23651__auto__);
});

sablono.core.hidden_field23908.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.hidden_field23908.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23908);

/**
 * Creates a month input field.
 */
sablono.core.month_field23911 = (function sablono$core$month_field23911(var_args){
var G__23913 = arguments.length;
switch (G__23913) {
case 1:
return sablono.core.month_field23911.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23911.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23911.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23651__auto__);
});

sablono.core.month_field23911.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.month_field23911.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23911);

/**
 * Creates a number input field.
 */
sablono.core.number_field23914 = (function sablono$core$number_field23914(var_args){
var G__23916 = arguments.length;
switch (G__23916) {
case 1:
return sablono.core.number_field23914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23914.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23651__auto__);
});

sablono.core.number_field23914.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.number_field23914.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23914);

/**
 * Creates a password input field.
 */
sablono.core.password_field23917 = (function sablono$core$password_field23917(var_args){
var G__23919 = arguments.length;
switch (G__23919) {
case 1:
return sablono.core.password_field23917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23917.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23651__auto__);
});

sablono.core.password_field23917.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.password_field23917.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23917);

/**
 * Creates a range input field.
 */
sablono.core.range_field23920 = (function sablono$core$range_field23920(var_args){
var G__23922 = arguments.length;
switch (G__23922) {
case 1:
return sablono.core.range_field23920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23920.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23651__auto__);
});

sablono.core.range_field23920.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.range_field23920.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23920);

/**
 * Creates a search input field.
 */
sablono.core.search_field23923 = (function sablono$core$search_field23923(var_args){
var G__23925 = arguments.length;
switch (G__23925) {
case 1:
return sablono.core.search_field23923.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23923.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23923.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23651__auto__);
});

sablono.core.search_field23923.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.search_field23923.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23923);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23926 = (function sablono$core$tel_field23926(var_args){
var G__23928 = arguments.length;
switch (G__23928) {
case 1:
return sablono.core.tel_field23926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23926.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23651__auto__);
});

sablono.core.tel_field23926.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.tel_field23926.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23926);

/**
 * Creates a text input field.
 */
sablono.core.text_field23929 = (function sablono$core$text_field23929(var_args){
var G__23931 = arguments.length;
switch (G__23931) {
case 1:
return sablono.core.text_field23929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23929.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23651__auto__);
});

sablono.core.text_field23929.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.text_field23929.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23929);

/**
 * Creates a time input field.
 */
sablono.core.time_field23932 = (function sablono$core$time_field23932(var_args){
var G__23934 = arguments.length;
switch (G__23934) {
case 1:
return sablono.core.time_field23932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23932.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23651__auto__);
});

sablono.core.time_field23932.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.time_field23932.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23932);

/**
 * Creates a url input field.
 */
sablono.core.url_field23935 = (function sablono$core$url_field23935(var_args){
var G__23937 = arguments.length;
switch (G__23937) {
case 1:
return sablono.core.url_field23935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23935.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23651__auto__);
});

sablono.core.url_field23935.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.url_field23935.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23935);

/**
 * Creates a week input field.
 */
sablono.core.week_field23938 = (function sablono$core$week_field23938(var_args){
var G__23940 = arguments.length;
switch (G__23940) {
case 1:
return sablono.core.week_field23938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23938.cljs$core$IFn$_invoke$arity$1 = (function (name__23651__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23651__auto__);
});

sablono.core.week_field23938.cljs$core$IFn$_invoke$arity$2 = (function (name__23651__auto__,value__23652__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23651__auto__,value__23652__auto__);
});

sablono.core.week_field23938.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23938);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23958 = (function sablono$core$check_box23958(var_args){
var G__23960 = arguments.length;
switch (G__23960) {
case 1:
return sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23958.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23958.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23958);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23962 = (function sablono$core$radio_button23962(var_args){
var G__23964 = arguments.length;
switch (G__23964) {
case 1:
return sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23962.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23962.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23962);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23966 = (function sablono$core$select_options23966(coll){
var iter__4292__auto__ = (function sablono$core$select_options23966_$_iter__23967(s__23968){
return (new cljs.core.LazySeq(null,(function (){
var s__23968__$1 = s__23968;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23968__$1);
if(temp__5457__auto__){
var s__23968__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23968__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23968__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23970 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23969 = (0);
while(true){
if((i__23969 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__23969);
cljs.core.chunk_append.call(null,b__23970,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23971 = x;
var text = cljs.core.nth.call(null,vec__23971,(0),null);
var val = cljs.core.nth.call(null,vec__23971,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23971,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23966.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23977 = (i__23969 + (1));
i__23969 = G__23977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23970),sablono$core$select_options23966_$_iter__23967.call(null,cljs.core.chunk_rest.call(null,s__23968__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23970),null);
}
} else {
var x = cljs.core.first.call(null,s__23968__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23974 = x;
var text = cljs.core.nth.call(null,vec__23974,(0),null);
var val = cljs.core.nth.call(null,vec__23974,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23974,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23966.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23966_$_iter__23967.call(null,cljs.core.rest.call(null,s__23968__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23966);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23978 = (function sablono$core$drop_down23978(var_args){
var G__23980 = arguments.length;
switch (G__23980) {
case 2:
return sablono.core.drop_down23978.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23978.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23978.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23978.call(null,name,options,null);
});

sablono.core.drop_down23978.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23978.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23978);
/**
 * Creates a text area element.
 */
sablono.core.text_area23982 = (function sablono$core$text_area23982(var_args){
var G__23984 = arguments.length;
switch (G__23984) {
case 1:
return sablono.core.text_area23982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23982.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23982.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23982.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23982);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23986 = (function sablono$core$label23986(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23986);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23987 = (function sablono$core$submit_button23987(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23987);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23988 = (function sablono$core$reset_button23988(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23988);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23989 = (function sablono$core$form_to23989(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23996 = arguments.length;
var i__4500__auto___23997 = (0);
while(true){
if((i__4500__auto___23997 < len__4499__auto___23996)){
args__4502__auto__.push((arguments[i__4500__auto___23997]));

var G__23998 = (i__4500__auto___23997 + (1));
i__4500__auto___23997 = G__23998;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23989.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to23989.cljs$core$IFn$_invoke$arity$variadic = (function (p__23992,body){
var vec__23993 = p__23992;
var method = cljs.core.nth.call(null,vec__23993,(0),null);
var action = cljs.core.nth.call(null,vec__23993,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23989.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23989.cljs$lang$applyTo = (function (seq23990){
var G__23991 = cljs.core.first.call(null,seq23990);
var seq23990__$1 = cljs.core.next.call(null,seq23990);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23991,seq23990__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23989);

//# sourceMappingURL=core.js.map?rel=1530931618021
