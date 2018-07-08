// Compiled by ClojureScript 1.10.238 {}
goog.provide('headphone_volume.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('headphone_volume.convert');
cljs.core.enable_console_print_BANG_.call(null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
headphone_volume.core.source = (function (name,voltage,__meta,__extmap,__hash){
this.name = name;
this.voltage = voltage;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
headphone_volume.core.source.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

headphone_volume.core.source.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k29890,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__29894 = k29890;
var G__29894__$1 = (((G__29894 instanceof cljs.core.Keyword))?G__29894.fqn:null);
switch (G__29894__$1) {
case "name":
return self__.name;

break;
case "voltage":
return self__.voltage;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29890,else__4175__auto__);

}
});

headphone_volume.core.source.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#headphone-volume.core.source{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"voltage","voltage",-1909388658),self__.voltage],null))], null),self__.__extmap));
});

headphone_volume.core.source.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29889){
var self__ = this;
var G__29889__$1 = this;
return (new cljs.core.RecordIter((0),G__29889__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"voltage","voltage",-1909388658)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

headphone_volume.core.source.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

headphone_volume.core.source.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new headphone_volume.core.source(self__.name,self__.voltage,self__.__meta,self__.__extmap,self__.__hash));
});

headphone_volume.core.source.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

headphone_volume.core.source.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1718323322 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

headphone_volume.core.source.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29891,other29892){
var self__ = this;
var this29891__$1 = this;
return ((!((other29892 == null))) && ((this29891__$1.constructor === other29892.constructor)) && (cljs.core._EQ_.call(null,this29891__$1.name,other29892.name)) && (cljs.core._EQ_.call(null,this29891__$1.voltage,other29892.voltage)) && (cljs.core._EQ_.call(null,this29891__$1.__extmap,other29892.__extmap)));
});

headphone_volume.core.source.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"voltage","voltage",-1909388658),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new headphone_volume.core.source(self__.name,self__.voltage,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

headphone_volume.core.source.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__29889){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__29895 = cljs.core.keyword_identical_QMARK_;
var expr__29896 = k__4180__auto__;
if(cljs.core.truth_(pred__29895.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29896))){
return (new headphone_volume.core.source(G__29889,self__.voltage,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29895.call(null,new cljs.core.Keyword(null,"voltage","voltage",-1909388658),expr__29896))){
return (new headphone_volume.core.source(self__.name,G__29889,self__.__meta,self__.__extmap,null));
} else {
return (new headphone_volume.core.source(self__.name,self__.voltage,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__29889),null));
}
}
});

headphone_volume.core.source.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"voltage","voltage",-1909388658),self__.voltage,null))], null),self__.__extmap));
});

headphone_volume.core.source.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__29889){
var self__ = this;
var this__4171__auto____$1 = this;
return (new headphone_volume.core.source(self__.name,self__.voltage,G__29889,self__.__extmap,self__.__hash));
});

headphone_volume.core.source.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

headphone_volume.core.source.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"voltage","voltage",-268857131,null)], null);
});

headphone_volume.core.source.cljs$lang$type = true;

headphone_volume.core.source.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"headphone-volume.core/source",null,(1),null));
});

headphone_volume.core.source.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"headphone-volume.core/source");
});

/**
 * Positional factory function for headphone-volume.core/source.
 */
headphone_volume.core.__GT_source = (function headphone_volume$core$__GT_source(name,voltage){
return (new headphone_volume.core.source(name,voltage,null,null,null));
});

/**
 * Factory function for headphone-volume.core/source, taking a map of keywords to field values.
 */
headphone_volume.core.map__GT_source = (function headphone_volume$core$map__GT_source(G__29893){
return (new headphone_volume.core.source(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29893),new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(G__29893),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29893,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"voltage","voltage",-1909388658))),null));
});

headphone_volume.core.rme_lo = headphone_volume.core.__GT_source.call(null,"RME ADI-2 DAC LO OUTPUT",1.73);
headphone_volume.core.rme_hi = headphone_volume.core.__GT_source.call(null,"RME ADI-2 DAC HI OUTPUT",(10));
headphone_volume.core.rme_iem = headphone_volume.core.__GT_source.call(null,"RME ADI-2 DAC IEM OUTPUT",0.55);
headphone_volume.core.sources = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [headphone_volume.core.rme_lo,headphone_volume.core.rme_hi,headphone_volume.core.rme_iem], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
headphone_volume.core.headphone = (function (id,name,sensitivity,sensitivity_type,impedance,voltage90db,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.sensitivity = sensitivity;
this.sensitivity_type = sensitivity_type;
this.impedance = impedance;
this.voltage90db = voltage90db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
headphone_volume.core.headphone.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

headphone_volume.core.headphone.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k29900,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__29904 = k29900;
var G__29904__$1 = (((G__29904 instanceof cljs.core.Keyword))?G__29904.fqn:null);
switch (G__29904__$1) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "sensitivity":
return self__.sensitivity;

break;
case "sensitivity-type":
return self__.sensitivity_type;

break;
case "impedance":
return self__.impedance;

break;
case "voltage90db":
return self__.voltage90db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29900,else__4175__auto__);

}
});

headphone_volume.core.headphone.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#headphone-volume.core.headphone{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),self__.sensitivity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),self__.sensitivity_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impedance","impedance",811672879),self__.impedance],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),self__.voltage90db],null))], null),self__.__extmap));
});

headphone_volume.core.headphone.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29899){
var self__ = this;
var G__29899__$1 = this;
return (new cljs.core.RecordIter((0),G__29899__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"impedance","impedance",811672879),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

headphone_volume.core.headphone.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

headphone_volume.core.headphone.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,self__.__extmap,self__.__hash));
});

headphone_volume.core.headphone.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

headphone_volume.core.headphone.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1491848769 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

headphone_volume.core.headphone.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29901,other29902){
var self__ = this;
var this29901__$1 = this;
return ((!((other29902 == null))) && ((this29901__$1.constructor === other29902.constructor)) && (cljs.core._EQ_.call(null,this29901__$1.id,other29902.id)) && (cljs.core._EQ_.call(null,this29901__$1.name,other29902.name)) && (cljs.core._EQ_.call(null,this29901__$1.sensitivity,other29902.sensitivity)) && (cljs.core._EQ_.call(null,this29901__$1.sensitivity_type,other29902.sensitivity_type)) && (cljs.core._EQ_.call(null,this29901__$1.impedance,other29902.impedance)) && (cljs.core._EQ_.call(null,this29901__$1.voltage90db,other29902.voltage90db)) && (cljs.core._EQ_.call(null,this29901__$1.__extmap,other29902.__extmap)));
});

headphone_volume.core.headphone.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),null,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"impedance","impedance",811672879),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

headphone_volume.core.headphone.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__29899){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__29905 = cljs.core.keyword_identical_QMARK_;
var expr__29906 = k__4180__auto__;
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__29906))){
return (new headphone_volume.core.headphone(G__29899,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29906))){
return (new headphone_volume.core.headphone(self__.id,G__29899,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),expr__29906))){
return (new headphone_volume.core.headphone(self__.id,self__.name,G__29899,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),expr__29906))){
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,G__29899,self__.impedance,self__.voltage90db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"impedance","impedance",811672879),expr__29906))){
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,G__29899,self__.voltage90db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29905.call(null,new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),expr__29906))){
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,G__29899,self__.__meta,self__.__extmap,null));
} else {
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__29899),null));
}
}
}
}
}
}
});

headphone_volume.core.headphone.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),self__.sensitivity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),self__.sensitivity_type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impedance","impedance",811672879),self__.impedance,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),self__.voltage90db,null))], null),self__.__extmap));
});

headphone_volume.core.headphone.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__29899){
var self__ = this;
var this__4171__auto____$1 = this;
return (new headphone_volume.core.headphone(self__.id,self__.name,self__.sensitivity,self__.sensitivity_type,self__.impedance,self__.voltage90db,G__29899,self__.__extmap,self__.__hash));
});

headphone_volume.core.headphone.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

headphone_volume.core.headphone.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"sensitivity","sensitivity",283963342,null),new cljs.core.Symbol(null,"sensitivity-type","sensitivity-type",-1919671,null),new cljs.core.Symbol(null,"impedance","impedance",-1842762890,null),new cljs.core.Symbol(null,"voltage90db","voltage90db",1089102751,null)], null);
});

headphone_volume.core.headphone.cljs$lang$type = true;

headphone_volume.core.headphone.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"headphone-volume.core/headphone",null,(1),null));
});

headphone_volume.core.headphone.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"headphone-volume.core/headphone");
});

/**
 * Positional factory function for headphone-volume.core/headphone.
 */
headphone_volume.core.__GT_headphone = (function headphone_volume$core$__GT_headphone(id,name,sensitivity,sensitivity_type,impedance,voltage90db){
return (new headphone_volume.core.headphone(id,name,sensitivity,sensitivity_type,impedance,voltage90db,null,null,null));
});

/**
 * Factory function for headphone-volume.core/headphone, taking a map of keywords to field values.
 */
headphone_volume.core.map__GT_headphone = (function headphone_volume$core$map__GT_headphone(G__29903){
return (new headphone_volume.core.headphone(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__29903),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29903),new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(G__29903),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198).cljs$core$IFn$_invoke$arity$1(G__29903),new cljs.core.Keyword(null,"impedance","impedance",811672879).cljs$core$IFn$_invoke$arity$1(G__29903),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776).cljs$core$IFn$_invoke$arity$1(G__29903),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29903,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"impedance","impedance",811672879),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776))),null));
});

headphone_volume.core.THX00 = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"name","name",1843675177),"Fostex TH-X00",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(94),new cljs.core.Keyword(null,"impedance","impedance",811672879),(25),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),0.068], null));
headphone_volume.core.R70x = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Audio Technica ATH-R70x",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(98),new cljs.core.Keyword(null,"impedance","impedance",811672879),(470),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),0.195], null));
headphone_volume.core.HD58X = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Sennheiser HD 58X Jubilee",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(104),new cljs.core.Keyword(null,"impedance","impedance",811672879),(150),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"voltage","voltage",-1909388658),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),null], null));
headphone_volume.core.HE400i = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"HIFIMAN HE400i",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(93),new cljs.core.Keyword(null,"impedance","impedance",811672879),(35),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),0.168], null));
headphone_volume.core.LCD2C = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"AUDEZE LCD2 Classic",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(101),new cljs.core.Keyword(null,"impedance","impedance",811672879),(70),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),0.11], null));
headphone_volume.core.X2 = headphone_volume.core.map__GT_headphone.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Phillips Fidelio X2",new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185),(100),new cljs.core.Keyword(null,"impedance","impedance",811672879),(30),new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"voltage90db","voltage90db",-551428776),null], null));
headphone_volume.core.headphones = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [headphone_volume.core.THX00,headphone_volume.core.R70x,headphone_volume.core.HD58X,headphone_volume.core.HE400i,headphone_volume.core.LCD2C,headphone_volume.core.X2], null);
if(typeof headphone_volume.core.app_state !== 'undefined'){
} else {
headphone_volume.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"target-peak","target-peak",-397273711),(75),new cljs.core.Keyword(null,"voltage-required","voltage-required",292764444),null,new cljs.core.Keyword(null,"current-required","current-required",507871482),null,new cljs.core.Keyword(null,"lo","lo",-931799889),null,new cljs.core.Keyword(null,"hi","hi",-1821422114),null,new cljs.core.Keyword(null,"iem","iem",-1302089278),null,new cljs.core.Keyword(null,"headphone","headphone",-2133288489),cljs.core.first.call(null,headphone_volume.core.headphones),new cljs.core.Keyword(null,"use90db","use90db",710947814),false], null));
}
headphone_volume.core.render_headphone_selector = rum.core.build_defc.call(null,(function (state){
return React.createElement("div",({"className": "select headphone-selector"}),sablono.interpreter.create_element.call(null,"select",({"onChange": (function (e){
var v = e.target.value;
cljs.core.println.call(null,v);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"headphone","headphone",-2133288489),cljs.core.nth.call(null,headphone_volume.core.headphones,(v | (0))));
}), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"headphone","headphone",-2133288489).cljs$core$IFn$_invoke$arity$1(state))}),cljs.core.into_array.call(null,(function (){var iter__4292__auto__ = (function headphone_volume$core$iter__29909(s__29910){
return (new cljs.core.LazySeq(null,(function (){
var s__29910__$1 = s__29910;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29910__$1);
if(temp__5457__auto__){
var s__29910__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29910__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29910__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29912 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29911 = (0);
while(true){
if((i__29911 < size__4291__auto__)){
var h = cljs.core._nth.call(null,c__4290__auto__,i__29911);
cljs.core.chunk_append.call(null,b__29912,React.createElement("option",({"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(h), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(h)}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(h))));

var G__29913 = (i__29911 + (1));
i__29911 = G__29913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29912),headphone_volume$core$iter__29909.call(null,cljs.core.chunk_rest.call(null,s__29910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29912),null);
}
} else {
var h = cljs.core.first.call(null,s__29910__$2);
return cljs.core.cons.call(null,React.createElement("option",({"key": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(h), "value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(h)}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(h))),headphone_volume$core$iter__29909.call(null,cljs.core.rest.call(null,s__29910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,headphone_volume.core.headphones);
})())));
}),null,"render-headphone-selector");
headphone_volume.core.render_headphone_specs = rum.core.build_defc.call(null,(function (headphone){
return React.createElement("div",null,React.createElement("div",null,"Impedance ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"impedance","impedance",811672879).cljs$core$IFn$_invoke$arity$1(headphone))),React.createElement("div",null,"Sensitivity ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(headphone))));
}),null,"render-headphone-specs");
headphone_volume.core.render_results = rum.core.build_defc.call(null,(function (l,h,i,voltage,current){
return React.createElement("div",null,React.createElement("div",({"className": "result"}),"Required Gain LO: ",sablono.interpreter.interpret.call(null,Math.floor(l)),React.createElement("small",null," \u00B1 3 dB")),React.createElement("div",({"className": "result"}),"Required Gain HI: ",sablono.interpreter.interpret.call(null,Math.floor(h))," \u00B1 3 dB"),React.createElement("div",({"className": "result"}),"Required Gain IEM: ",sablono.interpreter.interpret.call(null,Math.floor(i))," \u00B1 3 dB"),React.createElement("div",({"className": "result"}),"Required Voltage: ",sablono.interpreter.interpret.call(null,voltage)),React.createElement("div",({"className": "result"}),"Required Current: ",sablono.interpreter.interpret.call(null,current)));
}),null,"render-results");
headphone_volume.core.render_target_peak = rum.core.build_defc.call(null,(function (target_peak,state){
return React.createElement("div",null,React.createElement("label",null,"Peak SPL: ",sablono.interpreter.interpret.call(null,target_peak)),sablono.interpreter.create_element.call(null,"input",({"type": "range", "value": target_peak, "min": (40), "max": (110), "style": ({"width": "100%"}), "onChange": (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"target-peak","target-peak",-397273711),e.target.value);
})})));
}),null,"render-target-peak");
headphone_volume.core.render_app = rum.core.build_defc.call(null,(function (headphone,lo,hi,iem,voltage,current,target_peak,state){
var attrs29916 = headphone_volume.core.render_headphone_selector.call(null,state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29916))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["volume-card"], null)], null),attrs29916)):({"className": "volume-card"})),((cljs.core.map_QMARK_.call(null,attrs29916))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,headphone_volume.core.render_headphone_specs.call(null,headphone)),sablono.interpreter.interpret.call(null,headphone_volume.core.render_results.call(null,lo,hi,iem,voltage,current)),sablono.interpreter.interpret.call(null,headphone_volume.core.render_target_peak.call(null,target_peak,state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29916),sablono.interpreter.interpret.call(null,headphone_volume.core.render_headphone_specs.call(null,headphone)),sablono.interpreter.interpret.call(null,headphone_volume.core.render_results.call(null,lo,hi,iem,voltage,current)),sablono.interpreter.interpret.call(null,headphone_volume.core.render_target_peak.call(null,target_peak,state))], null)));
}),null,"render-app");
headphone_volume.core.do_the_calculations_c = (function headphone_volume$core$do_the_calculations_c(p__29917){
var map__29918 = p__29917;
var map__29918__$1 = ((((!((map__29918 == null)))?(((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var state = map__29918__$1;
var target_peak = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"target-peak","target-peak",-397273711));
var headphone = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"headphone","headphone",-2133288489));
var c = headphone_volume.convert.efficiency_to_power.call(null,target_peak,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(headphone));
var v = headphone_volume.convert.power_to_voltage.call(null,c,new cljs.core.Keyword(null,"impedance","impedance",811672879).cljs$core$IFn$_invoke$arity$1(headphone));
var lo = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_lo));
var hi = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_hi));
var iem = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_iem));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi,new cljs.core.Keyword(null,"iem","iem",-1302089278),iem,new cljs.core.Keyword(null,"voltage-required","voltage-required",292764444),v,new cljs.core.Keyword(null,"current-required","current-required",507871482),c);
});
headphone_volume.core.do_the_calculations_v = (function headphone_volume$core$do_the_calculations_v(p__29920){
var map__29921 = p__29920;
var map__29921__$1 = ((((!((map__29921 == null)))?(((((map__29921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29921):map__29921);
var state = map__29921__$1;
var target_peak = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword(null,"target-peak","target-peak",-397273711));
var headphone = cljs.core.get.call(null,map__29921__$1,new cljs.core.Keyword(null,"headphone","headphone",-2133288489));
var v = headphone_volume.convert.sensitivity_to_voltage.call(null,target_peak,new cljs.core.Keyword(null,"sensitivity","sensitivity",-1356568185).cljs$core$IFn$_invoke$arity$1(headphone));
var c = headphone_volume.convert.voltage_to_power.call(null,v,new cljs.core.Keyword(null,"impedance","impedance",811672879).cljs$core$IFn$_invoke$arity$1(headphone));
var lo = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_lo));
var hi = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_hi));
var iem = headphone_volume.convert.voltage_to_gain.call(null,v,new cljs.core.Keyword(null,"voltage","voltage",-1909388658).cljs$core$IFn$_invoke$arity$1(headphone_volume.core.rme_iem));
cljs.core.println.call(null,v);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi,new cljs.core.Keyword(null,"iem","iem",-1302089278),iem,new cljs.core.Keyword(null,"voltage-required","voltage-required",292764444),v,new cljs.core.Keyword(null,"current-required","current-required",507871482),c);
});
headphone_volume.core.do_the_calculations = (function headphone_volume$core$do_the_calculations(p__29923){
var map__29924 = p__29923;
var map__29924__$1 = ((((!((map__29924 == null)))?(((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);
var state = map__29924__$1;
var headphone = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"headphone","headphone",-2133288489));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198).cljs$core$IFn$_invoke$arity$1(headphone),new cljs.core.Keyword(null,"current","current",-1088038603))){
return headphone_volume.core.do_the_calculations_c.call(null,state);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sensitivity-type","sensitivity-type",-1642451198).cljs$core$IFn$_invoke$arity$1(headphone),new cljs.core.Keyword(null,"voltage","voltage",-1909388658))){
return headphone_volume.core.do_the_calculations_v.call(null,state);
} else {
return null;
}
}
});
headphone_volume.core.app_container = rum.core.build_defc.call(null,(function (){
var map__29926 = headphone_volume.core.do_the_calculations.call(null,rum.core.react.call(null,headphone_volume.core.app_state));
var map__29926__$1 = ((((!((map__29926 == null)))?(((((map__29926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29926):map__29926);
var headphone = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"headphone","headphone",-2133288489));
var lo = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"lo","lo",-931799889));
var hi = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"hi","hi",-1821422114));
var iem = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"iem","iem",-1302089278));
var voltage_required = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"voltage-required","voltage-required",292764444));
var current_required = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"current-required","current-required",507871482));
var target_peak = cljs.core.get.call(null,map__29926__$1,new cljs.core.Keyword(null,"target-peak","target-peak",-397273711));
return sablono.interpreter.interpret.call(null,headphone_volume.core.render_app.call(null,headphone,lo,hi,iem,voltage_required,current_required,target_peak,headphone_volume.core.app_state));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"app-container");
headphone_volume.core.app = rum.core.build_defc.call(null,(function (){
var attrs29928 = headphone_volume.core.app_container.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs29928))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container"], null)], null),attrs29928)):({"className": "container"})),((cljs.core.map_QMARK_.call(null,attrs29928))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29928)], null)));
}),null,"app");
rum.core.mount.call(null,headphone_volume.core.app.call(null),document.getElementById("app"));
headphone_volume.core.on_js_reload = (function headphone_volume$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1530986864102
