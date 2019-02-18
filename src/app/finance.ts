export interface Finance {
  id : string;
  trans_no : string;
  date : string;
  acquirer : number;
  trans_ref : string;
  trans_type : string;
  amount : {
    total : number;
    currency : string;
    refund_total : number;
  };
  currency : string;
  response : number;
  order_ref : string;
  card_number : string;
  auth_code : string;
  payment_auth_id : string;
  batch_number : number;
  tranaction_id : string;
  card_type : string;
  base_status : number;
  row_num : string;
  merchant_id : string;
}
