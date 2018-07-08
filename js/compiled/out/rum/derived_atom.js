// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__21868 = arguments.length;
switch (G__21868) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21869 = opts;
var map__21869__$1 = ((((!((map__21869 == null)))?(((((map__21869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21869):map__21869);
var ref = cljs.core.get.call(null,map__21869__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21869__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21871 = cljs.core.count.call(null,refs);
switch (G__21871) {
case (1):
var vec__21872 = refs;
var a = cljs.core.nth.call(null,vec__21872,(0),null);
return ((function (vec__21872,a,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21872,a,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21875 = refs;
var a = cljs.core.nth.call(null,vec__21875,(0),null);
var b = cljs.core.nth.call(null,vec__21875,(1),null);
return ((function (vec__21875,a,b,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21875,a,b,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21878 = refs;
var a = cljs.core.nth.call(null,vec__21878,(0),null);
var b = cljs.core.nth.call(null,vec__21878,(1),null);
var c = cljs.core.nth.call(null,vec__21878,(2),null);
return ((function (vec__21878,a,b,c,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21878,a,b,c,G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21871,map__21869,map__21869__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21881 = ref;
cljs.core.reset_BANG_.call(null,G__21881,recalc.call(null));

return G__21881;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21869,map__21869__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21869,map__21869__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21869,map__21869__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21869,map__21869__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21882_21888 = cljs.core.seq.call(null,refs);
var chunk__21883_21889 = null;
var count__21884_21890 = (0);
var i__21885_21891 = (0);
while(true){
if((i__21885_21891 < count__21884_21890)){
var ref_21892__$1 = cljs.core._nth.call(null,chunk__21883_21889,i__21885_21891);
cljs.core.add_watch.call(null,ref_21892__$1,key,watch);


var G__21893 = seq__21882_21888;
var G__21894 = chunk__21883_21889;
var G__21895 = count__21884_21890;
var G__21896 = (i__21885_21891 + (1));
seq__21882_21888 = G__21893;
chunk__21883_21889 = G__21894;
count__21884_21890 = G__21895;
i__21885_21891 = G__21896;
continue;
} else {
var temp__5457__auto___21897 = cljs.core.seq.call(null,seq__21882_21888);
if(temp__5457__auto___21897){
var seq__21882_21898__$1 = temp__5457__auto___21897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21882_21898__$1)){
var c__4319__auto___21899 = cljs.core.chunk_first.call(null,seq__21882_21898__$1);
var G__21900 = cljs.core.chunk_rest.call(null,seq__21882_21898__$1);
var G__21901 = c__4319__auto___21899;
var G__21902 = cljs.core.count.call(null,c__4319__auto___21899);
var G__21903 = (0);
seq__21882_21888 = G__21900;
chunk__21883_21889 = G__21901;
count__21884_21890 = G__21902;
i__21885_21891 = G__21903;
continue;
} else {
var ref_21904__$1 = cljs.core.first.call(null,seq__21882_21898__$1);
cljs.core.add_watch.call(null,ref_21904__$1,key,watch);


var G__21905 = cljs.core.next.call(null,seq__21882_21898__$1);
var G__21906 = null;
var G__21907 = (0);
var G__21908 = (0);
seq__21882_21888 = G__21905;
chunk__21883_21889 = G__21906;
count__21884_21890 = G__21907;
i__21885_21891 = G__21908;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1530931616477
