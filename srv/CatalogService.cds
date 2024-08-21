using {  ust.charith.vuyyuri.db.transaction} from '../db/ust.charith.vuyyuri.datamodel';
 
service CatalogService {
 
  entity purchaseorderSet@(odata.draft.enabled:true) as projection on transaction.purchaseorder;
  entity poitems as projection on transaction.poitems;
  }