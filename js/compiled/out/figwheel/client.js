// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39578){if((e39578 instanceof Error)){
var e = e39578;
return "Error: Unable to stringify";
} else {
throw e39578;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39581 = arguments.length;
switch (G__39581) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39579_SHARP_){
if(typeof p1__39579_SHARP_ === 'string'){
return p1__39579_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39579_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39584 = arguments.length;
var i__4500__auto___39585 = (0);
while(true){
if((i__4500__auto___39585 < len__4499__auto___39584)){
args__4502__auto__.push((arguments[i__4500__auto___39585]));

var G__39586 = (i__4500__auto___39585 + (1));
i__4500__auto___39585 = G__39586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39583){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39583));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39588 = arguments.length;
var i__4500__auto___39589 = (0);
while(true){
if((i__4500__auto___39589 < len__4499__auto___39588)){
args__4502__auto__.push((arguments[i__4500__auto___39589]));

var G__39590 = (i__4500__auto___39589 + (1));
i__4500__auto___39589 = G__39590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39587){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39587));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39591){
var map__39592 = p__39591;
var map__39592__$1 = ((((!((map__39592 == null)))?(((((map__39592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39592):map__39592);
var message = cljs.core.get.call(null,map__39592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39592__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31730__auto___39671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___39671,ch){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___39671,ch){
return (function (state_39643){
var state_val_39644 = (state_39643[(1)]);
if((state_val_39644 === (7))){
var inst_39639 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39645_39672 = state_39643__$1;
(statearr_39645_39672[(2)] = inst_39639);

(statearr_39645_39672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (1))){
var state_39643__$1 = state_39643;
var statearr_39646_39673 = state_39643__$1;
(statearr_39646_39673[(2)] = null);

(statearr_39646_39673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (4))){
var inst_39596 = (state_39643[(7)]);
var inst_39596__$1 = (state_39643[(2)]);
var state_39643__$1 = (function (){var statearr_39647 = state_39643;
(statearr_39647[(7)] = inst_39596__$1);

return statearr_39647;
})();
if(cljs.core.truth_(inst_39596__$1)){
var statearr_39648_39674 = state_39643__$1;
(statearr_39648_39674[(1)] = (5));

} else {
var statearr_39649_39675 = state_39643__$1;
(statearr_39649_39675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (15))){
var inst_39603 = (state_39643[(8)]);
var inst_39618 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39603);
var inst_39619 = cljs.core.first.call(null,inst_39618);
var inst_39620 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39619);
var inst_39621 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39620)].join('');
var inst_39622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39621);
var state_39643__$1 = state_39643;
var statearr_39650_39676 = state_39643__$1;
(statearr_39650_39676[(2)] = inst_39622);

(statearr_39650_39676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (13))){
var inst_39627 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39651_39677 = state_39643__$1;
(statearr_39651_39677[(2)] = inst_39627);

(statearr_39651_39677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (6))){
var state_39643__$1 = state_39643;
var statearr_39652_39678 = state_39643__$1;
(statearr_39652_39678[(2)] = null);

(statearr_39652_39678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (17))){
var inst_39625 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39653_39679 = state_39643__$1;
(statearr_39653_39679[(2)] = inst_39625);

(statearr_39653_39679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (3))){
var inst_39641 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39643__$1,inst_39641);
} else {
if((state_val_39644 === (12))){
var inst_39602 = (state_39643[(9)]);
var inst_39616 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39602,opts);
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39616)){
var statearr_39654_39680 = state_39643__$1;
(statearr_39654_39680[(1)] = (15));

} else {
var statearr_39655_39681 = state_39643__$1;
(statearr_39655_39681[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (2))){
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39643__$1,(4),ch);
} else {
if((state_val_39644 === (11))){
var inst_39603 = (state_39643[(8)]);
var inst_39608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39609 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39603);
var inst_39610 = cljs.core.async.timeout.call(null,(1000));
var inst_39611 = [inst_39609,inst_39610];
var inst_39612 = (new cljs.core.PersistentVector(null,2,(5),inst_39608,inst_39611,null));
var state_39643__$1 = state_39643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39643__$1,(14),inst_39612);
} else {
if((state_val_39644 === (9))){
var inst_39603 = (state_39643[(8)]);
var inst_39629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39603);
var inst_39631 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39630);
var inst_39632 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39631)].join('');
var inst_39633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39632);
var state_39643__$1 = (function (){var statearr_39656 = state_39643;
(statearr_39656[(10)] = inst_39629);

return statearr_39656;
})();
var statearr_39657_39682 = state_39643__$1;
(statearr_39657_39682[(2)] = inst_39633);

(statearr_39657_39682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (5))){
var inst_39596 = (state_39643[(7)]);
var inst_39598 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39599 = (new cljs.core.PersistentArrayMap(null,2,inst_39598,null));
var inst_39600 = (new cljs.core.PersistentHashSet(null,inst_39599,null));
var inst_39601 = figwheel.client.focus_msgs.call(null,inst_39600,inst_39596);
var inst_39602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39601);
var inst_39603 = cljs.core.first.call(null,inst_39601);
var inst_39604 = figwheel.client.autoload_QMARK_.call(null);
var state_39643__$1 = (function (){var statearr_39658 = state_39643;
(statearr_39658[(9)] = inst_39602);

(statearr_39658[(8)] = inst_39603);

return statearr_39658;
})();
if(cljs.core.truth_(inst_39604)){
var statearr_39659_39683 = state_39643__$1;
(statearr_39659_39683[(1)] = (8));

} else {
var statearr_39660_39684 = state_39643__$1;
(statearr_39660_39684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (14))){
var inst_39614 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39661_39685 = state_39643__$1;
(statearr_39661_39685[(2)] = inst_39614);

(statearr_39661_39685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (16))){
var state_39643__$1 = state_39643;
var statearr_39662_39686 = state_39643__$1;
(statearr_39662_39686[(2)] = null);

(statearr_39662_39686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (10))){
var inst_39635 = (state_39643[(2)]);
var state_39643__$1 = (function (){var statearr_39663 = state_39643;
(statearr_39663[(11)] = inst_39635);

return statearr_39663;
})();
var statearr_39664_39687 = state_39643__$1;
(statearr_39664_39687[(2)] = null);

(statearr_39664_39687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (8))){
var inst_39602 = (state_39643[(9)]);
var inst_39606 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39602,opts);
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39606)){
var statearr_39665_39688 = state_39643__$1;
(statearr_39665_39688[(1)] = (11));

} else {
var statearr_39666_39689 = state_39643__$1;
(statearr_39666_39689[(1)] = (12));

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
});})(c__31730__auto___39671,ch))
;
return ((function (switch__31573__auto__,c__31730__auto___39671,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____0 = (function (){
var statearr_39667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39667[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__);

(statearr_39667[(1)] = (1));

return statearr_39667;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____1 = (function (state_39643){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_39643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e39668){if((e39668 instanceof Object)){
var ex__31577__auto__ = e39668;
var statearr_39669_39690 = state_39643;
(statearr_39669_39690[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39691 = state_39643;
state_39643 = G__39691;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__ = function(state_39643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____1.call(this,state_39643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31574__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___39671,ch))
})();
var state__31732__auto__ = (function (){var statearr_39670 = f__31731__auto__.call(null);
(statearr_39670[(6)] = c__31730__auto___39671);

return statearr_39670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___39671,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39692_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39692_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39696 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39696){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39694 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39695 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39694,_STAR_print_fn_STAR_39695,sb,base_path_39696){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_39694,_STAR_print_fn_STAR_39695,sb,base_path_39696))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39695;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39694;
}}catch (e39693){if((e39693 instanceof Error)){
var e = e39693;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39696], null));
} else {
var e = e39693;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39696))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39697){
var map__39698 = p__39697;
var map__39698__$1 = ((((!((map__39698 == null)))?(((((map__39698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39698):map__39698);
var opts = map__39698__$1;
var build_id = cljs.core.get.call(null,map__39698__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39698,map__39698__$1,opts,build_id){
return (function (p__39700){
var vec__39701 = p__39700;
var seq__39702 = cljs.core.seq.call(null,vec__39701);
var first__39703 = cljs.core.first.call(null,seq__39702);
var seq__39702__$1 = cljs.core.next.call(null,seq__39702);
var map__39704 = first__39703;
var map__39704__$1 = ((((!((map__39704 == null)))?(((((map__39704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39704):map__39704);
var msg = map__39704__$1;
var msg_name = cljs.core.get.call(null,map__39704__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39702__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39701,seq__39702,first__39703,seq__39702__$1,map__39704,map__39704__$1,msg,msg_name,_,map__39698,map__39698__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39701,seq__39702,first__39703,seq__39702__$1,map__39704,map__39704__$1,msg,msg_name,_,map__39698,map__39698__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39698,map__39698__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39706){
var vec__39707 = p__39706;
var seq__39708 = cljs.core.seq.call(null,vec__39707);
var first__39709 = cljs.core.first.call(null,seq__39708);
var seq__39708__$1 = cljs.core.next.call(null,seq__39708);
var map__39710 = first__39709;
var map__39710__$1 = ((((!((map__39710 == null)))?(((((map__39710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39710):map__39710);
var msg = map__39710__$1;
var msg_name = cljs.core.get.call(null,map__39710__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39708__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39712){
var map__39713 = p__39712;
var map__39713__$1 = ((((!((map__39713 == null)))?(((((map__39713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39713):map__39713);
var on_compile_warning = cljs.core.get.call(null,map__39713__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39713__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39713,map__39713__$1,on_compile_warning,on_compile_fail){
return (function (p__39715){
var vec__39716 = p__39715;
var seq__39717 = cljs.core.seq.call(null,vec__39716);
var first__39718 = cljs.core.first.call(null,seq__39717);
var seq__39717__$1 = cljs.core.next.call(null,seq__39717);
var map__39719 = first__39718;
var map__39719__$1 = ((((!((map__39719 == null)))?(((((map__39719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39719):map__39719);
var msg = map__39719__$1;
var msg_name = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39717__$1;
var pred__39721 = cljs.core._EQ_;
var expr__39722 = msg_name;
if(cljs.core.truth_(pred__39721.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39722))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39721.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39722))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39713,map__39713__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__,msg_hist,msg_names,msg){
return (function (state_39811){
var state_val_39812 = (state_39811[(1)]);
if((state_val_39812 === (7))){
var inst_39731 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39731)){
var statearr_39813_39860 = state_39811__$1;
(statearr_39813_39860[(1)] = (8));

} else {
var statearr_39814_39861 = state_39811__$1;
(statearr_39814_39861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (20))){
var inst_39805 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39815_39862 = state_39811__$1;
(statearr_39815_39862[(2)] = inst_39805);

(statearr_39815_39862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (27))){
var inst_39801 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39816_39863 = state_39811__$1;
(statearr_39816_39863[(2)] = inst_39801);

(statearr_39816_39863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (1))){
var inst_39724 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39724)){
var statearr_39817_39864 = state_39811__$1;
(statearr_39817_39864[(1)] = (2));

} else {
var statearr_39818_39865 = state_39811__$1;
(statearr_39818_39865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (24))){
var inst_39803 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39819_39866 = state_39811__$1;
(statearr_39819_39866[(2)] = inst_39803);

(statearr_39819_39866[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (4))){
var inst_39809 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39811__$1,inst_39809);
} else {
if((state_val_39812 === (15))){
var inst_39807 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39820_39867 = state_39811__$1;
(statearr_39820_39867[(2)] = inst_39807);

(statearr_39820_39867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (21))){
var inst_39760 = (state_39811[(2)]);
var inst_39761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39762 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39761);
var state_39811__$1 = (function (){var statearr_39821 = state_39811;
(statearr_39821[(7)] = inst_39760);

return statearr_39821;
})();
var statearr_39822_39868 = state_39811__$1;
(statearr_39822_39868[(2)] = inst_39762);

(statearr_39822_39868[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (31))){
var inst_39790 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39790)){
var statearr_39823_39869 = state_39811__$1;
(statearr_39823_39869[(1)] = (34));

} else {
var statearr_39824_39870 = state_39811__$1;
(statearr_39824_39870[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (32))){
var inst_39799 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39825_39871 = state_39811__$1;
(statearr_39825_39871[(2)] = inst_39799);

(statearr_39825_39871[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (33))){
var inst_39786 = (state_39811[(2)]);
var inst_39787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39787);
var state_39811__$1 = (function (){var statearr_39826 = state_39811;
(statearr_39826[(8)] = inst_39786);

return statearr_39826;
})();
var statearr_39827_39872 = state_39811__$1;
(statearr_39827_39872[(2)] = inst_39788);

(statearr_39827_39872[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (13))){
var inst_39745 = figwheel.client.heads_up.clear.call(null);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(16),inst_39745);
} else {
if((state_val_39812 === (22))){
var inst_39766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39767 = figwheel.client.heads_up.append_warning_message.call(null,inst_39766);
var state_39811__$1 = state_39811;
var statearr_39828_39873 = state_39811__$1;
(statearr_39828_39873[(2)] = inst_39767);

(statearr_39828_39873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (36))){
var inst_39797 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39829_39874 = state_39811__$1;
(statearr_39829_39874[(2)] = inst_39797);

(statearr_39829_39874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (29))){
var inst_39777 = (state_39811[(2)]);
var inst_39778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39779 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39778);
var state_39811__$1 = (function (){var statearr_39830 = state_39811;
(statearr_39830[(9)] = inst_39777);

return statearr_39830;
})();
var statearr_39831_39875 = state_39811__$1;
(statearr_39831_39875[(2)] = inst_39779);

(statearr_39831_39875[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (6))){
var inst_39726 = (state_39811[(10)]);
var state_39811__$1 = state_39811;
var statearr_39832_39876 = state_39811__$1;
(statearr_39832_39876[(2)] = inst_39726);

(statearr_39832_39876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (28))){
var inst_39773 = (state_39811[(2)]);
var inst_39774 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39775 = figwheel.client.heads_up.display_warning.call(null,inst_39774);
var state_39811__$1 = (function (){var statearr_39833 = state_39811;
(statearr_39833[(11)] = inst_39773);

return statearr_39833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(29),inst_39775);
} else {
if((state_val_39812 === (25))){
var inst_39771 = figwheel.client.heads_up.clear.call(null);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(28),inst_39771);
} else {
if((state_val_39812 === (34))){
var inst_39792 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(37),inst_39792);
} else {
if((state_val_39812 === (17))){
var inst_39751 = (state_39811[(2)]);
var inst_39752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39753 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39752);
var state_39811__$1 = (function (){var statearr_39834 = state_39811;
(statearr_39834[(12)] = inst_39751);

return statearr_39834;
})();
var statearr_39835_39877 = state_39811__$1;
(statearr_39835_39877[(2)] = inst_39753);

(statearr_39835_39877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (3))){
var inst_39743 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39743)){
var statearr_39836_39878 = state_39811__$1;
(statearr_39836_39878[(1)] = (13));

} else {
var statearr_39837_39879 = state_39811__$1;
(statearr_39837_39879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (12))){
var inst_39739 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39838_39880 = state_39811__$1;
(statearr_39838_39880[(2)] = inst_39739);

(statearr_39838_39880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (2))){
var inst_39726 = (state_39811[(10)]);
var inst_39726__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39811__$1 = (function (){var statearr_39839 = state_39811;
(statearr_39839[(10)] = inst_39726__$1);

return statearr_39839;
})();
if(cljs.core.truth_(inst_39726__$1)){
var statearr_39840_39881 = state_39811__$1;
(statearr_39840_39881[(1)] = (5));

} else {
var statearr_39841_39882 = state_39811__$1;
(statearr_39841_39882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (23))){
var inst_39769 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39769)){
var statearr_39842_39883 = state_39811__$1;
(statearr_39842_39883[(1)] = (25));

} else {
var statearr_39843_39884 = state_39811__$1;
(statearr_39843_39884[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (35))){
var state_39811__$1 = state_39811;
var statearr_39844_39885 = state_39811__$1;
(statearr_39844_39885[(2)] = null);

(statearr_39844_39885[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (19))){
var inst_39764 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39764)){
var statearr_39845_39886 = state_39811__$1;
(statearr_39845_39886[(1)] = (22));

} else {
var statearr_39846_39887 = state_39811__$1;
(statearr_39846_39887[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (11))){
var inst_39735 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39847_39888 = state_39811__$1;
(statearr_39847_39888[(2)] = inst_39735);

(statearr_39847_39888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (9))){
var inst_39737 = figwheel.client.heads_up.clear.call(null);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(12),inst_39737);
} else {
if((state_val_39812 === (5))){
var inst_39728 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39811__$1 = state_39811;
var statearr_39848_39889 = state_39811__$1;
(statearr_39848_39889[(2)] = inst_39728);

(statearr_39848_39889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (14))){
var inst_39755 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39755)){
var statearr_39849_39890 = state_39811__$1;
(statearr_39849_39890[(1)] = (18));

} else {
var statearr_39850_39891 = state_39811__$1;
(statearr_39850_39891[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (26))){
var inst_39781 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39811__$1 = state_39811;
if(cljs.core.truth_(inst_39781)){
var statearr_39851_39892 = state_39811__$1;
(statearr_39851_39892[(1)] = (30));

} else {
var statearr_39852_39893 = state_39811__$1;
(statearr_39852_39893[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (16))){
var inst_39747 = (state_39811[(2)]);
var inst_39748 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39749 = figwheel.client.heads_up.display_exception.call(null,inst_39748);
var state_39811__$1 = (function (){var statearr_39853 = state_39811;
(statearr_39853[(13)] = inst_39747);

return statearr_39853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(17),inst_39749);
} else {
if((state_val_39812 === (30))){
var inst_39783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39784 = figwheel.client.heads_up.display_warning.call(null,inst_39783);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(33),inst_39784);
} else {
if((state_val_39812 === (10))){
var inst_39741 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39854_39894 = state_39811__$1;
(statearr_39854_39894[(2)] = inst_39741);

(statearr_39854_39894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (18))){
var inst_39757 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39758 = figwheel.client.heads_up.display_exception.call(null,inst_39757);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(21),inst_39758);
} else {
if((state_val_39812 === (37))){
var inst_39794 = (state_39811[(2)]);
var state_39811__$1 = state_39811;
var statearr_39855_39895 = state_39811__$1;
(statearr_39855_39895[(2)] = inst_39794);

(statearr_39855_39895[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39812 === (8))){
var inst_39733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39811__$1 = state_39811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39811__$1,(11),inst_39733);
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
});})(c__31730__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31573__auto__,c__31730__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____0 = (function (){
var statearr_39856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39856[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__);

(statearr_39856[(1)] = (1));

return statearr_39856;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____1 = (function (state_39811){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_39811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e39857){if((e39857 instanceof Object)){
var ex__31577__auto__ = e39857;
var statearr_39858_39896 = state_39811;
(statearr_39858_39896[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39897 = state_39811;
state_39811 = G__39897;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__ = function(state_39811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____1.call(this,state_39811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__,msg_hist,msg_names,msg))
})();
var state__31732__auto__ = (function (){var statearr_39859 = f__31731__auto__.call(null);
(statearr_39859[(6)] = c__31730__auto__);

return statearr_39859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__,msg_hist,msg_names,msg))
);

return c__31730__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31730__auto___39926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto___39926,ch){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto___39926,ch){
return (function (state_39912){
var state_val_39913 = (state_39912[(1)]);
if((state_val_39913 === (1))){
var state_39912__$1 = state_39912;
var statearr_39914_39927 = state_39912__$1;
(statearr_39914_39927[(2)] = null);

(statearr_39914_39927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39913 === (2))){
var state_39912__$1 = state_39912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39912__$1,(4),ch);
} else {
if((state_val_39913 === (3))){
var inst_39910 = (state_39912[(2)]);
var state_39912__$1 = state_39912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39912__$1,inst_39910);
} else {
if((state_val_39913 === (4))){
var inst_39900 = (state_39912[(7)]);
var inst_39900__$1 = (state_39912[(2)]);
var state_39912__$1 = (function (){var statearr_39915 = state_39912;
(statearr_39915[(7)] = inst_39900__$1);

return statearr_39915;
})();
if(cljs.core.truth_(inst_39900__$1)){
var statearr_39916_39928 = state_39912__$1;
(statearr_39916_39928[(1)] = (5));

} else {
var statearr_39917_39929 = state_39912__$1;
(statearr_39917_39929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39913 === (5))){
var inst_39900 = (state_39912[(7)]);
var inst_39902 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39900);
var state_39912__$1 = state_39912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39912__$1,(8),inst_39902);
} else {
if((state_val_39913 === (6))){
var state_39912__$1 = state_39912;
var statearr_39918_39930 = state_39912__$1;
(statearr_39918_39930[(2)] = null);

(statearr_39918_39930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39913 === (7))){
var inst_39908 = (state_39912[(2)]);
var state_39912__$1 = state_39912;
var statearr_39919_39931 = state_39912__$1;
(statearr_39919_39931[(2)] = inst_39908);

(statearr_39919_39931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39913 === (8))){
var inst_39904 = (state_39912[(2)]);
var state_39912__$1 = (function (){var statearr_39920 = state_39912;
(statearr_39920[(8)] = inst_39904);

return statearr_39920;
})();
var statearr_39921_39932 = state_39912__$1;
(statearr_39921_39932[(2)] = null);

(statearr_39921_39932[(1)] = (2));


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
});})(c__31730__auto___39926,ch))
;
return ((function (switch__31573__auto__,c__31730__auto___39926,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31574__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31574__auto____0 = (function (){
var statearr_39922 = [null,null,null,null,null,null,null,null,null];
(statearr_39922[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31574__auto__);

(statearr_39922[(1)] = (1));

return statearr_39922;
});
var figwheel$client$heads_up_plugin_$_state_machine__31574__auto____1 = (function (state_39912){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_39912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e39923){if((e39923 instanceof Object)){
var ex__31577__auto__ = e39923;
var statearr_39924_39933 = state_39912;
(statearr_39924_39933[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39934 = state_39912;
state_39912 = G__39934;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31574__auto__ = function(state_39912){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31574__auto____1.call(this,state_39912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31574__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31574__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto___39926,ch))
})();
var state__31732__auto__ = (function (){var statearr_39925 = f__31731__auto__.call(null);
(statearr_39925[(6)] = c__31730__auto___39926);

return statearr_39925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto___39926,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__){
return (function (state_39940){
var state_val_39941 = (state_39940[(1)]);
if((state_val_39941 === (1))){
var inst_39935 = cljs.core.async.timeout.call(null,(3000));
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39940__$1,(2),inst_39935);
} else {
if((state_val_39941 === (2))){
var inst_39937 = (state_39940[(2)]);
var inst_39938 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39940__$1 = (function (){var statearr_39942 = state_39940;
(statearr_39942[(7)] = inst_39937);

return statearr_39942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39940__$1,inst_39938);
} else {
return null;
}
}
});})(c__31730__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____0 = (function (){
var statearr_39943 = [null,null,null,null,null,null,null,null];
(statearr_39943[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__);

(statearr_39943[(1)] = (1));

return statearr_39943;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____1 = (function (state_39940){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_39940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e39944){if((e39944 instanceof Object)){
var ex__31577__auto__ = e39944;
var statearr_39945_39947 = state_39940;
(statearr_39945_39947[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39948 = state_39940;
state_39940 = G__39948;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__ = function(state_39940){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____1.call(this,state_39940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31574__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__))
})();
var state__31732__auto__ = (function (){var statearr_39946 = f__31731__auto__.call(null);
(statearr_39946[(6)] = c__31730__auto__);

return statearr_39946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__))
);

return c__31730__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31730__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31730__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__31731__auto__ = (function (){var switch__31573__auto__ = ((function (c__31730__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39955){
var state_val_39956 = (state_39955[(1)]);
if((state_val_39956 === (1))){
var inst_39949 = cljs.core.async.timeout.call(null,(2000));
var state_39955__$1 = state_39955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39955__$1,(2),inst_39949);
} else {
if((state_val_39956 === (2))){
var inst_39951 = (state_39955[(2)]);
var inst_39952 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39953 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39952);
var state_39955__$1 = (function (){var statearr_39957 = state_39955;
(statearr_39957[(7)] = inst_39951);

return statearr_39957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39955__$1,inst_39953);
} else {
return null;
}
}
});})(c__31730__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__31573__auto__,c__31730__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____0 = (function (){
var statearr_39958 = [null,null,null,null,null,null,null,null];
(statearr_39958[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__);

(statearr_39958[(1)] = (1));

return statearr_39958;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____1 = (function (state_39955){
while(true){
var ret_value__31575__auto__ = (function (){try{while(true){
var result__31576__auto__ = switch__31573__auto__.call(null,state_39955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31576__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31576__auto__;
}
break;
}
}catch (e39959){if((e39959 instanceof Object)){
var ex__31577__auto__ = e39959;
var statearr_39960_39962 = state_39955;
(statearr_39960_39962[(5)] = ex__31577__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39963 = state_39955;
state_39955 = G__39963;
continue;
} else {
return ret_value__31575__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__ = function(state_39955){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____1.call(this,state_39955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31574__auto__;
})()
;})(switch__31573__auto__,c__31730__auto__,figwheel_version,temp__5457__auto__))
})();
var state__31732__auto__ = (function (){var statearr_39961 = f__31731__auto__.call(null);
(statearr_39961[(6)] = c__31730__auto__);

return statearr_39961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31732__auto__);
});})(c__31730__auto__,figwheel_version,temp__5457__auto__))
);

return c__31730__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39964){
var map__39965 = p__39964;
var map__39965__$1 = ((((!((map__39965 == null)))?(((((map__39965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39965):map__39965);
var file = cljs.core.get.call(null,map__39965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39965__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39967 = "";
var G__39967__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39967),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39967);
var G__39967__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39967__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39967__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39967__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39967__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39968){
var map__39969 = p__39968;
var map__39969__$1 = ((((!((map__39969 == null)))?(((((map__39969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39969):map__39969);
var ed = map__39969__$1;
var formatted_exception = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39971_39975 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39972_39976 = null;
var count__39973_39977 = (0);
var i__39974_39978 = (0);
while(true){
if((i__39974_39978 < count__39973_39977)){
var msg_39979 = cljs.core._nth.call(null,chunk__39972_39976,i__39974_39978);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39979);


var G__39980 = seq__39971_39975;
var G__39981 = chunk__39972_39976;
var G__39982 = count__39973_39977;
var G__39983 = (i__39974_39978 + (1));
seq__39971_39975 = G__39980;
chunk__39972_39976 = G__39981;
count__39973_39977 = G__39982;
i__39974_39978 = G__39983;
continue;
} else {
var temp__5457__auto___39984 = cljs.core.seq.call(null,seq__39971_39975);
if(temp__5457__auto___39984){
var seq__39971_39985__$1 = temp__5457__auto___39984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39971_39985__$1)){
var c__4319__auto___39986 = cljs.core.chunk_first.call(null,seq__39971_39985__$1);
var G__39987 = cljs.core.chunk_rest.call(null,seq__39971_39985__$1);
var G__39988 = c__4319__auto___39986;
var G__39989 = cljs.core.count.call(null,c__4319__auto___39986);
var G__39990 = (0);
seq__39971_39975 = G__39987;
chunk__39972_39976 = G__39988;
count__39973_39977 = G__39989;
i__39974_39978 = G__39990;
continue;
} else {
var msg_39991 = cljs.core.first.call(null,seq__39971_39985__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39991);


var G__39992 = cljs.core.next.call(null,seq__39971_39985__$1);
var G__39993 = null;
var G__39994 = (0);
var G__39995 = (0);
seq__39971_39975 = G__39992;
chunk__39972_39976 = G__39993;
count__39973_39977 = G__39994;
i__39974_39978 = G__39995;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39996){
var map__39997 = p__39996;
var map__39997__$1 = ((((!((map__39997 == null)))?(((((map__39997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39997):map__39997);
var w = map__39997__$1;
var message = cljs.core.get.call(null,map__39997__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39999 = cljs.core.seq.call(null,plugins);
var chunk__40000 = null;
var count__40001 = (0);
var i__40002 = (0);
while(true){
if((i__40002 < count__40001)){
var vec__40003 = cljs.core._nth.call(null,chunk__40000,i__40002);
var k = cljs.core.nth.call(null,vec__40003,(0),null);
var plugin = cljs.core.nth.call(null,vec__40003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40009 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39999,chunk__40000,count__40001,i__40002,pl_40009,vec__40003,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40009.call(null,msg_hist);
});})(seq__39999,chunk__40000,count__40001,i__40002,pl_40009,vec__40003,k,plugin))
);
} else {
}


var G__40010 = seq__39999;
var G__40011 = chunk__40000;
var G__40012 = count__40001;
var G__40013 = (i__40002 + (1));
seq__39999 = G__40010;
chunk__40000 = G__40011;
count__40001 = G__40012;
i__40002 = G__40013;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39999);
if(temp__5457__auto__){
var seq__39999__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39999__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39999__$1);
var G__40014 = cljs.core.chunk_rest.call(null,seq__39999__$1);
var G__40015 = c__4319__auto__;
var G__40016 = cljs.core.count.call(null,c__4319__auto__);
var G__40017 = (0);
seq__39999 = G__40014;
chunk__40000 = G__40015;
count__40001 = G__40016;
i__40002 = G__40017;
continue;
} else {
var vec__40006 = cljs.core.first.call(null,seq__39999__$1);
var k = cljs.core.nth.call(null,vec__40006,(0),null);
var plugin = cljs.core.nth.call(null,vec__40006,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40018 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39999,chunk__40000,count__40001,i__40002,pl_40018,vec__40006,k,plugin,seq__39999__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40018.call(null,msg_hist);
});})(seq__39999,chunk__40000,count__40001,i__40002,pl_40018,vec__40006,k,plugin,seq__39999__$1,temp__5457__auto__))
);
} else {
}


var G__40019 = cljs.core.next.call(null,seq__39999__$1);
var G__40020 = null;
var G__40021 = (0);
var G__40022 = (0);
seq__39999 = G__40019;
chunk__40000 = G__40020;
count__40001 = G__40021;
i__40002 = G__40022;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40024 = arguments.length;
switch (G__40024) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40025_40030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40026_40031 = null;
var count__40027_40032 = (0);
var i__40028_40033 = (0);
while(true){
if((i__40028_40033 < count__40027_40032)){
var msg_40034 = cljs.core._nth.call(null,chunk__40026_40031,i__40028_40033);
figwheel.client.socket.handle_incoming_message.call(null,msg_40034);


var G__40035 = seq__40025_40030;
var G__40036 = chunk__40026_40031;
var G__40037 = count__40027_40032;
var G__40038 = (i__40028_40033 + (1));
seq__40025_40030 = G__40035;
chunk__40026_40031 = G__40036;
count__40027_40032 = G__40037;
i__40028_40033 = G__40038;
continue;
} else {
var temp__5457__auto___40039 = cljs.core.seq.call(null,seq__40025_40030);
if(temp__5457__auto___40039){
var seq__40025_40040__$1 = temp__5457__auto___40039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40025_40040__$1)){
var c__4319__auto___40041 = cljs.core.chunk_first.call(null,seq__40025_40040__$1);
var G__40042 = cljs.core.chunk_rest.call(null,seq__40025_40040__$1);
var G__40043 = c__4319__auto___40041;
var G__40044 = cljs.core.count.call(null,c__4319__auto___40041);
var G__40045 = (0);
seq__40025_40030 = G__40042;
chunk__40026_40031 = G__40043;
count__40027_40032 = G__40044;
i__40028_40033 = G__40045;
continue;
} else {
var msg_40046 = cljs.core.first.call(null,seq__40025_40040__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40046);


var G__40047 = cljs.core.next.call(null,seq__40025_40040__$1);
var G__40048 = null;
var G__40049 = (0);
var G__40050 = (0);
seq__40025_40030 = G__40047;
chunk__40026_40031 = G__40048;
count__40027_40032 = G__40049;
i__40028_40033 = G__40050;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40055 = arguments.length;
var i__4500__auto___40056 = (0);
while(true){
if((i__4500__auto___40056 < len__4499__auto___40055)){
args__4502__auto__.push((arguments[i__4500__auto___40056]));

var G__40057 = (i__4500__auto___40056 + (1));
i__4500__auto___40056 = G__40057;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40052){
var map__40053 = p__40052;
var map__40053__$1 = ((((!((map__40053 == null)))?(((((map__40053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40053):map__40053);
var opts = map__40053__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40051){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40051));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40058){if((e40058 instanceof Error)){
var e = e40058;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40058;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40059){
var map__40060 = p__40059;
var map__40060__$1 = ((((!((map__40060 == null)))?(((((map__40060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40060):map__40060);
var msg_name = cljs.core.get.call(null,map__40060__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530931641073
