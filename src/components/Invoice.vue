<template>
     <div className="content-wrapper">
            <div className="invoice p-3 mb-3 ">
              <!-- title row -->
              <div className="row">
                <div className="col-12">
                  <h4>
                    <i className="fas fa-globe"></i>Code Crafter
                    <small className="float-right">Date: 05/10/2024</small>
                  </h4>
                </div>
               <!-- col  -->
              </div>
             <!--  info row  -->
              <div className="row invoice-info">
                <div className="col-sm-4 invoice-col">
                  From
                  <address>
                    <strong>Code Crafter</strong><br/>
                    Prem Bagan<br/>
                    Sector#4, Uttara, Dhaka-1208<br/>
                    Phone: (+880) 1559 075 906 <br/>
                    Email: info@codecrufter.com
                  </address>
                </div>
               <!--  col  -->
                <div className="col-sm-4 invoice-col">
                  To
                  <address>
                    <strong>Micle Wiliems</strong><br/>
                    Awotta,<br/>
                    Awotta, Canada<br/>
                    Phone: (555) 539-1037<br/>
                    Email: miclewiliems@gmail.com
                  </address>
                </div>
             <!--  col  -->
                <div className="col-sm-4 invoice-col">
                  <b>Invoice #007612</b><br/>
                  <b>Customer ID:</b> 4F3S8J<br/>
                  <b>Order ID:</b> DFD17DEX<br/>
                  <b>Invoice Date:</b> 05/10/2024<br/>
                </div>
             <!--  col  -->
              </div>
             <!--  /.row  -->

             <!--  Table row  -->
              <div className="row">
                <div className="col-12 table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Project Type</th>
                        <th>Project Name</th>
                        <th>Project Id</th>
                        <th>Total Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>#1</td>
                      <td>Web Application</td>
                      <td>Code Crufter</td>
                      <td>DEX89D</td>
                      <td>$3000</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
             <!--  col  -->
              </div>
             <!--  /.row  -->

              <div className="row">
               <!--  accepted payments column  -->
                <div className="col-6">
                  <p className="lead">Payment Methods:</p>
                  <img src="../../public/assets/dist/img/credit/visa.png" alt="Visa"/>
                  <img src="../../public/assets/dist/img/credit/mastercard.png" alt="Mastercard"/>
                  <img src="../../public/assets/dist/img/credit/american-express.png" alt="American Express"/>
                  <img src="../../public/assets/dist/img/credit/paypal2.png" alt="Paypal"/>

                  <p className="text-muted well well-sm shadow-none" style=marginTop:10px>
                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                    plugg
                    dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                  </p>
                </div>
              </div>
             <!--  /.row  -->

             <!--  this row will not appear when printing  -->
              <div className="row no-print">
                <div className="col-12">
                  <button rel="noopener" target="_self" onclick=window.print() className="btn btn-default"><i className="fas fa-print"></i> Print</button>
                  <button type="button" className="btn btn-success float-right"><i className="far fa-credit-card"></i> Submit
                    Payment
                  </button>
                  <button type="button" className="btn btn-primary float-right" style=marginRight:5px >
                    <i className="fas fa-download"></i> Generate PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
    export default{
        name:'Invoice',
        props:{
            msg:String
        }
    }
</script>