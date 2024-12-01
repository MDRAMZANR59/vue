<template>
  <div class="invoice p-3 mb-3">
    <!-- title row -->
    <div class="row">
      <div class="col-12">
        <code> 
          <h4 class="text-dark">
            <i class="fas fa-globe"></i>Code Crafter
          </h4>
        </code>
      </div>
    </div>

    <!-- info row -->
    <div class="row invoice-info">
      <div class="col-sm-4 invoice-col">
        From
        <address>
          <strong><b>Code Crafter</b></strong><br />
          Prem Bagan<br />
          Sector#4, Uttara, Dhaka-1208<br />
          Phone: (+880) 1559 075 906 <br />
          Email: info@codecrufter.com
        </address>
      </div>
      <div class="col-sm-4 invoice-col">
        To
        <address>
          <strong>{{ invoice_data.customer?.name }}</strong><br />
          {{ invoice_data.customer?.state }},<br />
          {{ invoice_data.customer?.post }}, {{ invoice_data.customer?.country }}<br />
          Phone: {{ invoice_data.customer?.phone }}<br />
          Email: {{ invoice_data.customer?.email }}
        </address>
      </div>
      <div class="col-sm-4 invoice-col">
        <b>Customer ID:</b> {{ invoice_data.customer?.id }}<br />
        <b>Project Leader:</b> {{ invoice_data.prolider?.name }}<br />
        <b>Leader ID:</b> {{ invoice_data.prolider?.id }}<br />
        <b>Invoice Date:</b> {{ formattedDate }} <br />
      </div>
    </div>

    <!-- Table row -->
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Project Type</th>
              <th>Project Name</th>
              <th>Project Id</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>{{ invoice_data.projectType }}</td>
              <td>{{ invoice_data.projectName }}</td>
              <td>{{ invoice_data.id }}</td>
              <td>${{ invoice_data.estimatedBudget }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Accepted payments row -->
    <div class="row">
      <div class="col-6">
        <p class="lead">Payment Methods:</p>
        <img src="../../public/assets/dist/img/credit/visa.png" alt="Visa" />
        <img src="../../public/assets/dist/img/credit/mastercard.png" alt="Mastercard" />
        <img src="../../public/assets/dist/img/credit/american-express.png" alt="American Express" />
        <img src="../../public/assets/dist/img/credit/paypal2.png" alt="Paypal" />

      </div>
      <div class="col-6">
        <p class="text-muted well well-sm shadow-none" style="margin-top: 10px">
          <ul class="float-left">
            <li><strong>Ownership:</strong> All rights reserved by <code>Code Crafter</code>.</li>
            <li><strong>Restrictions:</strong> No reverse-engineering.</li>
            <li><strong>Privacy:</strong> Data is handled per our Privacy Policy.</li>
            <li><strong>Liability:</strong> Limited to the amount paid.</li>
          </ul>
          
      </p>
      </div>
    </div>

    <!-- Action buttons row (print, submit, generate PDF) -->
    <div class="row no-print">
      <div class="col-12">
        <button rel="noopener" target="_self" @click="printInvoice" class="btn btn-default">
  <i class="fas fa-print"></i> Print
</button>
        <button type="button" class="btn btn-success float-right">
          <i class="far fa-credit-card"></i> Submit Payment
        </button>
        <button type="button" class="btn btn-primary float-right" style="margin-right: 5px">
          <i class="fas fa-download"></i> Generate PDF
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "Invoice",
  data() {
    return {
      invoice_data: [], // Store the invoice data
    };
  },
  computed: {
    // Computed property to format the date
    formattedDate() {
      if (this.invoice_data.updated_at) {
        // Use JavaScript Date object to format the date
        const date = new Date(this.invoice_data.updated_at);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      return "N/A"; // Fallback if updated_at is not available
    },
  },
  methods: {
    invoiceDetails() {
      let project_id = this.$route.params.id;
      DataService.projectDetail(project_id)
        .then((response) => {
          console.log(response.data.data);
          if (response.data.data) this.invoice_data = response.data.data;
          else alert(response.data.error);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
    // Method to print the invoice
    printInvoice() {
      window.print();  // Call the window.print() function
    },
  },
  mounted() {
    this.invoiceDetails();
  },
};
</script>

<style scoped>
@media print {
  .no-print {
    display: none;
  }
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .invoice {
    padding: 20px;
    border: 1px solid #ccc;
  }
  .invoice-info {
    font-size: 14px;
  }
}
</style>
