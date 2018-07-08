// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38612){
var map__38613 = p__38612;
var map__38613__$1 = ((((!((map__38613 == null)))?(((((map__38613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38613):map__38613);
var m = map__38613__$1;
var n = cljs.core.get.call(null,map__38613__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38615_38637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38616_38638 = null;
var count__38617_38639 = (0);
var i__38618_38640 = (0);
while(true){
if((i__38618_38640 < count__38617_38639)){
var f_38641 = cljs.core._nth.call(null,chunk__38616_38638,i__38618_38640);
cljs.core.println.call(null,"  ",f_38641);


var G__38642 = seq__38615_38637;
var G__38643 = chunk__38616_38638;
var G__38644 = count__38617_38639;
var G__38645 = (i__38618_38640 + (1));
seq__38615_38637 = G__38642;
chunk__38616_38638 = G__38643;
count__38617_38639 = G__38644;
i__38618_38640 = G__38645;
continue;
} else {
var temp__5457__auto___38646 = cljs.core.seq.call(null,seq__38615_38637);
if(temp__5457__auto___38646){
var seq__38615_38647__$1 = temp__5457__auto___38646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38615_38647__$1)){
var c__4319__auto___38648 = cljs.core.chunk_first.call(null,seq__38615_38647__$1);
var G__38649 = cljs.core.chunk_rest.call(null,seq__38615_38647__$1);
var G__38650 = c__4319__auto___38648;
var G__38651 = cljs.core.count.call(null,c__4319__auto___38648);
var G__38652 = (0);
seq__38615_38637 = G__38649;
chunk__38616_38638 = G__38650;
count__38617_38639 = G__38651;
i__38618_38640 = G__38652;
continue;
} else {
var f_38653 = cljs.core.first.call(null,seq__38615_38647__$1);
cljs.core.println.call(null,"  ",f_38653);


var G__38654 = cljs.core.next.call(null,seq__38615_38647__$1);
var G__38655 = null;
var G__38656 = (0);
var G__38657 = (0);
seq__38615_38637 = G__38654;
chunk__38616_38638 = G__38655;
count__38617_38639 = G__38656;
i__38618_38640 = G__38657;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38658 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38658);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38658)))?cljs.core.second.call(null,arglists_38658):arglists_38658));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38619_38659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38620_38660 = null;
var count__38621_38661 = (0);
var i__38622_38662 = (0);
while(true){
if((i__38622_38662 < count__38621_38661)){
var vec__38623_38663 = cljs.core._nth.call(null,chunk__38620_38660,i__38622_38662);
var name_38664 = cljs.core.nth.call(null,vec__38623_38663,(0),null);
var map__38626_38665 = cljs.core.nth.call(null,vec__38623_38663,(1),null);
var map__38626_38666__$1 = ((((!((map__38626_38665 == null)))?(((((map__38626_38665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38626_38665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38626_38665):map__38626_38665);
var doc_38667 = cljs.core.get.call(null,map__38626_38666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38668 = cljs.core.get.call(null,map__38626_38666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38664);

cljs.core.println.call(null," ",arglists_38668);

if(cljs.core.truth_(doc_38667)){
cljs.core.println.call(null," ",doc_38667);
} else {
}


var G__38669 = seq__38619_38659;
var G__38670 = chunk__38620_38660;
var G__38671 = count__38621_38661;
var G__38672 = (i__38622_38662 + (1));
seq__38619_38659 = G__38669;
chunk__38620_38660 = G__38670;
count__38621_38661 = G__38671;
i__38622_38662 = G__38672;
continue;
} else {
var temp__5457__auto___38673 = cljs.core.seq.call(null,seq__38619_38659);
if(temp__5457__auto___38673){
var seq__38619_38674__$1 = temp__5457__auto___38673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38619_38674__$1)){
var c__4319__auto___38675 = cljs.core.chunk_first.call(null,seq__38619_38674__$1);
var G__38676 = cljs.core.chunk_rest.call(null,seq__38619_38674__$1);
var G__38677 = c__4319__auto___38675;
var G__38678 = cljs.core.count.call(null,c__4319__auto___38675);
var G__38679 = (0);
seq__38619_38659 = G__38676;
chunk__38620_38660 = G__38677;
count__38621_38661 = G__38678;
i__38622_38662 = G__38679;
continue;
} else {
var vec__38628_38680 = cljs.core.first.call(null,seq__38619_38674__$1);
var name_38681 = cljs.core.nth.call(null,vec__38628_38680,(0),null);
var map__38631_38682 = cljs.core.nth.call(null,vec__38628_38680,(1),null);
var map__38631_38683__$1 = ((((!((map__38631_38682 == null)))?(((((map__38631_38682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38631_38682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38631_38682):map__38631_38682);
var doc_38684 = cljs.core.get.call(null,map__38631_38683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38685 = cljs.core.get.call(null,map__38631_38683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38681);

cljs.core.println.call(null," ",arglists_38685);

if(cljs.core.truth_(doc_38684)){
cljs.core.println.call(null," ",doc_38684);
} else {
}


var G__38686 = cljs.core.next.call(null,seq__38619_38674__$1);
var G__38687 = null;
var G__38688 = (0);
var G__38689 = (0);
seq__38619_38659 = G__38686;
chunk__38620_38660 = G__38687;
count__38621_38661 = G__38688;
i__38622_38662 = G__38689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38633 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38634 = null;
var count__38635 = (0);
var i__38636 = (0);
while(true){
if((i__38636 < count__38635)){
var role = cljs.core._nth.call(null,chunk__38634,i__38636);
var temp__5457__auto___38690__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38690__$1)){
var spec_38691 = temp__5457__auto___38690__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38691));
} else {
}


var G__38692 = seq__38633;
var G__38693 = chunk__38634;
var G__38694 = count__38635;
var G__38695 = (i__38636 + (1));
seq__38633 = G__38692;
chunk__38634 = G__38693;
count__38635 = G__38694;
i__38636 = G__38695;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38633);
if(temp__5457__auto____$1){
var seq__38633__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38633__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38633__$1);
var G__38696 = cljs.core.chunk_rest.call(null,seq__38633__$1);
var G__38697 = c__4319__auto__;
var G__38698 = cljs.core.count.call(null,c__4319__auto__);
var G__38699 = (0);
seq__38633 = G__38696;
chunk__38634 = G__38697;
count__38635 = G__38698;
i__38636 = G__38699;
continue;
} else {
var role = cljs.core.first.call(null,seq__38633__$1);
var temp__5457__auto___38700__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38700__$2)){
var spec_38701 = temp__5457__auto___38700__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38701));
} else {
}


var G__38702 = cljs.core.next.call(null,seq__38633__$1);
var G__38703 = null;
var G__38704 = (0);
var G__38705 = (0);
seq__38633 = G__38702;
chunk__38634 = G__38703;
count__38635 = G__38704;
i__38636 = G__38705;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530931639567
