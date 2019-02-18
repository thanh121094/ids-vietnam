export interface Finance {
  id : string;
  trans_no : string;
  date : string;
  acquirer : string;
  trans_ref : string;
  trans_type : string;
  amount : {
    total : string;
    currency : string;
    refund_total : string;
  };
  currency : string;
  response : string;
  order_ref : string;
  card_number : string;
  auth_code : string;
  payment_auth_id : string;
  batch_number : string;
  tranaction_id : string;
  card_type : string;
  base_status : string;
  row_num : string;
  merchant_id : string;
}
